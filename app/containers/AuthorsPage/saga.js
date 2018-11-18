import { put, takeLatest } from 'redux-saga/effects';
import { authorsFetched, fetchAuthorsError } from './actions';
import { FETCH_AUTHORS } from './constants';
import AuthorApi from '../../services/AuthorApi';

export function* getAuthors() {
  try {
    yield put(authorsFetched(AuthorApi.getAllAuthors()));
  } catch (err) {
    yield put(fetchAuthorsError(err));
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* listenForFetchAuthors() {
  // yield getAuthors();
  yield takeLatest(FETCH_AUTHORS, getAuthors);
}

