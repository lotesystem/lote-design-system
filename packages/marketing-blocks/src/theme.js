import React from 'react';
import { generateMedia } from 'styled-media-query';
import { rem, em, padding } from 'polished';
import { generateThemeColors } from './generate';

// Desktop & MacBook Pro
const siteMaxWidth = '1440px';

// Media query breakpoints
const breakpoints = {
  // Extra small devices (portrait phones)
  mobileS: '320px',
  mobileM: '375px',
  // Small devices (landscape phones)
  mobileL: '576px',
  // Medium devices (tablets)
  tablet: '768px',
  // Large devices (desktops)
  laptopL: '992px',
  // Extra large devices (desktops)
  laptopXl: '1200px',
  // Extra Extra large devices (desktops)
  laptopXxl: '1440px',
  // Desktop Devices
  desktop: '2560px'
};

export const media = generateMedia(breakpoints);

const defaultColors = {
  primary: '#01A1FF',
  secondary: '#3A3838',
  info: '#01A1FF',
  success: '#52C41A',
  danger: '#FF4D4F',
  warning: '#FAAD14'
};

// Default Grid system is generated based on these values. For custom gird
// please change the following values and set the breakpoints according to
// the `media` object.
const grid = {
  // Define the minimum dimensions at which your layout will change,
  // adapting to different screen sizes, for use in media queries.
  gridBreakpoints: {
    // 576px
    sm: breakpoints.mobileL,
    // 768px
    md: breakpoints.tablet,
    // 992px
    lg: breakpoints.laptopL,
    // 1200px
    xl: breakpoints.laptopXl
  },
  // Define the maximum width of `Container` for different screen sizes.
  containerMaxWidths: {
    sm: '540px',
    md: '720px',
    lg: '960px',
    xl: '1140px'
  },
  // Set the number of columns and specify the width of the gutters.
  gridColumns: 12,
  gridGutterWidth: 30 // Left => 15 & Right => 15 (15 + 15) = 30
};

const { palettes } = generateThemeColors(defaultColors);
const NATIVE_FONT_STACK =
  '-apple-system, BlinkMacSystemFont, "Segoe UI", "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"';

export const theme = {
  palettes,
  // Fonts that are used inside the storybook components
  fonts: {
    // For text like paragraphs and anchors
    body: `Roboto, ${NATIVE_FONT_STACK}`,

    // Same font will also apply to the heading, but if you want to change this you could add here
    heading: 'inherit'
  },

  text: {
    // Default heading styles
    heading: {
      marginBottom: rem(8),
      fontWeight: 500,
      lineHeight: 1.2
    }
  },

  // sizes `theme key` is used for the following properties
  // width, height, min-width, max-width, min-height, max-height
  // But make sure `styled-system` layout API is passed on the
  // styled-component to use these theme values.
  sizes: [
    0,
    16,
    18,
    32,
    50,
    52,
    64,
    128,
    256,
    512,
    576,
    720,
    768,
    992,
    960,
    1140,
    1200,
    1440,
    2560
  ],

  container: {
    paddingRight: '32px',
    paddingLeft: '32px',
    maxWidth: siteMaxWidth
  },

  card: {
    borderRadius: rem(8)
  },

  site: {
    xpadding: [144, 108, 72],
    ypadding: [72, 64, 32]
  },

  sections: {
    gradients: ['#0950BA', '#33CCFF']
  },

  input: {
    color: '#000',
    background: '#fff',
    placeholder: 'gray',
    border: '#01A1FF',
    borderRadius: em(3),
    borderWidth: '1px',
    borderStyle: 'solid',
    ...padding(em(6 - 0.5), em(12 - 0.5)) // paddingTop, paddingRight, paddingBottom, paddingLeft
  },
  button: {
    display: 'inline-block',
    fontWeight: 400,
    color: 'rgba(0, 0, 0, 0.65)',
    textAlign: 'center',
    verticalAlign: 'middle',
    cursor: 'pointer',
    userSelect: 'none',
    backgroundColor: 'transparent',
    border: '1px solid transparent',
    padding: `${rem(10)} ${rem(26)}`,
    fontSize: rem(14),
    lineHeight: 1.5,
    borderRadius: rem(4),
    transition:
      'background-color 0.4s linear, border-color 0.4s linear, color 0.4s linear',
    // Hover
    '&:hover': {
      textDecoration: 'none'
    },
    // Focus
    '&:focus': {
      outline: 0
    },
    // Disable
    '&:disabled': {
      opacity: 0.65
    }
  },
  shadowSide: {
    up:
      '0 -6px 16px -8px rgba(0, 0, 0, 0.08), 0 -9px 28px 0 rgba(0, 0, 0, 0.05), 0 -12px 48px 16px rgba(0, 0, 0, 0.03)',
    down:
      '0 6px 16px -8px rgba(0, 0, 0, 0.08), 0 9px 28px 0 rgba(0, 0, 0, 0.05), 0 12px 48px 16px rgba(0, 0, 0, 0.03)',
    left:
      '-6px 0 16px -8px rgba(0, 0, 0, 0.08), -9px 0 28px 0 rgba(0, 0, 0, 0.05), -12px 0 48px 16px rgba(0, 0, 0, 0.03)',
    right:
      '6px 0 16px -8px rgba(0, 0, 0, 0.08), 9px 0 28px 0 rgba(0, 0, 0, 0.05), 12px 0 48px 16px rgba(0, 0, 0, 0.03)'
  },
  spacing: {
    siteMaxWidth: siteMaxWidth
  },
  grid,
  media // media object from styled-media-query
};
