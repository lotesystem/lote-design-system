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

const Newsletter = styled.div`
  background-color: ${({ theme: { colors } }) => colors.text.title};
  padding: 96px 0;
`;

const ContainerModify = styled(Container)`
  max-width: ${({ theme }) => theme.maxContainerWidth};
`;

const ColumnModify = styled(Column)`
  margin-bottom: 30px;

  ${({ theme }) => theme.mediaQueries.lg} {
    margin-bottom: 0;
  }
`;

const NewsletterHeading = styled.h1`
  color: #fff;
  font-size: 32px;
  font-weight: 700;
  margin-bottom: 8px;
`;

const NewsletterDescription = styled.p`
  font-size: 14px;
  color: #fff;
  margin-bottom: 0;
`;

const NewsletterGroup = styled.div`
  > input {
    margin-bottom: 12px;
  }

  ${({ theme }) => theme.mediaQueries.sm} {
    display: flex;
    flex-wrap: wrap;
    align-items: stretch;

    > input {
      position: relative;
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

const NewsletterPolicy = styled.p`
  font-size: 14px;
  color: #fff;
  margin-top: 12px;
  margin-bottom: 0;

  a {
    color: #fff;
    text-decoration: underline;
    &:hover {
      text-decoration: none;
    }
  }
`;

// <= End Dependent styled-components

const propTypes = {
  /** The Major text for the Newsletter. */
  majorText: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
  /** The Minor text for the Newsletter. */
  description: PropTypes.oneOfType([PropTypes.string, PropTypes.node])
    .isRequired,
  /** The policy text for the Newsletter. */
  policyText: PropTypes.oneOfType([PropTypes.string, PropTypes.node])
    .isRequired,
  /** The input properties for the Newsletter. */
  input: PropTypes.shape({
    placeholder: PropTypes.string.isRequired
  }).isRequired,
  /** The button properties for the Newsletter. */
  button: PropTypes.shape({
    text: PropTypes.string.isRequired,
    variation: PropTypes.string.isRequired,
    color: PropTypes.string
  }).isRequired
};

const defaultProps = {
  majorText: 'Sign up for our newsletter',
  description:
    'We believe brand interaction is key in communication. Real innovations and a positive customer experience are the heart of satisfaction.',
  policyText: (
    <span>
      We care about the protection of your data. Read our{' '}
      <a href="/">Privacy Policy.</a>
    </span>
  ),
  input: {
    placeholder: 'Enter your email'
  },
  button: {
    text: 'Notify me',
    variation: 'fill'
  }
};

export const Newsletter2 = props => {
  const {
    majorText,
    description,
    policyText,
    input,
    button,
    ...attributes
  } = props;
  const { placeholder, ...inputMore } = input;
  const { variation, text, color, ...buttonMore } = button;

  return (
    <Newsletter {...attributes}>
      <ContainerModify fluid>
        <Row>
          <ColumnModify lg={6}>
            <NewsletterHeading>{majorText}</NewsletterHeading>

            <NewsletterDescription>{description}</NewsletterDescription>
          </ColumnModify>

          <ColumnModify lg={6}>
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
            <NewsletterPolicy>{policyText}</NewsletterPolicy>
          </ColumnModify>
        </Row>
      </ContainerModify>
    </Newsletter>
  );
};

Newsletter2.propTypes = propTypes;
Newsletter2.defaultProps = defaultProps;
