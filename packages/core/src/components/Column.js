import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { omit, tagPropType, getGridBreakPointKeys, withoutBreakpointColStyles, makeGridColumns } from './utils';

const propTypes = {
    /** An element type to render as (string or function). */
    tag: tagPropType,
    /** Set `gridColumns` width of each column is calculated based on total columns. */
    gridColumns: PropTypes.number,
    /** Set `gridGutterWidth` .i.e. left and right padding between the columns. */
    gridGutterWidth: PropTypes.number,
    /** Additional classes. */
    className: PropTypes.string,
};

const defaultProps = {
    tag: 'div',
};

const AbstractColumn = ( props ) => {

    // Destructure properties because we don't want to render these props
    // on underlying DOM element
    let {
        className,
        gridColumns,
        gridGutterWidth,
        tag: Tag,
        ...attributes
    } = props;
    // Remove `styled-system` and other props from the `attributes` object. We don't want to
    // render these props on the underlying DOM element. But, render on the
    // styled-component class.
    const breakpoints = getGridBreakPointKeys();
    const attr = omit(attributes, breakpoints);

    return (<Tag {...attr} className={className}/>);
};

AbstractColumn.propTypes = propTypes;
AbstractColumn.defaultProps = defaultProps;

const Column = styled(AbstractColumn)`
  position: relative;
  width: 100%;
  ${props => {
    if (props.gridGutterWidth) {
        const width = props.gridGutterWidth;
        return {
            paddingRight: width / 2 + 'px',
            paddingLeft: width / 2 + 'px'
        };
    } else {
        return {
            paddingRight: props.theme.gridGutterWidth / 2 + 'px',
            paddingLeft: props.theme.gridGutterWidth / 2 + 'px'
        };
    }
}};
  
    ${withoutBreakpointColStyles};
    ${makeGridColumns};
`;

Column.propTypes = propTypes;
Column.defaultProps = defaultProps;


export default Column;
