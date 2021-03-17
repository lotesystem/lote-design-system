import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { rem } from 'polished';
import { Icon } from '@lote-design-system/icons';
import { Container, Row, Column } from '@lote-design-system/core';

// => Dependent styled-components
// Our main component depends upon the following styled-components

const ContainerModify = styled(Container)`
  max-width: ${({ theme }) => theme.maxContainerWidth};
`;

const Feature = styled.div`
  padding: ${rem(48)} ${rem(16)};

  ${({ theme }) => theme.mediaQueries.sm} {
    padding: ${rem(64)} ${rem(32)};
  }

  ${({ theme }) => theme.mediaQueries.md} {
    padding-top: ${rem(96)};
    padding-bottom: ${rem(96)};
  }
`;

const FeatureHeader = styled.div`
  text-align: center;
  margin-bottom: ${rem(48)};

  > ${Container} {
    max-width: 640px;
  }

  ${({ theme }) => theme.mediaQueries.md} {
    margin-bottom: ${rem(64)};
  }
`;

const FeatureTitle = styled.p`
  font-size: ${rem(20)};
  color: ${({ theme: { colors } }) => colors.primary};
  font-weight: 400;
  margin-bottom: ${rem(8)};
`;

const FeatureSubtitle = styled.h1`
  position: relative;
  font-size: ${rem(40)};
  font-weight: 700;
  color: ${({ theme: { colors } }) => colors.text.title};
  padding-bottom: ${rem(24)};
  margin-bottom: ${rem(16)};

  ${({ separator }) => {
    if (separator) {
      return css`
        &:before {
          position: absolute;
          content: '';
          height: 4px;
          width: 80px;
          background-color: ${({ theme: { palettes } }) => palettes.primary[0]};

          ${'' /* Bottom */}
          bottom: 0;
          ${'' /* Left */}
          left: 0;

          right: 34px;
          margin: 0 auto;
        }

        &:after {
          position: absolute;
          content: '';
          height: 4px;
          width: 32px;
          background-color: ${({ theme: { palettes } }) => palettes.primary[5]};
          ${'' /* Bottom */}
          bottom: 0;
          ${'' /* Right */}
          right: 0;

          left: 94px;
          margin: 0 auto;
        }
      `;
    }
  }};
`;

const FeatureBody = styled.div``;

// Card

const CardSvgWrapper = styled.div`
  width: 60px;
  height: 60px;
  background-color: ${({ theme: { palettes } }) => palettes.primary[0]};
  color: ${({ theme: { palettes } }) => palettes.primary[5]};
  border-radius: ${rem(4)};
  display: inline-flex;
  justify-content: center;
  align-items: center;
  transition: background-color 0.4s linear, color 0.4s linear;
  > svg {
    width: 25px;
    height: 25px;
  }
`;

const Card = styled.div`
  position: relative;
  display: flex;

  flex-direction: column;
  min-width: 0;

  word-wrap: break-word;
  background-color: #fff;
  background-clip: border-box;
  margin-bottom: ${rem(64)};

  &:hover {
    ${CardSvgWrapper} {
      background-color: ${({ theme: { palettes } }) => palettes.primary[5]};
      color: #fff;
    }
  }
`;

const CardBody = styled.div`
  display: flex;
`;

// First Part
const PartA = styled.div`
  flex: 0 0 auto;
  margin-right: ${rem(16)};
`;

// Second Part

const PartB = styled.div`
  flex: 1 1 auto;
  text-align: left;
`;

const CardHeading = styled.h1`
  font-size: ${rem(18)};
  font-weight: 600;
  margin-bottom: ${rem(4)};
  color: ${({ theme: { colors } }) => colors.text.title};
`;

const CardParagraph = styled.p`
  font-size: ${rem(14)};
  margin-bottom: 0;
  color: ${({ theme: { colors } }) => colors.text.primary};
`;

// <= End Dependent styled-components

const featureSchema = [
  {
    id: 1,
    icon: <Icon name="database" />,
    title: 'Supportive Faster Growth',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is a versatile.'
  },
  {
    id: 2,
    icon: <Icon name="code" />,
    title: 'Blazing Fast',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is a versatile.'
  },
  {
    id: 3,
    icon: <Icon name="clock" />,
    title: 'More Opportunities',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is a versatile.'
  },
  {
    id: 4,
    icon: <Icon name="cast" />,
    title: 'Larger Profits',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is a versatile.'
  },
  {
    id: 5,
    icon: <Icon name="filter" />,
    title: 'Better Customer Service',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is a versatile.'
  },
  {
    id: 6,
    icon: <Icon name="film" />,
    title: 'Huge Revenues',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is a versatile.'
  }
];

const featureShape = {
  id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  icon: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
};

const propTypes = {
  /** The title for the feature section. */
  title: PropTypes.string.isRequired,
  /** The subtitle for the feature section. */
  subtitle: PropTypes.string.isRequired,
  /** An array of features. */
  features: PropTypes.arrayOf(PropTypes.shape(featureShape)).isRequired,
  /** The separator will be displayed at the bottom of the feature section. */
  separator: PropTypes.bool
};

const defaultProps = {
  title: 'Our Features',
  subtitle: 'Awesome features of our Tools',
  features: featureSchema,
  separator: true
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

/**
 * It will render the features of your schema.
 * @param data {Array} - An array of features schema.
 * @return {null|*} - Returns the JSX or null
 */
const renderBody = data => {
  if (Array.isArray(data) && data.length > 0) {
    // We will apply the default styled CSS to each icon, but if
    // the user has written custom CSS, then the old CSS will override
    // wth the new CSS.
    return (
      <FeatureBody>
        <ContainerModify fluid>
          <Row>
            {data.map(feature => {
              return (
                <Column key={feature.id} lg={4}>
                  <Card>
                    <CardBody>
                      <PartA>
                        <CardSvgWrapper>
                          {renderIcon(feature.icon)}
                        </CardSvgWrapper>
                      </PartA>
                      <PartB>
                        <CardHeading>{feature.title}</CardHeading>
                        <CardParagraph>{feature.description}</CardParagraph>
                      </PartB>
                    </CardBody>
                  </Card>
                </Column>
              );
            })}
          </Row>
        </ContainerModify>
      </FeatureBody>
    );
  } else {
    return null;
  }
};

export const Feature3 = props => {
  const { title, subtitle, features, separator, ...attributes } = props;
  return (
    <Feature {...attributes}>
      <FeatureHeader>
        <Container fluid>
          <FeatureTitle>{title}</FeatureTitle>
          <FeatureSubtitle separator={separator}>{subtitle}</FeatureSubtitle>
        </Container>
      </FeatureHeader>
      {/*  Features */}
      {renderBody(features)}
    </Feature>
  );
};

Feature3.propTypes = propTypes;
Feature3.defaultProps = defaultProps;
