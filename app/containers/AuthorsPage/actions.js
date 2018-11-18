import {
  FETCH_AUTHORS,
  FETCH_AUTHORS_SUCCESS,
  FETCH_AUTHORS_ERROR,
  CREATE_AUTHOR,
  UPDATE_AUTHOR,
  DELETE_AUTHOR
} from './constants';

export function fetchAuthors() {
  return {
    type: FETCH_AUTHORS
  };
}

export function authorsFetched(authors) {
  return {
    type: FETCH_AUTHORS_SUCCESS,
    authors
  };
}

export function fetchAuthorsError(error) {
  return {
    type: FETCH_AUTHORS_ERROR,
    error,
  };
}

export function createAuthor(author) {
  return {
    type: CREATE_AUTHOR,
    author
  };
}

export function updateAuthor(author) {
  return {
    type: UPDATE_AUTHOR,
    author
  };
}

export function deleteAuthor(id) {
  return {
    type: DELETE_AUTHOR,
    id
  };
}
