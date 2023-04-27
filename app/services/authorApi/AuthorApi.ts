import { Author } from '../../model/DTOs';

export interface AuthorApi {
    getAllAuthors: {
        (): Promise<Author[]>;
    }

    getAuthorById: {
        (id: string): Promise<Author[]>
    }

    saveAuthor: {
        (author: Author): Promise<void>
    }

    deleteAuthor: {
        (id: string): Promise<void>
    }
}