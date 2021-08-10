import React from 'react';
import { mount } from 'enzyme';
import { createAppStore } from 'state/store';
import { MemoryRouter, Route } from 'react-router';
import { Provider } from 'react-redux';
import { Provider as StyletronProvider } from 'styletron-react';
import { StyletronSnapshotEngine } from 'styletron-engine-snapshot';
import { isNotNullOrUndefined } from 'lib/isNullOrUndefined';
import { pick } from 'lib/pick';

export function mountWithStore(Comp, opts = {}) {
    const defaultOptions = {
        props: {},
        initialRoute: '/',
    };

    const {
        props,
        initialRoute,
        routePath,
        windowWidth,
        windowHeight,
        ...options
    } = { ...defaultOptions, ...opts };

    // Mock a function JSDOM does not implement.
    Object.defineProperty(window, 'matchMedia', {
        writable: true,
        value: jest.fn().mockImplementation((query) => ({
            matches: false,
            media: query,
            onchange: null,
            addListener: jest.fn(), // deprecated
            removeListener: jest.fn(), // deprecated
            addEventListener: jest.fn(),
            removeEventListener: jest.fn(),
            dispatchEvent: jest.fn(),
        })),
    });

    window.innerWidth = pick(windowWidth, 1200);
    window.innerHeight = pick(windowHeight, 800);

    const routPathInitialized = isNotNullOrUndefined(routePath) ? routePath : '*';

    const store = createAppStore();
    const snapshotEngine = new StyletronSnapshotEngine();

    const originalStoreDispatch = store.dispatch;

    let dispatchDyn = originalStoreDispatch;

    store.dispatch = (...args) => {
        dispatchDyn.apply(this, args);
    };

    // eslint-disable-next-line no-shadow
    const WrapperComp = (props) => (
        <div>
            <StyletronProvider value={snapshotEngine}>
                <Provider store={store}>
                    <MemoryRouter initialEntries={[initialRoute]}>
                        <Route path={routPathInitialized} exact>
                            {/* eslint-disable-next-line react/jsx-props-no-spreading */}
                            <Comp {...props} />
                        </Route>
                    </MemoryRouter>
                </Provider>
            </StyletronProvider>
        </div>
    );

    const rootCompWrapper = mount(<WrapperComp {...props} />, options);

    dispatchDyn = (...args) => {
        originalStoreDispatch.apply(this, args);
        rootCompWrapper.update();
    };

    const { context } = options;

    const compWrapper = () => {
        rootCompWrapper.update();
        return rootCompWrapper.find('Provider').children().at(0);
    };

    return {
        rootCompWrapper, compWrapper, store, props, context,
    };
}