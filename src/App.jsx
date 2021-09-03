import React from 'react';
import { Checklist } from 'components/checklists/Checklist';
import { Provider as StyletronProvider } from 'styletron-react';
import { Layout } from 'components/layout/Layout';
import { Route, Switch } from 'react-router';
import { Client as Styletron } from 'styletron-engine-atomic';
import { compose } from 'recompose';
import { Provider } from 'react-redux';
import { createAppStore } from 'state/store';
import { HashRouter } from 'react-router-dom';
import {
    AntiIceWithNameAndOperationModeNameRoute,
    AntiIceWithNameRoute,
    ChecklistsWithNameAndListNameRoute,
    ChecklistsWithNameRoute,
} from 'lib/routes';
import { AntiIce } from 'components/anti-ice/AntiIce';
import { MainPage } from 'components/MainPage';

const AppLayout = () => (
    <Layout>
        <Switch>
            <Route exact path={ChecklistsWithNameAndListNameRoute} component={Checklist} />
            <Route exact path={ChecklistsWithNameRoute} component={Checklist} />
            <Route exact path={AntiIceWithNameAndOperationModeNameRoute} component={AntiIce} />
            <Route exact path={AntiIceWithNameRoute} component={AntiIce} />
            <Route exact path="/" component={MainPage} />
        </Switch>
    </Layout>
);

const withRouter = () => (Component) => (props) => (
    <HashRouter>
        {/* eslint-disable-next-line react/jsx-props-no-spreading */}
        <Component {...props} />
    </HashRouter>
);

const withStore = () => (Component) => (props) => (
    <Provider store={createAppStore()}>
        {/* eslint-disable-next-line react/jsx-props-no-spreading */}
        <Component {...props} />
    </Provider>
);

const withStyletron = () => (Component) => (props) => (
    <StyletronProvider value={new Styletron()}>
        {/* eslint-disable-next-line react/jsx-props-no-spreading */}
        <Component {...props} />
    </StyletronProvider>
);

const enhance = compose(
    withRouter(),
    withStore(),
    withStyletron(),
);

export const App = enhance(AppLayout);
