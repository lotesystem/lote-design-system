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
`;

const ContainerModify = styled(Container)`
  max-width: ${({ theme }) => theme.maxContainerWidth};
`;

const FooterContent = styled.div`
  ${({ theme }) => theme.mediaQueries.sm} {
    text-align: center;
  }

  ${({ theme }) => theme.mediaQueries.md} {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

const ListInline = styled.ul`
  margin: 0;
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
  margin-bottom: 8px;

  ${({ theme }) => theme.mediaQueries.md} {
    margin-bottom: 0;
  }
`;

// <= End Dependent styled-components

const socialLinkSchema = [
  { id: 1, href: '/', icon: <Icon name="facebook" /> },
  { id: 2, href: '/', icon: <Icon name="instagram" /> },
  { id: 3, href: '/', icon: <Icon name="twitter" /> },
  { id: 4, href: '/', icon: <Icon name="github" /> },
  { id: 5, href: '/', icon: <Icon name="linkedin" /> }
];

const socialLinkShape = {
  id: PropTypes.number.isRequired,
  href: PropTypes.string.isRequired,
  icon: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired
};

const propTypes = {
  /** Copyright text. */
  copyrightText: PropTypes.string.isRequired,
  /** Array of social links */
  socialLinks: PropTypes.arrayOf(PropTypes.shape(socialLinkShape)).isRequired
};

const defaultProps = {
  copyrightText: '© 2020 UI-Kit, Inc. All rights reserved.',
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

export const Footer5 = props => {
  const { copyrightText, socialLinks, ...attributes } = props;

  return (
    <Footer {...attributes}>
      <ContainerModify fluid>
        <FooterContent>
          <CopyrightText>{copyrightText}</CopyrightText>
          {Array.isArray(socialLinks) && socialLinks.length > 0 && (
            <ListInline>
              {socialLinks.map(({ id, href, icon }) => {
                return (
                  <li key={id}>
                    <a href={href}>{renderIcon(icon)}</a>
                  </li>
                );
              })}
            </ListInline>
          )}
        </FooterContent>
      </ContainerModify>
    </Footer>
  );
};

Footer5.propTypes = propTypes;
Footer5.defaultProps = defaultProps;
