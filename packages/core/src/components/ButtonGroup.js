import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import Button from './Button';
import { tagPropType, BtnSm, BtnLg } from './utils';

const propTypes = {
  /** An element type to render as (string or function). */
  tag: tagPropType,
  /** Additional classes. */
  className: PropTypes.string,
  size: PropTypes.string,
  vertical: PropTypes.bool
};

const defaultProps = {
  tag: 'div'
};

const AbstractButtonGroup = props => {
  const { className, size, vertical, tag: Tag, ...attributes } = props;

  return <Tag {...attributes} className={className} />;
};

AbstractButtonGroup.propTypes = propTypes;
AbstractButtonGroup.defaultProps = defaultProps;

/**
 * @return {string[]}
 */
const base = () => {
  return css`
    position: relative;
    display: inline-flex;
    vertical-align: middle;

    & > ${Button} {
      position: relative;
      flex: 1 1 auto;
    }

    & > ${Button}:hover {
      z-index: 1;
    }

    & > ${Button}:focus, & > ${Button}:active, & > ${Button} {
      z-index: 1;
    }
  `;
};

/**
 * @return {string[]}
 */
const size = props => {
  switch (props.size) {
    case 'sm':
      return css`
        & > ${Button} {
          ${BtnSm};
        }
      `;
    case 'lg':
      return css`
        & > ${Button} {
          ${BtnLg};
        }
      `;
    default:
      return css``;
  }
};

const ButtonGroup = styled(AbstractButtonGroup)`
  ${base};
  ${size};

  ${props => {
    if (props.vertical) {
      return css`
          & {
              flex-direction: column;
              align-items: flex-start;
              justify-content: center;
          }
          
          & > ${Button},
          & > & {
            width: 100%;
          }
          
          ${'' /* Apply only on the ButtonGroup with Verical */}
          ${'' /* Logical styles */}
          ${
            '' /* Applied When the Button is not the first child of the parent element ButtonGroup.
                It also works if the ButtonGroup is not the first child of the parent element.
           */
          }
          & > ${Button}:not(:first-child),
          & > &:not(:first-child) {
            margin-top: -1px;
          }
           
          
            ${
              '' /* Applied When the Button is not the last child of the parent element ButtonGroup.
                It also works if the ButtonGroup is not the last child of the parent element.
           */
            }
             & > ${Button}:not(:last-child),
            & > &:not(:last-child) > ${Button} {
            border-bottom-right-radius: 0;
            border-bottom-left-radius: 0;
          }
         
          ${
            '' /* Applied When the Button is not the first child of the parent element ButtonGroup.
                It also works if the ButtonGroup is not the first child of the parent element.
           */
          }
          & > ${Button}:not(:first-child),
          & > &:not(:first-child) > ${Button} {
            border-top-left-radius: 0;
            border-top-right-radius: 0;
        }
       `;
    } else {
      return css`
           
             ${
               '' /* Applied When the Button is not the first child of the parent element ButtonGroup.
                It also works if the ButtonGroup is not the first child of the parent element.
            */
             }
              & > ${Button}:not(:first-child),
              & > &:not(:first-child) {
                margin-left: -1px;
              }
                ${
                  '' /* Applied When the Button is not the last child of the parent element ButtonGroup.
                It also works if the ButtonGroup is not the last child of the parent element.
           */
                }
                & > ${Button}:not(:last-child),
                & > &:not(:last-child) > ${Button} {
                border-top-right-radius: 0;
                border-bottom-right-radius: 0;
              }
              ${
                '' /* Applied When the Button is not the first child of the parent element ButtonGroup.
                It also works if the ButtonGroup is not the first child of the parent element.
            */
              }
              & > ${Button}:not(:first-child),
              & > &:not(:first-child) > ${Button} {
              border-top-left-radius: 0;
              border-bottom-left-radius: 0;
            }
        `;
    }
  }};
`;

ButtonGroup.propTypes = propTypes;
ButtonGroup.defaultProps = defaultProps;

export default ButtonGroup;
