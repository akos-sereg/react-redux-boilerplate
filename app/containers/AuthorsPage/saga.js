import { put, takeLatest } from 'redux-saga/effects';
import { authorsFetched, fetchAuthorsError } from './actions';
import { FETCH_AUTHORS } from './constants';

// import request from 'utils/request';
// import { makeSelectUsername } from 'containers/HomePage/selectors';

/**
 * Github repos request/response handler
 */
export function* getAuthors() {
  try {
    const authors = [
      {
        id: 'cory-house',
        firstName: 'Cory',
        lastName: 'House'
      },
      {
        id: 'scott-allen',
        firstName: 'Scott',
        lastName: 'Allen'
      },
      {
        id: 'dan-wahlin',
        firstName: 'Dan',
        lastName: 'Wahlin'
      }
    ];

    yield put(authorsFetched(authors));
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

