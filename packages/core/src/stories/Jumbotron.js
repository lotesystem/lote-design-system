import React from 'react';
import { boolean } from '@storybook/addon-knobs';
import { Jumbotron, Text, Button } from '../components';


export default {
    title: 'Jumbotron',
    parameters: {
        component: Jumbotron,
    }
};



export const fill = () => {
    const fluid = boolean('fluid', false);
    return (
        <div style={{maxWidth: '960px', margin: '0 auto'}}>
            <Jumbotron fluid={fluid}>
                <Text fontSize={9}>Hello, Jumbotron!</Text>
                <Text tag="p">
                    A simple jumbotron, using Text component prop named tag with value p. It will render text on the underlying Dom with a paragraph element.
                </Text>
                <Button tag="a" size="lg" href="/">Learn more</Button>
            </Jumbotron>
        </div>
    );
};

export const fluid = () => {
    const fluid = boolean('fluid', true);
    return (
            <Jumbotron fluid={fluid}>
                    <Text fontSize={9}>Hello, Jumbotron!</Text>
                    <Text tag="p">
                        A fluid jumbotron, makes the jumbotron full width of its parent.
                    </Text>
                    <Button tag="a" size="lg" href="/">Learn more</Button>
            </Jumbotron>
    );
};
