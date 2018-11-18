import React from 'react';
import PropTypes from 'prop-types';
import AuthorForm from '../../components/AuthorForm';
import AuthorApi from '../../services/AuthorApi';

export default class ManageAuthorPage extends React.Component {

  constructor(props, context) {
    super(props, context);
    this.state = {
      author: { id: '', firstName: '', lastName: '' },
      errors: { }
    };

    this.saveAuthor = this.saveAuthor.bind(this);
    this.setAuthorState = this.setAuthorState.bind(this);
  }

  saveAuthor() {
  }

  setAuthorState() {
  }

  componentWillMount() {
    const authorId = this.props.match.params.id;

    if (authorId) {
      const author = AuthorApi.getAuthorById(authorId);
      this.setState({ author });
    }
  }

  render() {
    return (
      <AuthorForm
        author={this.state.author}
        onSave={this.saveAuthor}
        onChange={this.setAuthorState}
        errors={this.state.errors}
      />

    );
  }
}

ManageAuthorPage.propTypes = {
  errors: PropTypes.object,
  match: PropTypes.object
};
