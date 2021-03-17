import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Icon from '@lote-design-system/icons';
import { Container, Row, Column, Button } from '@lote-design-system/core';

// => Dependent styled-components
// Our main component depends upon the following styled-components

const ContainerModify = styled(Container)`
  max-width: ${({ theme }) => theme.maxContainerWidth};
`;

const SectionFeature = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  padding: 96px 0;
`;

const FeatureContent = styled.div`
  text-align: center;
  margin-bottom: 64px;
`;
const FeatureSubtitle = styled.p`
  color: ${({ theme }) => theme.colors.text.secondary};
  font-size: 18px;
  margin-top: 0;
  margin-bottom: 8px;
`;
const FeatureHeading = styled.h3`
  font-size: 32px;
  color: ${({ theme }) => theme.colors.secondary};
  font-weight: 700;
  margin-top: 16px;
  margin-bottom: 0;
`;
const FeatureWave = styled.span`
  margin-top: 8px;
  color: ${({ theme }) => theme.colors.primary};
`;

const ColumnModify = styled(Column)`
  margin-bottom: 64px;
`;

const CardWrapper = styled.div`
  height: 100%;
`;

const Card = styled.div`
  position: relative;
  display: flex;
  height: 100%;
  flex-direction: column;
  min-width: 0;
  word-wrap: break-word;
  background-color: #fff;
  background-clip: border-box;
  border-radius: 4px;
  text-align: center;
  transition: transform 0.5s ease;
  box-shadow: ${({ theme }) => theme.boxShadows.xl};
  transform: translateY(0);

  &:hover {
    transform: translateY(-10px);
  }
`;

const CardBody = styled.div`
  padding: 32px 32px 64px;
`;

const CardSvg = styled.div`
  color: ${({ theme: { colors } }) => colors.primary};
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

const CardLink = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  transform: translateY(calc(50px / 2));

  display: flex;
  justify-content: center;
  align-items: center;
`;

const CardAnchorModify = styled(Button)`
  width: 50px;
  height: 50px;
  border-radius: 50%;

  display: flex;

  align-items: center;

  justify-content: center;
  svg {
    width: 16px;
    height: 16px;
  }
`;

const FeatureUnderText = styled.div`
  margin-top: 32px;
  font-size: 16px;
  color: ${({ theme }) => theme.colors.text.primary};
  text-align: center;
  a {
    position: relative;
    display: inline-block;
    color: ${({ theme }) => theme.palettes.primary[5]};
    text-decoration: underline;
    transition: color 0.3s ease-in-out;
    &:hover {
      color: ${({ theme }) => theme.palettes.primary[6]};
    }
  }
`;

// <= End Dependent styled-components

const featureSchema = [
  {
    id: 1,
    icon: <Icon name="rss" />,
    title: 'Faster Growth',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    link: {
      icon: <Icon name="arrow-right" />,
      href: '/',
      variation: 'fill'
    }
  },
  {
    id: 2,
    icon: <Icon name="bar-chart" />,
    title: 'Linear Growth',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    link: {
      icon: <Icon name="arrow-right" />,
      href: '/',
      variation: 'fill'
    }
  },
  {
    id: 3,
    icon: <Icon name="activity" />,
    title: 'J-Curve Growth',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    link: {
      icon: <Icon name="arrow-right" />,
      href: '/',
      variation: 'fill'
    }
  }
];

const linkShape = {
  icon: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
  variation: PropTypes.string.isRequired,
  color: PropTypes.string,
  href: PropTypes.string
};

const featureShape = {
  id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  icon: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  link: PropTypes.shape(linkShape).isRequired
};

const propTypes = {
  /** The Major words for the feature section. */
  majorWords: PropTypes.string.isRequired,
  /** The Minor words for the feature section. */
  minorWords: PropTypes.string.isRequired,
  /** The subtext for the feature section. */
  subText: PropTypes.string.isRequired,
  /** An array of features Note: Only 3 feature can be included in this section UI. */
  features: PropTypes.arrayOf(PropTypes.shape(featureShape)).isRequired,
  /** The separator will be displayed at the bottom of the feature section. */
  separator: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  /** The CTA text will appear below the feature section. */
  ctaText: PropTypes.oneOfType([PropTypes.string, PropTypes.node])
};

const defaultProps = {
  majorWords: 'A single platform for all sales',
  minorWords: 'channels worldwide',
  subText: 'Learn more about Product unique features',
  features: featureSchema,
  separator: (
    <svg viewBox="0 0 126 70" width="126px" height="70px">
      <path
        fill="currentColor"
        d="M.5 34.17h37.7v1.05H.5zm65.02-9.95c2.39.78 5.37 0 7.19 1.71s1.65 4.64 2.17 7.11 1.33 4.9.89 7.38c-.46 2.68-1.23 5.67-3.44 7.24s-5.22 1-7.91.79a19.9 19.9 0 01-6.09-2c-1.83-.79-3.79-1.38-5.15-2.86a12.07 12.07 0 01-2.45-5.4 12.39 12.39 0 01-.38-6.09c.54-2.05 2.08-3.57 3.38-5.24 1.55-2 2.53-5 5-5.51s4.41 2.09 6.79 2.87zm22.28 9.95h37.7v1.05H87.8z"
      />
    </svg>
  ),
  ctaText: (
    <span>
      Some things just feel impossible to build in a performant way.{' '}
      <a href="/">Click Here!</a>
    </span>
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
            <ColumnModify key={feature.id} lg={4} md={6}>
              <CardWrapper>
                <Card>
                  <CardBody>
                    <CardSvg>{renderIcon(feature.icon)}</CardSvg>

                    <CardContent>
                      <CardTitle>{feature.title}</CardTitle>

                      <CardText>{feature.description}</CardText>
                    </CardContent>

                    <CardLink>
                      <CardAnchorModify
                        href={feature.link.href}
                        color={feature.link.color}
                        variation={feature.link.variation}
                        noBase
                      >
                        {renderIcon(feature.link.icon)}
                      </CardAnchorModify>
                    </CardLink>
                  </CardBody>
                </Card>
              </CardWrapper>
            </ColumnModify>
          );
        })}
      </Row>
    );
  } else {
    return null;
  }
};

export const Feature1 = props => {
  const {
    majorWords,
    minorWords,
    subText,
    features,
    separator,
    ctaText,
    ...attributes
  } = props;
  return (
    <SectionFeature {...attributes}>
      <ContainerModify fluid>
        <Row>
          <Column lg={12}>
            <FeatureContent>
              <FeatureSubtitle>{subText}</FeatureSubtitle>
              <FeatureHeading>
                <div>{majorWords}</div>
                <div>{minorWords}</div>
              </FeatureHeading>
              {separator ? renderSVG(separator) : null}
            </FeatureContent>
          </Column>
        </Row>
        {renderBody(features)}
        {/*  Cta Text */}
        {ctaText ? <FeatureUnderText>{ctaText}</FeatureUnderText> : null}
      </ContainerModify>
    </SectionFeature>
  );
};

Feature1.propTypes = propTypes;
Feature1.defaultProps = defaultProps;
