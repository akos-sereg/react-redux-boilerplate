import { all, call, CallEffect, put, takeLatest } from 'redux-saga/effects';
import { fetchAuthors, authorsFetched, fetchAuthorsError, deleteAuthorSuccess } from './actions';
import { FETCH_AUTHORS, DELETE_AUTHOR } from './constants';
import AuthorApi from '../../services/AuthorApi';
import { Author } from '../../model/Author';

export function* getAuthors() {
    try {
        const authors: Author[] = yield call(AuthorApi.getAllAuthors);
        yield put(authorsFetched(authors));
    } catch (err) {
        yield put(fetchAuthorsError(err));
    }
}

export function* deleteAuthor(action: any) {
    yield call(AuthorApi.deleteAuthor, action.payload.authorId);
    yield put(deleteAuthorSuccess(action.payload.authorId));
    yield put(fetchAuthors());
}

export default function* rootSaga() {
    yield all([
        takeLatest(FETCH_AUTHORS, getAuthors),
        takeLatest(DELETE_AUTHOR, deleteAuthor),
    ]);
}
