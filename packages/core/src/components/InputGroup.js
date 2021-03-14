import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import Button from './Button';
import Input from './Input';
import InputGroupText from './InputGroupText';
import InputGroupAddon from './InputGroupAddon';
import { tagPropType, InputLg, InputSm } from './utils';


const propTypes = {
    /** An element type to render as (string or function). */
    tag: tagPropType,
    /** An InputGroup can have different sizes. */
    size: PropTypes.oneOf(['sm', 'md','lg']),
    /** Additional classes. */
    className: PropTypes.string
};

const defaultProps = {
    tag: 'div'
};

const AbstractInputGroup = (props) => {
    const {
        className,
        tag: Tag,
        size,
        ...attributes
    } = props;

    return (
        <Tag {...attributes} className={className} />
    );
};

AbstractInputGroup.propTypes = propTypes;
AbstractInputGroup.defaultProps = defaultProps;


/**
 * @param props {Object}
 * @return {string[]}
 */
const size = (props) => {
    switch (props.size) {
        case 'lg':
            return css`
            & > ${Input}:not(textarea) {
               height: ${InputLg.height};
            }
            & > ${Input},
            & > ${InputGroupAddon} > ${InputGroupText},
            & > ${InputGroupAddon} > ${Button} {
              padding: ${InputLg.padding};
              font-size: ${InputLg.fontSize};
              line-height: ${InputLg.lineHeight};
              border-radius: ${InputLg.borderRadius};
            }
          `;
        case 'sm':
            return css`
            & > ${Input}:not(textarea) {
               height: ${InputSm.height};
            }
            & > ${Input},
            & > ${InputGroupAddon} > ${InputGroupText},
            & > ${InputGroupAddon} > ${Button} {
              padding: ${InputSm.padding};
              font-size: ${InputSm.fontSize};
              line-height: ${InputSm.lineHeight};
              border-radius: ${InputSm.borderRadius};
            }
          `;


        default:
            return css``;
    }
};


const InputGroup = styled(AbstractInputGroup)`

  & {
    position: relative;
    display: flex;
    flex-wrap: wrap;
    align-items: stretch;
    width: 100%;
  }
  
  & > ${Input} {
    position: relative;
    flex: 1 1 auto;
    width: 1%;
    min-width: 0;
    margin-bottom: 0;
  }
  
  & > ${Input} + ${Input} {
    margin-left: -2px;
  }
  
  ${'' /* Input will always on the top. */} 
  & > ${Input}:focus {
      z-index: 3;
  }
  
   ${'' /* Applied When the Input is not the last child of the parent element InputGroup. */}
  & > ${Input}:not(:last-child) {
     border-top-right-radius: 0;
     border-bottom-right-radius: 0;
  }
  
   ${'' /* Applied When the Input is not the first child of the parent element InputGroup. */}
  & > ${Input}:not(:first-child) {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }
  
  ${size};
`;

InputGroup.propTypes = propTypes;
InputGroup.defaultProps = defaultProps;

export default InputGroup;
