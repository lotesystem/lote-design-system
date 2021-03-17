import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { Icon } from '@lote-design-system/icons';
import {
  Container,
  Row,
  Column,
  Button,
  Input
} from '@lote-design-system/core';
import { CountryFlagCanada } from '../svg';

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

const FeatureTitle = styled.h1`
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

// Second Part => has left and Right Side
// Left Side contains column and one `div` which contain cards
const ColumnModify = styled(Column)`
  margin-bottom: 64px;

  ${({ theme }) => theme.mediaQueries.lg} {
    margin-bottom: 96px;
  }
`;

const FeatureUpper = styled.div`
  margin-bottom: 64px;
`;

const FeatureUpperTitle = styled.h1`
  font-size: 28px;
  font-weight: 500;
  color: ${({ theme: { colors } }) => colors.text.title};
  margin-bottom: 8px;
`;

const FeatureUpperDescription = styled.p`
  max-width: 720px;
  font-size: 16px;
  color: ${({ theme: { colors } }) => colors.text.primary};

  ${({ theme }) => theme.mediaQueries.lg} {
    margin: 0 auto;
  }
`;

// Card

const CardFeature = styled.div`
  position: relative;

  display: flex;

  flex-direction: column;
  min-width: 0;

  word-wrap: break-word;
  background-color: #fff;
  background-clip: border-box;

  :not(:last-child) {
    margin-bottom: 64px;
  }
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
  border-radius: 0.25rem;
  display: inline-flex;
  justify-content: center;
  align-items: center;

  > svg {
    width: 25px;
    height: 25px;
  }

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

// Right Side Form => It is divided into 3 parts header, body, footer
const FormWrapper = styled.div`
  box-shadow: ${({ theme }) => theme.boxShadows.lg};
`;

// From Header
const FormHeader = styled.div`
  padding: 32px 24px 18px;
`;

const HeaderH4 = styled.h4`
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 8px;
  color: ${({ theme: { colors } }) => colors.text.title};
`;

const HeaderP = styled.p`
  font-size: 14px;
  margin-bottom: 16px;
  color: ${({ theme: { colors } }) => colors.text.primary};
`;

const FormGroup = styled.div`
  margin-bottom: 16px;
`;

const Label = styled.label`
  font-size: 14px;
  font-weight: 500;
  color: ${({ theme: { colors } }) => colors.text.primary};
  display: block;
  margin-bottom: 12px;
`;

// Form Body
const FormBody = styled.div`
  border-top: 1px solid #f7f7f7;
  border-bottom: 1px solid #f7f7f7;
  padding: 32px 0;
`;

const FormBodyContent = styled.div`
  padding: 0 24px;
`;

// Components for Select-with-icon
const SelectIconWrapper = styled.div`
  align-items: center;
  display: inline-flex;
  justify-content: center;
  height: 24px;
  width: 24px;
`;

const SelectIconGroup = styled.div`
  position: relative;
  select {
    padding-left: 42px;
  }
  ${SelectIconWrapper} {
    color: ${({ theme: { colors } }) => colors.text.title};
    pointer-events: none;
    position: absolute;
    top: 0;
    ${'' /* For left side */}
    left: 0;
    width: 50px;
    height: 50px;
    z-index: 4;
  }
`;

// -- End --

// Group Components for input-text and select-with-icon
const GroupInput = styled.div`
  position: relative;
  width: 100%;

  div input {
    padding-right: 128px;
  }

  div select {
    width: 128px;
    border-radius: 0;
  }

  div:last-child {
    position: absolute;
    top: 0;
    right: 0;
  }
`;
// -- End --

// List Group
const ListGroup = styled.ul`
  display: flex;
  flex-direction: column;
  padding-left: 0;
  margin: 26px 0;

  > li {
    position: relative;
    list-style: none;
    padding: 12px 20px;
    margin-bottom: -1px;
    background-color: #fff;
    border: 1px solid #f7f7f7;
    > span {
      display: block;

      &:first-child {
        font-size: 14px;
        font-weight: 500;
        color: ${({ theme: { colors } }) => colors.text.title};
      }

      &:last-child {
        font-size: 14px;
        color: ${({ theme: { colors } }) => colors.text.primary};
      }
    }

    &:first-child {
      border-top-left-radius: 4px;
      border-top-right-radius: 4px;
    }

    &:last-child {
      margin-bottom: 0;
      border-bottom-right-radius: 4px;
      border-bottom-left-radius: 4px;
    }
  }

  ${({ theme }) => theme.mediaQueries.sm} {
    > li {
      display: flex;
      align-items: center;
      justify-content: space-between;

      > span {
        display: inline-block;
      }
    }
  }
`;
// -- End --

