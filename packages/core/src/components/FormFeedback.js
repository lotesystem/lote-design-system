import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import { tagPropType, getPaletteColor } from './utils';

const propTypes = {
  /** Primary content. */
  children: PropTypes.node,
  /** An element type to render as (string or function). */
  tag: tagPropType,
  /** Additional classes. */
  className: PropTypes.string,
  /** Turn on the valid feedback text. */
  valid: PropTypes.bool
};

const defaultProps = {
  tag: 'div',
  valid: undefined
};

const AbstractFormFeedback = props => {
  const { className, valid, tag: Tag, ...attributes } = props;

  return <Tag {...attributes} className={className} />;
};

AbstractFormFeedback.propTypes = propTypes;
AbstractFormFeedback.defaultProps = defaultProps;

const FormFeedback = styled(AbstractFormFeedback)`
  ${props => {
    if (props.valid) {
      return css`
        & {
          display: none;
          width: 100%;
          margin-top: 0.25rem;
          font-size: 80%;
          color: ${props => getPaletteColor('success.base')(props)};
        }
      `;
    } else {
      return css`
        & {
          display: none;
          width: 100%;
          margin-top: 0.25rem;
          font-size: 80%;
          color: ${props => getPaletteColor('danger.base')(props)};
        }
      `;
    }
  }}
`;

FormFeedback.propTypes = propTypes;
FormFeedback.defaultProps = defaultProps;

export default FormFeedback;
