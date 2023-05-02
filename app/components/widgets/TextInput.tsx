import * as React from 'react';
import { FC, ChangeEventHandler, useRef } from 'react';

type Props = {
    name: string,
    label: string,
    onChange: ChangeEventHandler<HTMLInputElement>,
    placeholder?: string,
    automationId?: string,
    value?: string,
    error?: any
};

const TextInput: FC<Props> = ({
    name, label, onChange, placeholder, automationId, value, error
}) => {
    let wrapperClass = 'form-group';
    if (error && error.length > 0) {
        wrapperClass += ' has-error';
    }

    return (
        <div className={wrapperClass}>
            {/* eslint-disable jsx-a11y/label-has-for */}
        <label htmlFor={name}>{label}</label>
        <div className="field">
            <input
                type="text"
                name={name}
                className="form-control"
                placeholder={placeholder}
                data-automation-id={automationId}
                value={value}
                onChange={onChange}
          />
                <div className="input">{error}</div>
            </div>
      </div>
    );
};

export default TextInput;
