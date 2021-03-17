import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Container } from '@lote-design-system/core';
import { Caravan, QuoteRight1 } from '../svg';

// => Dependent styled-components
// Our main component depends upon the following styled-components

const Testimonial = styled.div`
  padding: 96px 0;
`;

const ContainerModify = styled(Container)`
  max-width: ${({ theme }) => theme.maxContainerWidth};
`;

const TestimonialBrandLogo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 22px;
`;

const Brand = styled.span`
  margin-right: 8px;
  > svg,
  > img {
    width: 36px;
    height: 36px;
  }
`;

const Text = styled.span`
  font-size: 16px;
  font-weight: 700;
  color: ${({ theme: { colors } }) => colors.secondary};
`;

const Blockquote = styled.blockquote`
  max-width: 720px;
  margin: 0 auto 22px;
  position: relative;

  text-align: center;
  font-size: 20px;
  color: ${({ theme: { colors } }) => colors.text.title};
  > p {
    margin-bottom: 0;
  }

  > svg {
    position: absolute;
    width: 60px;
    height: 60px;
    color: ${({ theme: { colors } }) => colors.text.dividers};
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
`;

const TestimonialInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  > img {
    display: block;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: #f7f7f7;
    margin-right: 1rem;
  }
`;

const BlockquoteInfoList = styled.ol`
  list-style: none;
  padding-left: 0;
  margin-bottom: 0;

  > li {
    font-size: 14px;
    font-weight: 700;
    color: ${({ theme: { colors } }) => colors.text.title};
  }

  ${({ theme }) => theme.mediaQueries.sm} {
    display: flex;
    flex-wrap: wrap;
    > li + li {
      padding-left: 8px;
      &:before {
        display: inline-block;
        padding-right: 8px;
        color: ${({ theme: { colors } }) => colors.primary};
        content: '/';
      }
    }
  }
`;

// <= End Dependent styled-components

/*
 * We cannot set default theme colors for third party brand logos.
 * A brand logo is made up of different colors. Therefore, it is better
 * to set the brand logo as an `SVG` element that is already full of colors
 * or can also be set in the form of an image element.
 */
const brandShape = {
  logo: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
  text: PropTypes.oneOfType([PropTypes.string, PropTypes.node])
};

const defaultBrandSchema = {
  logo: <Caravan color="#3a3838" />,
  text: (
    <span>
      Bloom<span style={{ color: '#01A1FF' }}>station</span>
    </span>
  )
};

const propTypes = {
  /** The brand logo for the testimonial, default it will from the ui-kit. */
  brand: PropTypes.shape(brandShape).isRequired,
  /** The quote for the testimonial. */
  quote: PropTypes.string.isRequired,
  /** Quote Author. */
  author: PropTypes.string.isRequired,
  /** Author Image. */
  authorImage: PropTypes.string.isRequired,
  /** Author Designation. */
  designation: PropTypes.string,
  /** Author Company. */
  company: PropTypes.string
};

const defaultProps = {
  brand: defaultBrandSchema,
  quote:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.',
  author: 'Alexandra Suda',
  authorImage: 'https://i.imgur.com/F80hD1h.jpg',
  designation: 'CEO',
  company: 'Bloomstation'
};

/**
 * Returns the JSX or null for the logo.
 * @param logo {*} - The logo will React.element or a path
 * @return {null|*} - Returns the JSX or null
 */
const renderLogo = logo => {
  if (React.isValidElement(logo)) {
    return logo;
  } else if (typeof logo === 'string' && logo.length > 0) {
    return <img src={logo} alt="Brand Logo" />;
  } else {
    return null;
  }
};

/**
 * Modified Brand and return a new object.
 * @param logo {*} - A brand logo
 * @param text {string} - A brand name text
 * @return {{logo: *, text: {string}}} - Returns the object
 */
const modifiedBrand = ({ logo, text }) => {
  if (typeof logo === 'string' && !logo.length > 0) {
    return {
      logo: <Caravan color="#3a3838" />,
      text
    };
  } else {
    return { logo, text };
  }
};

export const Testimonial1 = props => {
  const {
    brand,
    quote,
    author,
    authorImage,
    designation,
    company,
    ...attributes
  } = props;

  const modifyBrand = modifiedBrand(brand);

  return (
    <Testimonial {...attributes}>
      <ContainerModify fluid>
        <div>
          {/* TestimonialBrandLogo */}
          <TestimonialBrandLogo>
            <Brand>{renderLogo(modifyBrand.logo)}</Brand>
            {modifyBrand.text ? <Text>{modifyBrand.text}</Text> : null}
          </TestimonialBrandLogo>

          {/* Testimonial */}
          <Blockquote>
            <p>“{quote}“</p>
            <QuoteRight1 />
          </Blockquote>

          {/* Testimonial Info */}
          <TestimonialInfo>
            <img src={authorImage} alt={author} />
            <BlockquoteInfoList>
              <li>{author}</li>
              {designation && (
                <li>
                  {designation}
                  {company ? `, ${company}` : null}
                </li>
              )}
            </BlockquoteInfoList>
          </TestimonialInfo>
        </div>
      </ContainerModify>
    </Testimonial>
  );
};

Testimonial1.propTypes = propTypes;
Testimonial1.defaultProps = defaultProps;
