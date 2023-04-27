import { Author } from './DTOs';

export interface UserData {
    authors: Author[]
}

export interface AuthorsState {
  userData: UserData
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
