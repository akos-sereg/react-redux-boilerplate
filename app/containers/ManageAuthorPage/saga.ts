import { all, call, put, takeLatest } from 'redux-saga/effects';
import { updateAuthorError, updateAuthorSuccess, createAuthorSuccess, fetchAuthorSuccess } from './actions';
import { UPDATE_AUTHOR, FETCH_AUTHOR } from './actions';
import { Author } from '../../model/DTOs';
import ServiceProvider from '../../services/ServiceProvider';

export function* updateAuthorInternal(action: any) {
    try {
        const originalId = action.payload.authorId;
        yield call(ServiceProvider.getAuthorApi().saveAuthor, action.payload.author);

        if (originalId) {
            yield put(updateAuthorSuccess(action.payload.author));
        } else {
            yield put(createAuthorSuccess(action.payload.author));
        }
    } catch (err) {
        yield put(updateAuthorError(action.payload.author, err));
    }
}

export function* fetchAuthorInternal(action: any) {
    try {
        const author: Author = yield call(ServiceProvider.getAuthorApi().getAuthorById, action.payload.authorId);
        if (author) {
            yield put(fetchAuthorSuccess(author));
        }
    } catch (err) {
        console.error(err);
    }
}

export default function* rootSaga() {
    yield all([
        takeLatest(UPDATE_AUTHOR, updateAuthorInternal),
        takeLatest(FETCH_AUTHOR, fetchAuthorInternal)
    ]);
}
