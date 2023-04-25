import { Author } from './Author';

export interface AuthorsState {
  userData: any
  loading: boolean
  error: any
}

export interface ManageAuthorState {
  author: Author
}

export interface AppState {
  authors: AuthorsState,
  manageAuthor: ManageAuthorState
}
