import React from 'react';
import PropTypes from 'prop-types';
import styled, { css, keyframes } from 'styled-components';
import { Container, Row, Column, Button } from '@lote-design-system/core';
// => Dependent styled-components

// Our main component depends upon the following styled-components

const ContainerModify = styled(Container)`
  max-width: ${({ theme }) => theme.maxContainerWidth};
`;

const SectionPricing = styled.div`
  padding: 96px 0;
`;

const PricingContent = styled.div`
  text-align: center;
  margin-bottom: 80px;
`;

const PricingSubtitle = styled.p`
  color: ${({ theme }) => theme.colors.text.secondary};
  font-size: 18px;
  font-weight: 500;
  margin-top: 0;
  margin-bottom: 8px;
`;

const PricingHeading = styled.h3`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 40px;
  color: ${({ theme }) => theme.colors.secondary};
  font-weight: 700;
  margin: 12px 0 18px;
  text-transform: uppercase;
  span {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const pricingMoveCircle = keyframes`
 from {
    transform: translateX(0);
  }
  to {
    transform: translateX(120px);
  }
`;

const PricingWave = styled.div`
  margin: auto;
  position: relative;
  background: ${({ theme }) => theme.palettes.primary[2]};
  height: 8px;
  width: 126px;
  display: flex;
  align-items: center;
  ${'' /* Turn off when animation is on, Turn on when animation is off */}
  justify-content: center;
  border-radius: 22px;

  &:before {
    content: '';
    position: absolute;
    height: 18px;
    width: 18px;
    border-radius: 50%;
    background: ${({ theme }) => theme.colors.primary};
  }

  ${props => {
    if (props.animation) {
      return css`
        justify-content: flex-start;
        &:before {
          animation: ${pricingMoveCircle} 3s linear infinite;
        }
      `;
    }
  }}
`;

// Card Badge

const CardBadgeWrapper = styled.div`
  position: absolute;
  display: flex;
  top: -16px;
  right: 0;
  left: 0;
  justify-content: center;
  align-items: center;
`;

const CardBadge = styled.div`
  background-color: ${({ theme }) => theme.colors.secondary};
  color: #fff;
  font-size: 14px;
  border-radius: 22px;
  padding: 8px 24px;
`;

const PlanColumn = styled(Column)`
  margin-top: 0;
  margin-bottom: 60px;
  &:last-child {
    margin-bottom: 0;
  }
`;

const PlanRow = styled(Row)`
  ${({ theme }) => theme.mediaQueries.lg} {
    margin-right: 0;
    margin-left: 0;
    /* stylelint-disable no-descending-specificity */
    > ${Column} {
      padding-right: 0;
      padding-left: 0;
      &:nth-child(odd) {
        margin-top: 60px;
        margin-bottom: 0;
      }
    }
  }
`;

/**
 * A function that returns the styles associated with the card number.
 * @param no {number} - Set the card number to get the styles
 * @return {string[]} - Returns the styles
 */
const cardStyles = no => {
  switch (no) {
    case 1:
      return css`
        & {
          background-color: #fff;
          border: 1px solid rgba(0, 0, 0, 0.04);
          ${'' /* Higher than other */}
          z-index: 3;
          ${({ theme }) => theme.mediaQueries.xl} {
            ${'' /* Move only on large devices */}
            transform: translateX(14px);
          }
        }
      `;
    case 2:
      return css`
        & {
          background-color: #faf9f8;
          ${'' /* Higher than other */}
          z-index: 6;
        }
      `;

    case 3:
      return css`
        & {
          background-color: ${({ theme }) => theme.colors.primary};
          ${'' /* Higher than other */}
          z-index: 3;
          ${({ theme }) => theme.mediaQueries.xl} {
            ${'' /* Move only on large devices */}
            transform: translateX(-14px);
          }
          
          ${CardPackageP},${CardPriceH1},${CardDurationP}, ${CardList} li {
            color: #fff;
          }
        }
      `;
    default:
      return css``;
  }
};

const Card = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  min-width: 0;
  word-wrap: break-word;
  border-radius: 8px;
  background-clip: border-box;
  ${({ no }) => {
    if (no) {
      return cardStyles(no);
    }
  }};
  ${({ styled }) => {
    if (styled) {
      return css`
        & {
          ${styled};
        }
      `;
    }
  }};
`;

const CardBody = styled.div`
  ${'' /* Top, right & left, Bottom */}
  padding: 48px 32px 64px;
`;

const CardContent1 = styled.div`
  text-align: center;
`;

const CardPackageP = styled.p`
  font-size: 16px;
  color: ${({ theme }) => theme.colors.textPrimary};
  font-weight: 600;
  margin-top: 16px;
  margin-bottom: 0;
  text-transform: uppercase;
`;

