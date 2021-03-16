import React from 'react';
import { number, boolean } from '@storybook/addon-knobs';
import { Container } from '../components';

export default {
  title: 'Container',
  parameters: {
    component: Container
  }
};

export const simple = () => {
  const gridGutterWidth = number('gridGutterWidth ', 64, {
    range: true,
    min: 4,
    max: 512
  });
  const fluid = boolean('fluid', false);
  return (
    <Container
      style={{ backgroundColor: '#e6faff' }}
      fluid={fluid}
      gridGutterWidth={gridGutterWidth}
    >
      <div
        style={{
          textAlign: 'center',
          padding: '8px',
          color: '#fff',
          backgroundColor: '#01a1ff'
        }}
      >
        Container
      </div>
    </Container>
  );
};

export const fluid = () => {
  const gridGutterWidth = number('gridGutterWidth ', 64, {
    range: true,
    min: 4,
    max: 512
  });
  const fluid = boolean('fluid', true);
  return (
    <Container
      style={{ backgroundColor: '#e6faff' }}
      fluid={fluid}
      gridGutterWidth={gridGutterWidth}
    >
      <div
        style={{
          textAlign: 'center',
          padding: '8px',
          color: '#fff',
          backgroundColor: '#01a1ff'
        }}
      >
        Container
      </div>
    </Container>
  );
};
