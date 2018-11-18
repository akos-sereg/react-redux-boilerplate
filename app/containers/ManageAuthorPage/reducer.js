import { fromJS } from 'immutable';
import toastr from 'toastr';
import 'toastr/build/toastr.min.css';

import {
  UPDATE_AUTHOR,
  UPDATE_AUTHOR_SUCCESS,
  UPDATE_AUTHOR_ERROR
} from './constants';

// The initial state of the App
const initialState = fromJS({
  author: {}
});

function manageAuthorReducer(state = initialState, action) {
  switch (action.type) {
    case UPDATE_AUTHOR:
      return state;

    case UPDATE_AUTHOR_SUCCESS:
      toastr.success('Author Updated.');
      window.location.href = '/#/authors';
      return state;

    case UPDATE_AUTHOR_ERROR:
      return state;

    default:
      return state;
  }
}

export default manageAuthorReducer;
