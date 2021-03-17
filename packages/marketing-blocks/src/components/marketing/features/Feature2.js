import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import Icon from '@lote-design-system/icons';
import { Container, Row, Column } from '@lote-design-system/core';

// => Dependent styled-components
// Our main component depends upon the following styled-components

const ContainerModify = styled(Container)`
  max-width: ${({ theme }) => theme.maxContainerWidth};
`;

const SectionFeature = styled.div`
  padding: 96px 0;
  background-color: ${({ theme }) => theme.colors.white};
`;

const FeatureContent = styled.div`
  text-align: center;
  margin-bottom: 64px;
`;
const FeatureSubtitle = styled.p`
  color: ${({ theme }) => theme.colors.text.secondary};
  font-size: 18px;
  margin-bottom: 0;
`;
const FeatureHeading = styled.h3`
  font-size: 48px;
  color: ${({ theme }) => theme.colors.secondary};
  font-weight: 700;
  margin-bottom: 16px;
`;
const FeatureWave = styled.span`
  color: ${({ theme }) => theme.palettes.primary[5]};
`;

const ColumnModify = styled(Column)`
  margin-bottom: 32px;
`;

// Card Properties
const CardSvg = styled.div`
  color: ${({ theme }) => theme.palettes.primary[5]};
  > svg {
    width: 64px;
    height: 64px;
  }
`;

const CardContent = styled.div``;

const CardTitle = styled.h5`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 24px;
  color: ${({ theme }) => theme.colors.secondary};
  font-weight: 700;
  margin-top: 16px;
  margin-bottom: 0;
`;

const CardText = styled.p`
  color: ${({ theme }) => theme.colors.text.primary};
  font-size: 14px;
  margin-top: 8px;
  margin-bottom: 0;
`;

const Card = styled.div`
  position: relative;
  z-index: 1000;
  display: flex;
  flex-direction: column;
  min-width: 0;
  word-wrap: break-word;
  background-color: #fff;
  background-clip: border-box;
  border-radius: 4px;
  text-align: center;
  box-shadow: ${({ theme }) => theme.boxShadows.xl};
  &:before {
    background-image: linear-gradient(
      160deg,
      ${({ theme }) => theme.palettes.primary[5]} -1.24%,
      ${({ theme }) => theme.palettes.primary[6]} 86.22%
    );
    content: '';
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    opacity: 0;
    z-index: -100;
    transition: opacity 0.5s linear;
  }

  ${'' /* hover */}
  &:hover {
    &:before {
      opacity: 1;
    }
    ${CardSvg} {
      color: #fff;
    }

    ${CardTitle} {
      color: #fff;
    }

    ${CardText} {
      color: #fff;
    }
  }

  ${props => {
    if (props.active) {
      return css`
        &:before {
          opacity: 1;
        }
        ${CardSvg} {
          color: #fff;
        }

        ${CardTitle} {
          color: #fff;
        }

        ${CardText} {
          color: #fff;
        }
      `;
    }
  }}
`;

const CardBody = styled.div`
  padding: 48px 32px 64px;
`;

// <= End Dependent styled-components

const featureSchema = [
  {
    id: 1,
    icon: <Icon name="rss" />,
    title: 'Faster Growth',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
  },
  {
    id: 2,
    icon: <Icon name="bar-chart" />,
    title: 'Linear Growth',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    active: true
  },
  {
    id: 3,
    icon: <Icon name="activity" />,
    title: 'J-Curve Growth',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
  },
  {
    id: 4,
    icon: <Icon name="git-merge" />,
    title: 'Excremental Growth',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
  },
  {
    id: 5,
    icon: <Icon name="shuffle" />,
    title: 'Constant Growth',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
  },
  {
    id: 6,
    icon: <Icon name="layers" />,
    title: 'Level field Growth',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
  }
];

const featureShape = {
  id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  icon: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  active: PropTypes.bool
};

const propTypes = {
  /** The Major words for the feature section. */
  title: PropTypes.string.isRequired,
  /** The Minor words for the feature section. */
  subTitle: PropTypes.string.isRequired,
  /** An array of features Note: Only 3 feature can be included in this section UI. */
  features: PropTypes.arrayOf(PropTypes.shape(featureShape)).isRequired,
  /** The separator will be displayed at the bottom of the feature section. */
  separator: PropTypes.oneOfType([PropTypes.string, PropTypes.node])
};

