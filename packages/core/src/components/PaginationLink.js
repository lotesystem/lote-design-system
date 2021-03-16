import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { tagPropType, getPaletteColor } from './utils';

const propTypes = {
  /** Primary content. */
  children: PropTypes.node,
  /** Additional classes. */
  className: PropTypes.string,
  /** Show the next page PaginationLink. */
  next: PropTypes.bool,
  /** Show the previous page PaginationLink. */
  previous: PropTypes.bool,
  /** Show the first page PaginationLink. */
  first: PropTypes.bool,
  /** Show the last page PaginationLink. */
  last: PropTypes.bool,
  /** An element type to render as (string or function). */
  tag: tagPropType
};

const defaultProps = {
  tag: 'a'
};

const AbstractPaginationLink = props => {
  let {
    className,
    next,
    previous,
    first,
    last,
    active,
    color,
    variation,
    tag: Tag,
    ...attributes
  } = props;

  let defaultCaret;
  // Unicode characters code from google
  if (previous) {
    // <
    defaultCaret = '\u2039';
  } else if (next) {
    // >
    defaultCaret = '\u203A';
  } else if (first) {
    // <<
    defaultCaret = '\u00ab';
  } else if (last) {
    // >>
    defaultCaret = '\u00bb';
  }

  // Get children from the Link
  let children = props.children;

  // If user will try to render the component without any children
  // e.g. <PaginationLink previous href="#" /> then make it null.
  if (children && Array.isArray(children) && children.length === 0) {
    children = null;
  }

  // If there is not any href attribute but an anchor element then tag will button
  if (!attributes.href && Tag === 'a') {
    Tag = 'button';
  }

  // Assign caret
  if (previous || next || first || last) {
    children = <span>{children || defaultCaret}</span>;
  }

  return (
    <Tag {...attributes} className={className}>
      {children}
    </Tag>
  );
};

AbstractPaginationLink.propTypes = propTypes;
AbstractPaginationLink.defaultProps = defaultProps;

const activeLink = props => {
  const { variation, active } = props;

  if (variation && active) {
    if (variation === 'fill' || variation === 'cultured') {
      return css`
        color: ${props => getPaletteColor('text.light')(props)};
        background-color: ${props => getPaletteColor('dark')(props)};
        border-color: ${props => getPaletteColor('dark')(props)};
      `;
    } else if (variation === 'outline') {
      return css`
        color: ${props => getPaletteColor('text.light')(props)};
        background-color: ${props => getPaletteColor('dark')(props)};
        border-color: ${props => getPaletteColor('dark')(props)};
      `;
    } else {
      return css``;
    }
  }
};

const PaginationLink = styled(AbstractPaginationLink)`
  &&&:not(:disabled) {
    ${activeLink};
  }
`;

PaginationLink.propTypes = propTypes;
PaginationLink.defaultProps = defaultProps;

export default PaginationLink;