// Form Footer
const FormFooter = styled.div`
  background-color: #fbfbfb;
  padding: 12px 48px;

  button {
    display: block;
    width: 100%;
  }

  button:first-child {
    margin-bottom: 16px;
  }

  ${({ theme }) => theme.mediaQueries.sm} {
    display: flex;
    justify-content: flex-end;

    button {
      display: inline-block;
      width: auto;
    }

    button:first-child {
      margin-right: 16px;
      margin-bottom: 0;
    }
  }
`;
// -- End Right Side Form --

// List Group 2
const ListGroup2 = styled.ul`
  display: flex;
  flex-direction: column;
  padding-left: 0;
  /* stylelint-disable no-descending-specificity */
  > li {
    list-style: none;
    box-shadow: ${({ theme }) => theme.boxShadows.md};
    padding: 12px 20px;
    background-color: #fbfbfb;
    border-radius: 4px;

    &:not(:last-child) {
      margin-bottom: 24px;
    }
  }

  ${({ theme }) => theme.mediaQueries.sm} {
    > li {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }
`;

const AvatarWrapper = styled.div`
  display: flex;
  margin-bottom: 16px;

  ${({ theme }) => theme.mediaQueries.sm} {
    margin-bottom: 0;
  }
`;

const Avatar = styled.div`
  flex: 0 0 auto;
  margin-right: 1rem;

  > img {
    display: block;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: #f7f7f7;
  }
`;

const InfoWrapper = styled.div`
  flex: 1 1 auto;
  text-align: left;
`;

const PersonName = styled.p`
  font-size: 14px;
  color: ${({ theme: { colors } }) => colors.text.title};
  margin-bottom: 0;
  font-weight: 500;
`;

const PersonAmount = styled.p`
  font-size: 14px;
  color: ${({ theme: { colors } }) => colors.text.title};
  margin-bottom: 0;
  font-weight: 500;
  span {
    font-weight: 400;
    color: ${({ theme: { colors } }) => colors.text.primary};
  }
`;

const Badge = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px 16px;
  border-radius: 9999px;

  font-size: 14px;
  font-weight: 500;

  &:before {
    content: '';
    width: 8px;
    height: 8px;
    border-radius: 50%;
    margin-right: 8px;
  }

  ${props => {
    const {
      theme: { palettes }
    } = props;
    if (props.status === 'info') {
      return css`
        background-color: ${palettes.primary[0]};
        color: ${palettes.primary[5]};
        &:before {
          background-color: ${palettes.primary[5]};
        }
      `;
    } else if (props.status === 'success') {
      return css`
        background-color: ${palettes.success[0]};
        color: ${palettes.success[5]};
        &:before {
          background-color: ${palettes.success[5]};
        }
      `;
    }
  }}
