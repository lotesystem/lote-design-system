import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { rem } from 'polished';
import {
  Container,
  Row,
  Column,
  Text,
  Button
} from '@lote-design-system/core';
// => Dependent styled-components
// Our main component depends upon the following styled-components

// This container is very important component for the Nav aligning
const ContainerModify = styled(Container)`
  max-width: ${({ theme }) => theme.maxContainerWidth};
`;

const SectionHero = styled.div`
  position: relative;
  background-color: ${({ theme }) => theme.colors.white};
  padding: 96px 0;
`;

const ColumnLeft = styled(Column)`
  display: flex;
  justify-content: center;
  text-align: center;
  margin-bottom: 32px;
  ${({ theme }) => theme.mediaQueries.lg} {
    justify-content: flex-start;
    text-align: left;
  }
`;

const ColumnRight = styled(Column)`
  display: none;
  ${({ theme }) => theme.mediaQueries.lg} {
    display: flex;
  }
`;

const JumboTron = styled.div``;

// Heading
const JumboTronH1 = styled(Text)`
  font-weight: 700;
  line-height: 1.2;
  color: ${({ theme }) => theme.colors.text.title};
  margin: 0;
`;

const Underline = styled.span`
  background-image: linear-gradient(
    0deg,
    ${({ theme }) => theme.palettes.primary[2]} 0%,
    ${({ theme }) => theme.palettes.primary[2]} 100%
  );
  background-repeat: no-repeat;
  background-size: 100% ${rem(12)};
  background-position: 0 88%;
`;

// Heading End

const JumboTronP = styled.p`
  max-width: 560px;
  font-size: 16px;
  color: ${({ theme }) => theme.colors.text.primary};
  margin: 16px auto;
`;

const JumboTronActions = styled.div`
  margin: 0 -12px;
`;

const JumboTronButton = styled(Button)`
  padding: 16px 64px;
  font-weight: 700;
  font-size: 16px;
  display: block;
  width: 100%;
  margin: 12px;
  ${({ theme }) => theme.mediaQueries.sm} {
    width: auto;
    display: inline-block;
  }
`;

// Base Image
export const Image = styled.img`
  display: block;
  max-width: 100%;
  height: auto;
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
  description: PropTypes.oneOfType([PropTypes.string, PropTypes.node])
    .isRequired,
  /** The links for the hero section. */
  links: PropTypes.arrayOf(PropTypes.shape(linkShape)).isRequired,
  /** The source for the image.  */
  src: PropTypes.string.isRequired,
  /** The columns will move from left to right. */
  shift: PropTypes.bool
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
  links: linkSchema,
  src: 'https://i.imgur.com/PeGpFZu.png',
  shift: false
};

export const Hero1 = props => {
  const {
    majorWords,
    minorWords,
    description,
    links,
    src,
    shift,
    ...attributes
  } = props;

  const Column1 = (
    <ColumnLeft lg={6}>
      <JumboTron>
        <JumboTronH1 fSize={48}>
          <Underline>{majorWords}</Underline>
          <br />
          {minorWords}
        </JumboTronH1>

        <JumboTronP>{description}</JumboTronP>

        {Array.isArray(links) && links.length > 0 ? (
          <JumboTronActions>
            {links.map(link => {
              return (
                <JumboTronButton
                  key={link.id}
                  href={link.href}
                  color={link.color}
                  variation={link.variation}
                >
                  {link.text}
                </JumboTronButton>
              );
            })}
          </JumboTronActions>
        ) : null}
      </JumboTron>
    </ColumnLeft>
  );
  const Column2 = (
    <ColumnRight lg={6}>
      <Image src={src} alt="Hero" />
    </ColumnRight>
  );
  return (
    <SectionHero {...attributes}>
      <ContainerModify fluid>
        <Row>
          {shift ? (
            <>
              {Column2}
              {Column1}
            </>
          ) : (
            <>
              {Column1}
              {Column2}
            </>
          )}
        </Row>
      </ContainerModify>
    </SectionHero>
  );
};

Hero1.propTypes = propTypes;
Hero1.defaultProps = defaultProps;
