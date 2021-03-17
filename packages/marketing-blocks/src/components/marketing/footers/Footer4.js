import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Icon from '@lote-design-system/icons';
import { Container } from '@lote-design-system/core';

// => Dependent styled-components
// Our main component depends upon the following styled-components

const Footer = styled.footer`
  background-color: #fff;
  padding: 64px 0;

  ${({ theme }) => theme.mediaQueries.sm} {
    text-align: center;
  }
`;

const ContainerModify = styled(Container)`
  max-width: ${({ theme }) => theme.maxContainerWidth};
`;

const ListInline = styled.ul`
  margin-top: 0;
  margin-bottom: 16px;
  padding-left: 0;
  list-style: none;
  /* stylelint-disable no-descending-specificity */
  > li {
    > a {
      font-size: 14px;
      font-weight: 500;
      display: block;
      padding: 8px 12px;
      color: ${({ theme: { colors } }) => colors.text.secondary};
      transition: color 0.3s linear;
      &:hover {
        color: ${({ theme: { colors } }) => colors.primary};
      }
    }
  }

  > li:not(:last-child) {
    margin-right: 8px;
  }

  ${({ theme }) => theme.mediaQueries.sm} {
    > li {
      display: inline-block;
    }
  }
`;

const ListInline2 = styled.ul`
  margin-top: 0;
  margin-bottom: 26px;
  padding-left: 0;
  list-style: none;

  > li {
    display: inline-block;

    > a {
      display: inline-block;
      padding: 8px 12px;
      color: ${({ theme: { colors } }) => colors.text.secondary};
      transition: color 0.3s linear;
      &:hover {
        color: ${({ theme: { colors } }) => colors.primary};
      }

      > svg {
        width: 18px;
        height: 18px;
      }
    }
  }

  > li:not(:last-child) {
    margin-right: 8px;
  }
`;

const CopyrightText = styled.p`
  color: ${({ theme: { colors } }) => colors.text.secondary};
  font-size: 14px;
  font-weight: 500;
  margin-bottom: 0;
`;

// <= End Dependent styled-components

const linkSchema = [
  { id: 1, href: '/about', text: 'About' },
  { id: 2, href: '/blog', text: 'Blog' },
  { id: 3, href: '/jobs', text: 'Jobs' },
  { id: 4, href: '/press', text: 'Press' },
  { id: 5, href: '/accessibility', text: 'Accessibility' },
  { id: 6, href: '/partners', text: 'Partners' }
];

const socialLinkSchema = [
  { id: 1, href: '/', icon: <Icon name="facebook" /> },
  { id: 2, href: '/', icon: <Icon name="instagram" /> },
  { id: 3, href: '/', icon: <Icon name="twitter" /> },
  { id: 4, href: '/', icon: <Icon name="github" /> },
  { id: 5, href: '/', icon: <Icon name="linkedin" /> }
];

const linkShape = {
  id: PropTypes.number.isRequired,
  href: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
};

const socialLinkShape = {
  id: PropTypes.number.isRequired,
  href: PropTypes.string.isRequired,
  icon: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired
};

const propTypes = {
  /** Copyright text. */
  copyrightText: PropTypes.string.isRequired,
  /** Array of links */
  links: PropTypes.arrayOf(PropTypes.shape(linkShape)).isRequired,
  /** Array of social links */
  socialLinks: PropTypes.arrayOf(PropTypes.shape(socialLinkShape)).isRequired
};

const defaultProps = {
  copyrightText: '© 2020 UI-Kit, Inc. All rights reserved.',
  links: linkSchema,
  socialLinks: socialLinkSchema
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

export const Footer4 = props => {
  const { copyrightText, links, socialLinks, ...attributes } = props;

  return (
    <Footer {...attributes}>
      <ContainerModify fluid>
        {Array.isArray(links) && links.length > 0 && (
          <ListInline>
            {links.map(({ id, href, text }) => {
              return (
                <li key={id}>
                  <a href={href}>{text}</a>
                </li>
              );
            })}
          </ListInline>
        )}
        {Array.isArray(socialLinks) && socialLinks.length > 0 && (
          <ListInline2>
            {socialLinks.map(({ id, href, icon }) => {
              return (
                <li key={id}>
                  <a href={href}>{renderIcon(icon)}</a>
                </li>
              );
            })}
          </ListInline2>
        )}
        <CopyrightText>{copyrightText}</CopyrightText>
      </ContainerModify>
    </Footer>
  );
};

Footer4.propTypes = propTypes;
Footer4.defaultProps = defaultProps;
