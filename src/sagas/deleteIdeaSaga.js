import { call, put, take, fork } from 'redux-saga/effects';
import * as api from '../services';
import * as actions from '../actions';

export function* postDeleteIdea(requestData) {
  const requestBody = { requestData };

  // MOCK - Mocked data for demo purposes
  const mockResponseUpdateIdea = {
    id: requestBody.requestData.id
  };

  const { response = mockResponseUpdateIdea, error } = yield call(api.postDeleteIdea, requestBody);
  if (response) {
    yield put(actions.deleteIdea.success(requestData, response));
  } else {
    yield put(actions.deleteIdea.failure(error));
  }
}

export function* watchPostDeleteIdea() {
  while (true) {
    const action = yield take(actions.DELETE_IDEA.REQUEST);
    yield fork(postDeleteIdea, action.data);
  }
}

function* deleteIdeaSaga() {
  yield [
    fork(watchPostDeleteIdea)
  ];
}


export default deleteIdeaSaga;
