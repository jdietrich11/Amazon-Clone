import { compose, createStore, applyMiddleware } from 'redux';

import { rootReducer } from './root-reducer';

const middlewares = [];

const composeEnhancer =
  (process.env.NODE_ENV !== 'production' &&
    window &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const enhancers = composeEnhancer(applyMiddleware(...middlewares));

export const store = createStore(rootReducer, undefined, enhancers);
