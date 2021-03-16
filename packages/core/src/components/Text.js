import React from 'react';
import PropTypes from 'prop-types';
import { color, space, typography } from 'styled-system';
import styled, { css } from 'styled-components';
import { props as styledSystemProps } from '@styled-system/should-forward-prop';
import { omit, tagPropType } from './utils';

// Minimum resizing scale threshold i.e. 20px (1.25rem) smaller than 20px will not be resizeable
// Only add media query if font-size is bigger as the minimum font-size
// If FACTOR === 1, no rescaling will take place
let BASE_FONT_SIZE = 1.25;

// Breakpoint at where font-size starts decreasing if screen width is smaller
const BREAKPOINT = 1200;

// Factor of decrease
const FACTOR = 10;

// 1 rem
const REM_VALUE = 16;

const propTypes = {
  /** An element type to render as (string or function). */
  tag: tagPropType,
  /** Additional classes. */
  className: PropTypes.string,
  /** Allowing text to scale more naturally across device and viewport sizes.
      Remember font-size is explicitly converted into `rem` unit with base 16 pixel size. */
  fSize: PropTypes.number
};

const defaultProps = {
  tag: 'h1'
};

const AbstractText = props => {
  const { className, tag: Tag, fSize, ...attributes } = props;

  // Remove `styled-system` props from the `attributes` object. We don't want to
  // render these props on the underlying DOM element. But, render on the
  // styled-component class.
  const attr = omit(attributes, styledSystemProps);

  return <Tag {...attr} className={className} />;
};

AbstractText.propTypes = propTypes;
AbstractText.defaultProps = defaultProps;

const rfs = props => {
  const { fSize } = props;

  // Convert Global "BASE_FONT_SIZE" REM into Pixel Size
  BASE_FONT_SIZE = BASE_FONT_SIZE / (BASE_FONT_SIZE * 0 + 1 / REM_VALUE);

  let fStatic = null;
  let fFluid = null;

  if (fSize !== 0 && typeof fSize === 'number') {
    // Convert pixels into rem value
    fStatic = fSize / REM_VALUE;
  } else {
    return css``;
  }

  // Only add media query if font-size is bigger as the minimum font-size
  // If FACTOR == 1, no rescaling will take place
  if (fSize > BASE_FONT_SIZE) {
    let minWidth = null;
    let variableUnit = null;

    // Calculate minimum font-size for given font-size
    const fSizeMin = BASE_FONT_SIZE + (fSize - BASE_FONT_SIZE) / FACTOR;

    // Calculate difference between given font-size and minimum font-size for given font-size
    const fSizeDiff = fSize - fSizeMin;

    // Base font-size formatting
    // No need to check if the unit is valid, because we did that before
    minWidth = `${fSizeMin / REM_VALUE}rem`;

    // Resize font-size based on width so use "vw" as a unit
    variableUnit = 'vw';

    // Calculate the variable width between 0 and BREAKPOINT
    const variableWidth = `${(fSizeDiff * 100) / BREAKPOINT}${variableUnit}`;

    // Set the calculated font-size.
    fFluid = `calc(${minWidth} + ${variableWidth})`;
  }

  // Rendering if fFluid is null it means the user value is didn't match with the threshold.
  if (fFluid === null) {
    // Only render static font-size if no fluid font-size is available
    return css`
      font-size: ${fStatic}rem;
    `;
  } else {
    const mqValue = `${BREAKPOINT}px`;
    return css`
      font-size: ${fStatic}rem;
      @media (max-width: ${mqValue}) {
        font-size: ${fFluid};
      }
    `;
  }
};

const Text = styled(AbstractText)`
  ${color};
  ${typography};
  ${space};
  ${props => props.fSize && rfs};
`;

Text.propTypes = propTypes;
Text.defaultProps = defaultProps;

export default Text;