const defaultProps = {
  title: 'Fasten your seat belts',
  subTitle: 'The unique features of the app are waiting for you',
  features: featureSchema,
  separator: (
    <svg viewBox="0 0 126 70" width="126px" height="70px">
      <path
        d="M119.37 44.09c-2.2 0-3.45-2.46-6.46-8.41-1.55-3.06-3-6-3.78-6.68-.77.71-2.24 3.62-3.79 6.68-3 6-4.26 8.41-6.46 8.41s-3.45-2.46-6.47-8.41c-1.55-3.06-3-6-3.79-6.67-.77.71-2.23 3.61-3.78 6.67-3 6-4.26 8.41-6.46 8.41s-3.46-2.46-6.47-8.41c-1.55-3.06-3-6-3.78-6.67-.77.71-2.24 3.61-3.79 6.67-3 6-4.27 8.41-6.47 8.41s-3.45-2.46-6.46-8.41c-1.55-3.06-3-6-3.78-6.68-.77.71-2.24 3.62-3.79 6.68-3 6-4.26 8.41-6.46 8.41s-3.45-2.46-6.47-8.41c-1.55-3.06-3-6-3.79-6.67-.77.71-2.23 3.61-3.78 6.67-3 6-4.26 8.41-6.46 8.41s-3.46-2.46-6.47-8.41c-1.55-3.06-3-6-3.78-6.67-.77.71-2.24 3.61-3.79 6.67L.16 34.32c3-5.95 4.27-8.41 6.47-8.41s3.45 2.46 6.46 8.41c1.55 3.06 3 6 3.79 6.68.76-.71 2.23-3.62 3.78-6.68 3-5.95 4.26-8.41 6.46-8.41s3.45 2.46 6.47 8.41c1.55 3.06 3 6 3.79 6.67.77-.71 2.23-3.61 3.78-6.67 3-5.95 4.26-8.41 6.47-8.41s3.45 2.46 6.46 8.41c1.55 3.06 3 6 3.78 6.67.77-.71 2.24-3.61 3.79-6.67 3-5.95 4.27-8.41 6.47-8.41s3.45 2.46 6.46 8.41c1.55 3.06 3 6 3.79 6.68.76-.71 2.23-3.62 3.78-6.68 3-5.95 4.26-8.41 6.46-8.41s3.45 2.46 6.47 8.41c1.55 3.06 3 6 3.79 6.67.77-.71 2.23-3.61 3.78-6.67 3-5.95 4.26-8.41 6.47-8.41s3.45 2.46 6.46 8.41c1.55 3.06 3 6 3.78 6.67.77-.71 2.24-3.61 3.79-6.67l2.68 1.36c-3.02 5.95-4.27 8.41-6.47 8.41z"
        fill="currentColor"
      />
    </svg>
  )
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
 * Returns the JSX or null for the svg.
 * @param svg {*|string} - The svg will React.element or a string
 * @return {null|*} - Returns the JSX or null
 */
const renderSVG = svg => {
  if (React.isValidElement(svg)) {
    return <FeatureWave>{svg}</FeatureWave>;
  } else if (typeof svg === 'string' && svg.length > 0) {
    return (
      <FeatureWave>
        <span dangerouslySetInnerHTML={{ __html: svg }} />
      </FeatureWave>
    );
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
    return (
      <Row>
        {data.map(feature => {
          return (
            <ColumnModify key={feature.id} lg={4} md={6} sm={6}>
              <Card active={feature.active}>
                <CardBody>
                  <CardSvg>{renderIcon(feature.icon)}</CardSvg>

                  <CardContent>
                    <CardTitle>{feature.title}</CardTitle>

                    <CardText>{feature.description}</CardText>
                  </CardContent>
                </CardBody>
              </Card>
            </ColumnModify>
          );
        })}
      </Row>
    );
  } else {
    return null;
  }
};

export const Feature2 = props => {
  const { title, subTitle, features, separator, ...attributes } = props;
  return (
    <SectionFeature {...attributes}>
      <ContainerModify fluid>
        <Row>
          <Column lg={12}>
            <FeatureContent>
              <FeatureHeading>{title}</FeatureHeading>
              <FeatureSubtitle>{subTitle}</FeatureSubtitle>
              {separator ? renderSVG(separator) : null}
            </FeatureContent>
          </Column>
        </Row>
        {renderBody(features)}
      </ContainerModify>
    </SectionFeature>
  );
};

Feature2.propTypes = propTypes;
Feature2.defaultProps = defaultProps;
