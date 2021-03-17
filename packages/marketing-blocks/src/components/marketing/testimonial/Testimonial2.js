import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { Container, Row, Column } from '@lote-design-system/core';
import { Caravan, QuoteRight2 } from '../svg';

// => Dependent styled-components
// Our main component depends upon the following styled-components

const TestimonialContent = styled.div`
  background-color: ${({ theme }) => theme.palettes.primary[7]};
  position: relative;
  padding: 96px 32px;

  ${({ border }) => {
    if (border) {
      return css`
        ${({ theme }) => theme.mediaQueries.lg} {
          border-right: 2px solid ${({ theme }) => theme.palettes.primary[8]};
        }
      `;
    }
  }};
`;

const ContainerModify = styled(Container)`
  max-width: ${({ theme }) => theme.maxContainerWidth};

  ${({ theme }) => theme.mediaQueries.lg} {
    padding-left: 0;
    padding-right: 0;
  }
`;

const RowModify = styled(Row)`
  ${({ theme }) => theme.mediaQueries.lg} {
    margin-left: 0;
    margin-right: 0;
  }
`;

const ColumnModify = styled(Column)`
  margin-bottom: 30px;
  ${({ theme }) => theme.mediaQueries.lg} {
    margin-bottom: 0;
    padding-right: 0;
    padding-left: 0;
  }
`;

const TestimonialBrandLogo = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 22px;
`;

const Brand = styled.span`
  margin-right: 8px;
  > svg {
    width: 36px;
    height: 36px;
  }
`;

const Text = styled.span`
  font-size: 16px;
  font-weight: 700;
  color: ${({ theme: { colors } }) => colors.primary};
  ${({ color }) => {
    if (color) {
      return css`
        & {
          color: ${color};
        }
      `;
    }
  }};
`;

const Blockquote = styled.blockquote`
  max-width: 540px;
  margin-bottom: 22px;

  font-size: 20px;
  color: #fff;

  > p {
    margin-bottom: 0;
  }
`;

const TestimonialInfo = styled.div`
  display: flex;
  align-items: center;

  > img {
    display: block;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: #f7f7f7;
    margin-right: 1rem;
    border: 2px solid #fff;
  }
`;

const BlockquoteInfoList = styled.ol`
  list-style: none;
  padding-left: 0;
  margin-bottom: 0;

  > li {
    font-size: 14px;
    color: #fff;
  }
  > li + li {
    color: ${({ theme: { colors } }) => colors.primary};
  }
`;

const QuoteSvgWrapper = styled.span`
  position: absolute;
  bottom: 16px;
  right: 46px;

  > svg {
    width: 60px;
    height: 60px;
    color: ${({ theme }) => theme.palettes.primary[8]};
  }
`;

// <= End Dependent styled-components

const quote =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.';

const testimonialSchema = [
  {
    id: 1,
    brand: {
      logo: <Caravan color="#01a1ff" />,
      text: 'Bloomstation'
    },
    quote: quote,
    author: 'Alexandra Suda',
    authorImage: 'https://i.imgur.com/F80hD1h.jpg',
    designation: 'CEO',
    company: 'Bloomstation'
  },
  {
    id: 2,
    brand: {
      logo: <Caravan color="#01a1ff" />,
      text: 'BlocksBoot'
    },
    quote: quote,
    author: 'Aleksandr Solzhenitsyn',
    authorImage: 'https://i.imgur.com/ILmHmHq.jpg',
    designation: 'CEO',
    company: 'BlocksBoot'
  }
];

/*
 * We cannot set default theme colors for third party brand logos.
 * A brand logo is made up of different colors. Therefore, it is better
 * to set the brand logo as an `SVG` element that is already full of colors
 * or can also be set in the form of an image element.
 */
const brandShape = {
  logo: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
  text: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  color: PropTypes.string
};

const testimonialShape = {
  id: PropTypes.number.isRequired,
  brand: PropTypes.shape(brandShape).isRequired,
  quote: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  authorImage: PropTypes.string.isRequired,
  designation: PropTypes.string,
  company: PropTypes.string
};

const propTypes = {
  /** The testimonials data. */
  testimonials: PropTypes.arrayOf(PropTypes.shape(testimonialShape)).isRequired
};

const defaultProps = {
  testimonials: testimonialSchema
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
 * @param brand {object} - A brand object
 * @return {object} - Returns the object
 */
const modifiedBrand = brand => {
  if (brand && typeof brand.logo === 'string' && !brand.logo.length > 0) {
    return {
      ...brand,
      logo: <Caravan color="#01a1ff" />
    };
  } else {
    return brand;
  }
};

/**
 * Render schema for the Testimonial
 * @param data {Array} - Schema for the testimonial
 * @return {null|*}
 */
const renderBody = data => {
  if (Array.isArray(data) && data.length > 0) {
    const total = data.length;
    return data.map(
      (
        { id, brand, quote, author, authorImage, designation, company },
        index
      ) => {
        // Border manipulation
        let bd = false;
        if (index < total - 1) {
          bd = true;
        }
        // Brand manipulation
        const modifyBrand = modifiedBrand(brand);
        return (
          <ColumnModify lg={6} key={id}>
            <TestimonialContent border={bd}>
              {/* TestimonialBrandLogo */}
              <TestimonialBrandLogo>
                <Brand>{renderLogo(modifyBrand.logo)}</Brand>
                {modifyBrand.text ? (
                  <Text color={modifyBrand.color}>{modifyBrand.text}</Text>
                ) : null}
              </TestimonialBrandLogo>

              {/* Testimonial */}
              <Blockquote>
                <p>“{quote}“</p>
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

              {/* QuoteSvg */}
              <QuoteSvgWrapper>
                <QuoteRight2 />
              </QuoteSvgWrapper>
            </TestimonialContent>
          </ColumnModify>
        );
      }
    );
  } else {
    return null;
  }
};

export const Testimonial2 = props => {
  const { testimonials, ...attributes } = props;

  return (
    <div {...attributes}>
      <ContainerModify fluid>
        <RowModify>{renderBody(testimonials)}</RowModify>
      </ContainerModify>
    </div>
  );
};

Testimonial2.propTypes = propTypes;
Testimonial2.defaultProps = defaultProps;
