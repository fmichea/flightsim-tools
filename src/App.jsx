import React from 'react';

import { Provider } from 'react-redux';
import { Route, Switch } from 'react-router';
import { HashRouter } from 'react-router-dom';
import { compose } from 'recompose';
import { Client as Styletron } from 'styletron-engine-atomic';
import { Provider as StyletronProvider } from 'styletron-react';

import { AntiIce } from 'components/anti-ice/AntiIce';
import { Checklist } from 'components/checklists/Checklist';
import { Layout } from 'components/layout/Layout';
import { MainPage } from 'components/MainPage';
import { Metar } from 'components/metar/Metar';
import {
    AntiIceWithNameAndOperationModeNameRoute,
    AntiIceWithNameRoute,
    ChecklistsWithNameAndListNameRoute,
    ChecklistsWithNameRoute,
    MetarExplainerRoute,
} from 'lib/routes';
import { createAppStore } from 'state/store';

const AppLayout = () => (
    <Layout>
        <Switch>
            <Route exact path={ChecklistsWithNameAndListNameRoute} component={Checklist} />
            <Route exact path={ChecklistsWithNameRoute} component={Checklist} />
            <Route exact path={AntiIceWithNameAndOperationModeNameRoute} component={AntiIce} />
            <Route exact path={AntiIceWithNameRoute} component={AntiIce} />
            <Route exact path={MetarExplainerRoute} component={Metar} />
            <Route exact path="/" component={MainPage} />
        </Switch>
    </Layout>
);

const withRouter = () => (Component) => (props) => (
    <HashRouter>
        <Component {...props} />
    </HashRouter>
);

const withStore = () => (Component) => (props) => (
    <Provider store={createAppStore()}>
        <Component {...props} />
    </Provider>
);

const withStyletron = () => (Component) => (props) => (
    <StyletronProvider value={new Styletron()}>
        <Component {...props} />
    </StyletronProvider>
);

const enhance = compose(
    withRouter(),
    withStore(),
    withStyletron(),
);

export const App = enhance(AppLayout);
