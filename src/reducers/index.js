import { combineReducers } from 'redux';

import ideaReducer, { IDEAS_STATE_KEY } from './ideaReducer';

const rootReducer = combineReducers({
  [IDEAS_STATE_KEY]: ideaReducer
});

export const persistedKeys = [IDEAS_STATE_KEY];

export default rootReducer;
