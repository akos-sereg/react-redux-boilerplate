import { Author } from '../../model/Author';

import {
    FETCH_AUTHORS,
    FETCH_AUTHORS_SUCCESS,
    FETCH_AUTHORS_ERROR,
    DELETE_AUTHOR_SUCCESS,
} from './constants';
import initialState from '../../utils/state/initialState';

function authorsReducer(state = initialState, action: any) {
    switch (action.type) {
        case FETCH_AUTHORS:
            return {
                ...state,
                loading: true,
                error: false,
                userData: {
                    authors: []
                }
            }

        case FETCH_AUTHORS_SUCCESS:
            return {
                ...state,
                loading: false,
                error: false,
                userData: {
                    authors: action.payload.authors
                }
            }

        case FETCH_AUTHORS_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload.error,
                userData: {
                    authors: Array<Author>()
                }
            }

        case DELETE_AUTHOR_SUCCESS:
            return {
                ...state,
                loading: false
            }

        default:
            return state;
    }
}

export default authorsReducer;
