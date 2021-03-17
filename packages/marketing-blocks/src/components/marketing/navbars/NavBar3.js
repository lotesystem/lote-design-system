import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Transition } from 'react-transition-group';
import styled, { css } from 'styled-components';
import { pick, omit } from 'lodash';
import { rem } from 'polished';
import { Icon } from '@lote-design-system/icons';
import { Container, Button } from '@lote-design-system/core';
import { LogoDefault } from '../svg';

// => Dependent styled-components
// Our main component depends upon the following styled-components

const NavBar = styled.nav`
  padding: ${rem(16)} 0;
  ${({ fixed }) => {
    if (fixed === 'top') {
      return css`
        position: fixed;
        top: 0;
        right: 0;
        left: 0;
        z-index: 1030;
      `;
    } else if (fixed === 'bottom') {
      return css`
        position: fixed;
        right: 0;
        bottom: 0;
        left: 0;
        z-index: 1030;
      `;
    } else {
      return css``;
    }
  }};
  ${({ sticky }) => {
    if (sticky) {
      return css`
        @supports ((position: -webkit-sticky) or (position: sticky)) {
          position: sticky;
          top: 0;
          z-index: 1020;
        }
      `;
    } else {
      return css``;
    }
  }};
  ${({ styled }) => {
    if (styled) {
      return css`
        & {
          ${styled};
        }
      `;
    }
  }};
`;

const NavBarContainer = styled(Container)`
  max-width: ${({ theme }) => theme.maxContainerWidth};
  position: relative;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
`;

const NavBarBrand = styled.a`
  display: inline-flex;
  align-items: center;
  padding: ${rem(4)} 0;
  white-space: nowrap;
  margin-right: ${rem(64)};
  > svg,
  > img {
    width: 56px;
    height: 56px;
  }

  ${({ theme }) => theme.mediaQueries.lg} {
    display: none;
  }
`;

const NavBarButtonToggler = styled(Button)`
  width: 48px;
  height: 48px;
  padding: ${rem(4)} ${rem(12)};
  display: inline-flex;
  justify-content: center;
  align-items: center;
  ${({ theme }) => theme.mediaQueries.lg} {
    display: none;
  }
`;

/**
 * Returns the styles for the container collapsing.
 * @param timeout {number} - The duration of the transition, in milliseconds.
 * @return {string[]} - These styles will only apply when the container is collapsing.
 */
const collapsingStyles = timeout => {
  return css`
    & {
      position: relative;
      height: 0;
      overflow: hidden;
      transition: height ${timeout / 1000}s ease;
    }
  `;
};

const NavBarMenu = styled.div`
  flex-basis: 100%;
  ${'' /* Breaks the justify-content: space-between property. */}
  flex-grow: 1;
  align-items: center;
  justify-content: space-between;

  ${({ theme }) => theme.mediaQueries.lg} {
    display: flex;
    flex-basis: auto;
  }

  ${({ status, timeout }) => {
    if (status === 'entering') {
      return css`
        ${collapsingStyles(timeout)}
      `;
    } else if (status === 'exiting') {
      return css`
        ${collapsingStyles(timeout)}
      `;
    } else if (status === 'exited') {
      return css`
        display: none;
      `;
    }
  }}
`;

// NavBarList Section i.e. unordered list display on the left side
// =================================================================

// Unordered List
const NavBarList = styled.ul`
  ${'' /* Main properties */}
  display: flex;

  ${'' /* Default it will always vertical */}
  flex-direction: column;

  margin-bottom: 0;
  padding-left: 0;
  list-style: none;

  ${({ theme }) => theme.mediaQueries.lg} {
    flex-direction: row;
  }
`;

// Anchor
const NavBarListLink = styled.a`
  font-size: 14px;
  color: ${({ theme: { colors } }) => colors.text.primary};
  display: block;
  font-weight: 500;
  padding: 8px 16px;
  transition: color 0.4s linear;
  :hover {
    color: ${({ theme: { colors } }) => colors.primary};
  }

  @media (max-width: 991px) {
    padding: 12px 16px;
  }
`;

// ListItem
const NavBarListItem = styled.li`
  ${props =>
    props.active
      ? css`
          > ${NavBarListLink} {
            color: ${({ theme: { colors } }) => colors.primary};
          }
        `
      : css``};
`;

// End =================================

// NavBarCenterBrand
const NavBarCenterBrand = styled.a`
  color: ${({ theme: { colors } }) => colors.primary};
  display: none;
  align-items: center;
  padding: ${rem(4)} 0;
  white-space: nowrap;
  margin-right: ${rem(64)};
  > svg,
  > img {
    width: 56px;
    height: 56px;
  }

  ${({ theme }) => theme.mediaQueries.lg} {
    display: inline-flex;
  }
`;

// <= End Dependent styled-components

const linkShape = {
  id: PropTypes.number.isRequired,
  href: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  active: PropTypes.bool
};

const leftLinkSchema = [
  { id: 1, href: '/', text: 'Home', active: true },
  { id: 2, href: '/', text: 'Features' },
  { id: 3, href: '/', text: 'Pricing' },
  { id: 4, href: '/', text: 'Services' }
];

const rightLinkSchema = [
  { id: 1, href: '/', text: 'Sign in' },
  { id: 2, href: '/', text: 'Sign up' },
  { id: 3, href: '/', text: 'Free Trail' }
];

const TransitionPropTypeKeys = [
  'in',
  'mountOnEnter',
  'unmountOnExit',
  'appear',
  'enter',
  'exit',
  'timeout',
  'onEnter',
  'onEntering',
  'onEntered',
  'onExit',
  'onExiting',
  'onExited'
];

