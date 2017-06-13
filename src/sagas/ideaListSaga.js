import { call, put, take, fork } from 'redux-saga/effects';
import * as api from '../services';
import * as actions from '../actions';

export function* getIdeas() {
  const { response, error } = yield call(api.getIdeas);
  if (response) {
    yield put(actions.getIdeas.success(response));
  } else {
    yield put(actions.getIdeas.failure(error));
  }
}

export function* watchGetIdeas() {
  while (true) {
    yield take(actions.IDEAS.REQUEST);
    yield fork(getIdeas);
  }
}


function* ideaListSaga() {
  yield [
    fork(watchGetIdeas),
  ];
}


export default ideaListSaga;
