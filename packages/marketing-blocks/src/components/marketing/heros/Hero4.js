import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { rem } from 'polished';
import { Container, Button, Text } from '@lote-design-system/core';

// => Dependent styled-components
// Our main component depends upon the following styled-components

const VideoContainer = styled.div`
  position: relative;
  ${({ overlay }) => {
    if (overlay && overlay.show) {
      return css`
        &:before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          z-index: 1;
          background-color: ${overlay.backgroundColor};
        }
      `;
    }
  }};
`;

const Video = styled.video`
  position: absolute;
  object-fit: cover;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const HeroBody = styled.div`
  z-index: 2;
  position: relative;
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

/**
 * A function that returns the inverted color for the text
 * @param mode {boolean} - Associated mode
 * @return {string[]} - Returns the inverted styles
 */
const invertedTextStyles = mode => {
  if (mode) {
    return css`
      color: #fff;
    `;
  } else {
    return css`
      color: rgba(0, 0, 0, 0.85);
    `;
  }
};

const Titles = styled.div`
  ${({ inverted }) => invertedTextStyles(inverted)};
`;

const HeroTitle = styled(Text)`
  max-width: 992px;
  margin: 0 auto ${rem(16)};
  font-weight: 700;
  line-height: 1.2;
  span {
    display: block;
    &:last-child {
      color: ${({ theme: { colors } }) => colors.primary};
    }
  }
`;

const HeroDescription = styled.p`
  ${({ inverted }) => invertedTextStyles(inverted)};
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

const videoSchema = {
  src: 'https://static.videezy.com/system/resources/previews/000/018/159/original/herbst-version2.mp4',
  muted: true, // fixes autoplay in chrome
  autoPlay: true,
  loop: true, // not working https://github.com/facebook/react/issues/10389
  playsInline: true // fixes autoplay in webkit (ie. mobile safari)
};

const videoShape = PropTypes.shape({
  src: PropTypes.string.isRequired,
  muted: PropTypes.bool,
  autoPlay: PropTypes.bool,
  loop: PropTypes.bool,
  playsInline: PropTypes.bool
});

const overlayShape = {
  show: PropTypes.bool.isRequired,
  backgroundColor: PropTypes.string
};

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
  /** It will render the the video element on the hero. */
  video: videoShape,
  /** This will darken or lighten your major text. */
  invertedText: PropTypes.bool,
  /** Add overlay on the top of the video. */
  overlay: PropTypes.shape(overlayShape)
};

const defaultProps = {
  majorWords: 'Web Design Platform',
  minorWords: 'for All Creatives',
  description:
    'When you design with us, every stroke gets code generated ready to go live. CMS, IDE and Analytics are integrated for seamless customizations. Cross-team collaboration is built along every step.',
  links: linkSchema,
  video: videoSchema,
  invertedText: true,
  overlay: {
    show: false,
    backgroundColor: 'rgba(0, 0, 0, .85)'
  }
};

export const Hero4 = props => {
  const {
    majorWords,
    minorWords,
    description,
    links,
    video,
    invertedText,
    overlay,
    ...attributes
  } = props;
  // Video properties from the video object
  const { src, ...videoAttr } = video;
  return (
    <VideoContainer overlay={overlay} {...attributes}>
      <Video {...videoAttr}>
        <source src={src} type="video/mp4" />
      </Video>
      <HeroBody>
        <ContainerModify fluid>
          <HeroTitle fSize={64}>
            <Titles inverted={invertedText}>
              <span>{majorWords}</span>
              <span>{minorWords}</span>
            </Titles>
          </HeroTitle>

          <HeroDescription inverted={invertedText}>
            {description}
          </HeroDescription>

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
    </VideoContainer>
  );
};

Hero4.propTypes = propTypes;
Hero4.defaultProps = defaultProps;
