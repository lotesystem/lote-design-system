import createTextStyles from './createTextStyles';

/**
 * A function which will take a string value and create a media query based on that string.
 * @param value {string} - A string value for your media query
 * @return {string} Returns a string for your media query
 */
const createMediaQuery = value => `@media (min-width: ${value})`;

/**
 * Define default breakpoints in the array and it will converted to pixel values.
 * @type {string[]} Set the breakpoints as a string array with appropriate CSS unit
 */
export const breakpoints = [576, 768, 992, 1200].map(value => `${value}px`);

/**
 * Generate an array of string for your media query which are based on your breakpoints.
 * @type {string[]} Set the breakpoints for mediaQuery as a string array
 */
export const mediaQueries = breakpoints.map(createMediaQuery);

// Default Grid system is generated based on these values. For custom gird
// please change the following values.

/**
 * Define the default grid breakpoints as an object and Breakpoints are defined as a map of
 * (name: minimum width), order from small to large these are the minimum dimensions at which
 * your layout will change, adapting to different screen sizes, for use in media queries.
 * @type {Object} Set the grid breakpoints as an object
 */
export const gridBreakPoints = {
  xs: 0,
  sm: '576px',
  md: '768px',
  lg: '992px',
  xl: '1200px'
};

/**
 * Define the maximum width of `Container` for different screen sizes.
 * @type {Object} Set the container's width as an object
 */
export const containerMaxWidths = {
  sm: '540px',
  md: '720px',
  lg: '960px',
  xl: '1140px'
};

/**
 * Define the number of columns.
 * @type {number} Set the number of columns
 */
export const gridColumns = 12;

/**
 * Define the width of the gutters.
 * @type {number} - Set the gridGutterWidth i.e. left & right padding between the columns
 */
export const gridGutterWidth = 64;

/**
 * There is only one way to access the values for the breakpoints and mediaQueries on the fly
 * inside css-in-js libraries i.e. you have to remember the index number.
 * Now we have to create a way in which we can access these breakpoints and mediaQueries values
 * with an aliases.
 * @type {string[]} Set the default aliases for your breakpoints, mediaQueries and so on
 */
const aliases = ['sm', 'md', 'lg', 'xl'];

/**
 * A function to attach aliases on the string array. Now we can directly access our
 * breakpoints and mediaQueries inside css-in-js libraries with something like this.
 * @example ${ props => props.theme.mediaQueries.xl { } }
 * @param arr {string[]} - The source string array
 * @param aliases {string[]} - The aliases string array
 */
const addAliases = (arr, aliases) => {
  aliases.forEach((value, index) =>
    Object.defineProperty(arr, value, {
      // Hide behavior
      enumerable: false,
      // A function which serves as a getter for the property, or undefined if there is no getter.
      // When the property is accessed, this function is called.
      get() {
        return this[index];
      }
    })
  );
};

// Add aliases for some objects
addAliases(breakpoints, aliases);
addAliases(mediaQueries, aliases);

/**
 * @type {number[]}
 */
export const space = [
  0,
  4,
  8,
  12,
  16,
  24,
  32,
  48,
  64,
  96,
  128,
  192,
  256,
  384,
  512,
  640,
  768
];

/**
 * @type {string}
 */
export const font =
  'Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"';

/**
 * @type {number[]}
 */
export const fontSizes = [12, 14, 16, 18, 20, 24, 30, 36, 48, 60, 72];

/**
 * @type {number}
 */
const regular = 400;

/**
 * @type {number}
 */
const medium = 500;

/**
 * @type {number}
 */
const bold = 700;

/**
 * styled-system's `fontWeight` function can hook into the `fontWeights` object
 * @type {{regular: number, medium: number, bold: number}}
 */
export const fontWeights = {
  regular,
  medium,
  bold
};

/**
 * @type {{standard: number, display: number}}
 */
export const lineHeights = {
  standard: 1.5,
  display: 1.2
};

const letterSpacings = {
  normal: 'normal',
  caps: '0.025em'
};

// Color palette
const blue = '#01A1FF';
const red = '#FF4D4F';
const yellow = '#FAAD14';
const green = '#52C41A';
const white = '#ffffff';
const primary = '#01A1FF';
const secondary = '#3A3838';
const success = '#52C41A';
const info = '#01A1FF';
const warning = '#FAAD14';
const danger = '#f5222d';

const colors = {
  blue,
  red,
  yellow,
  green,
  white,
  primary,
  secondary,
  success,
  info,
  warning,
  danger,
  text: {
    title: 'rgba(0,0,0,0.85)',
    primary: 'rgba(0,0,0,0.65)',
    secondary: 'rgba(0,0,0,0.45)',
    disable: 'rgba(0,0,0,0.25)',
    border: 'rgba(0,0,0,0.15)',
    dividers: 'rgba(0,0,0,0.06)',
    background: 'rgba(0,0,0,0.04)',
    tableHeaders: 'rgba(0,0,0,0.02)'
  },
  // Scheme for the darker theme
  textDark: {
    title: 'rgba(255,255,255,0.85)',
    primary: 'rgba(255,255,255,0.65)',
    secondary: 'rgba(255,255,255,0.45)',
    disable: 'rgba(255,255,255,0.30)',
    border: 'rgba(255,255,255,0.20)',
    dividers: 'rgba(255,255,255,0.12)',
    background: 'rgba(255,255,255,0.08)',
    tableHeaders: 'rgba(255,255,255,0.04)'
  }
};

export { colors };

/**
 * styled-system's `borderRadius` function can hook into the `radii` object/array
 * @type {number[]}
 */
export const radii = [0, 2, 4, 6, 8];

/**
 * @type {string}
 */
export const radius = '4px';

/**
 * @type {string}
 */
export const maxContainerWidth = '1440px';

/**
 * boxShadows
 * @type {string[]}
 */
export const boxShadows = [
  '0 1px 3px 0 rgba(0,0,0, 0.1), 0 1px 2px 0 rgba(0,0,0, 0.06)',
  '0 4px 6px -1px rgba(0,0,0, 0.1), 0 2px 4px -1px rgba(0,0,0, 0.06)',
  '0 10px 15px -3px rgba(0,0,0, 0.1), 0 4px 6px -2px rgba(0,0,0, 0.05)',
  '0 20px 25px -5px rgba(0,0,0, 0.1), 0 10px 10px -5px rgba(0,0,0, 0.04)',
  '0 25px 50px -12px rgba(0,0,0, 0.25)'
];

const boxShadowAliases = ['sm', 'md', 'lg', 'xl', 'xxl'];

addAliases(boxShadows, boxShadowAliases);

export const textStyles = createTextStyles({
  fontSizes,
  fontWeights,
  lineHeights,
  letterSpacings
});

const theme = {
  breakpoints,
  mediaQueries,
  gridBreakPoints,
  containerMaxWidths,
  gridColumns,
  gridGutterWidth,
  space,
  font,
  fontSizes,
  fontWeights,
  lineHeights,
  letterSpacings,
  colors,
  radii,
  radius,
  maxContainerWidth,
  boxShadows,
  textStyles
};

export default theme;
