import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';
import thunkMiddleware from 'redux-thunk';

import { isLocalServer } from 'lib/isLocalServer';
import { reducers } from 'state/reducers';

export const createAppStore = () => {
    let middlewares = [thunkMiddleware];

    if (isLocalServer()) {
        middlewares = [...middlewares, logger];
    }

    return createStore(reducers, applyMiddleware(...middlewares));
};