const CardPriceH1 = styled.h1`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 80px;
  color: ${({ theme }) => theme.colors.secondary};
  font-weight: 600;
  margin-top: 16px;
  margin-bottom: 0;
`;

const CardDurationP = styled.p`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.text.primary};
  font-weight: 600;
  margin-top: 16px;
  margin-bottom: 0;
  text-transform: uppercase;
`;

const CardPriceButton = styled(Button)`
  font-weight: 700;
  margin-top: 18px;
`;

const CardContent2 = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 22px;
`;

const CardList = styled.ul`
  margin: 0;
  padding: 0;
  li {
    list-style: none;
    font-size: 16px;
    color: ${({ theme }) => theme.colors.text.title};
    padding: 8px 0;
  }
`;

// Price Call to Action Wrapper

const PriceCtaWrapper = styled.div`
  max-width: 960px;
  margin: 0 auto;
  padding: 96px 0;
`;

const PriceCtaPaddingBox = styled.div`
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: 4px;
  padding: 16px 32px;
  ${({ theme }) => theme.mediaQueries.lg} {
    align-items: center;
    display: flex;
    justify-content: space-between;
  }
`;

const PriceCtaStart = styled.div`
  ${({ theme }) => theme.mediaQueries.sm} {
    text-align: center;
  }
`;

const PriceCtaEnd = styled.div`
  ${({ theme }) => theme.mediaQueries.sm} {
    text-align: center;
  }
`;

const PriceCtaText = styled.p`
  margin: 16px 0;
  color: #fff;
  font-size: 16px;
`;

const PriceCtaButton = styled(Button)`
  box-shadow: ${({ theme }) => theme.boxShadows.md};
  font-weight: 700;
  font-size: 14px;
