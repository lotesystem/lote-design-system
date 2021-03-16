import React from 'react';
import { select, boolean } from '@storybook/addon-knobs';
import { Pagination, PaginationItem, PaginationLink } from '../components';

export default {
  title: 'Pagination',
  parameters: {
    component: Pagination
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
  cultured: 'cultured'
};

const listTag = {
  ol: 'ol',
  ul: 'ul'
};

const sizes = {
  sm: 'sm',
  md: 'md',
  lg: 'lg'
};

export const simpleVariations = () => {
  const lTag = select('listTag', listTag, 'ol');
  const size = select('size', sizes, 'md');
  const next = boolean('next', true);
  const previous = boolean('previous', true);
  const first = boolean('first', true);
  const last = boolean('last', true);
  const active = boolean('active', true);
  const disabled = boolean('disabled', true);
  const color = select('color', colors, 'primary');
  const variation = select('variation', variations, 'cultured');
  return (
    <div style={{ maxWidth: '960px', margin: '0 auto' }}>
      <Pagination
        listTag={lTag}
        size={size}
        color={color}
        variation={variation}
      >
        <PaginationItem disabled={disabled}>
          {first && <PaginationLink first />}
        </PaginationItem>
        <PaginationItem disabled={disabled}>
          {previous && <PaginationLink previous />}
        </PaginationItem>
        <PaginationItem active={active}>
          <PaginationLink>1</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink>2</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink>3</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink>4</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink>5</PaginationLink>
        </PaginationItem>
        <PaginationItem>{next && <PaginationLink next />}</PaginationItem>
        <PaginationItem>{last && <PaginationLink last />}</PaginationItem>
      </Pagination>
    </div>
  );
};
