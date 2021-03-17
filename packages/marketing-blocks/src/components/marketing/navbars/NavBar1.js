import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled, { css, keyframes } from 'styled-components';
import { rem } from 'polished';
import { LogoDefault } from '../svg';
import { Icon } from '@lote-design-system/icons';
import { Container, Button, useWindowSize } from '@lote-design-system/core';

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

// This container is very important component for the Nav aligning
const ContainerModify = styled(Container)`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  ${'' /* Remember this is a very important property if you remove it your NavBarStart, NavBarEnd and BurgerButton
  will not display left of even right side of the bar. */}
  justify-content: space-between;
  max-width: ${({ theme }) => theme.maxContainerWidth};
`;

const NavBarBrand = styled.a`
  display: inline-flex;
  align-items: center;
  padding: ${rem(4)} 0;
  white-space: nowrap;
  > svg,
  > img {
    width: 56px;
    height: 56px;
  }
}}`;

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

const navbarOverlayOpacity = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const NavBarPlate = styled.div`
  ${'' /* Default NavBarPlate will be disabled on Mobile devices. */}
  display: none;
  ${'' /* NavBarPlate will be enabled on Desktop devices. */}
  ${({ theme }) => theme.mediaQueries.lg} {
    display: flex;
    align-items: center;
  }

  @media (max-width: 991px) {
    display: block;
    position: fixed;
    z-index: ${({ zIndex }) => zIndex};
    width: 0;
    height: 100%;
    transition: transform 0.4s linear, height 0s ease 0.4s, width 0s ease 0.4s;
    top: 0;
    ${props => {
      if (props.placement === 'left') {
        return {
          left: 0
        };
      } else if (props.placement === 'right') {
        return {
          right: 0
        };
      }
    }}

    ${props =>
      props.visible &&
      css`
        width: 100%;
        transition: transform 0.4s linear;
        ${NavBarOverlay} {
          height: 100%;
          opacity: 1;
          transition: none;
          animation: ${navbarOverlayOpacity} 0.4s linear;
        }

        ${NavBarMenu} {
          visibility: visible;
          ${props => {
            if (props.placement === 'left') {
              return {
                transform: 'translateX(100%)'
              };
            } else if (props.placement === 'right') {
              return {
                transform: 'translateX(-100%)'
              };
            }
          }}
        }
      `}
  }
`;

const NavBarOverlay = styled.div`
  @media (max-width: 991px) {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 0;
    opacity: 0;
    transition: opacity 0.4s linear, height 0s ease 0.4s;
    background-color: rgba(0, 0, 0, 0.7);
  }
`;

// NavBarMenu is important component because all placement of links depend upon this.
const NavBarMenu = styled.div`
  ${'' /* Styling for the NavBarMenu will be disabled on Desktop devices. */}
  ${({ theme }) => theme.mediaQueries.lg} {
    display: flex;
    align-items: center;
  }

  @media (max-width: 991px) {
    ${({ theme, placement }) => {
      if (placement === 'left') {
        return {
          boxShadow: theme.shadowSide.right,
          right: '100%'
        };
      } else if (placement === 'right') {
        return {
          boxShadow: theme.shadowSide.left,
          left: '100%'
        };
      }
    }};
    position: fixed;
    ${({ w }) => {
      if (typeof w === 'number') {
        return css`
          width: ${w}px;
        `;
      } else if (typeof w === 'string') {
        return css`
          width: ${w};
        `;
      } else {
        return css`
          width: ${w}px;
        `;
      }
    }};
    height: 100%;
    background-color: #ffffff;
    overflow-y: auto;
    visibility: hidden;
    transition: transform 0.2s linear, visibility 0.2s linear;
  }
`;

const NavBarHeader = styled.div`
  display: none;

  @media (max-width: 991px) {	
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    border-bottom: 1px solid #f8f8f8;
    ${({ hasTitle, hasClosable }) => {
      if (hasTitle && hasClosable) {
        return css`
          justify-content: space-between;
          padding: ${rem(8)} ${rem(18)};
        `;
      } else if (hasTitle && !hasClosable) {
        return css`
          padding: ${rem(18)};
        `;
      } else if (!hasTitle && hasClosable) {
        return css`
          justify-content: flex-end;
          padding: ${rem(8)} ${rem(18)};
        `;
      }
    }}
`;

