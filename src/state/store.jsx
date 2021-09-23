import { applyMiddleware, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';
import logger from 'redux-logger';
import { reducers } from 'state/reducers';
import { isLocalServer } from 'lib/isLocalServer';

export const createAppStore = () => {
    let middlewares = [thunkMiddleware];

    if (isLocalServer()) {
        middlewares = [...middlewares, logger];
    }

    return createStore(reducers, applyMiddleware(...middlewares));
};
