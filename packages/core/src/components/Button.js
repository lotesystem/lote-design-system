import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import {
  space,
  width
} from 'styled-system';
import { props as styledSystemProps } from '@styled-system/should-forward-prop';
import { tagPropType, omit, getPaletteColor, applyVariations, BtnMd, BtnLg, BtnSm } from './utils';

const propTypes = {
  /** A button can show it is currently the active user selection. */
  active: PropTypes.bool,
  /** A button can take the width of its container. */
  block: PropTypes.bool,
  /** A button can have different colors. */
  color: PropTypes.string,
  /** The button variation change look and feel. */
  variation: PropTypes.oneOf(['fill', 'outline', 'link', 'transparent', 'white', 'primarySubtle', 'light', 'lightTransparent', 'whiteSecondary']),
  /** A button can show it is currently unable to be interacted with.
   Note: `disabled` is the global HTML Attribute. */
  disabled: PropTypes.bool,
  /** A basic button is less pronounced. It will render the button
   * with minimum styles. It will also work with variations. */
  basic: PropTypes.bool,
  /** It will render the button without any base styles. It will also work with variations. */
  noBase: PropTypes.bool,
  /** An element type to render as (string or function). */
  tag: tagPropType,
  /** Called after user's click. */
  onClick: PropTypes.func,
  /** A button can have different sizes. */
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  /** Primary content. */
  children: PropTypes.node,
  /** Additional classes. */
  className: PropTypes.string
};

const defaultProps = {
  tag: 'button'
};

const AbstractButton = (props) => {
  // Destructure properties because we don't want to render these props
  // on underlying DOM element
  let {
    active,
    block,
    color,
    variation,
    basic,
    noBase,
    size,
    tag: Tag,
    ...attributes
  } = props;

  // Remove `styled-system` props from the `attributes` object. We don't want to
  // render these props on the underlying DOM element. But, render on the
  // styled-component class.
  const attr = omit(attributes, styledSystemProps);

  const onClick = (e) => {
    if (props.disabled) {
      e.preventDefault();
      return;
    }

    if (props.onClick) {
      props.onClick(e);
    }
  };

  if (attributes.href && Tag === 'button') {
    Tag = 'a';
  }
  return (
    <Tag
      type={Tag === 'button' && attributes.onClick ? 'button' : undefined}
      {...attr}
      onClick={onClick}
    />
  );
};

AbstractButton.propTypes = propTypes;
AbstractButton.defaultProps = defaultProps;

/**
 * @param props {Object}
 * @return {Object}
 */
const size = (props) => {
  switch (props.size) {
    case 'sm':
      return css`
                 ${BtnSm};
              `;
    case 'lg':
      return css`
                  ${BtnLg};
              `;
    default:
      return css`
                   ${BtnMd};
              `;
  }
};

/**
 * @param props {Object}
 * @return {Object}
 */
const block = (props) => {
  if (props.block) {
    return {
      display: 'block',
      width: '100%',
    };
  } else {
    return {
      display: 'inline-block',
    };
  }
};

