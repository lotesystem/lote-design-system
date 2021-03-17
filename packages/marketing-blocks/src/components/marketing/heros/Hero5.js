import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import {
  Container,
  Row,
  Column,
  Button,
  Text
} from '@lote-design-system/core';
import { Hero4PolygonSvg } from '../svg';

// => Dependent styled-components
// Our main component depends upon the following styled-components

const Hero = styled.div``;

const ColumnFirst = styled(({ simple, ...rest }) => (
  <Column {...rest} lg={6} />
))`
  margin-bottom: 32px;
  ${({ theme }) => theme.mediaQueries.lg} {
    ${({ simple }) => {
      if (!simple) {
        return css`
          padding-right: 0;
        `;
      }
    }}
    margin-bottom: 0;
  }
`;

const ColumnSecond = styled(({ simple, ...rest }) => (
  <Column {...rest} lg={6} />
))`
  margin-bottom: 32px;
  ${({ theme }) => theme.mediaQueries.lg} {
    padding-right: 0;
    ${({ simple }) => {
      if (!simple) {
        return css`
          padding-left: 0;
        `;
      }
    }}
    margin-bottom: 0;
  }
`;

const JumboTron = styled.div`
  position: relative;
  ${'' /* It should be greater than svg */}
  z-index: 10;
  padding-top: 128px;

  ${({ theme }) => theme.mediaQueries.sm} {
    text-align: center;
  }

  ${({ theme }) => theme.mediaQueries.lg} {
    text-align: left;
    padding-top: 196px;
    padding-bottom: 196px;
    max-width: 690px;
    margin-left: auto;
  }
`;

const JumboTronTitle = styled(Text)`
  max-width: 620px;
  margin-top: 0;
  margin-bottom: 16px;
  color: ${({ theme: { colors } }) => colors.secondary};
  font-weight: 700;
  line-height: 1.2;
  span {
    color: ${({ theme: { colors } }) => colors.primary};
  }
  ${({ theme }) => theme.mediaQueries.sm} {
    margin-left: auto;
    margin-right: auto;
  }

  ${({ theme }) => theme.mediaQueries.lg} {
    margin-left: 0;
    margin-right: 0;
  }
`;

const JumboTronDescription = styled.p`
  max-width: 560px;
  margin-top: 0;
  margin-bottom: 32px;

  color: ${({ theme: { colors } }) => colors.text.primary};
  font-weight: 400;
  font-size: 18px;

  ${({ theme }) => theme.mediaQueries.sm} {
    margin-left: auto;
    margin-right: auto;
  }

  ${({ theme }) => theme.mediaQueries.lg} {
    margin-left: 0;
    margin-right: 0;
  }
`;

const JumboTronLink = styled(Button)`
  padding: 12px 30px;
  font-size: 20px;
  margin-bottom: 16px;

  display: block;
  width: 100%;

  ${({ theme }) => theme.mediaQueries.sm} {
    display: inline-block;
    width: auto;

    :first-child {
      margin-right: 16px;
    }
  }
`;

const JumboTronSvgWrapper = styled.div`
  > svg {
    display: none;
  }

  ${({ theme }) => theme.mediaQueries.lg} {
    > svg {
      display: block;
      position: absolute;
      z-index: -10;
      top: 0;
      bottom: 0;
      right: 0;
      width: 196px;
      transform: translateX(50%);
      color: #fff;
    }
  }
`;

const BackgroundImage = styled.div`
  ${({ bgSrc }) => {
    if (bgSrc) {
      return css`
        background-image: url('${bgSrc}');
      `;
    }
  }};
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  background-color: #f7f7f7;
  height: 300px;
  ${({ theme }) => theme.mediaQueries.lg} {
    height: 100%;
  }
`;

// <= End Dependent styled-components

const linkSchema = [
  {
    id: 1,
    href: '/signin',
    text: 'Get Started',
    variation: 'fill'
  },
  {
    id: 2,
    href: '/signup',
    text: 'Signup',
    variation: 'primarySubtle'
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
  description: PropTypes.oneOfType([PropTypes.string, PropTypes.node])
    .isRequired,
  /** Place the image url on the `img` element. */
  src: PropTypes.string.isRequired,
  /** The link below the description. */
  links: PropTypes.arrayOf(PropTypes.shape(linkShape)).isRequired,
  /** It will remove the slanted polygon. */
  simple: PropTypes.bool
};

const description = (
  <span>
    Website building is chaotic. Across <strong>teams</strong>, there are design{' '}
    <strong>apps</strong>, coding editors, prototyping tools, tickets, style
    guides. When you design with our tool, every stroke gets code generated
    ready to go live. <strong>CMS</strong>, <strong>IDE</strong> and
    <strong> Analytics</strong> are integrated for seamless customizations.
    Cross-team collaboration is built along every step. Go from
    all-over-the-place handoffs, to building cozily hands-on.
  </span>
);

const defaultProps = {
  majorWords: 'Web Design Platform',
  minorWords: 'for All Creatives',
  description: description,
  src: 'https://i.imgur.com/crDFOzg.jpg',
  links: linkSchema,
  simple: false
};

export const Hero5 = props => {
  const {
    majorWords,
    minorWords,
    description,
    src,
    links,
    simple,
    ...attributes
  } = props;

  return (
    <Hero {...attributes}>
      <Container fluid>
        <Row>
          <ColumnFirst simple={simple}>
            <JumboTron>
              <JumboTronTitle fSize={60}>
                {majorWords} <span>{minorWords}</span>
              </JumboTronTitle>
              <JumboTronDescription>{description}</JumboTronDescription>

              {Array.isArray(links) && links.length > 0 ? (
                <div>
                  {links.map(link => {
                    return (
                      <JumboTronLink
                        key={link.id}
                        href={link.href}
                        color={link.color}
                        variation={link.variation}
                      >
                        {link.text}
                      </JumboTronLink>
                    );
                  })}
                </div>
              ) : null}

              {/* Here render polygon */}
              {!simple && (
                <JumboTronSvgWrapper>
                  <Hero4PolygonSvg />
                </JumboTronSvgWrapper>
              )}
            </JumboTron>
          </ColumnFirst>

          <ColumnSecond simple={simple}>
            <BackgroundImage bgSrc={src} />
          </ColumnSecond>
        </Row>
      </Container>
    </Hero>
  );
};

Hero5.propTypes = propTypes;
Hero5.defaultProps = defaultProps;
