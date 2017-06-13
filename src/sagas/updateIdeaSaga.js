import { call, put, take, fork } from 'redux-saga/effects';
import * as api from '../services';
import * as actions from '../actions';

export function* postUpdateIdea(requestData) {
  const requestBody = { requestData };

  // MOCK - Mocked data for demo purposes
  const mockResponseUpdateIdea = {
    id: requestBody.requestData.id,
    created_date: requestBody.requestData.created_date,
    body: requestBody.requestData.body,
    title: requestBody.requestData.title
  };

  const { response = mockResponseUpdateIdea, error } = yield call(api.postUpdateIdea, requestBody);
  if (response) {
    yield put(actions.updateIdea.success(requestData, response));
  } else {
    yield put(actions.updateIdea.failure(error));
  }
}

export function* watchPostUpdateIdea() {
  while (true) {
    const action = yield take(actions.UPDATE_IDEA.REQUEST);
    yield fork(postUpdateIdea, action.data);
  }
}

function* updateIdeaSaga() {
  yield [
    fork(watchPostUpdateIdea)
  ];
}


export default updateIdeaSaga;
