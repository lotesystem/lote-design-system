import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { tagPropType } from './utils';

const propTypes = {
    tag: tagPropType,
    className: PropTypes.string,
};

const defaultProps = {
    tag: 'div',
};

const AbstractButtonToolbar = (props) => {
    const {
        className,
        tag: Tag,
        ...attributes
    } = props;

    return (
        <Tag {...attributes} className={className} />
    );
};

AbstractButtonToolbar.propTypes = propTypes;
AbstractButtonToolbar.defaultProps = defaultProps;

const ButtonToolbar = styled(AbstractButtonToolbar)`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
`;

ButtonToolbar.propTypes = propTypes;
ButtonToolbar.defaultProps = defaultProps;


export default ButtonToolbar;
