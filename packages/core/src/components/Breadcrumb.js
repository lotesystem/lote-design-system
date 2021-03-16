import React from 'react';
import styled, { css } from 'styled-components';
import { rem } from 'polished';
import PropTypes from 'prop-types';
import { getPaletteColor, tagPropType, applyVariations } from './utils';

const propTypes = {
  /** An element type to render as (string or function). */
  tag: tagPropType,
  /** Breadcrumb will render as an ordered list or unordered list. */
  listTag: tagPropType,
  /** Additional classes. */
  className: PropTypes.string,
  /** Additional classes render on the listTag. */
  listClassName: PropTypes.string,
  /** Primary content. */
  children: PropTypes.node,
  /** Breadcrumb has different variations. */
  variation: PropTypes.oneOf(['fill', 'outline', 'powder', 'cultured']),
  /** Breadcrumb default color. */
  color: PropTypes.string,
  /** Custom separator */
  separator: PropTypes.string
};

const defaultProps = {
  tag: 'nav',
  listTag: 'ol',
  separator: '/',
  variation: 'powder',
  color: 'primary'
};

const variations = {
  // fill variation
  // The getPaletteColor function will automatically take a shade of `base` for BgColor, borderColor and color.
  fill: css`
    background-color: ${props => getPaletteColor('base')(props)};
    border: 1px solid ${props => getPaletteColor('base')(props)};
    li + li::before {
      color: ${props => getPaletteColor('text.light')(props)};
    }
    a {
      color: ${props => getPaletteColor('text.light')(props)};
      :hover {
        color: rgba(255, 255, 255, 0.85);
      }
    }
  `,
  outline: css`
    background-color: transparent;
    border: 1px solid ${props => getPaletteColor('base')(props)};
    li + li::before {
      color: ${props => getPaletteColor('base')(props)};
    }
    a {
      color: ${props => getPaletteColor('base')(props)};
      :hover {
        opacity: 0.7;
      }
    }
  `,
  powder: css`
    background-color: #fbfbfb;
    li + li::before {
      color: ${({ theme }) => theme.colors.text.primary};
    }
    a {
      color: ${({ theme }) => theme.colors.text.primary};
      :hover {
        color: ${props => getPaletteColor('primary.base')(props)};
      }
    }
  `,
  cultured: css`
    background-color: transparent;
    border: 2px solid #efefef;
    li + li::before {
      color: ${({ theme }) => theme.colors.text.primary};
    }
    a {
      color: ${({ theme }) => theme.colors.text.primary};
      :hover {
        color: ${props => getPaletteColor('primary.base')(props)};
      }
    }
  `
};

const AbstractBreadcrumb = props => {
  const {
    className,
    listClassName,
    children,
    color,
    variation,
    separator,
    tag: Tag,
    listTag: ListTag,
    ...attributes
  } = props;

  // Map all children with some new `props` named variation.
  const clones = React.Children.map(children, child => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child, { variation });
    }
  });

  return (
    <Tag {...attributes} className={className}>
      <ListTag className={listClassName}>{clones}</ListTag>
    </Tag>
  );
};

AbstractBreadcrumb.propTypes = propTypes;
AbstractBreadcrumb.defaultProps = defaultProps;

const Breadcrumb = styled(AbstractBreadcrumb)`
  ${props => {
    return css`
          ${props.listTag} {
              display: flex;
              flex-wrap: wrap;
              padding: ${rem(18)} ${rem(26)};
              margin-bottom: 1rem;
              list-style: none;
              border-radius: ${rem(4)};
              
              li + li:before {
                content: "${props.separator}";
              }
              
              li + li {
              padding-left: 8px;
            }
            
             li + li::before {
            display: inline-block;
            padding-right: 0.5rem;
            }
            
            a {
              font-size: ${rem(14)};
              transition: color .4s linear;
          }
              ${applyVariations('Breadcrumb', variations)};
          }
      `;
  }};
`;

Breadcrumb.propTypes = propTypes;
Breadcrumb.defaultProps = defaultProps;

export default Breadcrumb;
