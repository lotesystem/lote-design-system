import React from 'react';
import { number, boolean } from '@storybook/addon-knobs';
import { Container, Row, Column } from '../components';

export default {
  title: 'Row',
  parameters: {
    component: Row
  }
};

export const simple = () => {
  const gridGutterWidth = number('gridGutterWidth ', 64, {
    range: true,
    min: 4,
    max: 512
  });
  const noGutters = boolean('noGutters', false);
  const form = boolean('form', false);
  return (
    <Container fluid style={{ maxWidth: '1440px' }}>
      <Row form={form} noGutters={noGutters} gridGutterWidth={gridGutterWidth}>
        <Column
          style={{ backgroundColor: '#e6faff' }}
          gridGutterWidth={gridGutterWidth}
        >
          <div
            style={{
              padding: '8px',
              color: '#fff',
              backgroundColor: '#01a1ff'
            }}
          >
            {'col-1'}
          </div>
        </Column>

        <Column
          style={{ backgroundColor: '#e6faff' }}
          gridGutterWidth={gridGutterWidth}
        >
          <div
            style={{
              padding: '8px',
              color: '#fff',
              backgroundColor: '#01a1ff'
            }}
          >
            {'col-2'}
          </div>
        </Column>

        <Column
          style={{ backgroundColor: '#e6faff' }}
          gridGutterWidth={gridGutterWidth}
        >
          <div
            style={{
              padding: '8px',
              color: '#fff',
              backgroundColor: '#01a1ff'
            }}
          >
            {'col-3'}
          </div>
        </Column>
      </Row>
    </Container>
  );
};
