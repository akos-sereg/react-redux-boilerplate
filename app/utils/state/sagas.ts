import { all, fork } from 'redux-saga/effects';
import authorsPageSaga from '../../containers/AuthorsPage/saga';
import manageAuthorPageSaga from '../../containers/ManageAuthorPage/saga';

export default function* rootSaga() {
    yield all([
        fork(authorsPageSaga),
        fork(manageAuthorPageSaga),
    ]);
}
