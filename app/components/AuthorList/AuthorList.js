import React from 'react';
import PropTypes from 'prop-types';
import { deleteAuthor } from '../../containers/AuthorsPage/actions';
import { Link } from 'react-router-dom';
// import { HashRouter } from 'react-router-dom';
// import toastr from 'toastr';

class AuthorList extends React.Component {
  deleteAuthor(id, event) {
    // used deleteAuthor.bind because we want to have "event" defined to prevent default
    event.preventDefault();
    deleteAuthor(id);
    // toastr.success('Author Deleted.');
  }

  render() {
    const createAuthorRow = (author) => (
      <tr key={author.id}>
        <td>
          <a href="#" onClick={this.deleteAuthor.bind(this, author.id)}>Delete</a>
        </td>
        <td>
          <Link to="manageAuthor" params={{ id: author.id }}>{author.id}</Link>
        </td>
        <td>
          {author.firstName} {author.lastName}
        </td>
      </tr>
    );

    return (
      <div>
        <table className="table">
          <thead>
            <tr>
              <th>&nbsp;</th>
              <th>ID</th>
              <th>Name</th>
            </tr>
          </thead>
          <tbody>
            {this.props.authors.map(createAuthorRow, this)}
          </tbody>
        </table>
      </div>
    );
  }
}

AuthorList.propTypes = {
  authors: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object,
  ])
};

export default AuthorList;
