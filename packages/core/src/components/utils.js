import { css } from 'styled-components';
import PropTypes from 'prop-types';
import { rem } from 'polished';
import { omit as lodashOmit } from 'lodash';
import { themeGet } from '@styled-system/theme-get';
import { gridBreakPoints, containerMaxWidths } from './theme';

/**
 * Applies the selected variation style to a styled component. Combines the variation style with
 * any custom styling from theme.componentStyles[component][variation]
 * @param componentName {string} - The name of the component
 * @param variations {Object} [variations=null] - An optional object for the variations
 * @return {function(Object): array} - the returned function will return styled-component styles in the form of an array
 */
export const applyVariations = (componentName, variations = null) => {
    // @param props will be all props of the component
    return (props) => {
        // Get `color` and `variation` string from the component props
        const {color, variation} = props;
        // If the `variations` is an object and component `variation` is a string
        // then it means the component has a variation styles.
        if (variations && typeof variation === 'string') {
            // Return the variation styles in the form of an array
            return css`
                 ${variations[variation] || ''}
                 ${typeof color === 'string' && themeGet(`componentStyles.${componentName}.${variation}.${color} `, '')}`;
        }

        return css`
          ${themeGet(`componentStyles.${componentName}.${color}`, '')}
        `
    };
};



// CSS Styles utilities related for the Button component
/**
 * @return {Object}
 */
export const BtnMd = {
    padding: `${rem(10)} ${rem(26)}`,
    fontSize: '14px',
    lineHeight: '1.5',
    borderRadius: `${rem(4)}`
};

/**
 * @return {Object}
 */
export const BtnLg = {
    padding: `${rem(12)} ${rem(30)}`,
    fontSize: '20px',
    lineHeight: '1.5',
    borderRadius: `${rem(4)}`
};

/**
 * @return {Object}
 */
export const BtnSm = {
        padding: `${rem(8)} ${rem(22)}`,
        fontSize: '14px',
        lineHeight: '1.5',
        borderRadius: `${rem(4)}`
};

// CSS Styles utilities related for the Input component size
/**
 * @return {Object}
 */
export const InputMd = {
     // line-height: 1.5 * 16px = 24px
     // height: 1.5em(Match with line-height 1.5 = 24px) = 24 + 24(1.5rem) = 48 + 2 = 50px
       height: 'calc(1.5em + 1.5rem + 2px)',
       padding: `${rem(6)} ${rem(12)}`,
       fontSize: '16px',
       lineHeight: '1.5',
       borderRadius: `${rem(4)}`
};

/**
 * @return {Object}
 */
export const InputLg = {
        // line-height: 1.5 * 14px = 30px
        // height: 1.5em(Match with line-height 1.5 = 30px) = 30 + 28(1.75rem) = 58 + 2 = 60px
        height: 'calc(1.5em + 1.75rem + 2px)',
        padding: `${rem(8)} ${rem(16)}`,
        fontSize: '20px',
        lineHeight: '1.5',
        borderRadius: `${rem(4)}`
 };


/**
 * @return {Object}
 */
export const InputSm =  {
        // line-height: 1.5 * 14px = 21px
        // height: 1.5em(Match with line-height 1.5 = 21px) = 21 + 17(1.0625rem) = 38 + 2 = 40px
        height: 'calc(1.5em + 1.0625rem + 2px)',
        padding: `${rem(4)} ${rem(8)}`,
        fontSize: '14px',
        lineHeight: '1.5',
        borderRadius: `${rem(4)}`
};

// CSS Styles utilities related for the PaginationLink component size
/**
 * @return {Object}
 */
export const PaginationLinkMd = {
    padding: `${rem(8)} ${rem(12)}`,
    fontSize: '14px',
    lineHeight: '1.25',
};

/**
 * @return {Object}
 */
export const PaginationLinkLg = {
    padding: `${rem(12)} ${rem(24)}`,
    fontSize: `${rem(20)}`,
    lineHeight: '1.5',
};

/**
 * @return {Object}
 */
export const PaginationLinkSm = {
    padding: `${rem(2)} ${rem(8)}`,
    fontSize: `${rem(14)}`,
    lineHeight: '1.5',
};


/**
 * It will return grid breakpoints in the form of an array
 * @return {string[]|Array} returns the array
 */
export const getGridBreakPointKeys = () => {
        // Check if it is an object?
        if (gridBreakPoints != null && (typeof gridBreakPoints === 'object' || typeof gridBreakPoints === 'function')) {
            return Object.keys(gridBreakPoints);
        } else {
            return [];
        }
};


/**
 * It will return grid breakpoints in the form of an array
 * @return {string[]|[Array]} returns the array
 */
export const getContainerMaxWidthKeys = () => {
    // Check if it is an object?
    if (containerMaxWidths != null && (typeof containerMaxWidths === 'object' || typeof containerMaxWidths === 'function')) {
        return Object.keys(containerMaxWidths);
    } else {
        return [];
    }
};

// Framework to generate dynamic column size based on the user gridBreakPoints

/**
 * Returns a value for your column size.
 * @param value {number}
 * @returns {string}
 */
export const percentage = value => `${100 * value}%`;


/**
 * This will take all the props that the user has given on the component
 * and then convert into an array and checks if the converted array props
 * have breakpoints. If it has some breakpoints then which it is and returns
 * us as an array. If the returned array length is greater than 0 then it means
 * we don't have to generate the default column styles.
 * @param props {Object}
 * @return {string[]}
 */
