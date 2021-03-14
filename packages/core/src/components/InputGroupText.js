import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { tagPropType, getPaletteColor, InputMd } from './utils';

const propTypes = {
    /** An element type to render as (string or function). */
    tag: tagPropType,
    /** Additional classes. */
    className: PropTypes.string
};

const defaultProps = {
    tag: 'span'
};

const AbstractInputGroupText = (props) => {
    const {
        className,
        tag: Tag,
        ...attributes
    } = props;

    return (
        <Tag {...attributes} className={className} />
    );
};

AbstractInputGroupText.propTypes = propTypes;
AbstractInputGroupText.defaultProps = defaultProps;



const InputGroupText = styled(AbstractInputGroupText)`

  display: flex;
  align-items: center;
  margin-bottom: 0;
  
  padding: ${InputMd.padding};
  font-size: ${InputMd.fontSize};
  line-height: ${InputMd.lineHeight};
  border-radius:${InputMd.borderRadius};
  
  font-weight: 400;
  color: #fff;
  text-align: center;
  white-space: nowrap;
  background-color: ${(props) => getPaletteColor('primary.base')(props)};
  border: 2px solid ${(props) => getPaletteColor('primary.base')(props)};
  
  
  ${'' /* For radio and checkboxes */}
  & input[type="radio"],
  & input[type="checkbox"] {
    margin-top: 0;
  }

`;

InputGroupText.propTypes = propTypes;
InputGroupText.defaultProps = defaultProps;

export default InputGroupText;
