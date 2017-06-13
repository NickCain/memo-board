import { fork } from 'redux-saga/effects';

import ideaListSaga from './ideaListSaga';
import newIdeaSaga from './newIdeaSaga';
import updateIdeaSaga from './updateIdeaSaga';
import deleteIdeaSaga from './deleteIdeaSaga';

export default function* rootSaga() {
  yield [
    fork(ideaListSaga),
    fork(newIdeaSaga),
    fork(updateIdeaSaga),
    fork(deleteIdeaSaga)
  ];
}
