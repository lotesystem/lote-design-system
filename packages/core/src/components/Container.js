import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import { tagPropType, getContainerMaxWidthKeys } from './utils';

const propTypes = {
    /** An element type to render as (string or function). */
    tag: tagPropType,
    /** Takes full Width. */
    fluid: PropTypes.bool,
    /** Set `gridGutterWidth` .i.e. left and right padding. */
    gridGutterWidth: PropTypes.number,
    /** Additional classes. */
    className: PropTypes.string
};

const defaultProps = {
    tag: 'div'
};

const AbstractContainer = (props) => {
    // Destructure properties because we don't want to render these props
    // on underlying DOM element
    let { className, fluid, gridGutterWidth, tag: Tag, ...attributes } = props;

    return <Tag {...attributes} className={className} />;
};

AbstractContainer.propTypes = propTypes;
AbstractContainer.defaultProps = defaultProps;

const maxWidthKeys = getContainerMaxWidthKeys();

const makeContainerMaxWidths = ({theme: { gridBreakPoints, containerMaxWidths }}) => {
    // CSS Generator
    let mediaQueryCSS = maxWidthKeys.map((key) => {
        let widthVal = containerMaxWidths[key];
        return css`
      @media (min-width: ${gridBreakPoints[key]}) {
        max-width: ${widthVal};
      }
    `;
    });
    return css`
    ${mediaQueryCSS}
  `;
};

const Container = styled(AbstractContainer)`
  width: 100%;

  ${(props) => {
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
  margin-right: auto;
  margin-left: auto;
  ${(props) => !props.fluid && makeContainerMaxWidths(props)};

`;

Container.propTypes = propTypes;
Container.defaultProps = defaultProps;
Container.displayName = 'Container';

export default Container;
