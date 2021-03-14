import React from 'react';
import { select, text, boolean } from '@storybook/addon-knobs';
import { CustomInput } from '../components';


export default {
    title: 'CustomInput',
    parameters: {
        component: CustomInput,
    }
};

const types = {
    checkbox: 'checkbox',
    radio: 'radio',
};



export const checkboxRadio = () => {
    const iTypes = select('type', types, 'checkbox');
    const lbl = text('label', 'I agree with terms and conditions');
    const disable = boolean('disabled', false);
    const valid = boolean('valid', false);
    const invalid = boolean('invalid', false);

    let Tag = null;

    if (iTypes === 'radio') {
        Tag = (<>
            <CustomInput type={iTypes} valid={valid} invalid={invalid} disabled={disable} id="radio1" name="terms" label="I agree with terms and conditions" />
            <CustomInput type={iTypes} valid={valid} invalid={invalid} disabled={disable} id="radio2" name="terms" label="I do not agree with terms and conditions" />
        </>);
    } else if (iTypes === 'checkbox') {
        Tag = <CustomInput type={iTypes} valid={valid} invalid={invalid} disabled={disable} id="check" label={lbl} />;
    }

    return (
        <div style={{maxWidth: '460px', margin: '26px auto'}}>
            { Tag }
        </div>
    );
};
