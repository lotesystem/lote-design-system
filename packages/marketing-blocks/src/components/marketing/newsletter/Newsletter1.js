import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Button, Input, Text } from '@lote-design-system/core';

// => Dependent styled-components
// Our main component depends upon the following styled-components

const Newsletter = styled.div`
  background-color: #fff;
  padding: 96px 64px;
`;

const NewsletterHeading = styled(Text)`
  color: ${({ theme: { colors } }) => colors.secondary};
  font-weight: 700;
  margin-bottom: 24px;

  > span {
    display: block;
  }
  > span:last-child {
    color: ${({ theme: { colors } }) => colors.primary};
  }
`;

const NewsletterGroup = styled.div`
  > input {
    margin-bottom: 12px;
  }

  ${({ theme }) => theme.mediaQueries.sm} {
    display: flex;
    flex-wrap: wrap;
    align-items: stretch;
    max-width: 540px;

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

// <= End Dependent styled-components

const propTypes = {
  /** The Major text for the Newsletter. */
  majorText: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
  /** The Minor text for the Newsletter. */
  minorText: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
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
  majorText: 'Receive news and any answer?',
  minorText: 'Sign up for our newsletter.',
  input: {
    placeholder: 'Enter your email'
  },
  button: {
    text: 'Notify me',
    variation: 'fill'
  }
};

export const Newsletter1 = props => {
  const { majorText, minorText, input, button, ...attributes } = props;
  const { placeholder, ...inputMore } = input;
  const { variation, text, color, ...buttonMore } = button;

  return (
    <Newsletter {...attributes}>
      <NewsletterHeading fSize={48}>
        <span>{majorText}</span>
        <span>{minorText}</span>
      </NewsletterHeading>

      <NewsletterGroup>
        <Input
          type="text"
          placeholder={input.placeholder}
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
    </Newsletter>
  );
};

Newsletter1.propTypes = propTypes;
Newsletter1.defaultProps = defaultProps;
