import authorsPageReducer from '../../containers/AuthorsPage/reducer';
import manageAuthorPageReducer from '../../containers/ManageAuthorPage/reducer';

const reducers = {
    authors: authorsPageReducer,
    manageAuthor: manageAuthorPageReducer
}

export { reducers }