const NavBarText = styled.span`
  font-size: ${rem(16)};
  font-weight: 500;
  color: ${({ theme: { colors } }) => colors.text.title};
`;

const NavBarCloseButton = styled(Button)`
  width: 46px;
  height: 46px;
  padding: ${rem(4)};
  font-size: ${rem(18)};
`;

// NavBarEnd Section i.e. unordered list display on the right side
// =================================================================

// Anchor
const NavBarEndLink = styled.a`
  font-size: ${rem(14)};
  color: ${({ theme: { colors } }) => colors.text.primary};
  display: block;
  font-weight: 500;
  padding: ${rem(8)} ${rem(16)};
  transition: color 0.4s linear;
  &:hover {
    color: ${({ theme: { colors } }) => colors.primary};
  }
`;

// Button
const NavBarEndLinkButton = styled(Button)`
  font-weight: 500;
  margin: ${rem(8)};
  @media (max-width: 991px) {
    display: block;
  }
`;

// ListItem
const NavBarEndItem = styled.li`
  ${props =>
    props.active &&
    css`
      > ${NavBarEndLink} {
        color: ${({ theme: { colors } }) => colors.primary};
      }
    `};
`;

// Unordered List
const NavBarEnd = styled.ul`
  ${'' /* These styles will appear on both Desktop & Mobile devices. */}
  ${
    '' /* But the bottom padding property will be only applied on Mobile Devices.
          Basically, It will add the padding on the list container. */
  }
  padding: ${rem(14)};
  margin-bottom: 0;
  list-style: none;
  
  ${({ theme }) => theme.mediaQueries.lg} {
    padding: 0;
    flex-direction: row;
    display: flex;
    align-items: center;
  }
`;

// End =================================
// <= End Dependent styled-components

const linkShape = {
  id: PropTypes.number.isRequired,
  type: PropTypes.oneOf(['link', 'button']).isRequired,
  href: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  active: PropTypes.bool,
  variation: PropTypes.string,
  color: PropTypes.string
};

const linkSchema = [
  { id: 1, type: 'link', href: '/', text: 'Home', active: true },
  { id: 2, type: 'link', href: '/', text: 'Features' },
  { id: 3, type: 'link', href: '/', text: 'Pricing' },
  { id: 4, type: 'link', href: '/', text: 'Services' },
  { id: 5, type: 'link', href: '/', text: 'About Us' },
  {
    id: 6,
    type: 'button',
    href: '/',
    text: 'Get Started',
    variation: 'primarySubtle'
  }
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
  /** Whether a close (X) button is visible on top right of the Drawer dialog or not. */
  closable: PropTypes.bool,
  /** Whether to show mask or not. */
  mask: PropTypes.bool,
  /** Clicking on the mask (area outside the Drawer) to close the Drawer or not. */
  maskClosable: PropTypes.bool,
  /** The title of the Drawer. */
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  /** Width of the Drawer dialog. */
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /** The z-index of the Drawer. */
  zIndex: PropTypes.number,
  /** The placement of the Drawer. */
  placement: PropTypes.oneOf(['right', 'left']),
  /** The logo appear on the NavBar, default it will be ui-kit logo. */
  logo: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  /** Links appear on the NavBar, same links also render on the Drawer. */
  links: PropTypes.arrayOf(PropTypes.shape(linkShape)).isRequired
};

