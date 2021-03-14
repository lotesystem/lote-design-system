import React from 'react';
import { select, boolean } from '@storybook/addon-knobs';
import { Input } from '../components';


export default {
    title: 'Input',
    parameters: {
        component: Input,
    }
};

const types = {
    text: 'text',
    password: 'password',
    email: 'email',
    url: 'url',
    number: 'number',
    datetime: 'datetime',
    date: 'date',
    time: 'time',
    color: 'color',
    select: 'select',
    search: 'search',
    textarea: 'textarea',
    file: 'file',
    range: 'range',
    radio: 'radio',
    checkbox: 'checkbox',
};

const inputSizes = {
    sm: 'sm',
    md: 'md',
    lg: 'lg'
};



export const full = () => {
    const type = select('type', types, 'text');
    const inputSize = select('inputSize', inputSizes, 'md');
    const readOnly = boolean('readOnly',false);
    const disabled = boolean('disabled',false);
    const plaintext = boolean('plaintext',false);
    const valid = boolean('valid',false);
    const invalid = boolean('invalid',false);

    const size = {
        inputSize,
    };

    const plain = {
        plaintext
    };

    const success = {
        valid
    };

    const danger = {
        invalid
    };
    const read = {
        readOnly
    };

    const disable = {
        disabled
    };


    let Tag = null;


    if (type === 'select') {
        Tag = (
            <Input type={type} {...size} {...read} {...disable} {...success} {...danger}>
                <option>1</option>
                <option>2</option>
                <option>3</option>
            </Input>);
    } else {
        Tag = <Input type={type} {...size} {...read} {...plain} {...disable} {...success} {...danger} placeholder="This is Input placeholder"/>
    }

    return (
        <div style={{maxWidth: '760px', margin: '26px auto'}}>
            { Tag }
        </div>
    );
};
