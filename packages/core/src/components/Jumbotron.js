import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { rem } from 'polished';
import { tagPropType } from './utils';

const propTypes = {
  /** An element type to render as (string or function). */
  tag: tagPropType,
  /** Make the jumbotron full width. */
  fluid: PropTypes.bool,
  /** Additional classes. */
  className: PropTypes.string
};

const defaultProps = {
  tag: 'div'
};

const AbstractJumbotron = props => {
  const { className, tag: Tag, fluid, ...attributes } = props;

  return <Tag {...attributes} className={className} />;
};

AbstractJumbotron.propTypes = propTypes;
AbstractJumbotron.defaultProps = defaultProps;

const Jumbotron = styled(AbstractJumbotron)`
  & {
    padding: 2rem 1rem;
    margin-bottom: 2rem;
    background-color: #f3f3f3;
    border-radius: ${rem(4)};

    ${({ theme }) => theme.mediaQueries.sm} {
      padding: 4rem 2rem;
    }
  }

  ${props =>
    props.fluid &&
    css`
      & {
        padding-right: 0;
        padding-left: 0;
        border-radius: 0;
      }
    `}
`;

Jumbotron.propTypes = propTypes;
Jumbotron.defaultProps = defaultProps;

export default Jumbotron;
