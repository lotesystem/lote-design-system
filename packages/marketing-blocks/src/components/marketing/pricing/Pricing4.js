import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { Icon } from '@lote-design-system/icons';
import { Container, Row, Column, Button } from '@lote-design-system/core';

// => Dependent styled-components
// Our main component depends upon the following styled-components

const Pricing = styled.div``;

const ContainerModify = styled(Container)`
  max-width: ${({ theme }) => theme.maxContainerWidth};
`;

const ColumnModify = styled(Column)`
  margin-bottom: 64px;
`;

// AreaA
const AreaA = styled.div`
  background-color: ${({ theme: { colors } }) => colors.text.title};
  padding-top: 128px;
  padding-bottom: 256px;
`;

// Header
const PriceHeader = styled.div`
  text-align: center;
`;

const PriceSubtitle = styled.h4`
  font-size: 20px;
  color: #fff;
  font-weight: 400;
  margin-bottom: 4px;
`;

const PriceUpperTitle = styled.h1`
  font-size: 40px;
  font-weight: 700;
  color: #fff;
  margin-bottom: 8px;
`;

const PriceDescription = styled.p`
  margin: 0 auto;
  max-width: 720px;
  font-size: 16px;
  color: rgba(255, 255, 255, 0.85);
`;

// -- End --

// AreaB
const AreaB = styled.div`
  background-color: #fdfdfd;
  padding-top: 128px;
  padding-bottom: 128px;
`;

// Body
const PriceBody = styled.div`
  margin-top: -300px;

  ${({ theme }) => theme.mediaQueries.md} {
    padding: 0 32px;
  }
`;

// Card
const Card = styled.div`
  background-color: #fff;
  box-shadow: ${({ theme }) => theme.boxShadows.md};
  height: 100%;
  border-radius: ${props => props.theme.card.borderRadius};
`;

// CardHeader

const CardHeader = styled.div`
  border-top-left-radius: ${props => props.theme.card.borderRadius};
  border-top-right-radius: ${props => props.theme.card.borderRadius};
  padding: 32px;
  background-color: #fff;
`;

const Badge = styled.div`
  margin-bottom: 16px;
`;

const BadgeText = styled.div`
  display: inline-flex;
  flex-direction: column;
  padding: 8px 24px;
  font-size: 14px;
  font-weight: 500;
  border-radius: 9999px;
  color: #722ed1;
  background-color: #f9f0ff;
`;

const PriceTitle = styled.h1`
  font-size: 64px;
  font-weight: 700;
  color: ${({ theme: { colors } }) => colors.text.title};
  margin-bottom: 16px;

  > small {
    font-weight: 400;
    font-size: 16px;
    color: ${({ theme: { colors } }) => colors.text.primary};
    margin-left: 4px;
    margin-bottom: 0;
  }
`;

const CardText = styled.p`
  font-size: 14px;
  color: ${({ theme: { colors } }) => colors.text.primary};
  margin-bottom: 0;
`;

// CardFooter
const CardFooter = styled.div`
  padding: 32px;
  background-color: #f5f5f5;
  border-bottom-right-radius: ${props => props.theme.card.borderRadius};
  border-bottom-left-radius: ${props => props.theme.card.borderRadius};
`;

// FeatureList
const FeatureList = styled.ul`
  display: flex;
  flex-direction: column;
  padding-left: 0;
  margin-bottom: 30px;

  > li {
    list-style: none;
    &:not(:last-child) {
      margin-bottom: 24px;
    }
  }
`;

// Feature
const Feature = styled.div`
  display: flex;
  align-items: center;
`;

const FeatureSvgWrapper = styled.span`
  color: #389e0d;
  margin-right: 12px;
  > svg {
    width: 24px;
    height: 24px;
  }
`;

const FeatureText = styled.span`
  font-size: 14px;
  color: ${({ theme: { colors } }) => colors.text.primary};
`;

const CardButton = styled(Button)`
  box-shadow: ${({ theme }) => theme.boxShadows.md};
  width: 100%;
  display: block;
`;

