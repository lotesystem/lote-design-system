import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// => Dependent styled-components
// Our main component depends upon the following styled-components

const CtaItem = styled.div`
  text-align: center;
`;

const CtaContent = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  padding: 24px 46px;
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;

  ${({ theme }) => theme.mediaQueries.md} {
    flex-direction: row;
  }
`;

const CtaBadge = styled.div`
  background-color: ${({ theme }) => theme.colors.primary};
  color: #fff;
  display: inline-block;
  font-size: 14px;
  border-radius: 22px;
  padding: 8px 20px;
  margin: 8px;
`;

const CtaText = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.colors.text.primary};
  font-size: 16px;

  a {
    color: ${({ theme }) => theme.colors.primary};
    transition: color 0.5s ease;
    text-decoration: underline;
    &:hover {
      color: ${({ theme }) => theme.palettes.primary[6]};
    }
  }
`;

// <= End Dependent styled-components

const propTypes = {
  /** The text for the Cta. */
  ctaText: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
  /** The text for the Badge. */
  badgeText: PropTypes.string
};

const defaultProps = {
  ctaText: (
    <span>
      We are offering a
      <strong style={{ margin: '0 4px' }}>14-days trail</strong>. Please
      <a href="/" style={{ margin: '0 4px' }}>
        Purchase Stack
      </a>
      for $18 USD.
    </span>
  ),
  badgeText: 'Hot Sale'
};

/**
 * The text for the Badge.
 * @param text {string} - The text will appear on the badge
 * @return {null|*}
 */
const renderBadge = text => {
  if (typeof text === 'string' && text.length > 0) {
    return (
      <CtaItem>
        <CtaBadge>{text}</CtaBadge>
      </CtaItem>
    );
  } else {
    return null;
  }
};

/**
 * Render text on the Cta.
 * @param text {*} - The text appear on the Cta
 * @return {null|*}
 */
const renderText = text => {
  if (text) {
    return (
      <CtaItem>
        <CtaText>{text}</CtaText>
      </CtaItem>
    );
  } else {
    return null;
  }
};

export const Cta1 = props => {
  const { ctaText, badgeText, ...attributes } = props;
  return (
    <CtaContent {...attributes}>
      {/* Render badge */}
      {renderBadge(badgeText)}
      {/* Render Text */}
      {renderText(ctaText)}
    </CtaContent>
  );
};

Cta1.propTypes = propTypes;
Cta1.defaultProps = defaultProps;
