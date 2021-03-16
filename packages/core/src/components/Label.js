import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import { omit, tagPropType, getGridBreakPointKeys, percentage } from './utils';

const propTypes = {
  /** Primary content. */
  children: PropTypes.node,
  hidden: PropTypes.bool,
  check: PropTypes.bool,
  labelSize: PropTypes.oneOf(['sm', 'md', 'lg']),
  for: PropTypes.string,
  /** An element type to render as (string or function). */
  tag: tagPropType,
  /** Additional classes. */
  className: PropTypes.string
};

const defaultProps = {
  tag: 'label'
};

const AbstractLabel = props => {
  // Destructure properties because we don't want to render these props
  // on underlying DOM element
  const {
    className,
    hidden,
    check,
    labelSize,
    for: htmlFor,
    tag: Tag,
    ...attributes
  } = props;

  // Remove `styled-system` and other props from the `attributes` object. We don't want to
  // render these props on the underlying DOM element. But, render on the
  // styled-component class.
  const breakpoints = getGridBreakPointKeys();
  const attr = omit(attributes, breakpoints);

  return <Tag htmlFor={htmlFor} {...attr} className={className} />;
};

AbstractLabel.propTypes = propTypes;
AbstractLabel.defaultProps = defaultProps;

const breakpoints = getGridBreakPointKeys();

/**
 * @param props {Object}
 * @return {string[]}
 */
const labelSize = props => {
  switch (props.labelSize) {
    case 'lg':
      return css`
        & {
          padding-top: calc(0.5rem + 1px); /* 0.5rem = 8px */
          padding-bottom: calc(0.5rem + 1px);
          margin-bottom: 0;
          font-size: 20px;
          line-height: 1.5;
        }
      `;
    case 'sm':
      return css`
        & {
          padding-top: calc(0.25rem + 1px); /* 0.25rem = 4px */
          padding-bottom: calc(0.25rem + 1px);
          margin-bottom: 0;
          font-size: 14px;
          line-height: 1.5;
        }
      `;
    case 'md':
      return css`
        & {
          padding-top: calc(0.375rem + 1px); /* 0.375rem = 6px */
          padding-bottom: calc(0.375rem + 1px);
          margin-bottom: 0;
          font-size: inherit;
          line-height: 1.5;
        }
      `;
    default:
      return css``;
  }
};

/**
 * @param gridGutterWidth
 * @return {string[]}
 */
const defaultColumnStyles = ({ theme: { gridGutterWidth } }) => {
  return css`
    & {
      position: relative;
      width: 100%;
      padding-right: ${gridGutterWidth / 2}px;
      padding-left: ${gridGutterWidth / 2}px;
    }
  `;
};

/**
 * Set max-width based on columns you have mentioned
 * @param size {number}
 * @param propAsColumns {number}
 * @returns {string[]}
 */
const sizeForIndividualColumn = (size, propAsColumns) => {
  return css`
    flex: 0 0 ${percentage(size / propAsColumns)};
    max-width: ${percentage(size / propAsColumns)};
  `;
};

/**
 * @param gridColumns {number}
 * @param gridBreakPoints {Object}
 * @param props {Object}
 * @return {string[]}
 */
const makeGridColumns = ({
  theme: { gridColumns, gridBreakPoints },
  ...props
}) => {
  // CSS Generator
  const mediaQueryCSS = breakpoints.map(key => {
    const mediaQuery = gridBreakPoints[key];
    if (props[key]) {
      // No media query necessary for xs breakpoint as it's effectively `@media (min-width: 0) { }`
      if (mediaQuery === 0) {
        return css`
          ${sizeForIndividualColumn(props[key], gridColumns)}
        `;
      } else {
        return css`
          @media (min-width: ${mediaQuery}) {
            ${sizeForIndividualColumn(props[key], gridColumns)};
          }
        `;
      }
    } else {
      return css``;
    }
  });
  return css`
    ${mediaQueryCSS}
  `;
};

const colStyles = props => {
  const propsArray = Object.keys(props);
  // Matching values in two arrays filter will return match values in an array
  const matches = breakpoints.filter(key => {
    return propsArray.includes(key);
  });
  if (matches.length > 0) {
    return css`
      ${defaultColumnStyles};
      ${makeGridColumns};
      & {
        padding-top: 6px;
        padding-bottom: 6px;
        margin-bottom: 0;
        font-size: inherit;
        line-height: 1.5;
      }
    `;
  } else {
    return css``;
  }
};

const Label = styled(AbstractLabel)`
  
  ${props =>
    props.hidden &&
    css`
      & {
        position: absolute;
        width: 1px;
        height: 1px;
        padding: 0;
        margin: -1px;
        overflow: hidden;
        clip: rect(0, 0, 0, 0);
        white-space: nowrap;
        border: 0;
      }
    `}
    
      ${props =>
        props.check &&
        css`
          & {
            margin-bottom: 0;
          }
        `}

  ${colStyles};
  ${labelSize};
`;

Label.propTypes = propTypes;
Label.defaultProps = defaultProps;

export default Label;
