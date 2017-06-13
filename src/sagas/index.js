import { fork } from 'redux-saga/effects';

import ideaListSaga from './ideaListSaga';
import newIdeaSaga from './newIdeaSaga';
import updateIdeaSaga from './updateIdeaSaga';

export default function* rootSaga() {
  yield [
    fork(ideaListSaga),
    fork(newIdeaSaga),
    fork(updateIdeaSaga)
  ];
}
