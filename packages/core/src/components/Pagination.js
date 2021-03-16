import React from 'react';
import styled, { css } from 'styled-components';
import { rem } from 'polished';
import PropTypes from 'prop-types';
import {
  tagPropType,
  getPaletteColor,
  applyVariations,
  PaginationLinkMd,
  PaginationLinkLg,
  PaginationLinkSm
} from './utils';
import PaginationLink from './PaginationLink';

const propTypes = {
  /** Primary content. */
  children: PropTypes.node,
  /** Additional classes. */
  className: PropTypes.string,
  /** Additional classes render on the listTag. */
  listClassName: PropTypes.string,
  /** A pagination can have different sizes. */
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  /** Pagination has different variations. */
  variation: PropTypes.oneOf(['fill', 'outline', 'cultured']),
  /** Pagination default color. */
  color: PropTypes.string,
  /** An element type to render as (string or function). */
  tag: tagPropType,
  /** Pagination will render as an ordered list or unordered list. */
  listTag: tagPropType
};

const defaultProps = {
  tag: 'nav',
  listTag: 'ul',
  variation: 'cultured',
  color: 'primary'
};

const variations = {
  fill: css`
    color: ${props => getPaletteColor('text.light')(props)};
    background-color: ${props => getPaletteColor('base')(props)};
    border-color: ${props => getPaletteColor('base')(props)};
    &:hover {
      color: ${props => getPaletteColor('text.light')(props)};
      background-color: ${props => getPaletteColor('light')(props)};
      border-color: ${props => getPaletteColor('light')(props)};
    }
    &:disabled {
      color: ${props => getPaletteColor('text.light')(props)};
      background-color: ${props => getPaletteColor('base')(props)};
      border-color: ${props => getPaletteColor('base')(props)};
    }
    &:not(:disabled):active {
      color: ${props => getPaletteColor('text.light')(props)};
      background-color: ${props => getPaletteColor('dark')(props)};
      border-color: ${props => getPaletteColor('dark')(props)};
    }
  `,
  outline: css`
    color: ${props => getPaletteColor('base')(props)};
    border-color: ${props => getPaletteColor('base')(props)};
    &:hover {
      color: ${props => getPaletteColor('text.light')(props)};
      background-color: ${props => getPaletteColor('base')(props)};
      border-color: ${props => getPaletteColor('base')(props)};
    }
    &:disabled {
      color: ${props => getPaletteColor('base')(props)};
      background-color: transparent;
    }
    &:not(:disabled):active {
      color: ${props => getPaletteColor('text.light')(props)};
      background-color: ${props => getPaletteColor('dark')(props)};
      border-color: ${props => getPaletteColor('dark')(props)};
    }
  `,

  cultured: css`
    color: ${({ theme }) => theme.colors.text.title};
    background-color: #f1f1f1;
    border-color: #f1f1f1;
    &:hover {
      background-color: ${props => getPaletteColor('base')(props)};
      border-color: ${props => getPaletteColor('base')(props)};
      color: ${props => getPaletteColor('text.light')(props)};
    }
    &:disabled {
      color: ${({ theme }) => theme.colors.text.title};
      background-color: #f1f1f1;
      border-color: #f1f1f1;
    }
    &:not(:disabled):active {
      color: ${props => getPaletteColor('text.light')(props)};
      background-color: ${props => getPaletteColor('dark')(props)};
      border-color: ${props => getPaletteColor('dark')(props)};
    }
  `
};

const AbstractPagination = props => {
  const {
    className,
    listClassName,
    children,
    variation,
    color,
    size,
    tag: Tag,
    listTag: ListTag,
    ...attributes
  } = props;

  // Map all children with some new `props` named variation.
  const clones = React.Children.map(children, child => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child, { variation, color });
    }
  });

  return (
    <Tag className={className}>
      <ListTag {...attributes} className={listClassName}>
        {clones}
      </ListTag>
    </Tag>
  );
};

AbstractPagination.propTypes = propTypes;
AbstractPagination.defaultProps = defaultProps;

/**
 * @param props {Object}
 * @return {string[]}
 */
const size = props => {
  switch (props.size) {
    case 'lg':
      return css`
        ${PaginationLinkLg};
      `;
    case 'sm':
      return css`
        ${PaginationLinkSm};
      `;
    default:
      return css``;
  }
};

const Pagination = styled(AbstractPagination)`
  ${props => {
    return css`
      ${props.listTag} {
        display: flex;
        padding-left: 0;
        list-style: none;
        border-radius: ${rem(4)};

        ${PaginationLink} {
          position: relative;
          display: block;
          margin: 4px;
          ${PaginationLinkMd};
          background-color: transparent;
          border: 1px solid transparent;
          border-radius: ${rem(4)};
          transition: background-color 0.4s linear, border-color 0.4s linear,
            color 0.4s linear;
          & {
            ${size};
          }
          & {
            ${applyVariations('Pagination', variations)};
          }
          :focus {
            outline: 0;
          }
          :disabled {
            opacity: 0.65;
          }
        }
      }
    `;
  }};
`;

Pagination.propTypes = propTypes;
Pagination.defaultProps = defaultProps;

export default Pagination;