// -- End --

// Cta

const Cta = styled.div`
  background-color: #f9f9f9;
  padding: 32px;
  border-radius: ${props => props.theme.card.borderRadius};

  ${({ theme }) => theme.mediaQueries.xl} {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

const CtaBadge = styled.div`
  margin-bottom: 16px;
`;

const CtaBadgeText = styled.div`
  display: inline-flex;
  flex-direction: column;
  padding: 8px 22px;
  font-size: 14px;
  font-weight: 500;
  border-radius: 9999px;
  color: ${({ theme: { colors } }) => colors.secondary};
  background-color: #fff;
`;

const CtaText = styled.p`
  max-width: 720px;
  color: ${({ theme: { colors } }) => colors.text.primary};
  font-size: 16px;
  margin-bottom: 16px;

  ${({ theme }) => theme.mediaQueries.xl} {
    margin-bottom: 0;
  }
`;

const CtaLink = styled(Button)`
  font-weight: 500;
  box-shadow: ${({ theme }) => theme.boxShadows.md};
`;

// -- End --

// <= End Dependent styled-components

const packageSchema = [
  {
    id: 1,
    badgeText: 'STANDARD',
    currency: '$',
    price: '49',
    expireCode: 'mo',
    description:
      'We have a wide range of plans to fit your goals and budget. Check out a free trial to see and contact us.',
    features: [
      {
        id: 1,
        text: 'Self-paced and flexible scheduling',
        icon: <Icon name="check" />
      },
      {
        id: 2,
        text: 'Interactive practice sessions',
        icon: <Icon name="check" />
      },
      {
        id: 3,
        text: 'Access to new beta features',
        icon: <Icon name="check" />
      },
      {
        id: 4,
        text: 'Dedicated customer success team',
        icon: <Icon name="check" />
      }
    ],
    button: {
      text: 'Get Started',
      variation: 'fill',
      color: 'secondary'
    }
  },
  {
    id: 2,
    badgeText: 'ENTERPRISE',
    currency: '$',
    price: '79',
    expireCode: 'mo',
    description:
      'We have a wide range of plans to fit your goals and budget. Check out a free trial to see and contact us.',
    features: [
      {
        id: 1,
        text: 'Self-paced and flexible scheduling',
        icon: <Icon name="check" />
      },
      {
        id: 2,
        text: 'Interactive practice sessions',
        icon: <Icon name="check" />
      },
      {
        id: 3,
        text: 'Access to new beta features',
        icon: <Icon name="check" />
      },
      {
        id: 4,
        text: 'Dedicated customer success team',
        icon: <Icon name="check" />
      }
    ],
    button: {
      text: 'Get Started',
      variation: 'fill',
      color: 'secondary'
    }
  }
];

const idShape = PropTypes.oneOfType([PropTypes.number, PropTypes.string])
  .isRequired;

const linkShape = {
  href: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  variation: PropTypes.string.isRequired,
  color: PropTypes.string
};

const buttonShape = {
  text: PropTypes.string.isRequired,
  variation: PropTypes.string.isRequired,
  color: PropTypes.string,
  href: PropTypes.string
};

const featureShape = {
  id: idShape,
  text: PropTypes.string.isRequired,
  icon: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired
};

const packageShape = {
  id: idShape,
  badgeText: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  expireCode: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  features: PropTypes.arrayOf(PropTypes.shape(featureShape)).isRequired,
  button: PropTypes.shape(buttonShape).isRequired
};

const ctaShape = {
  text: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
  badgeText: PropTypes.string,
  link: PropTypes.shape(linkShape)
};

const propTypes = {
  /** The subtitle for the pricing section. */
  subtitle: PropTypes.string.isRequired,
  /** The minor text for the pricing section. */
  majorText: PropTypes.string.isRequired,
  /** The minor text for the pricing section. */
  minorText: PropTypes.string.isRequired,
  /** Only 2 price plan can be included in this section UI. */
  packages: PropTypes.arrayOf(PropTypes.shape(packageShape)).isRequired,
  /** The CTA container will appear below the price section. */
  cta: PropTypes.shape(ctaShape)
};

const defaultProps = {
  subtitle: 'PRICING PLANS',
  majorText: 'The right price for you, whoever you are',
  minorText:
    'If you’re not satisfied, contact us within the first 14 days and we’ll email you.',
  packages: packageSchema,
  cta: {
    text: (
      <span>
        Get a full access to all of standard license features and much more for
        solo projects that make less than $20k gross revenue for{' '}
        <strong>$29</strong>.
      </span>
    ),
    badgeText: 'DISCOUNTED',
    link: {
      href: '/',
      text: 'Buy Discounted License',
      variation: 'white'
    }
  }
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
 * It will render the packages of your schema.
 * @param data {Array} - An array of packages schema.
 * @return {null|*} - Returns the JSX or null
 */
const renderBody = data => {
  if (Array.isArray(data) && data.length > 0) {
    return (
      <Row>
        {data.map(item => {
          return (
            <ColumnModify key={item.id} lg={6}>
              <Card>
                {/* Card Header*/}
                <CardHeader>
                  <Badge>
                    <BadgeText>{item.badgeText}</BadgeText>
                  </Badge>

                  <PriceTitle>
                    {item.currency}
                    {item.price}
                    <small>/ {item.expireCode}</small>
                  </PriceTitle>

                  <CardText>{item.description}</CardText>
                </CardHeader>

                {/* Card Footer */}
                {Array.isArray(item.features) && item.features.length > 0 ? (
                  <CardFooter>
                    <FeatureList>
                      {item.features.map(feature => {
                        return (
                          <li key={feature.id}>
                            <Feature>
                              <FeatureSvgWrapper>
                                {renderIcon(feature.icon)}
                              </FeatureSvgWrapper>
                              <FeatureText>{feature.text}</FeatureText>
                            </Feature>
                          </li>
                        );
                      })}

                      {/*  Card Button */}
                      <CardButton
                        href={item.button.href}
                        color={item.button.color}
                        variation={item.button.variation}
                      >
                        {item.button.text}
                      </CardButton>
                    </FeatureList>
                  </CardFooter>
                ) : null}
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

export const Pricing4 = props => {
  const {
    subtitle,
    majorText,
    minorText,
    packages,
    cta,
    ...attributes
  } = props;

  return (
    <Pricing {...attributes}>
      {/* AreaA */}
      <AreaA>
        <ContainerModify fluid>
          {/* Header */}
          <PriceHeader>
            <PriceSubtitle>{subtitle}</PriceSubtitle>
            <PriceUpperTitle>{majorText}</PriceUpperTitle>
            <PriceDescription>{minorText}</PriceDescription>
          </PriceHeader>
        </ContainerModify>
      </AreaA>

      {/* AreaB */}
      <AreaB>
        <ContainerModify fluid>
          <PriceBody>
            {/* Body */}
            {renderBody(packages)}
            {/* Cta */}
            {cta ? (
              <Row>
                <Column lg={12}>
                  {/* Cta */}
                  <Cta>
                    <div>
                      {/* Badge */}
                      {typeof cta.badgeText === 'string' &&
                      cta.badgeText.length > 0 ? (
                        <CtaBadge>
                          <CtaBadgeText>{cta.badgeText}</CtaBadgeText>
                        </CtaBadge>
                      ) : null}

                      {/* Text */}
                      <CtaText>{cta.text}</CtaText>
                    </div>

                    {cta.link ? (
                      <div>
                        <CtaLink
                          href={cta.link.href}
                          variation={cta.link.variation}
                          color={cta.link.color}
                        >
                          {cta.link.text}
                        </CtaLink>
                      </div>
                    ) : null}
                  </Cta>
                </Column>
              </Row>
            ) : null}
          </PriceBody>
        </ContainerModify>
      </AreaB>
    </Pricing>
  );
};

Pricing4.propTypes = propTypes;
Pricing4.defaultProps = defaultProps;