`;

// <= End Dependent styled-components

const packageSchema = [
  {
    id: 1,
    name: 'STARTER',
    expiration: '7 DAYS',
    currency: '$',
    price: '0',
    button: {
      text: 'Get Started',
      variation: 'primarySubtle'
    },
    features: [
      {
        id: 1,
        text: (
          <span>
            <strong>Unlimited</strong> Access to the content
          </span>
        )
      },
      {
        id: 2,
        text: (
          <span>
            <strong>Fully Secure</strong> Online Backup
          </span>
        )
      },
      {
        id: 3,
        text: (
          <span>
            <strong>One Year</strong> Round the clock stop
          </span>
        )
      },
      {
        id: 4,
        text: (
          <span>
            <strong>Free</strong> complimentary lanyard
          </span>
        )
      }
    ]
  },
  {
    id: 2,
    name: 'MEDIATOR',
    expiration: 'PER MONTH',
    currency: '$',
    price: '250',
    button: {
      text: 'Get Started',
      variation: 'fill'
    },
    badgeText: 'Most Popular',
    features: [
      {
        id: 1,
        text: (
          <span>
            <strong>Unlimited</strong> Access to the content
          </span>
        )
      },
      {
        id: 2,
        text: (
          <div>
            <strong>Fully Secure</strong> Online Backup
          </div>
        )
      },
      {
        id: 3,
        text: (
          <span>
            <strong>One Year</strong> Round the clock stop
          </span>
        )
      },
      {
        id: 4,
        text: (
          <span>
            <strong>Free</strong> complimentary lanyard
          </span>
        )
      }
    ]
  },
  {
    id: 3,
    name: 'PROFESSIONAL',
    expiration: 'PER MONTH',
    currency: '$',
    price: '350',
    button: {
      text: 'Get Started',
      variation: 'white'
    },
    features: [
      {
        id: 1,
        text: (
          <span>
            <strong>Unlimited</strong> Access to the content
          </span>
        )
      },
      {
        id: 2,
        text: (
          <span>
            <strong>Fully Secure</strong> Online Backup
          </span>
        )
      },
      {
        id: 3,
        text: (
          <span>
            <strong>One Year</strong> Round the clock stop
          </span>
        )
      },
      {
        id: 4,
        text: (
          <span>
            <strong>Free</strong> complimentary lanyard
          </span>
        )
      }
    ]
  }
];

const buttonShape = {
  text: PropTypes.string.isRequired,
  variation: PropTypes.string.isRequired,
  color: PropTypes.string,
  href: PropTypes.string
};

const featureShape = {
  id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  text: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired
};

const packageShape = {
  id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  name: PropTypes.string.isRequired,
  expiration: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  button: PropTypes.shape(buttonShape).isRequired,
  features: PropTypes.arrayOf(PropTypes.shape(featureShape)).isRequired,
  badgeText: PropTypes.string,
  styledCSS: PropTypes.string
};

const ctaShape = {
  text: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
  link: PropTypes.shape({
    href: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    variation: PropTypes.string.isRequired,
    color: PropTypes.string
  })
};

const propTypes = {
  /** The Major words for the pricing section. */
  majorWords: PropTypes.string.isRequired,
  /** The Minor words for the pricing section. */
  minorWords: PropTypes.string.isRequired,
  /** The subtitle for the pricing section. */
  subTitle: PropTypes.string.isRequired,
  /** An array of packages Note: Only 3 price packages can be included in this
   section UI and the second priced package will be considered the main package. */
  packages: PropTypes.arrayOf(PropTypes.shape(packageShape)).isRequired,
  /** The bar will be displayed at the bottom of the pricing section. */
  bar: PropTypes.shape({
    show: PropTypes.bool.isRequired,
    animation: PropTypes.bool
  }),
  /** The CTA container will appear below the price section. */
  cta: PropTypes.shape(ctaShape)
};

const defaultProps = {
  majorWords: 'Plans',
  minorWords: 'Extended',
  subTitle: 'Keep Track Of Plans Wherever You Are',
  bar: {
    show: true,
    animation: false
  },
  packages: packageSchema,
  cta: {
    text: (
      <span>
        We are offering a
        <strong style={{ margin: '0 4px' }}>14-days trail</strong>. Please check
        it.
      </span>
    ),
    link: {
      href: '/',
      text: 'Learn more',
      variation: 'white'
    }
  }
};

/**
 * It will render the packages of your schema.
 * @param data {Array} - An array of packages schema.
 * @return {null|*} - Returns the JSX or null
 */
const renderBody = data => {
  if (Array.isArray(data) && data.length > 0) {
    // We will apply the default styled CSS to each package, but if
    // the user has written custom CSS, then the old CSS will override
    // wth the new CSS.
    return (
      <PlanRow>
        {data.map((item, index) => {
          return (
            <PlanColumn key={item.id} lg={4}>
              <Card no={index + 1} styled={item.styledCSS}>
                <CardBody>
                  <CardContent1>
                    <CardPackageP>{item.name}</CardPackageP>

                    <CardPriceH1>
                      {`${item.currency} ${item.price}`}
                    </CardPriceH1>

                    <CardDurationP>{item.expiration}</CardDurationP>

                    <CardPriceButton
                      href={item.button.href}
                      variation={item.button.variation}
                      color={item.button.color}
                    >
                      {item.button.text}
                    </CardPriceButton>
                  </CardContent1>

                  {Array.isArray(item.features) && item.features.length > 0 ? (
                    <CardContent2>
                      <CardList>
                        {item.features.map(feature => {
                          return <li key={feature.id}>{feature.text}</li>;
                        })}
                      </CardList>
                    </CardContent2>
                  ) : null}
                </CardBody>

                {typeof item.badgeText === 'string' &&
                item.badgeText.length > 0 ? (
                  <CardBadgeWrapper>
                    <CardBadge>{item.badgeText}</CardBadge>
                  </CardBadgeWrapper>
                ) : null}
              </Card>
            </PlanColumn>
          );
        })}
      </PlanRow>
    );
  } else {
    return null;
  }
};

export const Pricing1 = props => {
  // animation would be a bool type
  const {
    majorWords,
    minorWords,
    subTitle,
    bar,
    packages,
    cta,
    ...attributes
  } = props;
  return (
    <SectionPricing {...attributes}>
      <ContainerModify fluid>
        <Row>
          <Column lg={12}>
            <PricingContent>
              <PricingSubtitle>{subTitle}</PricingSubtitle>
              <PricingHeading>
                {minorWords} <span>{majorWords}</span>
              </PricingHeading>
              {/* Bar */}
              {bar && bar.show ? (
                <PricingWave animation={bar.animation} />
              ) : null}
            </PricingContent>
          </Column>
        </Row>
        {renderBody(packages)}
        {/*	Call to Action in the Pricing */}
        {cta ? (
          <PriceCtaWrapper>
            <PriceCtaPaddingBox>
              <PriceCtaStart>
                <PriceCtaText>{cta.text}</PriceCtaText>
              </PriceCtaStart>
              {cta.link ? (
                <PriceCtaEnd>
                  <PriceCtaButton
                    href={cta.link.href}
                    variation={cta.link.variation}
                    color={cta.link.color}
                  >
                    {cta.link.text}
                  </PriceCtaButton>
                </PriceCtaEnd>
              ) : null}
            </PriceCtaPaddingBox>
          </PriceCtaWrapper>
        ) : null}
      </ContainerModify>
    </SectionPricing>
  );
};

Pricing1.propTypes = propTypes;
Pricing1.defaultProps = defaultProps;
