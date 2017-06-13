import { combineReducers } from 'redux';

import ideaReducer, { IDEAS_STATE_KEY } from './ideaReducer';

const rootReducer = combineReducers({
  [IDEAS_STATE_KEY]: ideaReducer
});

export default rootReducer;
