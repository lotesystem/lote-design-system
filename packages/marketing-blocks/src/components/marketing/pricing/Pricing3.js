import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Icon } from '@lote-design-system/icons';
import { Container, Row, Column, Button } from '@lote-design-system/core';

// => Dependent styled-components
// Our main component depends upon the following styled-components

const Pricing = styled.div``;

const ContainerModify = styled(Container)`
  max-width: ${({ theme }) => theme.maxContainerWidth};
`;

const RowModify = styled(Row)`
  ${({ theme }) => theme.mediaQueries.lg} {
    margin-right: 0;
    margin-left: 0;
  }
`;

const ColumnModify = styled(Column)`
  ${({ theme }) => theme.mediaQueries.lg} {
    padding-right: 0;
    padding-left: 0;
  }
`;

// Area A
const AreaA = styled.div`
  background-color: #f8f8f8;
  padding-top: 128px;
  padding-bottom: 256px;
`;

// PriceHeader

const PriceHeader = styled.div`
  text-align: center;
`;

const PriceTitle = styled.h1`
  font-size: 40px;
  font-weight: 700;
  color: ${({ theme: { colors } }) => colors.text.title};
  margin-bottom: 8px;
`;

const PriceDescription = styled.p`
  margin: 0 auto;
  max-width: 720px;
  font-size: 16px;
  color: ${({ theme: { colors } }) => colors.text.primary};
`;

// -- End --

// Area B
const AreaB = styled.div`
  background-color: #fff;
  padding-top: 128px;
  padding-bottom: 128px;
`;

const PriceBody = styled.div`
  border-radius: ${props => props.theme.card.borderRadius};
  box-shadow: ${({ theme }) => theme.boxShadows.lg};
  margin-top: -330px;
  margin-bottom: 48px;
`;

const PriceContent1 = styled.div`
  height: 100%;
  padding: 32px 64px 32px 32px;
  background-color: #fff;
  border-top-right-radius: ${props => props.theme.card.borderRadius};
  border-top-left-radius: ${props => props.theme.card.borderRadius};

  ${({ theme }) => theme.mediaQueries.lg} {
    border-top-left-radius: ${props => props.theme.card.borderRadius};
    border-bottom-left-radius: ${props => props.theme.card.borderRadius};
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }
`;

const PriceContentHeading = styled.h1`
  font-size: 28px;
  font-weight: 700;
  color: ${({ theme: { colors } }) => colors.text.title};
  margin-bottom: 16px;
`;

const PriceContentDescription = styled.p`
  margin-bottom: 0;
  font-size: 14px;
  color: ${({ theme: { colors } }) => colors.text.primary};
`;

const HorizontalDivider = styled.div`
  margin: 20px 0 32px;
`;

const PriceContentMotto = styled.h6`
  margin-bottom: 0;
  font-size: 14px;
  font-weight: 500;
  color: ${({ theme: { colors } }) => colors.primary};

  display: flex;
  align-items: center;

  :after {
    content: '';
    flex: 1 1;
    border-bottom: 1px solid #f5f5f5;
    margin-left: 8px;
  }
`;

const PriceFeatures = styled.div`
  ${({ theme }) => theme.mediaQueries.lg} {
    display: flex;
    justify-content: space-between;
  }
`;

const FeatureSet = styled.div``;

const Feature = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 30px;
`;

const FeatureSvgWrapper = styled.span`
  color: #52c41a;
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

const PriceContent2 = styled.div`
  border-bottom-right-radius: ${props => props.theme.card.borderRadius};
  border-bottom-left-radius: ${props => props.theme.card.borderRadius};
  height: 100%;
  padding: 48px 32px;
  background-color: #f5f5f5;
  text-align: center;

  ${({ theme }) => theme.mediaQueries.lg} {
    border-bottom-right-radius: ${props => props.theme.card.borderRadius};
    border-top-right-radius: ${props => props.theme.card.borderRadius};
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }
`;

const PriceContentHeading2 = styled.h1`
  font-size: 18px;
  font-weight: 700;
  color: ${({ theme: { colors } }) => colors.text.title};
  margin-bottom: 16px;
`;

const PriceContentTitle = styled.h1`
  font-size: 56px;
  font-weight: 700;
  color: ${({ theme: { colors } }) => colors.text.title};
  margin-bottom: 16px;

  display: flex;
  align-items: center;
  ${'' /* text-align-center will not work */}
  justify-content: center;

  > small {
    font-weight: 400;
    margin-left: 8px;
    font-size: 16px;
    color: ${({ theme: { colors } }) => colors.text.primary};
  }
`;

const PriceContentLink = styled.a`
  font-size: 14px;
  margin-bottom: 16px;
  color: ${({ theme: { colors } }) => colors.text.primary};
  display: block;
  text-decoration: underline;
  transition: color 0.4s linear;
  &:hover {
    color: ${({ theme: { colors } }) => colors.secondary};
    text-decoration: underline;
  }
`;

const PriceContentButton = styled(Button)`
  width: 100%;
  display: block;
  box-shadow: ${({ theme }) => theme.boxShadows.md};
  margin-bottom: 16px;
`;

const PriceContentText = styled.p`
  font-size: 14px;
  font-weight: 500;
  color: ${({ theme: { colors } }) => colors.text.title};
  margin-bottom: 0;
`;

// <= End Dependent styled-components

