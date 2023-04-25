import {
    UPDATE_AUTHOR,
    UPDATE_AUTHOR_SUCCESS,
    UPDATE_AUTHOR_ERROR,
    CREATE_AUTHOR_SUCCESS,
    FETCH_AUTHOR,
    FETCH_AUTHOR_SUCCESS
} from './constants';
import { Author } from '../../model/Author';

export function saveOrUpdateAuthor(author: Author) {
    return {
        type: UPDATE_AUTHOR,
        author
    };
}

export function updateAuthorSuccess(author: Author) {
    return {
        type: UPDATE_AUTHOR_SUCCESS,
        author
    };
}

export function updateAuthorError(author: Author, error: any) {
    return {
        type: UPDATE_AUTHOR_ERROR,
        author,
        error
    };
}

export function createAuthorSuccess(author: Author) {
    return {
        type: CREATE_AUTHOR_SUCCESS,
        author
    };
}

export function fetchAuthorById(authorId: string) {
    return {
        type: FETCH_AUTHOR,
        payload: {
            authorId
        }
    };
}

export function fetchAuthorSuccess(author: Author) {
    return {
        type: FETCH_AUTHOR_SUCCESS,
        payload: {
            author
        }
    };
}
