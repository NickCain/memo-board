/* eslint-disable no-underscore-dangle */
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga'
import throttle from 'lodash/throttle'

import rootSaga from '../sagas';
import rootReducer, { persistedKeys } from '../reducers';
import { saveState, loadState } from './persist-store';


const sagaMiddleware = createSagaMiddleware();

let enhancer = applyMiddleware(sagaMiddleware);

if (process.env.NODE_ENV !== 'production') {
  const { composeWithDevTools } = require('../../node_modules/redux-devtools-extension'); // eslint-disable-line import/no-extraneous-dependencies, global-require

  enhancer = composeWithDevTools(
    enhancer
  );
}

export default (initialState) => {
  const persistedState = loadState();

  const store = createStore(rootReducer, { ...persistedState, ...initialState }, enhancer);

  store.subscribe(throttle(() => {
    saveState(store.getState(), persistedKeys);
  }, 1000));

  sagaMiddleware.run(rootSaga);

  return store;
};
/* eslint-enable */
