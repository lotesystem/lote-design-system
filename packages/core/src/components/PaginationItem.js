import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { tagPropType } from './utils';

const propTypes = {
  /** Active the current PaginationItem. */
  active: PropTypes.bool,
  /** Primary content. */
  children: PropTypes.node,
  /** Additional classes. */
  className: PropTypes.string,
  /** Disable the current PaginationItem. */
  disabled: PropTypes.bool,
  /** An element type to render as (string or function). */
  tag: tagPropType
};

const defaultProps = {
  tag: 'li'
};

const AbstractPaginationItem = props => {
  const {
    active,
    className,
    children,
    color,
    variation,
    disabled,
    tag: Tag,
    ...attributes
  } = props;

  // Map all children with some new `props` named variation, active & disabled.
  const clones = React.Children.map(children, child => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child, { variation, color, active, disabled });
    }
  });
  return (
    <Tag {...attributes} className={className}>
      {' '}
      {clones}{' '}
    </Tag>
  );
};

AbstractPaginationItem.propTypes = propTypes;
AbstractPaginationItem.defaultProps = defaultProps;

const PaginationItem = styled(AbstractPaginationItem)``;

PaginationItem.propTypes = propTypes;
PaginationItem.defaultProps = defaultProps;

export default PaginationItem;
