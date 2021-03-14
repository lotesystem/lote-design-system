import React from 'react';
import { color } from 'styled-system';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import { tagPropType } from './utils';

const propTypes = {
    /** Primary content. */
    children: PropTypes.node,
    /** Text will appear inline. */
    inline: PropTypes.bool,
    /** An element type to render as (string or function). */
    tag: tagPropType,
    /** Choose colors form the theme object  */
    color: PropTypes.string,
    /** Additional classes. */
    className: PropTypes.string,
};

const defaultProps = {
    color: 'text.primary',
    tag: 'small'
};

const AbstractFormText = (props) => {
    const {
        className,
        inline,
        color,
        tag: Tag,
        ...attributes
    } = props;

    return (
        <Tag {...attributes} className={className} />
    );
};

AbstractFormText.propTypes = propTypes;
AbstractFormText.defaultProps = defaultProps;


const FormText = styled(AbstractFormText)`
  ${props => props.inline ? css`` : css` & {display: block;margin-top: 4px;}`}
  & {
    ${color};
  }
`;

FormText.propTypes = propTypes;
FormText.defaultProps =  defaultProps;
export default FormText;
