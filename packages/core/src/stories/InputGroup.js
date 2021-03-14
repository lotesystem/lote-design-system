import React from 'react';
import { select } from '@storybook/addon-knobs';
import { InputGroup, Input, InputGroupAddon, InputGroupText, Button } from '../components';


export default {
    title: 'InputGroup',
    parameters: {
        component: InputGroup,
    }
};

const addonType = {
    prepend: 'prepend',
    append: 'append',
};


const size = {
    sm: 'sm',
    md: 'md',
    lg: 'lg'
};



export const prepend = () => {
    const addType = select('addonType', addonType, 'prepend');
    const groupSize = select('size', size, 'md');
    let Tag = <Input type="text" placeholder="Hello, Use your username"/>;
    return (
        <div style={{maxWidth: '760px', margin: '26px auto'}}>
            <InputGroup size={groupSize}>
                { addType === 'append' && Tag}
                    <InputGroupAddon addonType={addType}>
                        <InputGroupText>@</InputGroupText>
                    </InputGroupAddon>
                { addType === 'prepend' && Tag}
            </InputGroup>
        </div>
    );
};


export const append = () => {
    const addType = select('addonType', addonType, 'append');
    const groupSize = select('size', size, 'md');
    let Tag = <Input type="text" placeholder="Hello, Use your username"/>;
    return (
        <div style={{maxWidth: '760px', margin: '26px auto'}}>
            <InputGroup size={groupSize}>
                { addType === 'append' && Tag}
                <InputGroupAddon addonType={addType}>
                    <InputGroupText>@</InputGroupText>
                </InputGroupAddon>
                { addType === 'prepend' && Tag}
            </InputGroup>
        </div>
    );
};

export const check = () => {
    const addType = select('addonType', addonType, 'append');
    const groupSize = select('size', size, 'md');
    let Tag = <Input type="text" placeholder="Hello, Use your username"/>;
    return (
        <div style={{maxWidth: '760px', margin: '26px auto'}}>
            <InputGroup size={groupSize}>
                { addType === 'append' && Tag}
                <InputGroupAddon addonType={addType}>
                    <InputGroupText>
                        <Input type="checkbox" addon />
                    </InputGroupText>
                </InputGroupAddon>
                { addType === 'prepend' && Tag}
            </InputGroup>
        </div>
    );
};

export const prependAndAppend = () => {
    const groupSize = select('size', size, 'md');
    return (
        <div style={{maxWidth: '760px', margin: '26px auto'}}>
                <InputGroup size={groupSize}>
                    <InputGroupAddon addonType="prepend">$</InputGroupAddon>
                        <Input type="text" placeholder="Hello, Use your username"/>
                    <InputGroupAddon addonType="append">£</InputGroupAddon>
                </InputGroup>
        </div>
    );
};

export const sizes = () => {
    const groupSize = select('size', size, 'md');
    return (
        <div style={{maxWidth: '760px', margin: '26px auto'}}>
            <InputGroup size={groupSize}>
                <InputGroupAddon addonType="prepend">
                    <InputGroupText>Hello World</InputGroupText>
                </InputGroupAddon>
                <Input type="text" placeholder="Hello, Use your username"/>
            </InputGroup>
        </div>
    );
};

export const multipleInputs = () => {
    const groupSize = select('size', size, 'md');
    return (
        <div style={{maxWidth: '760px', margin: '26px auto'}}>
            <InputGroup size={groupSize}>
                <InputGroupAddon addonType="prepend">
                    <InputGroupText>First and Last Name</InputGroupText>
                </InputGroupAddon>
                <Input type="text" placeholder="First Name"/>
                <Input type="text" placeholder="Last Name"/>
            </InputGroup>
        </div>
    );
};

export const multipleAddons = () => {
    const addType = select('addonType', addonType, 'prepend');
    const groupSize = select('size', size, 'md');
    let Tag = <Input type="text" placeholder="Hello, Use your username"/>;
    return (
        <div style={{maxWidth: '760px', margin: '26px auto'}}>
            <InputGroup size={groupSize}>
                { addType === 'append' && Tag}
                <InputGroupAddon addonType={addType}>
                    <InputGroupText>$</InputGroupText>
                    <InputGroupText>£</InputGroupText>
                    <InputGroupText>₹</InputGroupText>
                </InputGroupAddon>
                { addType === 'prepend' && Tag}
            </InputGroup>
        </div>
    );
};

export const simpleButton = () => {
    const addType = select('addonType', addonType, 'prepend');
    const groupSize = select('size', size, 'md');
    let Tag = <Input type="text" placeholder="Subscribe to our Newsletter"/>;
    return (
        <div style={{maxWidth: '760px', margin: '26px auto'}}>
            <InputGroup size={groupSize}>
                { addType === 'append' && Tag}
                <InputGroupAddon addonType={addType}>
                    <Button>Subscribe</Button>
                </InputGroupAddon>
                { addType === 'prepend' && Tag}
            </InputGroup>
        </div>
    );
};

export const buttons = () => {
    const groupSize = select('size', size, 'md');
    return (
        <div style={{maxWidth: '760px', margin: '26px auto'}}>
            <InputGroup size={groupSize}>
                <InputGroupAddon addonType="prepend"><Button>Subscribe</Button></InputGroupAddon>
                <Input type="text" placeholder="Hello, Use your username"/>
                <InputGroupAddon addonType="append"><Button>Submit</Button></InputGroupAddon>
            </InputGroup>
        </div>
    );
};

export const multipleButtons = () => {
    const groupSize = select('size', size, 'md');
    return (
        <div style={{maxWidth: '760px', margin: '26px auto'}}>
            <InputGroup size={groupSize}>
                <InputGroupAddon addonType="prepend"><Button>Button 1</Button></InputGroupAddon>
                <InputGroupAddon addonType="prepend"><Button>Button 2</Button></InputGroupAddon>
                <InputGroupAddon addonType="prepend"><Button>Button 3</Button></InputGroupAddon>
                <Input type="text" placeholder="Hello, Use your username"/>
                <InputGroupAddon addonType="append"><Button>Button 4</Button></InputGroupAddon>
            </InputGroup>
        </div>
    );
};