`;

// -- End --

// <= End Dependent styled-components

const typeASchema = {
  title: 'We takes away the hard process',
  description:
    "We believe brand interaction is key in communication. Real innovations and a positive customer experience are the heart of successful communication. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s and used by everywhere.",
  shift: false,
  features: [
    {
      id: 1,
      icon: <Icon name="database" />,
      title: 'Marketing Analysis rates',
      description:
        'We believe brand interaction is key in communication. Real innovations and a positive customer experience are the heart of successful communication. No fake products and services.'
    },
    {
      id: 2,
      icon: <Icon name="code" />,
      title: 'Website Optimization rates',
      description:
        'We believe brand interaction is key in communication. Real innovations and a positive customer experience are the heart of successful communication. No fake products and services.'
    },
    {
      id: 3,
      icon: <Icon name="clock" />,
      title: 'SEO Analysis rates',
      description:
        'We believe brand interaction is key in communication. Real innovations and a positive customer experience are the heart of successful communication. No fake products and services.'
    }
  ]
};

const typeBSchema = {
  title: 'Always in the loop',
  description:
    "We believe brand interaction is key in communication. Real innovations and a positive customer experience are the heart of successful communication. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s and used by everywhere.",
  shift: true,
  features: [
    {
      id: 1,
      icon: <Icon name="database" />,
      title: 'Marketing Analysis rates',
      description:
        'We believe brand interaction is key in communication. Real innovations and a positive customer experience are the heart of successful communication. No fake products and services.'
    },
    {
      id: 2,
      icon: <Icon name="code" />,
      title: 'Website Optimization rates',
      description:
        'We believe brand interaction is key in communication. Real innovations and a positive customer experience are the heart of successful communication. No fake products and services.'
    },
    {
      id: 3,
      icon: <Icon name="clock" />,
      title: 'SEO Analysis rates',
      description:
        'We believe brand interaction is key in communication. Real innovations and a positive customer experience are the heart of successful communication. No fake products and services.'
    }
  ]
};

const featureShape = {
  id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  icon: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
};

const typeShape = {
  shift: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  features: PropTypes.arrayOf(PropTypes.shape(featureShape)).isRequired
};

const propTypes = {
  /** The title for the feature section. */
  title: PropTypes.string.isRequired,
  /** The description for the feature section. */
  description: PropTypes.string.isRequired,
  /** The following feature section is divided into 2 types of data
      Type-A and Type-B. Both have an object datatype. Type-A will appear above. Type-B will
      appear below Type-A. */
  typeA: PropTypes.shape(typeShape),
  typeB: PropTypes.shape(typeShape)
};

const defaultProps = {
  title: 'Creative features with optimal choices',
  description:
    'We believe brand interaction is key in communication. Real innovations and a positive customer experience are the heart of successful communication.',
  typeA: typeASchema,
  typeB: typeBSchema
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
 * It will render the data of your type.
 * @param type {object} - A type object
 * @return {*} - Returns the JSX
 */
const renderData = type => {
  return (
    <ColumnModify lg={6}>
      {/* It contains all the stuff */}
      <div>
        {/*	 Upper Part */}
        <FeatureUpper>
          <FeatureUpperTitle>{type.title}</FeatureUpperTitle>

          <FeatureUpperDescription>{type.description}</FeatureUpperDescription>
        </FeatureUpper>

        {Array.isArray(type.features) && type.features.length > 0
          ? type.features.map(({ id, icon, title, description }) => {
              return (
                <CardFeature key={id}>
                  <CardFeatureBody>
                    <CardFeatureIconWrapper>
                      <CardFeatureSvgWrapper>
                        {renderIcon(icon)}
                      </CardFeatureSvgWrapper>
                    </CardFeatureIconWrapper>
                    <CardFeatureContent>
                      <CardHeading>{title}</CardHeading>
                      <CardDescription>{description}</CardDescription>
                    </CardFeatureContent>
                  </CardFeatureBody>
                </CardFeature>
              );
            })
          : null}
      </div>
    </ColumnModify>
  );
};

/**
 * It will render the type structure.
 * @param typeA {object} - A typeA data
 * @param typeB {object} - A typeB data
 * @return {null|*} - Returns the JSX or null
 */
const renderBody = (typeA, typeB) => {
  if (
    (typeA != null &&
      (typeof typeA === 'object' || typeof typeA === 'function')) ||
    (typeB != null &&
      (typeof typeB === 'object' || typeof typeB === 'function'))
  ) {
    // Image 1
    const col1 = (
      <ColumnModify lg={6}>
        <FormWrapper>
          <form method="post">
            {/* Header */}
            <FormHeader>
              <HeaderH4>Request quote</HeaderH4>
              <HeaderP>
                Select a service and the amount you want to send
              </HeaderP>

              <FormGroup>
                <Label htmlFor="service">Service</Label>
                <Input type="select" id="service" defaultValue="web">
                  <option value="" disabled>
                    Which Service Are You Interested In?
                  </option>
                  <option value="web">Web Development</option>
                  <option value="progressive">
                    Progressive Web application
                  </option>
                </Input>
              </FormGroup>
            </FormHeader>

            {/* Body */}
            <FormBody>
              <FormBodyContent>
                {/* Group */}
                <div>
                  <Label htmlFor="currency">
                    How much do you want to spend
                  </Label>
                  <GroupInput>
                    <div>
                      {/* Input text */}
                      <Input
                        type="text"
                        id="currency"
                        placeholder="$0.00"
                        autoComplete="off"
                        defaultValue="$1000"
                      />
                    </div>
                    <div>
                      {/* Select Icon Group */}
                      <SelectIconGroup>
                        <Input type="select" defaultValue="cad">
                          <option value="" disabled>
                            Choose currency?
                          </option>
                          <option value="cad">CAD</option>
                          <option value="usd">USD</option>
                        </Input>
                        <SelectIconWrapper>
                          <CountryFlagCanada width={28} height={28} />
                        </SelectIconWrapper>
                      </SelectIconGroup>
                    </div>
                  </GroupInput>
                </div>

                {/* List Group */}
                <ListGroup>
                  <li>
                    <span>$12.17 CAD</span>
                    <span>Total Fee</span>
                  </li>
                  <li>
                    <span>0.754129</span>
                    <span>Exchange Rate</span>
                  </li>
                </ListGroup>

                {/* Group */}
                <div>
                  <Label htmlFor="recipient">Recipient gets</Label>
                  <GroupInput>
                    <div>
                      {/* Input text */}
                      <Input
                        type="text"
                        id="recipient"
                        placeholder="$0.00"
                        autoComplete="off"
                        defaultValue="$744.95"
                      />
                    </div>
                    <div>
                      {/* Select Icon Group */}
                      <SelectIconGroup>
                        <Input type="select" defaultValue="cad">
                          <option value="" disabled>
                            Choose currency?
                          </option>
                          <option value="cad">CAD</option>
                          <option value="usd">USD</option>
                        </Input>
                        <SelectIconWrapper>
                          <CountryFlagCanada width={28} height={28} />
                        </SelectIconWrapper>
                      </SelectIconGroup>
                    </div>
                  </GroupInput>
                </div>
              </FormBodyContent>
            </FormBody>

            {/* Footer */}
            <FormFooter>
              <Button type="button" variation="light">
                Cancel
              </Button>
              <Button type="submit" color="primary" variation="fill">
                Submit
              </Button>
            </FormFooter>
          </form>
        </FormWrapper>
      </ColumnModify>
    );
    // Image 2
    const col2 = (
      <ColumnModify lg={6}>
        <ListGroup2>
          <li>
            <AvatarWrapper>
              <Avatar>
                <img src="https://i.imgur.com/F80hD1h.jpg" alt="Avatar" />
              </Avatar>
              <InfoWrapper>
                <PersonName>Payment to Alexandra Suda</PersonName>
                <PersonAmount>
                  $20,000 <span>USD</span>
                </PersonAmount>
              </InfoWrapper>
            </AvatarWrapper>

            <Badge status="info">Finished</Badge>
          </li>

          <li>
            <AvatarWrapper>
              <Avatar>
                <img src="https://i.imgur.com/ILmHmHq.jpg" alt="Avatar" />
              </Avatar>
              <InfoWrapper>
                <PersonName>Payment to Aleksandr Solzhenitsyn</PersonName>
                <PersonAmount>
                  $20,000 <span>USD</span>
                </PersonAmount>
              </InfoWrapper>
            </AvatarWrapper>

            <Badge status="success">Success</Badge>
          </li>

          <li>
            <AvatarWrapper>
              <Avatar>
                <img src="https://i.imgur.com/F80hD1h.jpg" alt="Avatar" />
              </Avatar>
              <InfoWrapper>
                <PersonName>Payment to Alexandra Suda</PersonName>
                <PersonAmount>
                  $20,000 <span>USD</span>
                </PersonAmount>
              </InfoWrapper>
            </AvatarWrapper>

            <Badge status="info">Finished</Badge>
          </li>

          <li>
            <AvatarWrapper>
              <Avatar>
                <img src="https://i.imgur.com/ILmHmHq.jpg" alt="Avatar" />
              </Avatar>
              <InfoWrapper>
                <PersonName>Payment to Aleksandr Solzhenitsyn</PersonName>
                <PersonAmount>
                  $20,000 <span>USD</span>
                </PersonAmount>
              </InfoWrapper>
            </AvatarWrapper>

            <Badge status="success">Success</Badge>
          </li>

          <li>
            <AvatarWrapper>
              <Avatar>
                <img src="https://i.imgur.com/F80hD1h.jpg" alt="Avatar" />
              </Avatar>
              <InfoWrapper>
                <PersonName>Payment to Alexandra Suda</PersonName>
                <PersonAmount>
                  $20,000 <span>USD</span>
                </PersonAmount>
              </InfoWrapper>
            </AvatarWrapper>

            <Badge status="info">Finished</Badge>
          </li>
        </ListGroup2>
      </ColumnModify>
    );

    return (
      <div>
        <FeatureContainer fluid>
          <Row>
            {typeA.shift ? (
              <>
                {renderData(typeA)}
                {col1}
              </>
            ) : (
              <>
                {renderData(typeA)}
                {col1}
              </>
            )}
            {typeB.shift ? (
              <>
                {col2}
                {renderData(typeB)}
              </>
            ) : (
              <>
                {renderData(typeB)}
                {col2}
              </>
            )}
          </Row>
        </FeatureContainer>
      </div>
    );
  } else {
    return null;
  }
};

export const Feature5 = props => {
  const { title, description, typeA, typeB, ...attributes } = props;

  return (
    <Feature {...attributes}>
      <FeatureHeader>
        <FeatureContainer fluid>
          <FeatureTitle>{title}</FeatureTitle>

          <FeatureDescription>{description}</FeatureDescription>
        </FeatureContainer>
      </FeatureHeader>
      {/* SecondPart */}
      {renderBody(typeA, typeB)}
    </Feature>
  );
};

Feature5.propTypes = propTypes;
Feature5.defaultProps = defaultProps;
