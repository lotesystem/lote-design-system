import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Text, Button } from '@lote-design-system/core';

// => Dependent styled-components
// Our main component depends upon the following styled-components

const Cta = styled.div`
  background-color: #fff;
  padding: 96px 64px;
  text-align: center;
`;

const CtaText = styled(Text)`
  color: ${({ theme: { colors } }) => colors.secondary};
  font-weight: 700;
  margin-bottom: 24px;
  > span {
    display: block;
  }
`;

const CtaGroup = styled.div`
  > a {
    padding: 12px 30px;
    font-size: 20px;
    display: block;
    width: 100%;
  }

  > a:not(:last-child) {
    margin-right: 0;
    margin-bottom: 8px;
  }

  ${({ theme }) => theme.mediaQueries.md} {
    display: inline-flex;
    vertical-align: middle;
    > a {
      flex: 1 1 auto;

      display: inline-block;
      width: auto;
    }

    > a:not(:last-child) {
      margin-right: 16px;
      margin-bottom: 0;
    }
  }
`;

// <= End Dependent styled-components
const linkShape = {
  id: PropTypes.number.isRequired,
  href: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  variation: PropTypes.string.isRequired,
  color: PropTypes.string
};

const linkSchema = [
  {
    id: 1,
    href: '/',
    text: 'Get Started',
    variation: 'fill',
    color: 'primary'
  },
  { id: 2, href: '/', text: 'Sign up', variation: 'primarySubtle' }
];

const propTypes = {
  /** The Major text for the Cta. */
  majorText: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
  /** The Minor text for the Cta. */
  minorText: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
  /** Links appear on the Cta. */
  links: PropTypes.arrayOf(PropTypes.shape(linkShape))
};

const defaultProps = {
  majorText: 'Ready to dive in?',
  minorText: 'Start your free trial today.',
  links: linkSchema
};

/**
 * Render Links for the Cta
 * @param data {Array} - Links schema for the Cta
 * @return {null|*} - Returns the JSX or null
 */
const renderLinks = data => {
  if (Array.isArray(data) && data.length > 0) {
    return (
      <CtaGroup>
        {data.map(({ id, href, text, variation, color }) => {
          return (
            <Button key={id} href={href} variation={variation} color={color}>
              {text}
            </Button>
          );
        })}
      </CtaGroup>
    );
  } else {
    return null;
  }
};

export const Cta3 = props => {
  const { majorText, minorText, links, ...attributes } = props;

  return (
    <Cta {...attributes}>
      <CtaText fSize={48}>
        <span>{majorText}</span>
        <span>{minorText}</span>
      </CtaText>
      {/* Render links */}
      {renderLinks(links)}
    </Cta>
  );
};

Cta3.propTypes = propTypes;
Cta3.defaultProps = defaultProps;
