import { put, takeLatest } from 'redux-saga/effects';
import { updateAuthorError, updateAuthorSuccess, createAuthorSuccess, fetchAuthorSuccess } from './actions';
import { UPDATE_AUTHOR, FETCH_AUTHOR } from './constants';
import AuthorApi from '../../services/AuthorApi';

export function* updateAuthorInternal(action: any) {
    try {
        const originalId = action.author.id;
        AuthorApi.saveAuthor(action.author);

        if (originalId) {
            yield put(updateAuthorSuccess(action.author));
        } else {
            yield put(createAuthorSuccess(action.author));
        }
    } catch (err) {
        yield put(updateAuthorError(action.author, err));
    }
}

export function* fetchAuthorInternal(action: any) {
    try {
        const author = AuthorApi.getAuthorById(action.payload.authorId);
        if (author) {
            yield put(fetchAuthorSuccess(author));
        }
    } catch (err) {
        console.error(err);
    }
}

export default function* rootSaga() {
    yield [
        takeLatest(UPDATE_AUTHOR, updateAuthorInternal),
        takeLatest(FETCH_AUTHOR, fetchAuthorInternal)
    ];
}
