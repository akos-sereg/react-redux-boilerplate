import * as React from 'react';
import { ChangeEventHandler } from 'react';
import { Author } from '../model/author';
import styled from '@emotion/styled'
import TextInput from '../../../components/widgets/TextInput';

const Button = styled.input<{ primary: boolean }>`
  border: ${props => props.primary ? 'solid 1px' : 'dotted 1px #1B8DC2'};
`;

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
            automationId={'first-name-textfield'}
            value={props.author.firstName}
            error={props.errors.firstName}
            onChange={props.onChange}
        />
        <br/>

        <TextInput
            name="lastName"
            label="Last Name"
            automationId={'last-name-textfield'}
            value={props.author.lastName}
            error={props.errors.lastName}
            onChange={props.onChange}
        />
        <br/>

        <Button
            primary={props.author.id ? true : false}
            data-automation-id={'save-author-button'}
            type="submit"
            value="Save"
            className="btn btn-default"
            onClick={(event) => props.onSave(event)}/>
    </form>
);
