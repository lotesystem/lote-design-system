import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import { tagPropType } from './utils';

const propTypes = {
    /** Primary content. */
    children: PropTypes.node,
    row: PropTypes.bool,
    check: PropTypes.bool,
    inline: PropTypes.bool,
    disabled: PropTypes.bool,
    /** An element type to render as (string or function). */
    tag: tagPropType,
    /** Additional classes. */
    className: PropTypes.string
};

const defaultProps = {
    tag: 'div',
};

const AbstractFormGroup = ( props ) => {

    // Destructure properties because we don't want to render these props
    // on underlying DOM element
    let {
        className,
        row,
        disabled,
        check,
        inline,
        tag: Tag,
        ...attributes
    } = props;

    if (Tag === 'fieldset') {
        attributes.disabled = disabled;
    }


    return (<Tag {...attributes} className={className}/>);
};

AbstractFormGroup.propTypes = propTypes;
AbstractFormGroup.defaultProps = defaultProps;

const FormGroup = styled(AbstractFormGroup)`
  
  ${props =>
    props.row &&
    css`
      & {
        display: flex;
        flex-wrap: wrap;
        margin-right: -${props.theme.gridGutterWidth / 2}px;
        margin-left: -${props.theme.gridGutterWidth / 2}px;
      }
    `}
  
    ${props =>
      props.check
        ? css`
            & {
              position: relative;
              display: block;
              padding-left: 20px;
            }
          `
        : css`
            margin-bottom: 1rem;
          `}
    
    ${props =>
      props.check &&
      props.inline &&
      css`
        & {
          display: inline-flex;
          align-items: center;
          padding-left: 0;
          margin-right: 12px;
        }
      `}
`;

FormGroup.propTypes = propTypes;
FormGroup.defaultProps = defaultProps;


export default FormGroup;
