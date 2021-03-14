import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { getPaletteColor, tagPropType } from './utils';


const propTypes = {
    /** An element type to render as (string or function). */
    tag: tagPropType,
    /** Active the current BreadcrumbItem. */
    active: PropTypes.bool,
    /** Additional classes. */
    className: PropTypes.string
};

const defaultProps = {
    tag: 'li'
};

const AbstractBreadcrumbItem = (props) => {


    const {
        className,
        active,
        tag: Tag,
        variation,
        ...attributes
    } = props;

    return (
        <Tag {...attributes} className={className} />
    );
};

AbstractBreadcrumbItem.propTypes = propTypes;
AbstractBreadcrumbItem.defaultProps = defaultProps;


const activeColor = (props) => {

   const { variation, active } = props;

    if (variation && active) {
        if (variation === 'fill') {
            return css`
               && a {
                color: rgba(255,255,255,.85);
               }
           `;
        } else if (variation === 'outline') {
            return css`
              && a {
                opacity: 0.7;
               }
           `;
        } else if (variation === 'powder') {
            return css`
                && a {
                color: ${(props) => getPaletteColor('primary.base')(props)};
                }
           `;
        } else if (variation === 'cultured') {
            return css`
                   && a {
                    color: ${(props) => getPaletteColor('primary.base')(props)};
                    }
           
           `;
        } else {
            return css``;
        }
    }
};



const BreadcrumbItem = styled(AbstractBreadcrumbItem)`
  ${activeColor};
`;




BreadcrumbItem.propTypes = propTypes;
BreadcrumbItem.defaultProps = defaultProps;


export default BreadcrumbItem;
