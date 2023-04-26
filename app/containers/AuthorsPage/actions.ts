import {
    FETCH_AUTHORS,
    FETCH_AUTHORS_SUCCESS,
    FETCH_AUTHORS_ERROR,
    DELETE_AUTHOR,
    DELETE_AUTHOR_SUCCESS
} from './constants';
import { Author } from '../../model/Author';

export function fetchAuthors() {
    return {
        type: FETCH_AUTHORS
    };
}

export function authorsFetched(authors: Author[]) {
    return {
        type: FETCH_AUTHORS_SUCCESS,
        payload: {
            authors
        }
    };
}

export function fetchAuthorsError(error: any) {
    return {
        type: FETCH_AUTHORS_ERROR,
        payload: {
            error
        },
    };
}

export function deleteAuthor(authorId: string) {
    return {
        type: DELETE_AUTHOR,
        payload: {
            authorId
        }
    };
}

export function deleteAuthorSuccess(authorId: string) {
    return {
        type: DELETE_AUTHOR_SUCCESS,
        payload: {
            authorId
        }
    };
}
