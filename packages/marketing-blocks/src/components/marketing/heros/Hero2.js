import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {
  Container,
  Row,
  Column,
  Button,
  Input
} from '@lote-design-system/core';

// => Dependent styled-components
// Our main component depends upon the following styled-components

// This container is very important component for the Nav aligning
const ContainerModify = styled(Container)`
  max-width: ${({ theme }) => theme.maxContainerWidth};
`;

// Hero
const SectionHero = styled.div`
  position: relative;
  padding: 96px 0;
  background-color: ${({ theme }) => theme.colors.white};
`;

const ColumnLeft = styled(Column)`
  text-align: center;
  margin-bottom: 32px;
  ${({ theme }) => theme.mediaQueries.lg} {
    text-align: left;
  }
`;

const ColumnRight = styled(Column)`
  display: none;
  ${({ theme }) => theme.mediaQueries.lg} {
    display: flex;
  }
`;

const JumboTron = styled.div`
  position: relative;
`;

// Heading
const JumboTronH1 = styled.h1`
  font-size: 32px;
  font-weight: 700;
  line-height: 1.2;
  color: ${({ theme }) => theme.colors.text.title};
  margin-bottom: 12px;
  span {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const JumboTronP = styled.p`
  font-size: 16px;
  color: ${({ theme }) => theme.colors.text.title};
  margin-bottom: 18px;
`;

const JumboTronH5 = styled.h5`
  font-size: 18px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.text.title};
  margin-bottom: 12px;
`;

const JumboTronForm = styled.form`
  margin-top: 16px;
`;

// NewsletterGroup
const NewsletterGroup = styled.div`
  > input {
    margin-bottom: 12px;
  }

  ${({ theme }) => theme.mediaQueries.sm} {
    display: flex;
    flex-wrap: wrap;
    align-items: stretch;

    > input {
      flex: 1 1 auto;
      width: 1%;
      margin-bottom: 0;
    }
  }
`;

const GroupAppend = styled.div`
  > button {
    width: 100%;
  }

  ${({ theme }) => theme.mediaQueries.sm} {
    display: flex;
    margin-left: 16px;
  }
`;

const NewsletterButton = styled(Button)`
  font-weight: 700;
`;

// -- End --

const JumboTronTextEnd = styled.span`
  display: block;
  font-size: 16px;
  color: ${({ theme }) => theme.colors.text.primary};
  margin-top: 12px;
  a {
    color: ${({ theme }) => theme.colors.primary};
    text-decoration: underline;
    transition: color 0.4s linear;
    &:hover {
      color: ${({ theme }) => theme.palettes.primary[6]};
    }
  }
`;

const Illustration = styled.div`
  > svg,
  > img {
    display: block;
    max-width: 100%;
    height: auto;
  }
`;

// <= End Dependent styled-components

const propTypes = {
  /** The Major words for the hero section. */
  majorWords: PropTypes.string.isRequired,
  /** The Minor words for the hero section. */
  minorWords: PropTypes.string.isRequired,
  /** The description for the hero section. */
  description: PropTypes.oneOfType([PropTypes.string, PropTypes.node])
    .isRequired,
  /** The newsletter text for the form. */
  newsletterText: PropTypes.string.isRequired,
  /** The input properties for the Newsletter. */
  input: PropTypes.shape({
    placeholder: PropTypes.string.isRequired
  }).isRequired,
  /** The button properties for the Newsletter. */
  button: PropTypes.shape({
    text: PropTypes.string.isRequired,
    variation: PropTypes.string.isRequired,
    color: PropTypes.string
  }).isRequired,
  /** The policy text for the Newsletter. */
  policyText: PropTypes.oneOfType([PropTypes.string, PropTypes.node])
    .isRequired,
  /** The illustration for the hero.  */
  illustration: PropTypes.oneOfType([PropTypes.string, PropTypes.node])
    .isRequired,
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
  majorWords: 'Turn ideas to live web',
  minorWords: 'experiences',
  description: description,
  input: {
    placeholder: 'Enter your email'
  },
  button: {
    text: 'Notify me',
    variation: 'fill'
  },
  newsletterText: "Sign up to get notification when it's ready.",
  policyText: (
    <span>
      We care about the protection of your data. Read{' '}
      <a href="/">Privacy Policy</a>.
    </span>
  ),
  illustration: 'https://i.imgur.com/v4uQCOe.png',
  shift: false
};

/**
 * Returns the JSX or null for the illustration.
 * @param illustration {*} - The illustration will React.element or a path
 * @return {null|*} - Returns the JSX or null
 */
const renderIllustration = illustration => {
  if (React.isValidElement(illustration)) {
    return illustration;
  } else if (typeof illustration === 'string' && illustration.length > 0) {
    return <img src={illustration} alt="Hero illustration" />;
  } else {
    return null;
  }
};

export const Hero2 = props => {
  const {
    majorWords,
    minorWords,
    description,
    input,
    button,
    newsletterText,
    policyText,
    illustration,
    shift,
    ...attributes
  } = props;
  const { placeholder, ...inputMore } = input;
  const { variation, text, color, ...buttonMore } = button;

  const Column1 = (
    <ColumnLeft lg={6}>
      <JumboTron>
        <JumboTronH1>
          {majorWords} <span>{minorWords}</span>
        </JumboTronH1>

        <JumboTronP>{description}</JumboTronP>

        <JumboTronH5>{newsletterText}</JumboTronH5>

        <JumboTronForm method="post">
          <NewsletterGroup>
            <Input
              type="text"
              placeholder={placeholder}
              autoComplete="off"
              {...inputMore}
            />
            <GroupAppend>
              <NewsletterButton
                type="button"
                color={color}
                variation={variation}
                {...buttonMore}
              >
                {text}
              </NewsletterButton>
            </GroupAppend>
          </NewsletterGroup>
        </JumboTronForm>

        <JumboTronTextEnd>{policyText}</JumboTronTextEnd>
      </JumboTron>
    </ColumnLeft>
  );

  const Column2 = (
    <ColumnRight lg={6}>
      <Illustration>{renderIllustration(illustration)}</Illustration>
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

Hero2.propTypes = propTypes;
Hero2.defaultProps = defaultProps;
