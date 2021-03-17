import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { rem } from 'polished';
import { Container, Row, Column } from '@lote-design-system/core';
import { LogoDefault } from '../svg';

// => Dependent styled-components

// Our main component depends upon the following styled-components

const ContainerModify = styled(Container)`
  max-width: ${({ theme }) => theme.maxContainerWidth};
`;

const ColumnModify = styled(Column)`
  margin-bottom: 30px;
`;

const FooterContent = styled.footer`
  background-color: ${({ theme }) => theme.colors.secondary};
  padding: 96px 0;
`;

const FooterBrand = styled.a`
  display: inline-flex;
  align-items: center;
  padding: ${rem(4)} 0;
  white-space: nowrap;
  > svg,
  > img {
    width: 56px;
    height: 56px;
  }
`;

const FooterText = styled.p`
  color: #fff;
  font-size: 14px;
`;

const FooterHeading = styled.h5`
  margin: 8px 0;
  color: #fff;
  font-size: 20px;
  font-weight: 700;
`;

const FooterList = styled.ul`
  margin: 0;
  padding: 0;
  li {
    list-style: none;
    a {
      display: inline-block;
      padding: 8px 0;
      color: #fff;
      font-size: 14px;
      transition: color 0.4s ease;
      &:hover {
        color: ${({ theme }) => theme.colors.primary};
      }
    }
  }
`;

// <= End Dependent styled-components

const colCopyrightSchema = {
  logo: <LogoDefault fill="#01a1ff" />,
  text: '© 2020 UI-Kit, Inc. All rights reserved'
};

const colSchema = [
  {
    title: 'Company',
    links: [
      { id: 1, href: '/about', text: 'About' },
      { id: 2, href: '/blog', text: 'Blog' },
      { id: 3, href: '/jobs', text: 'Jobs' },
      { id: 4, href: '/press', text: 'Press' }
    ]
  },
  {
    title: 'Support',
    links: [
      { id: 1, href: '/pricing', text: 'Pricing' },
      { id: 2, href: '/documentation', text: 'Documentation' },
      { id: 3, href: '/guides', text: 'Guides' },
      { id: 4, href: '/api-status', text: 'API Status' }
    ]
  },
  {
    title: 'Legal',
    links: [
      { id: 1, href: '/claim', text: 'Claim' },
      { id: 2, href: '/privacy', text: 'Privacy' },
      { id: 3, href: '/terms', text: 'Terms' }
    ]
  }
];

const colCopyrightShape = {
  /** The logo appear on the footer on the Copyright column, default it will be ui-kit logo. */
  logo: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
  /** The copyright text. */
  text: PropTypes.string.isRequired
};

const colShape = {
  /** The main title which represents the category of different links. */
  title: PropTypes.string.isRequired,
  /** Array of links */
  links: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      href: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired
    })
  ).isRequired
};

const propTypes = {
  /* The default footer will have a 12 column structure. Please provide the responsive breakpoint for a
   column and that breakpoint will be automatically registered for each column. */
  colApi: PropTypes.shape({
    sm: PropTypes.number,
    md: PropTypes.number,
    lg: PropTypes.number,
    xl: PropTypes.number
  }).isRequired,
  /** Copyright column. */
  colCopyright: PropTypes.shape(colCopyrightShape).isRequired,
  /** Define your columns schema based on the 12 column structure. */
  cols: PropTypes.arrayOf(PropTypes.shape(colShape)).isRequired
};

const defaultProps = {
  colApi: {
    lg: 3,
    md: 4,
    sm: 4
  },
  colCopyright: colCopyrightSchema,
  cols: colSchema
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
 * Modified Copyright and return a new object.
 * @param logo {*} - A brand logo
 * @param text {string} - A copyright text for the footer
 * @return {{logo: *, text: {string}}} - Returns the object
 */
const modifiedCopyright = ({ logo, text }) => {
  if (typeof logo === 'string' && !logo.length > 0) {
    return {
      logo: <LogoDefault fill="#01a1ff" />,
      text
    };
  } else {
    return { logo, text };
  }
};

/**
 * Render schema for the Footer.
 * @param colApi {object} - The breakpoint API for the column
 * @param copyright {object} - Data for the copyright column
 * @param cols {Array} - Data for the footer columns
 * @return {*} - Returns the JSX for the footer
 */
const renderBody = (colApi, { logo, text }, cols) => {
  return (
    <Row>
      {/* First Render the copyright column */}
      <ColumnModify {...colApi}>
        {/* Logo */}
        <div>
          <FooterBrand href="/">{renderLogo(logo)}</FooterBrand>
        </div>
        {/*  Copyright Text */}
        <FooterText>{text}</FooterText>
      </ColumnModify>
      {/* Render the link columns */}
      {Array.isArray(cols) &&
        cols.length > 0 &&
        cols.map(({ title, links }) => {
          return (
            <ColumnModify {...colApi} key={title}>
              <FooterHeading>{title}</FooterHeading>
              <FooterList>
                {links.map(({ id, href, text }) => {
                  return (
                    <li key={id}>
                      <a href={href}>{text}</a>
                    </li>
                  );
                })}
              </FooterList>
            </ColumnModify>
          );
        })}
    </Row>
  );
};

export const Footer2 = props => {
  const { colApi, colCopyright, cols, ...attributes } = props;
  const copyRight = modifiedCopyright(colCopyright);

  return (
    <FooterContent {...attributes}>
      <ContainerModify fluid>
        {renderBody(colApi, copyRight, cols)}
      </ContainerModify>
    </FooterContent>
  );
};

Footer2.propTypes = propTypes;
Footer2.defaultProps = defaultProps;