const setSchema = [
  {
    id: 1,
    name: 'set-1',
    features: [
      {
        id: 1,
        text: 'Self-paced and flexible scheduling',
        icon: <Icon name="check-circle" />
      },
      {
        id: 2,
        text: 'Access to new beta features',
        icon: <Icon name="check-circle" />
      }
    ]
  },
  {
    id: 2,
    name: 'set-2',
    features: [
      {
        id: 1,
        text: 'Interactive practice sessions',
        icon: <Icon name="check-circle" />
      },
      {
        id: 2,
        text: 'Dedicated customer success team',
        icon: <Icon name="check-circle" />
      }
    ]
  }
];

const planSchema = {
  id: 1,
  name: 'Lifetime Membership',
  description:
    'We have a wide range of plans to fit your goals and budget. Check out a free trial to see what works for you and then pay monthly. It totally depends upon you.',
  separatorText: `WHAT'S INCLUDED`,
  sets: setSchema,
  planTitle: 'Pay once, own it forever',
  currency: 'USD',
  currencySymbol: '$',
  price: '349',
  button: {
    text: 'Get Access',
    variation: 'fill',
    color: 'secondary'
  },

  policyLink: {
    href: '/',
    text: 'Learn about our membership policy.'
  },
  extra: (
    <span>
      Get a free sample <strong>(20MB)</strong>
    </span>
  )
};

const idShape = PropTypes.oneOfType([PropTypes.number, PropTypes.string])
  .isRequired;

const linkShape = {
  text: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired
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

const setShape = {
  id: idShape,
  name: PropTypes.string,
  features: PropTypes.arrayOf(PropTypes.shape(featureShape)).isRequired
};

const planShape = {
  id: idShape,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  separatorText: PropTypes.string.isRequired,
  sets: PropTypes.arrayOf(PropTypes.shape(setShape)).isRequired,
  planTitle: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
  currencySymbol: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  button: PropTypes.shape(buttonShape).isRequired,
  policyLink: PropTypes.shape(linkShape),
  extra: PropTypes.oneOfType([PropTypes.string, PropTypes.node])
};

const propTypes = {
  /** The text for the pricing section. */
  title: PropTypes.string.isRequired,
  /** The sub text for the pricing section. */
  subText: PropTypes.string.isRequired,
  /** Only 1 price plan can be included in this section UI. */
  plan: PropTypes.shape(planShape).isRequired
};

const defaultProps = {
  title: 'Simple plan for professionals',
  subText:
    'If you’re not satisfied, contact us within the first 14 days and we’ll send you a full refund.',
  plan: planSchema
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

export const Pricing3 = props => {
  const { title, subText, plan, ...attributes } = props;

  return (
    <Pricing {...attributes}>
      {/* Area A */}
      <AreaA>
        <ContainerModify fluid>
          {/* Header */}
          <PriceHeader>
            <PriceTitle>{title}</PriceTitle>
            <PriceDescription>{subText}</PriceDescription>
          </PriceHeader>
        </ContainerModify>
      </AreaA>

      {/* Area B */}
      <AreaB>
        <ContainerModify fluid>
          {/* Body */}
          {plan ? (
            <PriceBody>
              <RowModify>
                <ColumnModify lg={9}>
                  <PriceContent1>
                    <PriceContentHeading>{plan.name}</PriceContentHeading>

                    <PriceContentDescription>
                      {plan.description}
                    </PriceContentDescription>

                    <HorizontalDivider>
                      <PriceContentMotto>
                        {plan.separatorText}
                      </PriceContentMotto>
                    </HorizontalDivider>

                    {/*    Features */}
                    {Array.isArray(plan.sets) && plan.sets.length > 0 ? (
                      <PriceFeatures>
                        {plan.sets.map(set => {
                          return (
                            <FeatureSet key={set.id}>
                              {Array.isArray(set.features) &&
                              set.features.length > 0
                                ? set.features.map(feature => {
                                    return (
                                      <Feature key={feature.id}>
                                        <FeatureSvgWrapper>
                                          {renderIcon(feature.icon)}
                                        </FeatureSvgWrapper>
                                        <FeatureText>
                                          {feature.text}
                                        </FeatureText>
                                      </Feature>
                                    );
                                  })
                                : null}
                            </FeatureSet>
                          );
                        })}
                      </PriceFeatures>
                    ) : null}
                  </PriceContent1>
                </ColumnModify>

                <ColumnModify lg={3}>
                  <PriceContent2>
                    <PriceContentHeading2>
                      {plan.planTitle}
                    </PriceContentHeading2>
                    <PriceContentTitle>
                      {plan.currencySymbol}
                      {plan.price}
                      <small>{plan.currency}</small>
                    </PriceContentTitle>
                    {plan.policyLink ? (
                      <PriceContentLink href={plan.policyLink.href}>
                        {plan.policyLink.text}
                      </PriceContentLink>
                    ) : null}
                    {plan.button ? (
                      <PriceContentButton
                        href={plan.button.href}
                        color={plan.button.color}
                        variation={plan.button.variation}
                      >
                        {plan.button.text}
                      </PriceContentButton>
                    ) : null}
                    {plan.extra ? (
                      <PriceContentText>{plan.extra}</PriceContentText>
                    ) : null}
                  </PriceContent2>
                </ColumnModify>
              </RowModify>
            </PriceBody>
          ) : null}
        </ContainerModify>
      </AreaB>
    </Pricing>
  );
};

Pricing3.propTypes = propTypes;
Pricing3.defaultProps = defaultProps;
