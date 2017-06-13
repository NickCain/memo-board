/* eslint-disable no-underscore-dangle */
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga'

import rootSaga from '../sagas';
import rootReducer from '../reducers';

const sagaMiddleware = createSagaMiddleware();

let enhancer = applyMiddleware(sagaMiddleware);

if (process.env.NODE_ENV !== 'production') {
  const { composeWithDevTools } = require('../../node_modules/redux-devtools-extension'); // eslint-disable-line import/no-extraneous-dependencies, global-require

  enhancer = composeWithDevTools(
    enhancer
  );
}

export default (initialState) => {
  // const store = createStore(rootReducer, initialState, applyMiddleware(sagaMiddleware), enhancers);

  const store = createStore(rootReducer, initialState, enhancer);

  sagaMiddleware.run(rootSaga);

  return store;
};
/* eslint-enable */
