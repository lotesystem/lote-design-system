import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import { tagPropType } from './utils';

const propTypes = {
  /** An element type to render as (string or function). */
  tag: tagPropType,
  /** Primary content. */
  children: PropTypes.node,
  /** Elements will appear horizontal. */
  inline: PropTypes.bool,
  /** Additional classes. */
  className: PropTypes.string
};

const defaultProps = {
  tag: 'form'
};

const AbstractForm = props => {
  // Destructure properties because we don't want to render these props
  // on underlying DOM element
  const { className, inline, tag: Tag, ...attributes } = props;

  return <Tag {...attributes} className={className} />;
};

AbstractForm.propTypes = propTypes;
AbstractForm.defaultProps = defaultProps;

const Form = styled(AbstractForm)`
  ${props =>
    props.inline &&
    css`
      & {
        display: flex;
        flex-flow: row wrap;
        align-items: center;
      }
    `};
`;

Form.propTypes = propTypes;
Form.defaultProps = defaultProps;

export default Form;
