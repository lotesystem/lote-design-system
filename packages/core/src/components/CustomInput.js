import React from 'react';
import PropTypes from 'prop-types';
import { rgba } from 'polished';
import styled, { css } from 'styled-components';
import { getPaletteColor } from './utils';

const propTypes = {
  /** Additional classes. */
  className: PropTypes.string,
  /** id is required to use in CustomInputs. */
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  /**
   * type can be things like text, password, (typical input types) as well as radio and checkbox
   * providing children as you normally would to those.
   */
  type: PropTypes.string.isRequired,
  /** label could be a react component or just simple string. */
  label: PropTypes.node,
  /** CustomInput will appear horizontal. */
  inline: PropTypes.bool,
  /** Display a success state. */
  valid: PropTypes.bool,
  /** Display a danger state. */
  invalid: PropTypes.bool,
  /** A CustomInput can also have different sizes. */
  inputSize: PropTypes.string,
  /** Sets or returns the value of the for attribute of a label. */
  htmlFor: PropTypes.string,
  /** Primary content. */
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.array,
    PropTypes.func
  ])
};

// 🔴
const Circle = props => {
  return (
    <svg viewBox="0 0 16 16" width="1em" height="1em" {...props}>
      <path d="M8 0a8 8 0 108 8 8 8 0 00-8-8z" fill="currentColor" />
    </svg>
  );
};

// ✔
const Check = props => {
  return (
    <svg viewBox="0 0 16 16" width="1em" height="1em" {...props}>
      <path
        d="M5.43 13.73l-5.2-5.2a.8.8 0 010-1.13l1.14-1.13a.8.8 0 011.13 0L6 9.77l7.5-7.5a.8.8 0 011.13 0l1.14 1.13a.8.8 0 010 1.13l-9.2 9.2a.81.81 0 01-1.14 0z"
        fill="currentColor"
      />
    </svg>
  );
};

const AbstractCustomInput = props => {
  let {
    inputSize,
    htmlFor,
    label,
    inline,
    valid,
    invalid,
    className,
    children,
    ...attributes
  } = props;

  // Get the type of CustomInput
  const type = attributes.type;
  // If `htmlFor` is not defined then use id which tells which form element a label is bound to
  const labelHtmlFor = htmlFor || attributes.id;

  // If user defined any type which is not check or radio then render simple Input
  if (type !== 'checkbox' && type !== 'radio') {
    return <input {...attributes} className={className} />;
  }

  // If user wants to hide the wrapper
  const { hidden, ...rest } = attributes;

  return (
    <div className={className} hidden={hidden || false}>
      <input {...rest} type={type} />
      <label htmlFor={labelHtmlFor}>
        {type === 'checkbox' ? <Check /> : <Circle />}
        {label}
      </label>
      {children}
    </div>
  );
};

AbstractCustomInput.propTypes = propTypes;

/**
 * @param props {Object}
 * @return {string[]}
 */
const checkboxRadioValid = props => {
  if (props.valid) {
    return css`
      & {
        input[type='radio']:valid ~ label,
        input[type='checkbox']:valid ~ label,
        input[type='radio'] ~ label,
        input[type='checkbox'] ~ label {
          color: ${props => getPaletteColor('success.base')(props)};
        }

        input[type='radio']:valid:checked ~ label::before,
        input[type='checkbox']:valid:checked ~ label::before,
        input[type='radio']:checked ~ label::before,
        input[type='checkbox']:checked ~ label::before {
          border-color: ${props => getPaletteColor('success.base')(props)};
          background-color: ${props => getPaletteColor('success.base')(props)};
        }

        label::before {
          border-color: ${props => getPaletteColor('success.base')(props)};
        }
      }
    `;
  }
};

/**
 * @param props {Object}
 * @return {string[]}
 */
