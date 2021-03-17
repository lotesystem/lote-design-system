import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { Transition } from 'react-transition-group';
import { Icon } from '@lote-design-system/icons';
import { Button } from '@lote-design-system/core';
import { omit, pick } from 'lodash';

// => Dependent styled-components
// Our main component depends upon the following styled-components

const BannerWrapper = styled.div`
  ${({ status }) => {
    if (status === 'entered') {
      return css`
        & {
          opacity: 1;
        }
      `;
    } else if (status === 'exited') {
      return css`
        & {
          display: none;
        }
      `;
    }
  }}
  ${({ fixed }) => {
    if (fixed === 'top') {
      return css`
        position: fixed;
        top: 0;
        right: 0;
        left: 0;
      `;
    } else if (fixed === 'bottom') {
      return css`
        right: 0;
        bottom: 0;
        left: 0;
      `;
    } else {
      return css``;
    }
  }};
  position: fixed;
  z-index: 1030;
  opacity: 0;
  transition: opacity ${({ timeout }) => timeout / 1000}s linear;
`;

const Banner = styled.div`
  background-color: ${({ theme: { colors } }) => colors.primary};
  padding: 8px 24px;
`;

const BannerContent = styled.div`
  ${({ theme }) => theme.mediaQueries.md} {
    display: flex;
    align-items: center;
  }
`;

const BannerText = styled.p`
  color: #fff;
  font-size: 16px;
  margin-bottom: 8px;

  ${({ theme }) => theme.mediaQueries.md} {
    margin-bottom: 0;
    flex-grow: 1;
  }

  ${({ theme }) => theme.mediaQueries.lg} {
    text-align: center;
  }
`;

// Side 2

const BannerSide2 = styled.div`
  ${({ theme }) => theme.mediaQueries.md} {
    text-align: center;
  }

  ${({ theme }) => theme.mediaQueries.lg} {
    display: flex;
    align-items: center;
  }
`;

const BannerLearnLink = styled.a`
  position: relative;
  margin-left: 16px;
  color: #fff;
  span:first-child {
    margin-right: 8px;
  }

  &:after {
    content: '';
    position: absolute;
    width: 100%;
    bottom: -6px;
    left: 0;
    height: 1px;
    background-color: #fff;
    transition: width 0.4s linear;
  }

  &:hover {
    &:after {
      width: 0;
    }
  }
`;

const BannerCloseButton = styled(Button)`
  width: 46px;
  height: 46px;
  padding: 4px;
  font-size: 18px;
`;

// <= End Dependent styled-components

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
  /** If the banner is currently showing or not (default: true) */
  in: PropTypes.bool.isRequired,
  /** The link for the Banner appear on the right side. */
  link: PropTypes.shape({
    href: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    variation: PropTypes.string.isRequired,
    icon: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
    color: PropTypes.string
  }),
  /** The text for the Banner. */
  text: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
  /** Position the banner at the top/bottom of the viewport. The Banner will use position: fixed,
   meaning they’re pulled from the normal flow of the DOM. */
  fixed: PropTypes.oneOf(['top', 'bottom'])
};

const defaultProps = {
  ...Transition.defaultProps,
  /* Transition on the first mount set appear to true. */
  appear: true,
  /* Enable enter transitions. */
  enter: true,
  /* Enable exit transitions. */
  exit: true,
  /** Controls if the banner is currently showing or not (default: true) */
  in: true,
  /* The duration of the transition, in milliseconds. */
  timeout: 900,
  link: {
    href: '/',
    text: 'Learn more',
    variation: 'white',
    icon: <Icon name="arrow-right" />
  },
  text: 'Big news! We’ re excited to announce a brand new product.',
  fixed: 'bottom'
};

/**
 * Returns the JSX or null for the icon.
 * @param icon {*} - The icon will React.element or a string
 * @return {null|*} - Returns the JSX or null
 */
const renderIcon = icon => {
  if (React.isValidElement(icon)) {
    return icon;
  } else if (typeof icon === 'string' && icon.length > 0) {
    return <Icon name={icon} />;
  } else {
    return null;
  }
};

export const Banner3 = props => {
  const { in: show, icon, link, text, fixed, timeout, ...attributes } = props;

  const [fadeIn, setFadeIn] = useState(show);
  const closeBanner = () => setFadeIn(false);

  // pick Transition props
  const transitionProps = pick(attributes, TransitionPropTypeKeys);
  // Remove Transition props
  const attr = omit(attributes, TransitionPropTypeKeys);

  return (
    <Transition {...transitionProps} in={fadeIn} timeout={timeout}>
      {status => {
        return (
          <BannerWrapper
            status={status}
            fixed={fixed}
            timeout={timeout}
            {...attr}
          >
            <Banner>
              <BannerContent>
                <BannerText>
                  <span>{text}</span>
                  {link && (
                    <BannerLearnLink
                      href={link.href}
                      color={link.color}
                      variation={link.variation}
                    >
                      <span>{link.text}</span>
                      <span>{renderIcon(link.icon)}</span>
                    </BannerLearnLink>
                  )}
                </BannerText>
                <BannerSide2>
                  <BannerCloseButton
                    color="primary"
                    variation="fill"
                    type="button"
                    onClick={closeBanner}
                  >
                    <Icon name="x" />
                  </BannerCloseButton>
                </BannerSide2>
              </BannerContent>
            </Banner>
          </BannerWrapper>
        );
      }}
    </Transition>
  );
};

Banner3.propTypes = propTypes;
Banner3.defaultProps = defaultProps;
