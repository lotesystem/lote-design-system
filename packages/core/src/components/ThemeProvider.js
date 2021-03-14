import React from 'react';
import PropTypes from 'prop-types';
import styled, {
  ThemeProvider as StyledThemeProvider
} from 'styled-components';
import createTheme from './createTheme';

export const Base = styled.div`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }
  font-family: ${props => props.theme.font};
  line-height: ${props => props.theme.lineHeights.standard};
  font-weight: ${props => props.theme.fontWeights.regular};
`;

const ThemeProvider = ({ theme, ...props }) => {
  const mergedTheme = createTheme(theme);
  return (
    <StyledThemeProvider theme={mergedTheme}>
      <Base {...props} />
    </StyledThemeProvider>
  );
};

ThemeProvider.propTypes = {
  /** The theme to drive the look and feel */
  theme: PropTypes.shape({
    breakpoints: PropTypes.arrayOf(PropTypes.string),
    mediaQueries: PropTypes.arrayOf(PropTypes.string),
    gridBreakPoints: PropTypes.object,
    containerMaxWidths: PropTypes.object,
    gridColumns: PropTypes.number,
    gridGutterWidth: PropTypes.number,
    space: PropTypes.arrayOf(PropTypes.number),
    font: PropTypes.string,
    fontSizes: PropTypes.arrayOf(PropTypes.number),
    fontWeights: PropTypes.shape({
      regular: PropTypes.number,
      medium: PropTypes.number,
      bold: PropTypes.number
    }),
    lineHeights: PropTypes.shape({
      standard: PropTypes.number,
      display: PropTypes.number
    }),
    letterSpacings: PropTypes.shape({
      normal: PropTypes.string,
      caps: PropTypes.string
    }),
    colors: PropTypes.object,
    palette: PropTypes.object,
    radii: PropTypes.arrayOf(PropTypes.number),
    radius: PropTypes.string,
    boxShadows: PropTypes.arrayOf(PropTypes.string),
    maxContainerWidth: PropTypes.string
  })
};

export default ThemeProvider;
