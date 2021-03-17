import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
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
  margin-bottom: 96px;

  ${({ theme }) => theme.mediaQueries.xl} {
    max-width: 540px;
    text-align: left;
  }
`;

const PricingSubtitle = styled.p`
  color: ${({ theme }) => theme.colors.text.secondary};
  font-size: 24px;
  font-weight: 500;
  margin-top: 0;
  margin-bottom: 4px;
`;

const PricingHeading = styled.h3`
  font-size: 48px;
  color: ${({ theme }) => theme.colors.secondary};
  font-weight: 700;
  margin-bottom: 8px;
`;

const PricingDescription = styled.p`
  margin-bottom: 16px;
  font-size: 16px;
  color: ${({ theme }) => theme.colors.text.primary};
`;

const PriceActionButtonGroup = styled.div`
  margin: 0 -8px;
`;

const PriceActionButton = styled(Button)`
  font-size: 14px;
  font-weight: 700;
  padding: 16px 48px;
  margin: 8px;
`;

const PlanColumn = styled(Column)`
  margin-bottom: 60px;
  &:last-child {
    margin-bottom: 0;
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
          background-color: #fdfdfd;
          border: 1px solid #f5f5f5;
        }
      `;
    case 2:
      return css`
        & {
          background-color: #ffffff;
          border: 1px solid #f5f5f5;
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
  background-clip: border-box;
  border-radius: 4px;
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
  padding: 48px 32px 64px;
`;

const CardContent1 = styled.div``;

const CardPackageP = styled.p`
  font-size: 16px;
  color: ${({ theme }) => theme.colors.primary};
  font-weight: 600;
  margin-top: 16px;
  margin-bottom: 0;
  text-transform: uppercase;
`;

const CardPriceH1 = styled.h1`
  font-size: 32px;
  color: ${({ theme }) => theme.colors.secondary};
  font-weight: 700;
  margin-top: 16px;
  margin-bottom: 0;
  span {
    font-size: 16px;
    color: ${({ theme }) => theme.colors.text.primary};
  }
`;

const CardPlanFeatures = styled.div``;

const CardListGroup = styled.div`
  margin-top: 22px;
`;

const CardListHeading = styled.h6`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 14px;
  font-weight: 600;
  margin: 0;
`;

const CardList = styled.ul`
  margin-top: 8px;
  margin-bottom: 0;
  padding: 0;

  li {
    list-style: none;
    font-size: 14px;
    color: ${({ theme }) => theme.colors.text.title};
    padding: 8px 0;
  }
`;

const CardContent2 = styled.div`
  display: flex;
  margin-top: 16px;
  ${({ theme }) => theme.mediaQueries.xl} {
    justify-content: center;
  }
`;

const CardPriceButton = styled(Button)`
  padding: 16px 48px;
  font-weight: 700;
`;

// <= End Dependent styled-components

const linkSchema = [
  {
    id: 1,
    href: '/',
    variation: 'whiteSecondary',
    text: 'How it works'
  },
  {
    id: 2,
    href: '/',
    variation: 'fill',
    text: ' Get Started'
  }
];

const packageSchema = [
  {
    id: 1,
    name: 'STARTER',
    expireCode: 'mo',
    currency: '$',
    price: '180',
    button: {
      text: 'Get Started',
      variation: 'fill'
    },
    modules: [
      {
        id: 1,
        title: 'Web Development',
        features: [
          {
            id: 1,
            text: (
              <span>
                <strong>Unlimited</strong> Access the content
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
        title: 'SEO / Search Engine',
        features: [
          {
            id: 1,
            text: (
              <span>
                <strong>Unlimited</strong> Access the content
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
        id: 3,
        title: 'Mobile Development',
        features: [
          {
            id: 1,
            text: (
              <span>
                <strong>Unlimited</strong> Access the content
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
    ]
  },
  {
    id: 2,
    name: 'PROFESSIONAL',
    expireCode: 'mo',
    currency: '$',
    price: '250',
    button: {
      text: 'Get Started',
      variation: 'whiteSecondary'
    },
    modules: [
      {
        id: 1,
        title: 'Web Development',
        features: [
          {
            id: 1,
            text: (
              <span>
                <strong>Unlimited</strong> Access the content
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
        title: 'SEO / Search Engine',
        features: [
          {
            id: 1,
            text: (
              <span>
                <strong>Unlimited</strong> Access the content
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
        id: 3,
        title: 'Mobile Development',
        features: [
          {
            id: 1,
            text: (
              <span>
                <strong>Unlimited</strong> Access the content
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
    ]
  }
];

const idShape = PropTypes.oneOfType([PropTypes.number, PropTypes.string])
  .isRequired;

const linkShape = {
  id: idShape,
  text: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
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
  text: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired
};

const moduleShape = {
  id: idShape,
  title: PropTypes.string.isRequired,
  features: PropTypes.arrayOf(PropTypes.shape(featureShape)).isRequired
};

const packageShape = {
  id: idShape,
  name: PropTypes.string.isRequired,
  expireCode: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  button: PropTypes.shape(buttonShape).isRequired,
  modules: PropTypes.arrayOf(PropTypes.shape(moduleShape)).isRequired,
  styledCSS: PropTypes.string
};

const propTypes = {
  /** The text for the pricing section. */
  title: PropTypes.string.isRequired,
  /** The sub text for the pricing section. */
  subText: PropTypes.string.isRequired,
  /** The description for the pricing section. */
  description: PropTypes.string.isRequired,
  /** An array of packages Note: Only 2 price packages can be included in this section UI. */
  packages: PropTypes.arrayOf(PropTypes.shape(packageShape)).isRequired,
  /** The link buttons will be displayed at the bottom of the pricing section. */
  links: PropTypes.arrayOf(PropTypes.shape(linkShape))
};

const defaultProps = {
  title: 'Keep your journey wherever are',
  subText: 'PRICING PLANS',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  links: linkSchema,
  packages: packageSchema
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
    return data.map((item, index) => {
      return (
        <PlanColumn key={item.id} xl={3} lg={6} md={6}>
          <Card no={index + 1} styled={item.styledCSS}>
            <CardBody>
              <CardContent1>
                <CardPackageP>{item.name}</CardPackageP>
                <CardPriceH1>
                  {item.currency} {item.price} {item.expireCode}
                </CardPriceH1>

                {Array.isArray(item.modules) && item.modules.length > 0 ? (
                  <CardPlanFeatures>
                    {item.modules.map(item => {
                      return (
                        <CardListGroup key={item.id}>
                          <CardListHeading>{item.title}</CardListHeading>
                          {Array.isArray(item.features) &&
                          item.features.length > 0 ? (
                            <CardList>
                              {item.features.map(feature => {
                                return <li key={feature.id}>{feature.text}</li>;
                              })}
                            </CardList>
                          ) : null}
                        </CardListGroup>
                      );
                    })}
                  </CardPlanFeatures>
                ) : null}
              </CardContent1>

              {item.button ? (
                <CardContent2>
                  <CardPriceButton
                    href={item.button.href}
                    variation={item.button.variation}
                    color={item.button.color}
                  >
                    {item.button.text}
                  </CardPriceButton>
                </CardContent2>
              ) : null}
            </CardBody>
          </Card>
        </PlanColumn>
      );
    });
  } else {
    return null;
  }
};

export const Pricing2 = props => {
  const { title, subText, description, links, packages, ...attributes } = props;
  return (
    <SectionPricing {...attributes}>
      <ContainerModify fluid>
        <Row>
          <Column xl={6} lg={12}>
            <PricingContent>
              <PricingSubtitle>{subText}</PricingSubtitle>

              <PricingHeading>{title}</PricingHeading>

              <PricingDescription>{description}</PricingDescription>

              {links ? (
                <PriceActionButtonGroup>
                  {links.map(link => {
                    return (
                      <PriceActionButton
                        key={link.id}
                        href={link.href}
                        variation={link.variation}
                        color={link.color}
                      >
                        {link.text}
                      </PriceActionButton>
                    );
                  })}
                </PriceActionButtonGroup>
              ) : null}
            </PricingContent>
          </Column>
          {renderBody(packages)}
        </Row>
      </ContainerModify>
    </SectionPricing>
  );
};

Pricing2.propTypes = propTypes;
Pricing2.defaultProps = defaultProps;
