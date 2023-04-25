import * as React from 'react';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AuthorForm from '../../components/AuthorForm';
import {AppState} from '../../model/AppState';
import { clone } from '../../services/Utils';
import { saveOrUpdateAuthor, fetchAuthorById } from './actions';

type Props = {
    match: any
};

const ManageAuthorPage = (props: Props) => {
    const dispatch = useDispatch();
    const defaultAuthor = {id: '', firstName: '', lastName: ''};
    const [author, setAuthor] = useState(defaultAuthor);
    const persistedAuthor = useSelector((appState: AppState) => appState.manageAuthor.author);

    // fetch persisted author from service, to avoid lost-update
    useEffect(() => {
        const authorId = props.match.params.id;
        if (authorId) {
            dispatch(fetchAuthorById(authorId));
        }
    }, []);

    // populate persisted author in case of update, or set default author in case of create
    useEffect(() => {
        const authorId = props.match.params.id;
        if (authorId && persistedAuthor) {
            setAuthor(persistedAuthor);
        }

        if (!authorId) {
            setAuthor(defaultAuthor);
        }
    }, [persistedAuthor]);

    const setAuthorState = (event: any) => {
        const newAuthor: any = clone(author);
        newAuthor[event.target.name] = event.target.value;
        setAuthor(newAuthor)
    }

    const saveAuthor = (event: any) => {
        if (event !== undefined && event.preventDefault) {
            event.preventDefault();
        }

        dispatch(saveOrUpdateAuthor(author));
    }

    return (
        <AuthorForm
            author={author}
            errors={{}}
            onSave={saveAuthor}
            onChange={setAuthorState}
        />

    );
}

export default ManageAuthorPage;
