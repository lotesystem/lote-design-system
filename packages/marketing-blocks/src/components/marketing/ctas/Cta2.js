import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Button } from '@lote-design-system/core';

// => Dependent styled-components

// Our main component depends upon the following styled-components

const CtaContent = styled.div`
  background: ${({ theme }) => theme.palettes.primary[4]};
  color: #fff;
  padding: 48px 64px;
  text-align: center;
`;

const CtaText = styled.h1`
  font-size: 24px;
  font-weight: 400;
  max-width: 400px;
  margin: 18px auto;
  color: #fff;
`;

const CtaDescription = styled.p`
  font-size: 16px;
  max-width: 460px;
  margin: 18px auto;
  color: #fff;
`;

const CtaButton = styled(Button)`
  padding: 16px 56px;
  font-size: 14px;
  font-weight: 600;
  margin: 8px;
  display: block;
  width: 100%;

  ${({ theme }) => theme.mediaQueries.sm} {
    display: inline-block;
    width: auto;
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
  { id: 1, href: '/', text: 'Join us', variation: 'primarySubtle' },
  { id: 2, href: '/', text: 'Buy now', variation: 'white' }
];

const propTypes = {
  /** The Main text for the Cta. */
  text: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
  /** Description for the Cta. */
  description: PropTypes.oneOfType([PropTypes.string, PropTypes.node])
    .isRequired,
  /** Links appear on the Cta. */
  links: PropTypes.arrayOf(PropTypes.shape(linkShape))
};

const defaultProps = {
  text: 'Purchase Stack now and get lifetime',
  description:
    'Each purchase of Stack comes with six months free support — and a lifetime of free content and bug-fix updates.',
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
      <div>
        {data.map(({ id, href, text, variation, color }) => {
          return (
            <CtaButton key={id} href={href} variation={variation} color={color}>
              {text}
            </CtaButton>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
};

export const Cta2 = props => {
  const { text, description, links, ...attributes } = props;
  return (
    <CtaContent {...attributes}>
      {text ? <CtaText>{text}</CtaText> : null}
      {description ? <CtaDescription>{description}</CtaDescription> : null}
      {/* Render links */}
      {renderLinks(links)}
    </CtaContent>
  );
};

Cta2.propTypes = propTypes;
Cta2.defaultProps = defaultProps;
