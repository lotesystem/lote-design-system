import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import Column from './Column';
import { tagPropType } from './utils';

const propTypes = {
  /** An element type to render as (string or function). */
  tag: tagPropType,
  /** No margin on the row and padding on the columns. */
  noGutters: PropTypes.bool,
  /** Set `gridGutterWidth` based on the prop. */
  gridGutterWidth: PropTypes.number,
  /** Additional classes. */
  className: PropTypes.string,
  /** A variation of our standard grid row that overrides the default column gutters
        for tighter and more compact layouts. */
  form: PropTypes.bool
};

const defaultProps = {
  tag: 'div'
};

const AbstractRow = props => {
  // Destructure properties because we don't want to render these props
  // on underlying DOM element
  const {
    className,
    noGutters,
    form,
    gridGutterWidth,
    tag: Tag,
    ...attributes
  } = props;

  return <Tag {...attributes} className={className} />;
};

AbstractRow.propTypes = propTypes;
AbstractRow.defaultProps = defaultProps;

const Row = styled(AbstractRow)`
  display: flex;
  flex-wrap: wrap;
  ${props => {
    if (props.gridGutterWidth && !props.form) {
      const width = props.gridGutterWidth;
      return {
        marginRight: '-' + width / 2 + 'px',
        marginLeft: '-' + width / 2 + 'px'
      };
    } else if (!props.gridGutterWidth && !props.form) {
      return {
        marginRight: '-' + props.theme.gridGutterWidth / 2 + 'px',
        marginLeft: '-' + props.theme.gridGutterWidth / 2 + 'px'
      };
    }
  }};

  ${props =>
    props.noGutters &&
    css`
      margin-right: 0;
      margin-left: 0;

      > ${Column} {
        padding-right: 0;
        padding-left: 0;
      }
    `}

  ${props =>
    props.form &&
    css`
      margin-right: -5px;
      margin-left: -5px;
      > ${Column} {
        padding-right: 5px;
        padding-left: 5px;
      }
    `}
`;

Row.propTypes = propTypes;
Row.defaultProps = defaultProps;

export default Row;
