import { merge } from 'lodash';
import createTextStyles from './createTextStyles';
import defaultTheme from './theme';


/**
 * Create the palette based on passed in theme and destructure palette property and colors from the theme
 * @example createPalette(mergedTheme) => {palette = {}, theme = {breakpoints: Array(4), mediaQueries: Array(4),..}}
 * @returns {Object} The palette object which is merged with user-defined palettes
 */
const createPalette = ({ palette = {}, ...theme }) => {
    const { primary, secondary, success, info, warning, danger, white, text } = theme.colors;
    // For user-defined theming merge user palettes with the default palettes
    return merge(
        {
            primary: {
                // Primary shades
                lightest: '#e6faff',
                light: '#29b8ff',
                base: primary,
                dark: '#096dd9',
            },
            secondary: {
                // secondary shades
                light: '#474343',
                base: secondary,
                dark: '#141313',
            },
            text: {
                // text shades
                light: white,
                base: text.title,
                dark: '#383838'
            },
            success: {
                // Success shades
                lightest: '#f6ffed',
                light: '#73d13d',
                base: success,
                dark: '#389e0d',
            },
            info: {
                // Info shades
                lightest: '#e6faff',
                light: '#29b8ff',
                base: info,
                dark: '#096dd9',
            },
            warning: {
                // Warning shades
                lightest: '#fffbe6',
                light: '#ffc53d',
                base: warning,
                dark: '#d48806',
            },
            danger: {
                // Danger shades
                lightest: '#fff1f0',
                light: '#ff4d4f',
                base: danger,
                dark: '#cf1322',
            }
        },
        palette
    );
};



/**
 * Create the theme i.e. used with styled-system + any other css-in-js library.
 * @param theme {Object} [theme={}] - The optional passed in theme
 * @return {Object} Create a theme object
 */
const createTheme = (theme = {}) => {
    const mergedTheme = merge(defaultTheme, theme);
    return {
        ...mergedTheme,
        palette: createPalette(mergedTheme),
        textStyles: createTextStyles(mergedTheme)
    };
};

export default createTheme;
