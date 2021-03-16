import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, select } from '@storybook/addon-knobs';
import { Breadcrumb, BreadcrumbItem } from '../components';

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
  powder: 'powder',
  cultured: 'cultured'
};

const listTag = {
  ol: 'ol',
  ul: 'ul'
};

storiesOf('Breadcrumb', module)
  .addDecorator(
    withKnobs({
      escapeHTML: false
    })
  )
  .add('simple-variations', () => {
    const color = select('color', colors, 'primary');
    const variation = select('variation', variations, 'powder');
    const lTag = select('listTag', listTag, 'ol');
    const sep = text('separator', '/');
    return (
      <div style={{ maxWidth: '960px', margin: '0 auto', padding: '0 30px' }}>
        <Breadcrumb
          listTag={lTag}
          separator={sep}
          variation={variation}
          color={color}
        >
          <BreadcrumbItem>
            <a href="/">Home</a>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <a href="/">Shop</a>
          </BreadcrumbItem>
          <BreadcrumbItem active>
            <a href="/">Product</a>
          </BreadcrumbItem>
        </Breadcrumb>
      </div>
    );
  });
