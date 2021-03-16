import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { space, fontSize } from 'styled-system';
import Label from './Label';
import FormFeedback from './FormFeedback';
import {
  getPaletteColor,
  tagPropType,
  InputLg,
  InputMd,
  InputSm
} from './utils';

const propTypes = {
  /** Primary content. */
  children: PropTypes.node,
  /**
   * type can be things like text, password, (typical input types) as well as select and textarea,
   * providing children as you normally would to those.
   */
  type: PropTypes.string,
  /** An Input can have different sizes. */
  inputSize: PropTypes.oneOf(['sm', 'md', 'lg']),
  /** Input field may display a success state. */
  valid: PropTypes.bool,
  /** Input field may display an error state. */
  invalid: PropTypes.bool,
  /** Remove the default form field styling and preserve the correct margin and padding. */
  plaintext: PropTypes.bool,
  /** If the addon is true then don't render any Input styles. */
  addon: PropTypes.bool,
  /** An element type to render as (string or function). */
  tag: tagPropType,
  /** Additional classes. */
  className: PropTypes.string
};

const defaultProps = {
  type: 'text'
};

const AbstractInput = props => {
  // Destructure properties because we don't want to render these props
  // on underlying DOM element
  const {
    className,
    type,
    inputSize,
    valid,
    invalid,
    tag,
    addon,
    plaintext,
    ...attributes
  } = props;

  // We have to change the tag only on these 2 cases, otherwise, we don't need this.
  // For textarea
  const textareaInput = type === 'textarea';
  // For select
  const selectInput = type === 'select';

  // Change the `tag` only if the `type` would be `select` and `textarea`. otherwise, the tag would be
  // rendered as an `input.`
  let Tag = tag || (selectInput || textareaInput ? type : 'input');

  // If the user pass the plaintext prop or tag is undefined then default string is true and
  // `input` tag will assign
  if (plaintext) {
    Tag = tag || 'input';
  }

  // ----------------------------------------------------------------

  // From the above check `Tag` variable has a value
  // then please create the new property `type` on the attributes object which will be
  // `type` of our element and render on the DOM
  if (Tag === 'input' || (tag && typeof tag === 'function')) {
    attributes.type = type;
  }

  // Remember according to default HTML Standards <input /> is a single element and cannot have children.
  // so we have to check this. The select tag has a children i.e. <option> element. We have to make sure
  // if user pass the prop `plaintext` then we have to also remove the children.
  if (
    attributes.children &&
    !(
      plaintext ||
      type === 'select' ||
      typeof Tag !== 'string' ||
      Tag === 'select'
    )
  ) {
    delete attributes.children;
  }

  return <Tag {...attributes} className={className} />;
};

AbstractInput.propTypes = propTypes;
AbstractInput.defaultProps = defaultProps;

/**
 * @param props {Object}
 * @return {string[]}
 */
const inputSize = props => {
  switch (props.inputSize) {
    case 'sm':
      return css`
        & {
          ${InputSm};
        }
        ${props =>
          props.plaintext &&
          css`
            & {
              padding-left: 0;
              padding-right: 0;
            }
          `}
      `;
    case 'lg':
      return css`
        & {
          ${InputLg};
        }
        ${props =>
          props.plaintext &&
          css`
            & {
              padding-left: 0;
              padding-right: 0;
            }
          `}
      `;
    default:
      return css``;
  }
};

/**
 * @param props {Object}
 * @return {string[]}
 */
const validFormControl = props => {
  const main = css`
    border-color: ${props => getPaletteColor('success.base')(props)};
    padding-right: calc(1.5em + 0.75rem);
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12 12'%3E%3Cpath d='M6 0a6 6 0 106 6 6 6 0 00-6-6zm0 1.16A4.84 4.84 0 111.16 6 4.84 4.84 0 016 1.16m3.39 3.15l-.54-.55a.3.3 0 00-.41 0L5 7.15 3.57 5.7a.29.29 0 00-.41 0l-.55.55a.3.3 0 000 .41l2.19 2.2a.29.29 0 00.41 0l4.18-4.14a.3.3 0 000-.41z' fill='%2352c41a'/%3E%3C/svg%3E");
    background-repeat: no-repeat;
    background-position: right calc(0.375em + 0.1875rem) center;
    background-size: calc(0.75em + 0.375rem) calc(0.75em + 0.375rem);
    background-color: #fff;
  `;

  if (props.valid) {
    return css`
      & {
        ${main}
      }
      &:invalid {
        ${main};
      }
      &:invalid:focus,
      &:focus {
        border-color: ${props => getPaletteColor('success.base')(props)};
      }

      textarea&:valid,
      textarea& {
        padding-right: calc(1.5em + 0.75rem);
        background-position: top calc(0.375em + 0.1875rem) right
          calc(0.375em + 0.1875rem);
      }

      select&:valid,
      select& {
        padding-right: calc(0.75em + 2.3125rem);
        background-position: center right 1.75rem;
      }

      & ~ ${FormFeedback} {
        display: block;
      }
    `;
  }
};

/**
 * @param props {Object}
 * @return {string[]}
 */
