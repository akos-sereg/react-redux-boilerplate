import { fromJS } from 'immutable';

import {
  FETCH_AUTHORS,
  FETCH_AUTHORS_SUCCESS,
  FETCH_AUTHORS_ERROR,
} from './constants';

// The initial state of the App
const initialState = fromJS({
  loading: false,
  error: false,
  userData: {
    authors: []
  }
});

function authorsReducer(state = initialState, action) {

  switch (action.type) {
    case FETCH_AUTHORS:
      return state
        .set('loading', true)
        .set('error', false)
        .setIn(['userData', 'authors'], []);

    case FETCH_AUTHORS_SUCCESS:
      return state
        .setIn(['userData', 'authors'], action.authors)
        .set('error', false)
        .set('loading', false);

    case FETCH_AUTHORS_ERROR:
      return state
        .set('error', action.error)
        .set('loading', false)
        .setIn(['userData', 'authors'], []);

    default:
      return state;
  }
}

export default authorsReducer;
