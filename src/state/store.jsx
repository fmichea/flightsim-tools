import { applyMiddleware, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';
import logger from 'redux-logger';
import { reducers } from 'state/reducers';
import { isNotNullOrUndefined } from 'lib/isNullOrUndefined';

export const createAppStore = () => {
    let middlewares = [thunkMiddleware];

    if (isNotNullOrUndefined(process.env.IS_LOCAL_SERVER) && process.env.IS_LOCAL_SERVER !== '') {
        middlewares = [...middlewares, logger];
    }

    return createStore(reducers, applyMiddleware(...middlewares));
};