const checkboxRadioInValid = props => {
  if (props.invalid) {
    return css`
      && {
        ${'' /* Change the color of the label to the danger. */}
        input[type="radio"]:invalid ~ label,
        input[type="checkbox"]:invalid ~ label,
        input[type="radio"] ~ label,
        input[type="checkbox"] ~ label {
          color: ${props => getPaletteColor('danger.base')(props)};
        }
        ${'' /* Change the border & background color to the danger. */}
        input[type="radio"]:invalid:checked ~ label::before,
         input[type="checkbox"]:invalid:checked ~ label::before,
         input[type="radio"]:checked ~ label::before,
         input[type="checkbox"]:checked ~ label::before {
          border-color: ${props => getPaletteColor('danger.base')(props)};
          background-color: ${props => getPaletteColor('danger.base')(props)};
        }
      }
    `;
  }
};

const CustomInput = styled(AbstractCustomInput)`
  ${props => {
    if (props.type === 'checkbox' || props.type === 'radio') {
      return css`
            ${
              '' /* Remember the order: first validation styles then base styles. */
            }
            ${checkboxRadioValid};
            ${checkboxRadioInValid};
             ${'' /* Add this styles on the div `wrapper` */}
            & {
              position: relative;
              display: block;
              min-height: 1.5rem;
              padding-left: 1.5rem;
             ${'' /* Add this styles on the child of the div i.e. input */}
             ${'' /* Hide the original checkbox with opacity 0 */}
             input[type="radio"], 
             input[type="checkbox"] {
                position: absolute;
                left: 0;
                z-index: -1;
                width: 1rem;
                height: 1.5rem;
                opacity: 0;
                 
              ${
                '' /* Checked State: This is the orginal Styling that will show when the checkbox is cheked. */
              }
                :checked ~ label::before {
                  color: ${props => getPaletteColor('text.light')(props)};
                  border-color: ${props =>
                    getPaletteColor('primary.base')(props)};
                  background-color: ${props =>
                    getPaletteColor('primary.base')(props)};
                }
                
                ${
                  '' /* Active State: Before the checked state, active state will trigger. */
                }
                :not(:disabled):active ~ label::before {
                  color: ${props => getPaletteColor('text.light')(props)};
                  border-color: ${props =>
                    getPaletteColor('primary.lightest')(props)};
                  background-color: ${props =>
                    getPaletteColor('primary.lightest')(props)};
              }
             
                  ${
                    '' /* Disabled State for Label: Also change color of the label When disabled attribute is addedd */
                  }
                   [disabled] ~ label,
                   :disabled ~ label {
                      color: #ddd;
                    }
                  
                  ${'' /* Disabled State for Dummy box */}
                    [disabled] ~ label::before,
                    :disabled ~ label::before {
                      background-color: #fbfbfb;
                 }
            }
              
           ${'' /* Add this styles on the child of the div i.e. label */}
            label {
               position: relative;
               margin-bottom: 0;
               vertical-align: top;
               cursor: pointer;
                  ${'' /* This is our default dummy box. */}
                  ::before {
                  position: absolute;
                  top: 0.25rem;
                  left: -1.5rem;
                  display: block;
                  width: 1rem;
                  height: 1rem;
                  content: "";
                  background-color: #f1f1f1;
                  border: 1px solid #f1f1f1;
                  ${'' /* Only for Radio */}
                  ${props =>
                    props.type === 'radio' &&
                    css`
                      border-radius: 50%;
                    `}
                  }
            }
            svg {
                 position: absolute;
                 top: .25rem;
                 left: -1.5rem;
                 display: block;
                 width: 1rem;
                 height: 1rem;
                 transform: scale(0);
                 transition: transform .09s ease-in-out;
                 color: #fff;
            }
            
            input[type="checkbox"]:checked ~ label > svg,
            input[type="radio"]:checked ~ label > svg {
               transform: scale(.6);
            }
            
            input[type="checkbox"]:disabled:checked ~ label::before,
            input[type="radio"]:disabled:checked ~ label::before {
               border-color: ${props =>
                 getPaletteColor('primary.base')(props)};  
               background-color: ${rgba(
                 getPaletteColor('primary.base')(props),
                 0.5
               )};
           }
        `;
    }
  }};
`;

export default CustomInput;
