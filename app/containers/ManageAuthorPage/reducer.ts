import * as toastr from 'toastr';
import 'toastr/build/toastr.min.css';

import {
    UPDATE_AUTHOR_SUCCESS,
    CREATE_AUTHOR_SUCCESS,
    FETCH_AUTHOR_SUCCESS
} from './actions';
import initialState from '../../utils/state/initialState';
import { Action } from '../../model/Action';

function manageAuthorReducer(state = initialState, action: Action) {
    switch (action.type) {
        case UPDATE_AUTHOR_SUCCESS:
            toastr.success('Author Updated.');
            window.location.href = '/#/authors';
            return state;

        case CREATE_AUTHOR_SUCCESS:
            toastr.success('Author Created.');
            window.location.href = '/#/authors';
            return state;

        case FETCH_AUTHOR_SUCCESS:
            return {
                ...state,
                author: action.payload.author
            };

        default:
            return state;
    }
}

export default manageAuthorReducer;
