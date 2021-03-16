import React from 'react';
import { select, boolean } from '@storybook/addon-knobs';
import { ButtonToolbar, ButtonGroup, Button } from '../components';

export default {
  title: 'ButtonGroup',
  parameters: {
    component: ButtonGroup
  }
};

const sizes = {
  sm: 'sm',
  md: 'md',
  lg: 'lg'
};

export const simple = () => {
  const vertical = boolean('vertical', false);
  const size = select('size', sizes, 'md');

  return (
    <div
      style={{
        maxWidth: '960px',
        padding: '16px',
        margin: '0 auto',
        border: '1px solid #ddd'
      }}
    >
      <div style={{ marginBottom: '26px' }}>
        <ButtonGroup size={size} vertical={vertical}>
          <Button>Left</Button>
          <Button>Right</Button>
          <Button>Middle</Button>
        </ButtonGroup>
      </div>

      <div>
        <ButtonGroup size={size} vertical={vertical}>
          <Button variation="outline">Left</Button>
          <Button variation="outline" color="success">
            Right
          </Button>
          <Button variation="outline" color="danger">
            Middle
          </Button>
        </ButtonGroup>
      </div>
    </div>
  );
};

export const toolbar = () => {
  const vertical = boolean('vertical', false);
  const size = select('size', sizes, 'md');

  return (
    <div
      style={{
        maxWidth: '960px',
        padding: '16px',
        margin: '0 auto',
        border: '1px solid #ddd'
      }}
    >
      <ButtonToolbar style={{ marginBottom: '26px' }}>
        <ButtonGroup size={size} vertical={vertical}>
          <Button>File</Button>
          <Button>Edit</Button>
          <Button>Search</Button>
          <Button>View</Button>
          <Button>Encoding</Button>
        </ButtonGroup>
      </ButtonToolbar>

      <ButtonToolbar>
        <ButtonGroup size={size} vertical={vertical}>
          <Button variation="outline">File</Button>
          <Button variation="outline" color="secondary">
            Edit
          </Button>
          <Button variation="outline" color="success">
            Search
          </Button>
          <Button variation="outline" color="warning">
            View
          </Button>
          <Button variation="outline" color="danger">
            Encoding
          </Button>
        </ButtonGroup>
      </ButtonToolbar>
    </div>
  );
};
