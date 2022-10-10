import * as React from 'react';
import { useEffect } from 'react';
import { Component } from 'react';
import { Link } from 'react-router-dom';
import AuthorList from '../../components/AuthorList';
import { Author } from '../../model/Author';

type Props = {
  authors: Author[],
  onFetchAuthors: Function,
  onDeleteAuthor: Function,
};

const AuthorsPage = (props: Props) => {

  const { authors, onDeleteAuthor } = props;

  useEffect(() => {
    props.onFetchAuthors();
  }, [])

  return (
    <div>
      <h1>Authors</h1>
      <Link to="/author" className="btn btn-default">Add Author</Link>
      <AuthorList onDeleteAuthor={onDeleteAuthor} authors={authors} />
    </div>
  );
}

export default AuthorsPage;
