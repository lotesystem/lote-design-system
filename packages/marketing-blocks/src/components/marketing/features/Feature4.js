import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Icon } from '@lote-design-system/icons';
import { Container, Row, Column } from '@lote-design-system/core';

// => Dependent styled-components
// Our main component depends upon the following styled-components
const Feature = styled.section`
  padding: 48px 16px;

  ${({ theme }) => theme.mediaQueries.sm} {
    padding: 64px 32px;
  }

  ${({ theme }) => theme.mediaQueries.md} {
    padding-top: 96px;
    padding-bottom: 96px;
  }
`;

const FeatureHeader = styled.div`
  text-align: center;
  margin-bottom: 48px;

  ${({ theme }) => theme.mediaQueries.md} {
    margin-bottom: 64px;
  }
`;

const FeatureContainer = styled(Container)`
  max-width: ${({ theme }) => theme.maxContainerWidth};
`;

const FeatureTitle = styled.p`
  font-size: 18px;
  color: ${({ theme: { colors } }) => colors.primary};
  font-weight: 400;
  margin-bottom: 4px;
`;

const FeatureSubtitle = styled.h1`
  font-size: 40px;
  font-weight: 700;
  color: ${({ theme: { colors } }) => colors.text.title};
  margin-bottom: 8px;
`;

const FeatureDescription = styled.p`
  margin: 0 auto 16px;
  max-width: 720px;
  font-size: 16px;
  color: ${({ theme: { colors } }) => colors.text.primary};
`;

const FeatureBody = styled.div``;

const ColumnModify = styled(Column)`
  margin-bottom: 64px;
`;

const CardFeature = styled.div`
  position: relative;

  display: flex;

  flex-direction: column;
  min-width: 0;

  word-wrap: break-word;
  background-color: #fff;
  background-clip: border-box;
`;

const CardFeatureBody = styled.div`
  display: flex;
`;

const CardFeatureIconWrapper = styled.div`
  flex: 0 0 auto;
  margin-right: 16px;
`;

const CardFeatureSvgWrapper = styled.div`
  width: 60px;
  height: 60px;
  background-color: ${({ theme: { colors } }) => colors.primary};
  color: #fff;
  ${'' /* 4px */}
  border-radius: 0.25rem;
  display: inline-flex;
  justify-content: center;
  align-items: center;

  > svg {
    width: 25px;
    height: 25px;
  }
`;

const CardFeatureContent = styled.div`
  flex: 1 1 auto;
  text-align: left;
`;

const CardHeading = styled.h1`
  font-size: 18px;
  font-weight: 500;
  margin-bottom: 4px;
  color: ${({ theme: { colors } }) => colors.text.title};
`;

const CardDescription = styled.p`
  font-size: 14px;
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
  /** The description for the feature section. */
  description: PropTypes.string.isRequired,
  /** An array of features. */
  features: PropTypes.arrayOf(PropTypes.shape(featureShape)).isRequired
};

const defaultProps = {
  title: 'Our Features',
  subtitle: 'Awesome features of our Tools',
  description:
    'We believe brand interaction is key in communication. Real innovations and a positive customer experience are the heart of successful communication.',
  features: featureSchema
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
        <FeatureContainer fluid>
          <Row>
            {data.map(feature => {
              return (
                <ColumnModify key={feature.id} lg={6}>
                  <CardFeature>
                    <CardFeatureBody>
                      <CardFeatureIconWrapper>
                        <CardFeatureSvgWrapper>
                          {renderIcon(feature.icon)}
                        </CardFeatureSvgWrapper>
                      </CardFeatureIconWrapper>
                      <CardFeatureContent>
                        <CardHeading>{feature.title}</CardHeading>
                        <CardDescription>{feature.description}</CardDescription>
                      </CardFeatureContent>
                    </CardFeatureBody>
                  </CardFeature>
                </ColumnModify>
              );
            })}
          </Row>
        </FeatureContainer>
      </FeatureBody>
    );
  } else {
    return null;
  }
};

export const Feature4 = props => {
  const { title, subtitle, description, features, ...attributes } = props;

  return (
    <Feature {...attributes}>
      <FeatureHeader>
        <FeatureContainer fluid>
          <FeatureTitle>{title}</FeatureTitle>
          <FeatureSubtitle>{subtitle}</FeatureSubtitle>
          <FeatureDescription>{description}</FeatureDescription>
        </FeatureContainer>
      </FeatureHeader>

      {/*  Features */}
      {renderBody(features)}
    </Feature>
  );
};

Feature4.propTypes = propTypes;
Feature4.defaultProps = defaultProps;