export const withoutBreakpointColStyles = (props) => {
    // Get the breakpoints
    const breakpoints = getGridBreakPointKeys();
    const propsArray = Object.keys(props);
    // Matching values in two arrays filter will return match values in an array
    const matches = breakpoints.filter((key) => {
        return propsArray.includes(key);
    });
    if (matches.length > 0) {
        return css``;
    } else {
        return css`& {flex-basis: 0; flex-grow: 1; min-width: 0; max-width: 100%;}`
    }
};

/**
 * Set max-width based on columns you have mentioned
 * @param size {number}
 * @param propAsColumns {number}
 * @returns {string[]}
 */
const columnStyleForSize = (size, propAsColumns) => {
    if (propAsColumns) {
        return css`
      flex: 0 0 ${percentage(size / propAsColumns)};
      max-width: ${percentage(size / propAsColumns)};
    `;
    } else {
        return css`
      ${({ theme: { gridColumns } }) => css`
        flex: 0 0 ${percentage(size / gridColumns)};
        max-width: ${percentage(size / gridColumns)};`}
    `;
    }
};

/**
 * @param gridColumns {number}
 * @param gridBreakPoints {Object}
 * @param props {Object}
 * @return {string[]}
 */
export const makeGridColumns = ({theme: { gridColumns, gridBreakPoints }, ...props}) => {
    // First, we have to analyze:
    // Does the user pass the gridColumns as a prop?
    // If it is not a `prop` then use the default theme gridColumns.
    let cols = props['gridColumns'] ? props['gridColumns'] : gridColumns;
    // Get the breakpoints
    const breakpoints = getGridBreakPointKeys();
    // CSS Generator
    let mediaQueryCSS = breakpoints.map((key) => {
        let mediaQuery = gridBreakPoints[key];
        if (props[key]) {
            // No media query necessary for xs breakpoint as it's effectively `@media (min-width: 0) { }`
            if (mediaQuery === 0) {
                return css`${columnStyleForSize(props[key], cols)}`;
            } else {
                return css` @media (min-width: ${mediaQuery}) {${columnStyleForSize(props[key], cols)};}`;
            }
        } else {
            return css``;
        }
    });
    return css`${mediaQueryCSS}`;
};

/**
 * Gets the color of a palette shade, using props.color (which is a prop in the Button component) as
 * the palette color. If palette shade does not exist, falls back to theme.colors
 * @example getPaletteColor('dark')(props) => will return the dark shade of
 * theme.palette[props.color].dark
 * @example getPaletteColor('primary.base')(props) => theme.palette.primary.base
 * @example getPaletteColor('primary', 'base')(props) => theme.palette.primary.base
 * Gets the color of a palette shade, If palette shade does not exist, falls back to theme.colors
 * @param args {string} - collects multiple string elements and condenses into a single element i.e. array
 * @return {function(Object): string} - the returned function will return the string value
 */
export const getPaletteColor = (...args) => {
   // @param props will be all props of the component
    return (props) => {
        // Try to analyze what type of arguments user is passing.
        let color;
        let shade;

        // Case1: Handle getPaletteColor('primary', 'base') arguments for color
        if (args.length === 2) {
            color = args[0];
        } else {
            // The User didn't tell us about which 'palette' shade he wants, then set the default palette
            color = props.color;
        }

        // Handle getPaletteColor('primary', 'base') arguments case for shade
        if (args.length === 2) {
            shade = args[1];
        } else {
           // Case2: Handle getPaletteColor('dark') argument for shade
           // If there are not 2 arguments then it means the user is passing only 1 argument
            // that would be a shade. Example getPaletteColor('dark')
            shade = args[0];
        }

        // Case3: Handle 1 argument case that includes palette name and shade with dot symbol
        // Example getPaletteColor('primary.base')
        const colorShade = shade.match(/^([a-z]+)\.([a-z]+)$/i);

        if (colorShade) {
            color = colorShade[0];
            shade = colorShade[1];
        }
        // Make sure it should be a string not an object from the theme or not a null type
        // @example return values on the getPaletteColor('text.light') => null || "#ffffff"(return this) || null || "text.light"
        return (
            themeGet(`palette.${color}.${shade}`)(props) || themeGet(`palette.${color}`)(props) ||
            themeGet(`colors.${color}`)(props) || color
        );
    };
};

/**
 * Creates an object composed of the own and inherited enumerable property and returns a new object
 * with the key/value pairs from `obj` that are not in the array `omitKeys`.
 * @param obj {Object} - The source object
 * @param args {...(string|string[])} - The property paths to omit.
 * @return {Object} Returns the new object
 */
export const omit = (obj, ...args) => {
   return lodashOmit(obj, ...args);
};

/**
 * A proptypes for the react element.
 * @type {emptyFunctionThatReturnsNull}
 */
export const tagPropType = PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.string,
    PropTypes.shape({ $$typeof: PropTypes.symbol, render: PropTypes.func }),
    PropTypes.arrayOf(PropTypes.oneOfType([
        PropTypes.func,
        PropTypes.string,
        PropTypes.shape({ $$typeof: PropTypes.symbol, render: PropTypes.func }),
    ]))
]);
