import { call, put, take, fork } from 'redux-saga/effects';
import * as api from '../services';
import * as actions from '../actions';

import uniqueId from 'lodash/uniqueId';

export function* getNewIdea() {

  // MOCK - Mocked data for demo purposes
  const mockResponseNewIdea = {
    id: uniqueId('idea_'),
    created_date: Date.now()
  };

  const { response = mockResponseNewIdea, error } = yield call(api.getNewIdea);

  if (response) {
    yield put(actions.newIdea.success(response));
  } else {
    yield put(actions.newIdea.failure(error));
  }
}

export function* watchGetNewIdea() {
  while (true) {
    yield take(actions.NEW_IDEA.REQUEST);
    yield fork(getNewIdea);
  }
}

function* newIdeaSaga() {
  yield [
    fork(watchGetNewIdea)
  ];
}


export default newIdeaSaga;