const invalidFormControl = props => {
  const main = css`
    border-color: ${props => getPaletteColor('danger.base')(props)};
    padding-right: calc(1.5em + 0.75rem);
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12 12'%3E%3Cpath d='M6 0a6 6 0 106 6 6 6 0 00-6-6zm0 10.84A4.84 4.84 0 1110.84 6 4.84 4.84 0 016 10.84zM8.46 4.5L7 6l1.5 1.5a.29.29 0 010 .42l-.54.54a.29.29 0 01-.42 0L6 7 4.5 8.46a.29.29 0 01-.42 0l-.54-.54a.29.29 0 010-.42L5 6 3.54 4.5a.29.29 0 010-.42l.54-.54a.29.29 0 01.42 0L6 5l1.5-1.5a.29.29 0 01.42 0l.54.54a.29.29 0 010 .42z' fill='%23f5222d'/%3E%3C/svg%3E");
    background-repeat: no-repeat;
    background-position: right calc(0.375em + 0.1875rem) center;
    background-size: calc(0.75em + 0.375rem) calc(0.75em + 0.375rem);
    background-color: #fff;
  `;

  if (props.invalid) {
    return css`
      & {
        ${main}
      }
      &:invalid {
        ${main};
      }
      &:invalid:focus,
      &:focus {
        border-color: ${props => getPaletteColor('danger.base')(props)};
      }

      textarea&:invalid,
      textarea& {
        padding-right: calc(1.5em + 0.75rem);
        background-position: top calc(0.375em + 0.1875rem) right
          calc(0.375em + 0.1875rem);
      }

      select&:invalid,
      select& {
        padding-right: calc(0.75em + 2.3125rem);
        background-position: center right 1.75rem;
      }

      & ~ ${FormFeedback} {
        display: block;
      }
    `;
  }
};

/**
 * @param props {Object}
 * @return {string[]}
 */
const validFormCheck = props => {
  if (props.valid) {
    return css`
      &:valid,
      ~ ${Label}, & ~ ${Label} {
        color: ${props => getPaletteColor('success.base')(props)};
      }
      & ~ ${FormFeedback} {
        display: block;
      }
    `;
  } else {
    return css``;
  }
};

/**
 * @param props {Object}
 * @return {string[]}
 */
const invalidFormCheck = props => {
  if (props.invalid) {
    return css`
      &:invalid,
      ~ ${Label}, & ~ ${Label} {
        color: ${props => getPaletteColor('danger.base')(props)};
      }
      & ~ ${FormFeedback} {
        display: block;
      }
    `;
  } else {
    return css``;
  }
};

/**
 * @return {string[]}
 */
const base = () => {
  return css`
    /* Render these styles for type text select textarea */
    display: block;
    width: 100%;
    ${InputMd};
    font-weight: 400;
    transition: background-color 0.4s linear, color 0.4s linear,
      border-color 0.4s linear, box-shadow 0.4s linear;
    color: ${({ theme }) => theme.colors.text.title};
    background-color: #f1f1f1;
    border: 2px solid transparent;

    ${'' /* IE10+ */} ::-ms-expand {
      background-color: transparent;
      border: 0;
    }

    ${'' /* Firefox */} :-moz-focusring {
      color: transparent;
    }

    ${'' /* Focus state */} :focus {
      background-color: #fff;
      border-color: ${props => getPaletteColor('primary.base')(props)};
      outline: 0;
    }

    ${'' /* Placeholder */} ::placeholder {
      color: ${({ theme }) => theme.colors.text.secondary};
      opacity: 1;
    }

    ${'' /* Disable and for readonly attribute */} :disabled,
    &[readonly] {
      background-color: #e9ecef;
      opacity: 1;
      ${'' /* This is not necessary if your Input is not using border effects on focus state. */}
      &:focus {
        border-color: #e9ecef;
      }
    }

    input[type='date']&,
    input[type='time']&,
    input[type='datetime-local']&,
    input[type='month']& {
      appearance: none;
    }

    ${'' /* Select Focus on the IE10+ */}
    select&:focus::-ms-value {
      color: ${({ theme }) => theme.colors.text.title};
      background-color: #fff;
    }

    ${'' /* Select with attribute "size" and "multiple" */}
    select&[size], select&[multiple] {
      height: auto;
    }

    textarea& {
      height: auto;
    }
    ${inputSize};
    ${validFormControl};
    ${invalidFormControl};
  `;
};

export const Input = styled(AbstractInput)`
  ${props => {
    if (props.plaintext) {
      return css`
        & {
          display: block;
          width: 100%;
          padding: 6px 0;
          margin-bottom: 0;
          font-size: 16px;
          line-height: 1.5;
          color: ${({ theme }) => theme.colors.text.title};
          background-color: transparent;
          border: 1px solid transparent;
          &:focus {
            outline: 0;
          }
        }
        ${inputSize};
      `;
    } else if (props.type === 'file' || props.type === 'range') {
      return css`
        & {
          display: block;
          width: 100%;
          &:focus {
            outline: 0;
          }
        }
      `;
    } else if (props.addon) {
      return css``;
    } else if (props.type === 'checkbox' || props.type === 'radio') {
      return css`
        & {
          position: absolute;
          margin-top: 0.3rem;
          margin-left: -1.25rem;
          &[disabled] ~ ${Label}, &:disabled ~ ${Label} {
            color: #6c757d;
          }
        }
        ${validFormCheck};
        ${invalidFormCheck};
      `;
    } else {
      return css`
        & {
          ${base};
        }
      `;
    }
  }};
  ${space};
  ${fontSize};
`;

Input.propTypes = propTypes;
Input.defaultProps = defaultProps;

export default Input;
