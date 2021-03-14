import React from 'react';
import { select, boolean } from '@storybook/addon-knobs';
import { Button } from '../components';


export default {
    title: 'Button',
    parameters: {
        component: Button,
    }
};

const colors = {
    primary: 'primary',
    secondary: 'secondary',
    success: 'success',
    danger: 'danger',
    warning: 'warning',
    info: 'info'
};

const variations = {
    fill: 'fill',
    outline: 'outline',
    link: 'link',
    transparent: 'transparent',
    white: 'white',
    primarySubtle: 'primarySubtle',
    light: 'light',
    lightTransparent: 'lightTransparent',
    whiteSecondary: 'whiteSecondary'
};

const sizes = {
    sm: 'sm',
    md: 'md',
    lg: 'lg'
};


export const fill = () => {
    const color = select('color', colors, 'primary');
    const variation = select('variation', variations, 'fill');
    const block = boolean('block', false);
    const size = select('size', sizes, 'md');
    const active = boolean('active', false);
    const disabled = boolean('disabled', false);
    const basic = boolean('basic', false);
    const noBase = boolean('noBase', false);
    return (
            <Button
                    color={color}
                    active={active}
                    size={size}
                    block={block}
                    basic={basic}
                    noBase={noBase}
                    variation={variation}
                    disabled={disabled}>Get Started</Button>
    );
};

export const link = () => {
    const color = select('color', colors, 'primary');
    const variation = select('variation', variations, 'fill');
    const block = boolean('block', false);
    const size = select('size', sizes, 'md');
    const active = boolean('active', false);
    const disabled = boolean('disabled', false);
    const basic = boolean('basic', false);
    const noBase = boolean('noBase', false);
    return (
        <Button m={2}
                tag="a"
                href="/"
                color={color}
                active={active}
                size={size}
                basic={basic}
                noBase={noBase}
                block={block}
                variation={variation}
                disabled={disabled}>Link styled as button</Button>
    );
};
