import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { tagPropType } from './utils';
import Button from './Button';
import InputGroup from './InputGroup';
import InputGroupText from './InputGroupText';

const propTypes = {
  /** An element type to render as (string or function). */
  tag: tagPropType,
  /** Append or Prepend your element with the Input element. */
  addonType: PropTypes.oneOf(['prepend', 'append']).isRequired,
  /** Primary content. */
  children: PropTypes.node,
  /** Additional classes. */
  className: PropTypes.string
};

const defaultProps = {
  tag: 'div'
};

const AbstractInputGroupAddon = props => {
  const { className, tag: Tag, addonType, children, ...attributes } = props;

  // Check if the user wrap this component with normal text,
  // then assist the InputGroupText component
  if (typeof children === 'string') {
    return (
      <Tag {...attributes} className={className}>
        <InputGroupText children={children} />
      </Tag>
    );
  }

  return <Tag {...attributes} className={className} children={children} />;
};

AbstractInputGroupAddon.propTypes = propTypes;
AbstractInputGroupAddon.defaultProps = defaultProps;

/**
 * @param props {Object}
 * @return {string[]}
 */
const addonType = props => {
  switch (props.addonType) {
    case 'prepend':
      return css`
            & {
              margin-right: -2px;
            }
            
             ${
               '' /*  
                Example: Handle border radius
               <InputGroup>
                <InputGroupAddon addonType="prepend">
                     <InputGroupText>@</InputGroupText> ✔ The following rule will apply to this element. (${InputGroup} > & > ${InputGroupText})
                      <InputGroupText>@</InputGroupText> ✔  The following rule will apply to this element. (${InputGroup} > & > ${InputGroupText})
                      <Button>Hello</Button> ✔  The following rule will apply to this element. (${InputGroup} > & > ${Button})
                 </InputGroupAddon>
               </InputGroup>      
            */
             }
           ${InputGroup} > & > ${Button},
           ${InputGroup} > & > ${InputGroupText}{
            border-top-right-radius: 0;
            border-bottom-right-radius: 0;
          }
          
            ${
              '' /*  Handle border-radius on the right side exclude the first child. */
            }
            ${InputGroup} > &:not(:first-child) > ${Button},
            ${InputGroup} > &:not(:first-child) > ${InputGroupText},
            
            ${InputGroup} > &:first-child > ${Button}:not(:first-child),
            ${InputGroup} > &:first-child > ${InputGroupText}:not(:first-child) {
              border-top-left-radius: 0;
              border-bottom-left-radius: 0;
            }


            
          `;
    case 'append':
      return css`
              & {
                margin-left: -2px;
              }
              
               ${
                 '' /*  
                Example: Handle border radius
               <InputGroup>
                <InputGroupAddon addonType="append">
                     <InputGroupText>@</InputGroupText> ✔ The following rule will apply to this element. (${InputGroup} > & > ${InputGroupText})
                      <InputGroupText>@</InputGroupText> ✔  The following rule will apply to this element. (${InputGroup} > & > ${InputGroupText})
                      <Button>Hello</Button> ✔  The following rule will apply to this element. (${InputGroup} > & > ${Button})
                 </InputGroupAddon>
               </InputGroup>      
            */
               }
           ${InputGroup} > & > ${Button},
           ${InputGroup} > & > ${InputGroupText} {
            border-top-left-radius: 0;
            border-bottom-left-radius: 0;
          }
          
          ${
            '' /*  Handle border-radius on the left side exclude the last child. */
          }
            ${InputGroup} > &:not(:last-child) > ${Button},
            ${InputGroup} > &:not(:last-child) > ${InputGroupText},
            
            ${InputGroup} > &:last-child > ${Button}:not(:last-child),
            ${InputGroup} > &:last-child > ${InputGroupText}:not(:last-child) {
              border-top-right-radius: 0;
              border-bottom-right-radius: 0;
            }

            `;
    default:
      return css``;
  }
};

const InputGroupAddon = styled(AbstractInputGroupAddon)`

     & {
        display: flex;
     }
     
     & ${Button} {
       position: relative;
        z-index: 2;
     }
     
     & ${Button}:focus {
       position: relative;
        z-index: 3;
     }
     
     ${
       '' /* 
      Example: InputGroupAddon Handle on scenraios
      <InputGroupAddon>
        <InputGroupText>@</InputGroupText>
        <InputGroupText>@</InputGroupText> ✔ The following rule will apply to this element. (& ${InputGroupText} + ${InputGroupText})
      </InputGroupAddon>
      or
      <InputGroupAddon>
        <Button>Hello</Button>
        <Button>Hello</Button> ✔ The following rule will apply to this element. (& ${Button} + ${Button})
      </InputGroupAddon>
      */
     }
    & ${Button} + ${Button},
    & ${Button} + ${InputGroupText},
    & ${InputGroupText} + ${InputGroupText},
    & ${InputGroupText} + ${Button} {
      margin-left: -2px;
    }
    
 
  ${addonType};

`;

InputGroupAddon.propTypes = propTypes;
InputGroupAddon.defaultProps = defaultProps;

export default InputGroupAddon;