const defaultProps = {
  closable: true,
  mask: true,
  maskClosable: true,
  width: 256,
  zIndex: 1000,
  placement: 'right',
  logo: <LogoDefault fill="#01a1ff" />,
  links: linkSchema
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
 * Render overlay mask on the back of the Drawer.
 * @param state {boolean} - Updated value of the state
 * @param mask {boolean} - Whether to show mask or not
 * @param maskClosable {boolean} - Clicking on the mask to close the Drawer or not
 * @param onClose {function} - A function that will be called when a user clicks mask
 * @return {null|*} - Returns the JSX or null
 */
const renderMask = (state, mask, maskClosable, onClose) => {
  if (mask) {
    if (state) {
      document.body.style.position = 'relative';
      document.body.style.overflow = 'hidden';
      document.body.style.width = `calc(${100}% - ${17}px)`;
    } else {
      document.body.style.position = '';
      document.body.style.overflow = '';
      document.body.style.width = '';
    }
    if (maskClosable) {
      return <NavBarOverlay onClick={onClose} />;
    } else {
      return <NavBarOverlay />;
    }
  } else {
    return null;
  }
};

/**
 * Render header on the Drawer
 * @param title {*|string} - The title of the Drawer
 * @param closable {boolean} - Whether a close (X) button is visible on top right of the Drawer dialog or not
 * @param onClose {function} -  A function that will be called when a user clicks the close button
 * @return {null|*} - Returns the JSX or null
 */
const renderHeader = (title, closable, onClose) => {
  // If title is undefined & closeable is undefined then render nothing, else render deterministic elements
  if (!title && !closable) {
    return null;
  } else {
    return (
      <NavBarHeader hasTitle={!!title} hasClosable={!!closable}>
        {title && <NavBarText>{title}</NavBarText>}
        {closable && (
          <NavBarCloseButton
            type="button"
            basic
            variation="lightTransparent"
            onClick={onClose}
          >
            <Icon name="x" />
          </NavBarCloseButton>
        )}
      </NavBarHeader>
    );
  }
};

/**
 * Render schema for the NavBar
 * @param data {Array} - Schema for the NavBar
 * @return {null|*} - Returns the JSX or null
 */
const renderBody = data => {
  if (Array.isArray(data) && data.length > 0) {
    return (
      <NavBarEnd>
        {data.map(({ id, type, href, text, active, variation, color }) => (
          <NavBarEndItem key={id} active={active}>
            {type === 'link' ? (
              <NavBarEndLink href={href}>{text}</NavBarEndLink>
            ) : (
              <NavBarEndLinkButton
                href={href}
                variation={variation}
                color={color}
              >
                {text}
              </NavBarEndLinkButton>
            )}
          </NavBarEndItem>
        ))}
      </NavBarEnd>
    );
  } else {
    return null;
  }
};

export const NavBar1 = props => {
  const { innerWidth } = useWindowSize();
  const {
    styledCSS,
    fixed,
    sticky,
    closable,
    mask,
    maskClosable,
    title,
    width,
    zIndex,
    logo: Logo,
    links,
    placement,
    ...attributes
  } = props;

  const [visibleDrawer, setVisibleDrawer] = useState(false);

  const showDrawer = () => {
    setVisibleDrawer(!visibleDrawer);
  };
  // This will be used inside the Drawer header, close button & MaskOverlay
  const onClose = () => {
    setVisibleDrawer(false);
  };

  // Always make sure the Drawer don't show up on the big screen size,
  // so the state will always be false.
  useEffect(() => {
    if (innerWidth > 991) {
      setVisibleDrawer(false);
    }
  }, [innerWidth]);

  return (
    <NavBar styled={styledCSS} fixed={fixed} sticky={sticky} {...attributes}>
      <ContainerModify fluid>
        {/* Logo */}
        <NavBarBrand href="/">{renderLogo(Logo)}</NavBarBrand>
        {/*  Button Toggle */}
        <NavBarButtonToggler
          basic
          variation="fill"
          color="primary"
          active={visibleDrawer}
          onClick={showDrawer}
        >
          {visibleDrawer ? <Icon name="x" /> : <Icon name="menu" />}
        </NavBarButtonToggler>
        {/*  Plate */}
        <NavBarPlate
          visible={visibleDrawer}
          placement={placement}
          zIndex={zIndex}
        >
          {/*	 Overlay */}
          {renderMask(visibleDrawer, mask, maskClosable, onClose)}
          {/*	 Menu */}
          <NavBarMenu w={width} placement={placement}>
            {/*	 Header */}
            {renderHeader(title, closable, onClose)}
            {/*  Render content schema  */}
            {renderBody(links)}
          </NavBarMenu>
        </NavBarPlate>
      </ContainerModify>
    </NavBar>
  );
};

NavBar1.propTypes = propTypes;
NavBar1.defaultProps = defaultProps;