const variations = {
  // fill variation
  // The getPaletteColor function will automatically take a shade of `base` for BgColor, borderColor and color.
  fill: css`
        color: ${(props) => getPaletteColor('text.light')(props)};
        background-color: ${(props) => getPaletteColor('base')(props)};
        border-color: ${(props) => getPaletteColor('base')(props)};
        &:hover {
        color: ${(props) => getPaletteColor('text.light')(props)};
        background-color: ${(props) => getPaletteColor('light')(props)};
        border-color: ${(props) => getPaletteColor('light')(props)};
        }
        &:disabled {
        color: ${(props) => getPaletteColor('text.light')(props)};
        background-color: ${(props) => getPaletteColor('base')(props)};
        border-color: ${(props) => getPaletteColor('base')(props)};
        }
        &:not(:disabled):active {
        color: ${(props) => getPaletteColor('text.light')(props)};
        background-color: ${(props) => getPaletteColor('dark')(props)};
        border-color: ${(props) => getPaletteColor('dark')(props)};
        }
        ${props => props.active ? css`
          ${'' /* // Generate separate class and remove these styles when disabled prop is added */}
            &:not(:disabled) {
              color: ${(props) => getPaletteColor('text.light')(props)};
              background-color: ${(props) => getPaletteColor('dark')(props)};
              border-color: ${(props) => getPaletteColor('dark')(props)};}` : css``}
  `,
  outline: css`
        color: ${(props) => getPaletteColor('base')(props)};
        border-color: ${(props) => getPaletteColor('base')(props)};
        &:hover {
        color: ${(props) => getPaletteColor('text.light')(props)};
        background-color: ${(props) => getPaletteColor('base')(props)};
        border-color: ${(props) => getPaletteColor('base')(props)};
        }
       &:disabled {
        color: ${(props) => getPaletteColor('base')(props)};
        background-color: transparent;
        }
        &:not(:disabled):active {
        color: ${(props) => getPaletteColor('text.light')(props)};
        background-color: ${(props) => getPaletteColor('dark')(props)};
        border-color: ${(props) => getPaletteColor('dark')(props)};
        }
        ${props => props.active ? css`
             ${'' /* // Generate separate class and remove these styles when disabled prop is added */}
             &:not(:disabled) {
              color: ${(props) => getPaletteColor('text.light')(props)};
              background-color: ${(props) => getPaletteColor('dark')(props)};
              border-color: ${(props) => getPaletteColor('dark')(props)};}`
      : css``}
  `,
  link: css`
    font-weight: 400;
    color: ${(props) => getPaletteColor('base')(props)};
    text-decoration: none;
    &:hover {
    color: ${(props) => getPaletteColor('dark')(props)};
    text-decoration: underline;
    }
    &:focus {
      text-decoration: underline;
    }
    &:disabled {
      color: ${(props) => getPaletteColor('base')(props)};
      pointer-events: none;
    }
  `,
  transparent: css`
        color: ${(props) => getPaletteColor('base')(props)};
        &:hover {
        color: ${(props) => getPaletteColor('light')(props)};
        }
        &:disabled {
         color: ${(props) => getPaletteColor('base')(props)};
        }
        &:not(:disabled):active {
         color: ${(props) => getPaletteColor('dark')(props)};
        }
        ${props => props.active ? css`
          ${'' /* // Generate separate class and remove these styles when disabled prop is added */}
            &:not(:disabled) {
            color: ${(props) => getPaletteColor('dark')(props)};
              }` : css``}
  `,
  white: css`
        color: ${(props) => props.theme.colors.secondary};
        background-color: ${(props) => props.theme.colors.white};
        border-color: ${(props) => props.theme.colors.white};
        &:hover {
        color: ${(props) => props.theme.colors.white};
        background-color: ${(props) => props.theme.colors.secondary};
        border-color: ${(props) => props.theme.colors.secondary};
        }
        &:disabled {
        color: ${(props) => props.theme.colors.secondary};
        background-color: ${(props) => props.theme.colors.white};
        border-color: ${(props) => props.theme.colors.white};
        }
        &:not(:disabled):active {
        color: ${(props) => props.theme.colors.white};
        background-color: ${(props) => getPaletteColor('secondary', 'dark')(props)};
        border-color: ${(props) => getPaletteColor('secondary', 'dark')(props)};
        }
        ${props => props.active ? css`
          ${'' /* // Generate separate class and remove these styles when disabled prop is added */}
            &:not(:disabled) {
               color: ${(props) => props.theme.colors.white};
               background-color: ${(props) => getPaletteColor('secondary', 'dark')(props)};
               border-color: ${(props) => getPaletteColor('secondary', 'dark')(props)};
              }` : css``}
  `,
  primarySubtle: css`
        color: ${(props) => getPaletteColor('primary', 'base')(props)};
        background-color: ${(props) => getPaletteColor('primary', 'lightest')(props)};
        border-color: ${(props) => getPaletteColor('primary', 'lightest')(props)};
        &:hover {
        color: ${(props) => props.theme.colors.white};
        background-color: ${(props) => getPaletteColor('primary', 'base')(props)};
        border-color: ${(props) => getPaletteColor('primary', 'base')(props)};
        }
        &:disabled {
        color: ${(props) => getPaletteColor('primary', 'base')(props)};
        background-color: ${(props) => getPaletteColor('primary', 'lightest')(props)};
        border-color: ${(props) => getPaletteColor('primary', 'lightest')(props)};
        }
        &:not(:disabled):active {
        color: ${(props) => props.theme.colors.white};
        background-color: ${(props) => getPaletteColor('primary', 'dark')(props)};
        border-color: ${(props) => getPaletteColor('primary', 'dark')(props)};
        }
        ${props => props.active ? css`
          ${'' /* // Generate separate class and remove these styles when disabled prop is added */}
            &:not(:disabled) {
               color: ${(props) => props.theme.colors.white};
                background-color: ${(props) => getPaletteColor('primary', 'dark')(props)};
                border-color: ${(props) => getPaletteColor('primary', 'dark')(props)};
              }` : css``}
  `,
  light: css`
        color: ${(props) => props.theme.colors.text.primary};
        background-color: #f8f9fa;
        border-color: #f8f9fa;
        &:hover {
        color: ${(props) => props.theme.colors.text.primary};
        background-color: #e2e6ea;
        border-color: #e2e6ea;
        }
        &:disabled {
         color: ${(props) => props.theme.colors.text.primary};
         background-color: #f8f9fa;
         border-color: #f8f9fa;
        }
        &:not(:disabled):active {
         color: ${(props) => props.theme.colors.text.primary};
         background-color: #dae0e5;
         border-color: #dae0e5;
        }
        ${props => props.active ? css`
          ${'' /* // Generate separate class and remove these styles when disabled prop is added */}
            &:not(:disabled) {
               color: ${(props) => props.theme.colors.text.primary};
               background-color: #dae0e5;
               border-color: #dae0e5;
              }` : css``}
  `,
  lightTransparent: css`
        color: ${(props) => props.theme.colors.text.primary};
        background-color: transparent;
        border-color: transparent;
        &:hover {
        color: ${(props) => props.theme.colors.text.primary};
        background-color: #e2e6ea;
        border-color: #e2e6ea;
        }
        &:disabled {
         color: ${(props) => props.theme.colors.text.primary};
         background-color: transparent;
         border-color: transparent;
        }
        &:not(:disabled):active {
         color: ${(props) => props.theme.colors.text.primary};
         background-color: #dae0e5;
         border-color: #dae0e5;
        }
        ${props => props.active ? css`
          ${'' /* // Generate separate class and remove these styles when disabled prop is added */}
            &:not(:disabled) {
               color: ${(props) => props.theme.colors.text.primary};
               background-color: #dae0e5;
               border-color: #dae0e5;
              }` : css``}
  `,
  whiteSecondary: css`
        color: ${(props) => getPaletteColor('secondary', 'base')(props)};
        background-color: ${(props) => props.theme.colors.white};
        border-color: rgba(0 ,0, 0, 0.15);
        &:hover {
        color: ${(props) => props.theme.colors.white};
        background-color: ${(props) => getPaletteColor('secondary', 'base')(props)};
        border-color: ${(props) => getPaletteColor('secondary', 'base')(props)};
        }
        &:disabled {
         color: ${(props) => getPaletteColor('secondary', 'base')(props)};
        background-color: ${(props) => props.theme.colors.white};
        border-color: rgba(0 ,0, 0, 0.15);
        }
        &:not(:disabled):active {
          color: ${(props) => props.theme.colors.white};
          background-color: ${(props) => getPaletteColor('secondary', 'dark')(props)};
          border-color: ${(props) => getPaletteColor('secondary', 'dark')(props)};
        }
        ${props => props.active ? css`
          ${'' /* // Generate separate class and remove these styles when disabled prop is added */}
            &:not(:disabled) {
              color: ${(props) => props.theme.colors.white};
              background-color: ${(props) => getPaletteColor('secondary', 'dark')(props)};
              border-color: ${(props) => getPaletteColor('secondary', 'dark')(props)};
              }` : css``}
  `
};

const Button = styled(AbstractButton)`
   ${'' /* Styles are added based on the prop */}
  ${(props) => {
    if (props.noBase) {
      return css``;
    } else if (props.basic) {
      return css`
        padding: 0;
        background-color: transparent;
        border: 0;
        appearance: none;
        transition: background-color 0.4s linear, border-color 0.4s linear,
          color 0.4s linear;
        &:focus {
          outline: 0;
        }
      `;
    } else {
      return css`
        ${size};
        ${block};
        font-weight: 400;
        color: ${({ theme }) => theme.colors.text.title};
        text-align: center;
        vertical-align: middle;
        cursor: pointer;
        user-select: none;
        background-color: transparent;
        border: 1px solid transparent;
        transition: background-color 0.4s linear, border-color 0.4s linear,
          color 0.4s linear;
        &:hover {
          text-decoration: none;
        }
        &:focus {
          outline: 0;
        }
        &:disabled {
          opacity: 0.65;
        }
      `;
    }
  }}
    ${applyVariations('Button', variations)};
	${space};
	${width};
`;

Button.propTypes = propTypes;
Button.defaultProps = {
  color: 'primary',
  variation: 'fill',
  tag: 'button'
};

Button.displayName = 'Button';

export default Button;