const propTypes = {
  /** Render new styles on the NavBar Container. */
  styledCSS: PropTypes.string,
  /** Position an element at the top/bottom of the viewport, from edge to edge. Fixed NavBars use
   position: fixed, meaning they’re pulled from the normal flow of the DOM and may require
   custom CSS (e.g., padding-top on the <body>) to prevent overlap with other elements. */
  fixed: PropTypes.oneOf(['top', 'bottom']),
  /** Position an element at the top of the viewport, from edge to edge, but only after you scroll past it. */
  sticky: PropTypes.bool,
  /** The logo appear on the NavBar, default it will be ui-kit logo. */
  logo: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  /** Links appear on the left side of the NavBar, same links also render on the Drawer. */
  leftLinks: PropTypes.arrayOf(PropTypes.shape(linkShape)).isRequired,
  /** Links appear on the right side of the NavBar, same links also render on the Drawer. */
  rightLinks: PropTypes.arrayOf(PropTypes.shape(linkShape)).isRequired
};

const defaultProps = {
  ...Transition.defaultProps,
  logo: <LogoDefault fill="#01a1ff" />,
  leftLinks: leftLinkSchema,
  rightLinks: rightLinkSchema,
  /* Transition on the first mount set appear to false. */
  appear: false,
  /* Enable enter transitions. */
  enter: true,
  /* Enable exit transitions. */
  exit: true,
  /* The duration of the transition, in milliseconds. */
  timeout: 350
};

/**
 * Returns the height of the node.
 * @param node {*} - The height of the node you want to get
 * @return {number} - Returns height of the node
 */
const getHeight = node => {
  return node.scrollHeight;
};

/**
 * Returns the JSX or null for the logo.
 * @param logo {*} - The logo will React.element or a path
 * @return {null|*} - Returns the JSX or null
 */
const renderLogo = logo => {
  if (React.isValidElement(logo)) {
    return logo;
  } else if (typeof logo === 'string' && logo.length > 0) {
    return <img src={logo} alt="Brand Logo" />;
  } else {
    return null;
  }
};

/**
 * Render schema for the NavBar
 * @param leftData {Array} - Left side schema for the NavBar
 * @param logo {*} - The logo will React.element or a path
 * @param rightData {Array} - Right side schema for the NavBar
 * @return {null|*}
 */
const renderBody = (leftData, logo, rightData) => {
  if (
    Array.isArray(leftData) &&
    leftData.length > 0 &&
    Array.isArray(rightData) &&
    rightData.length > 0
  ) {
    return (
      <>
        {/*  LeftLinks */}
        <NavBarList>
          {leftData.map(({ id, href, text, active }) => (
            <NavBarListItem key={id} active={active}>
              <NavBarListLink href={href}>{text}</NavBarListLink>
            </NavBarListItem>
          ))}
        </NavBarList>
        {/*  CenterLogo */}
        <NavBarCenterBrand href="/">{renderLogo(logo)}</NavBarCenterBrand>
        {/*  RightLinks */}
        <NavBarList>
          {rightData.map(({ id, href, text, active }) => (
            <NavBarListItem key={id} active={active}>
              <NavBarListLink href={href}>{text}</NavBarListLink>
            </NavBarListItem>
          ))}
        </NavBarList>
      </>
    );
  } else {
    return null;
  }
};

export const NavBar3 = props => {
  const [height, setHeight] = useState(null);

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const {
    styledCSS,
    fixed,
    sticky,
    logo: Logo,
    leftLinks,
    rightLinks,
    ...attributes
  } = props;

  const onEntering = (node, isAppearing) => {
    setHeight(getHeight(node));
    props.onEntering(node, isAppearing);
  };

  const onEntered = (node, isAppearing) => {
    setHeight(null);
    props.onEntered(node, isAppearing);
  };

  const onExit = node => {
    setHeight(getHeight(node));
    props.onExit(node);
  };

  const onExiting = node => {
    // getting this variable triggers a reflow
    const _unused = node.offsetHeight; // eslint-disable-line no-unused-vars
    setHeight(0);
    props.onExiting(node);
  };

  const onExited = node => {
    setHeight(null);
    props.onExited(node);
  };
  // Get the timeout value
  const timeout = attributes.timeout;
  // pick Transition props
  const transitionProps = pick(attributes, TransitionPropTypeKeys);
  // remove Transition props
  const attr = omit(attributes, TransitionPropTypeKeys);

  const heightVal = height === null ? null : height;
  return (
    <NavBar styled={styledCSS} fixed={fixed} sticky={sticky} {...attr}>
      <NavBarContainer fluid>
        {/* Logo */}
        <NavBarBrand href="/">{renderLogo(Logo)}</NavBarBrand>
        {/*  Button Toggle */}
        <NavBarButtonToggler
          basic
          variation="primarySubtle"
          active={isOpen}
          onClick={toggle}
        >
          {isOpen ? <Icon name="x" /> : <Icon name="menu" />}
        </NavBarButtonToggler>

        {/*  Transition component
          When the button is clicked the component will shift to the `'entering'` state and stay there
          for 350ms (the value of `timeout`) before it finally switches to `'entered'`. When `in` is `false`
           the same thing happens except the state moves from `'exiting'` to `'exited'`. */}
        <Transition
          {...transitionProps}
          in={isOpen}
          onEntering={onEntering}
          onEntered={onEntered}
          onExit={onExit}
          onExiting={onExiting}
          onExited={onExited}
        >
          {status => {
            return (
              <NavBarMenu
                status={status}
                timeout={timeout}
                style={{ height: heightVal }}
              >
                {/*  Render content schema  */}
                {renderBody(leftLinks, Logo, rightLinks)}
              </NavBarMenu>
            );
          }}
        </Transition>
      </NavBarContainer>
    </NavBar>
  );
};

NavBar3.propTypes = propTypes;
NavBar3.defaultProps = defaultProps;
