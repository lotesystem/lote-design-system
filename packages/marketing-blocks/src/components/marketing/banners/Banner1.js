import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { Transition } from 'react-transition-group';
import { Icon } from '@lote-design-system/icons';
import { Container, Button } from '@lote-design-system/core';
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
        top: 24px;
        right: 0;
        left: 0;
      `;
    } else if (fixed === 'bottom') {
      return css`
        right: 0;
        bottom: 24px;
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

const ContainerModify = styled(Container)`
  max-width: ${({ theme }) => theme.maxContainerWidth};
`;

const Banner = styled.div`
  border-radius: 4px;
  background-color: ${({ theme: { colors } }) => colors.primary};
  padding: 16px 24px;
`;

const BannerContent = styled.div`
  ${({ theme }) => theme.mediaQueries.lg} {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

const BannerSide1 = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 16px;

  ${({ theme }) => theme.mediaQueries.md} {
    justify-content: center;
  }

  ${({ theme }) => theme.mediaQueries.lg} {
    justify-content: flex-start;
    margin-bottom: 0;
  }
`;

const BannerIconWrapper = styled.div`
  margin-right: 16px;
`;

const BannerSvgWrapper = styled.div`
  width: 42px;
  height: 42px;
  background-color: ${({ theme }) => theme.palettes.primary[6]};
  color: #fff;
  border-radius: 0.25rem;
  display: inline-flex;
  justify-content: center;
  align-items: center;

  > svg {
    width: 24px;
    height: 24px;
  }
`;

const BannerText = styled.p`
  font-size: 16px;
  margin-bottom: 0;
  color: #fff;
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

const BannerLearnLink = styled(Button)`
  font-weight: 500;
  margin-right: 16px;
`;

const BannerCloseButton = styled(Button)`
  width: 46px;
  height: 46px;
  padding: 4px;
  border-radius: 50%;
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
  /** The icon will appear on the left side of the Banner.  */
  icon: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  /** The link for the Banner. */
  link: PropTypes.shape({
    href: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    variation: PropTypes.string.isRequired,
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
  icon: <Icon name="download" />,
  link: {
    href: '/',
    text: 'Learn more',
    variation: 'white'
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

export const Banner1 = props => {
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
            <ContainerModify fluid>
              <Banner>
                <BannerContent>
                  <BannerSide1>
                    {icon && (
                      <BannerIconWrapper>
                        <BannerSvgWrapper>{renderIcon(icon)}</BannerSvgWrapper>
                      </BannerIconWrapper>
                    )}
                    <BannerText>{text}</BannerText>
                  </BannerSide1>

                  <BannerSide2>
                    {link && (
                      <BannerLearnLink
                        href={link.href}
                        color={link.color}
                        variation={link.variation}
                      >
                        {link.text}
                      </BannerLearnLink>
                    )}
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
            </ContainerModify>
          </BannerWrapper>
        );
      }}
    </Transition>
  );
};

Banner1.propTypes = propTypes;
Banner1.defaultProps = defaultProps;
