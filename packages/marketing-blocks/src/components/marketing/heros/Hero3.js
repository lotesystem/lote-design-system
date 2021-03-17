import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { rem } from 'polished';
import { Container, Button, Text } from '@lote-design-system/core';

// => Dependent styled-components
// Our main component depends upon the following styled-components

/**
 * Returns the bgAttachment value
 * @param attachment {boolean} - The attachment parameter
 * @return {string} - Returns the value
 */
const getAttachmentVal = attachment => (attachment ? 'fixed' : 'scroll');

const BackgroundImage = styled.div`
  ${({ bgImage, bgAttachment, invert }) => {
    // Default `inverted` is undefined, so dark layer will render
    if (invert) {
      return css`
        background-image: linear-gradient(
            180deg,
            rgba(255, 255, 255, 1) 0%,
            rgba(255, 255, 255, 0) 100%
          ),
          linear-gradient(
            to bottom,
            rgba(0, 0, 0, 0) 0%,
            rgba(0, 0, 0, 0.5) 100%
          ),
          url(${bgImage});
        background-position: center center;
        background-repeat: no-repeat;
        background-attachment: ${getAttachmentVal(bgAttachment)};
        background-color: #f8f8f8;
        background-size: cover;
      `;
    } else {
      return css`
        position: relative;
        background: url(${bgImage}) no-repeat center center
          ${getAttachmentVal(bgAttachment)} #f8f8f8;
        background-size: cover;
        &:before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: rgba(0, 0, 0, 0.55);
        }
      `;
    }
  }};
`;

const HeroBody = styled.div`
  padding: ${rem(192)} 0;
  flex-grow: 1;
  flex-shrink: 0;
  align-items: center;
  display: flex;
`;

const ContainerModify = styled(Container)`
  max-width: ${({ theme }) => theme.maxContainerWidth};
  text-align: center;
  flex-grow: 1;
  flex-shrink: 1;
  margin: 0 auto;
  position: relative;
  width: auto;
`;

const HeroTitle = styled(Text)`
  max-width: 992px;
  margin: 0 auto ${rem(16)};
  font-weight: 700;
  line-height: 1.2;
  color: #fff;
  span {
    display: block;
    &:last-child {
      color: ${({ theme: { colors } }) => colors.primary};
    }
  }
`;

const HeroDescription = styled.p`
  color: #fff;
  max-width: 660px;
  margin: 0 auto ${rem(16)};
  font-size: 20px;
`;

const HeroLinkWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`;

const HeroLink = styled(Button)`
  & {
    padding: ${rem(16)} ${rem(48)};
    font-weight: 500;
    display: block;
    width: 100%;
    margin: 8px;
  }
  ${({ theme }) => theme.mediaQueries.sm} {
    width: auto;
    display: inline-block;
  }
`;

// <= End Dependent styled-components

const linkSchema = [
  {
    id: 1,
    href: '/signin',
    text: 'Signup',
    variation: 'whiteSecondary'
  },
  {
    id: 2,
    href: '/signup',
    text: 'Signin',
    variation: 'fill'
  }
];

const linkShape = {
  id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  href: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  variation: PropTypes.string.isRequired,
  color: PropTypes.string
};

const propTypes = {
  /** The Major words for the hero section. */
  majorWords: PropTypes.string.isRequired,
  /** The Minor words for the hero section. */
  minorWords: PropTypes.string.isRequired,
  /** The description for the hero section. */
  description: PropTypes.string.isRequired,
  /** The link below the description. */
  links: PropTypes.arrayOf(PropTypes.shape(linkShape)).isRequired,
  /** It src for the background-image. */
  backgroundImageSource: PropTypes.string.isRequired,
  /** The background-attachment sets whether a background image scrolls with the
      rest of the page, or is fixed.*/
  backgroundImageAttachment: PropTypes.bool,
  /** Add layers will make your background image darker or whiter. */
  inverted: PropTypes.bool
};

const defaultProps = {
  majorWords: 'Web Design Platform',
  minorWords: 'for All Creatives',
  description:
    'When you design with us, every stroke gets code generated ready to go live. CMS, IDE and Analytics are integrated for seamless customizations. Cross-team collaboration is built along every step.',
  links: linkSchema,
  backgroundImageSource:
    'https://images.unsplash.com/photo-1433838552652-f9a46b332c40',
  backgroundImageAttachment: true,
  inverted: true
};

export const Hero3 = props => {
  const {
    majorWords,
    minorWords,
    description,
    links,
    backgroundImageSource,
    backgroundImageAttachment,
    inverted,
    ...attributes
  } = props;

  return (
    <BackgroundImage
      bgImage={backgroundImageSource}
      bgAttachment={backgroundImageAttachment}
      invert={inverted}
      {...attributes}
    >
      <HeroBody>
        <ContainerModify fluid>
          <HeroTitle fSize={64}>
            <span>{majorWords}</span>
            <span>{minorWords}</span>
          </HeroTitle>

          <HeroDescription>{description}</HeroDescription>

          {Array.isArray(links) && links.length > 0 ? (
            <HeroLinkWrapper>
              {links.map(link => {
                return (
                  <HeroLink
                    key={link.id}
                    href={link.href}
                    color={link.color}
                    variation={link.variation}
                  >
                    {link.text}
                  </HeroLink>
                );
              })}
            </HeroLinkWrapper>
          ) : null}
        </ContainerModify>
      </HeroBody>
    </BackgroundImage>
  );
};

Hero3.propTypes = propTypes;
Hero3.defaultProps = defaultProps;
