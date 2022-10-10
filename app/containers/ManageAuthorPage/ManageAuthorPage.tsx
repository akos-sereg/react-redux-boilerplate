import * as React from 'react';
import { useEffect, useState } from 'react';
import AuthorForm from '../../components/AuthorForm';
import AuthorApi from '../../services/AuthorApi';
import { Author } from '../../model/Author';
import { clone } from '../../services/Utils';

type Props = {
  match: any,
  onSaveAuthor: Function
};

const ManageAuthorPage = (props: Props) => {

  const [author, setAuthor] = useState({ id: '', firstName: '', lastName: '' });

  useEffect(() => {
    const authorId = props.match.params.id;

    if (authorId) {
      setAuthor(AuthorApi.getAuthorById(authorId));
    }
  }, []);

  const setAuthorState = (event: any) => {
    const newAuthor: any = clone(author);
    newAuthor[event.target.name] = event.target.value;
    setAuthor(newAuthor)
  }

  const saveAuthor = (event: any) => {
    props.onSaveAuthor(event, author);
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
