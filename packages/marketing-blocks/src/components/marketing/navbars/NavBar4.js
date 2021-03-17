import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
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

const NavBarMenu = styled.div`
  flex-basis: 100%;
  ${'' /* breaks the justify-content: space-between property */}
  flex-grow: 1;
  align-items: center;

  ${({ theme }) => theme.mediaQueries.lg} {
    display: flex;
    flex-basis: auto;
    flex-grow: 1;
  }

  @media (max-width: 991px) {
    display: block;
    position: absolute;
    top: 0;

    width: calc(100% - 64px);
    transform-origin: top right;
    background-color: #fff;
    box-shadow: ${({ theme }) => theme.boxShadows.md};
    border-radius: 4px;
    transform: scale(0.95);
    opacity: 0;
    visibility: hidden;
    transition: visibility 0s, transform 0.1s cubic-bezier(0, 0, 0.2, 1),
      opacity 0.1s cubic-bezier(0, 0, 0.2, 1);

    ${props =>
      props.active
        ? css`
            opacity: 1;
            visibility: visible;
            transform: scale(1);
          `
        : css``}
  }
`;

const NavBarCloseWrapper = styled.div`
  display: none;

  @media (max-width: 991px) {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    padding: 8px 12px;

    > div {
      display: flex;
      flex: 1 0 0;
    }

    > div:last-child {
      justify-content: flex-end;
    }
  }
`;

const NavBarMobileBrand = styled.a`
  color: ${({ theme: { colors } }) => colors.primary};
  display: inline-flex;
  align-items: center;
  padding: ${rem(4)} 0;
  white-space: nowrap;
  > svg,
  > img {
    width: 56px;
    height: 56px;
  }
`;

const NavBarMobileCloseButton = styled(Button)`
  width: 46px;
  height: 46px;
  padding: ${rem(4)};
  border-radius: 50%;
  font-size: 18px;
`;

const NavBarStart = styled.ul`
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

const NavBarStartLink = styled.a`
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

const NavBarStartItem = styled.li`
  ${props =>
    props.active
      ? css`
          > ${NavBarStartLink} {
            color: ${({ theme: { colors } }) => colors.primary};
          }
        `
      : css``}

  @media (max-width: 991px) {
    :last-child > ${NavBarStartLink} {
      margin-top: 12px;
      text-align: center;
      transition: background-color 0.4s linear, border-color 0.4s linear,
        color 0.4s linear;

      color: ${props => props.theme.colors.text.primary};
      background-color: #f8f9fa;
      border-color: #f8f9fa;
      &:hover {
        color: ${props => props.theme.colors.text.primary};
        background-color: #e2e6ea;
        border-color: #e2e6ea;
      }
      &:not(:disabled):active {
        color: ${props => props.theme.colors.text.primary};
        background-color: #dae0e5;
        border-color: #dae0e5;
      }
    }
  }
`;
// <= End Dependent styled-components

const linkShape = {
  id: PropTypes.number.isRequired,
  href: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  active: PropTypes.bool
};

const linkSchema = [
  { id: 1, href: '/', text: 'Home', active: true },
  { id: 2, href: '/', text: 'Features' },
  { id: 3, href: '/', text: 'Pricing' },
  { id: 4, href: '/', text: 'Services' },
  { id: 5, href: '/', text: 'About Us' }
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
  /** Links appear on the NavBar, same links also render on the Drawer. */
  links: PropTypes.arrayOf(PropTypes.shape(linkShape)).isRequired
};

const defaultProps = {
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
 * Render schema for the NavBar
 * @param data {Array} - Schema for the NavBar
 * @return {null|*} - Returns the JSX or null
 */
const renderBody = data => {
  if (Array.isArray(data) && data.length > 0) {
    return (
      <NavBarStart>
        {data.map(({ id, href, text, active }) => (
          <NavBarStartItem key={id} active={active}>
            <NavBarStartLink href={href}>{text}</NavBarStartLink>
          </NavBarStartItem>
        ))}
      </NavBarStart>
    );
  } else {
    return null;
  }
};

export const NavBar4 = props => {
  const { styledCSS, fixed, sticky, logo: Logo, links, ...attributes } = props;

  const [visibleMenu, setVisibleMenu] = useState(false);

  const showMenu = () => {
    setVisibleMenu(!visibleMenu);
  };

  const onClose = () => {
    setVisibleMenu(false);
  };

  return (
    <NavBar styled={styledCSS} fixed={fixed} sticky={sticky} {...attributes}>
      <NavBarContainer fluid>
        {/* Logo */}
        <NavBarBrand href="/">{renderLogo(Logo)}</NavBarBrand>
        {/*  Button Toggle */}
        <NavBarButtonToggler
          basic
          variation="fill"
          color="primary"
          active={visibleMenu}
          onClick={showMenu}
        >
          {visibleMenu ? <Icon name="x" /> : <Icon name="menu" />}
        </NavBarButtonToggler>

        {/*  Menu */}
        <NavBarMenu active={visibleMenu}>
          <NavBarCloseWrapper>
            <div>
              {/* Logo */}
              <NavBarMobileBrand href="/">{renderLogo(Logo)}</NavBarMobileBrand>
            </div>

            <div>
              <NavBarMobileCloseButton
                basic
                variation="lightTransparent"
                onClick={onClose}
              >
                <Icon name="x" />
              </NavBarMobileCloseButton>
            </div>
          </NavBarCloseWrapper>
          {/*  Render content schema  */}
          {renderBody(links)}
        </NavBarMenu>
      </NavBarContainer>
    </NavBar>
  );
};

NavBar4.propTypes = propTypes;
NavBar4.defaultProps = defaultProps;
