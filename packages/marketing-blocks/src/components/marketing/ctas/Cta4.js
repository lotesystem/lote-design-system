import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import Icon from '@lote-design-system/icons';
import {
  Container,
  Row,
  Column,
  Text,
  Button
} from '@lote-design-system/core';

// => Dependent styled-components
// Our main component depends upon the following styled-components

const Cta = styled.div`
  background-color: ${({ theme: { colors } }) => colors.text.title};
`;

const ColumnFirst = styled(Column)`
  padding-left: 0;
  padding-right: 0;
`;

const ColumnSecond = styled(Column)``;

const BackgroundImage = styled.div`
  ${({ bgImage }) => {
    if (bgImage) {
      return css`
        background-image: url(${bgImage});
      `;
    }
  }};
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  background-color: #f7f7f7;
  height: 300px;
  ${({ theme }) => theme.mediaQueries.lg} {
    height: 100%;
  }
`;

const InfoWrapper = styled.div`
  padding-top: 96px;
  padding-bottom: 96px;

  ${({ theme }) => theme.mediaQueries.lg} {
    padding-top: 128px;
    padding-bottom: 128px;
  }
`;

const CtaMinorText = styled.h4`
  font-size: 16px;
  color: #fff;
  margin-bottom: 8px;
`;

const CtaMajorText = styled(Text)`
  font-weight: 700;
  color: #fff;
  margin-bottom: 8px;
`;

const CtaDescription = styled.p`
  font-size: 16px;
  color: #fff;
  max-width: 720px;
  margin-bottom: 16px;
`;

const CtaLinkSvgWrapper = styled.span`
  color: ${({ theme: { colors } }) => colors.text.secondary};
  margin-left: 12px;
  transition: color 0.4s linear;
`;

const CtaLink = styled(Button)`
  font-weight: 500;
  &:hover {
    > ${CtaLinkSvgWrapper} {
      color: #fff;
    }
  }
`;

// <= End Dependent styled-components

const linkShape = {
  href: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  icon: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
  variation: PropTypes.string.isRequired,
  color: PropTypes.string
};

const linkSchema = {
  href: '/',
  text: 'Visit the help center',
  icon: <Icon name="external-link" />,
  variation: 'white',
  color: 'primary'
};

const propTypes = {
  /** The Major text for the Cta. */
  majorText: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
  /** The Minor text for the Cta. */
  minorText: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
  /** Description text for the Cta. */
  description: PropTypes.oneOfType([PropTypes.string, PropTypes.node])
    .isRequired,
  /** Link appear on the Cta. */
  link: PropTypes.shape(linkShape).isRequired,
  /** The source for the background image. */
  backgroundImage: PropTypes.string.isRequired,
  /** The columns will move from left to right. */
  shift: PropTypes.bool
};

const defaultProps = {
  majorText: `We're here to help`,
  minorText: 'Planning, Stabilizing and Work',
  description:
    'We believe brand interaction is key in communication. Real innovations and a positive customer experience are the heart of successful communication. Lorem Ipsum has been the industry standard dummy text ever since the 1500s and used by everywhere.',
  link: linkSchema,
  backgroundImage: 'https://i.imgur.com/fcLy370.jpg'
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

/**
 * Link appear on the Cta.
 * @param link {object} - Render link on the Cta.
 * @return {*}
 */
const renderLink = link => {
  const { href, text, icon: Icon, variation, color } = link;
  return (
    <CtaLink href={href} variation={variation} color={color}>
      <span>{text}</span>
      <CtaLinkSvgWrapper>{renderIcon(Icon)}</CtaLinkSvgWrapper>
    </CtaLink>
  );
};

export const Cta4 = props => {
  const {
    shift,
    majorText,
    minorText,
    description,
    link,
    backgroundImage,
    ...attributes
  } = props;

  const Column1 = (
    <ColumnFirst lg={6}>
      <BackgroundImage bgImage={backgroundImage} />
    </ColumnFirst>
  );

  const Column2 = (
    <ColumnSecond lg={6}>
      <InfoWrapper>
        <CtaMinorText>{minorText}</CtaMinorText>
        <CtaMajorText fSize={48}>{majorText}</CtaMajorText>
        <CtaDescription>{description}</CtaDescription>
        {/*  Render Link */}
        {renderLink(link)}
      </InfoWrapper>
    </ColumnSecond>
  );

  return (
    <Cta {...attributes}>
      <Container fluid>
        {shift ? (
          <Row>
            {Column2}
            {Column1}
          </Row>
        ) : (
          <Row>
            {Column1}
            {Column2}
          </Row>
        )}
      </Container>
    </Cta>
  );
};

Cta4.propTypes = propTypes;
Cta4.defaultProps = defaultProps;
