import * as React from 'react';
import { ChangeEventHandler } from 'react';
import { Author } from '../model/author';
import TextInput from '../../../components/widgets/TextInput';

type Props = {
    author: Author,
    onSave: Function,
    onChange: ChangeEventHandler<HTMLInputElement>,
    errors?: any
};

export const AuthorForm = (props: Props) => (
    <form>

        <h1>Manage Author</h1>

        <TextInput
                name="firstName"
                label="First Name"
                value={props.author.firstName}
                error={props.errors.firstName}
                onChange={props.onChange}
        />
        <br/>

        <TextInput
                name="lastName"
                label="Last Name"
                value={props.author.lastName}
                error={props.errors.lastName}
                onChange={props.onChange}
        />
        <br/>

        <input type="submit" value="Save" className="btn btn-default" onClick={(event) => props.onSave(event)}/>

    </form>
);
