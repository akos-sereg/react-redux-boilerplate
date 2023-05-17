import * as React from 'react';
import { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AuthorForm, AuthorModelError } from '../../packages/author/components/AuthorForm';
import { AppState } from '../../model/AppState';
import { saveOrUpdateAuthor, fetchAuthorById } from '../../packages/author/actions/manage-author-page-actions';
import { Author, defaultAuthor } from '../../packages/author/model/author';
import { ErrorBoundary } from '../../packages/utils/ErrorBoundary';

type Props = {
    match: any
};

const ManageAuthorPage = (props: Props) => {
    const dispatch = useDispatch();
    const initialErrors : AuthorModelError = { firstName: null, lastName: null }
    const [author, setAuthor] = useState(defaultAuthor);
    const [errors, setErrors] = useState(initialErrors);
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
        if (authorId && persistedAuthor && authorId == persistedAuthor.id) {
            setAuthor(persistedAuthor);
        }

        if (!authorId) {
            setAuthor(defaultAuthor);
        }
    }, [persistedAuthor]);

    // ui interactions
    const saveAuthor = useCallback((event: any, author: Author) => {
        if (event !== undefined && event.preventDefault) {
            event.preventDefault();
        }

        // validation
        let hasError: boolean = false
        if (author.firstName.length === 0) {
            setErrors((prevState: AuthorModelError) => ({
                ...prevState,
                firstName: 'First Name must not be empty'
            }))
            hasError = true
        }

        if (author.lastName.length === 0) {
            setErrors((prevState: AuthorModelError) => ({
                ...prevState,
                lastName: 'Last Name must not be empty'
            }))
            hasError = true
        }

        if (hasError) {
            return
        }

        dispatch(saveOrUpdateAuthor(author));
    }, [author]);

    return (
        <ErrorBoundary>
            <AuthorForm
                author={author}
                errors={errors}
                onSave={saveAuthor}
            />
        </ErrorBoundary>
    );
};

export default ManageAuthorPage;
