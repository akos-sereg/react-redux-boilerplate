import { put, takeLatest } from 'redux-saga/effects';
import { updateAuthorError, updateAuthorSuccess } from './actions';
import { UPDATE_AUTHOR } from './constants';
import AuthorApi from '../../services/AuthorApi';

export function* updateAuthorInternal(action) {
  try {
    AuthorApi.saveAuthor(action.author);
    yield put(updateAuthorSuccess(action.author));
  } catch (err) {
    yield put(updateAuthorError(action.author, err));
  }
}

export default function* rootSaga() {
  yield [
    takeLatest(UPDATE_AUTHOR, updateAuthorInternal),
  ];
}
