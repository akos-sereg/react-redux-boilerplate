import * as _ from 'lodash';
import { Author } from '../model/Author';
import { sleep, clone } from './Utils';

class AuthorApi {
    authors: Author[];
    simulatedLatencyMilliseconds: number;

    constructor() {
        this.simulatedLatencyMilliseconds = 120;
        this.authors = [
            {
                id: 'cory-house',
                firstName: 'Cory',
                lastName: 'House'
            },
            {
                id: 'scott-allen',
                firstName: 'Scott',
                lastName: 'Allen'
            },
            {
                id: 'dan-wahlin',
                firstName: 'Dan',
                lastName: 'Wahlin'
            }
        ];
    }

    getAllAuthors = async () => {
        await sleep(this.simulatedLatencyMilliseconds);
        return clone(this.authors);
    }

    getAuthorById = async (id: string) => {
        const author = _.find(this.authors, { id });
        await sleep(this.simulatedLatencyMilliseconds);
        return clone(author);
    }

    saveAuthor = async (author: Author) => {
        if (author.id) {
            const existingAuthorIndex = _.indexOf(this.authors, _.find(this.authors, { id: author.id }));
            this.authors.splice(existingAuthorIndex, 1, author);
        } else {
            author.id = AuthorApi.generateId(author);
            this.authors.push(author);
        }

        await sleep(this.simulatedLatencyMilliseconds);
        return clone(author);
    }

    deleteAuthor = async (id: string) => {
        await sleep(this.simulatedLatencyMilliseconds);
        _.remove(this.authors, { id });
    }

    static generateId(author: Author) {
        return `${author.firstName.toLowerCase()}-${author.lastName.toLowerCase()}`;
    }
}

export default new AuthorApi();
