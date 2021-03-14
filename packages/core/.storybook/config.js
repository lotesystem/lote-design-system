// This file replaces config.js and controls the rendering of your stories.
// Unlike config.js, preview.js is not responsible for loading any stories.
// Its main purpose is to add global parameters and decorators should you need them.
// Other uses are importing global CSS, adding extra polyfills if needed, and similar
// browser-side tweaks.
import React from 'react';
import { configure, addDecorator } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { createGlobalStyle } from 'styled-components';
import reset from '../src/components/reset';
import typography from '../src/components/typography';
import { ThemeProvider } from '../src/components';

const GlobalStyle = createGlobalStyle`
  ${reset};
  ${typography};
`;


const withThemeAndStyles = (storyFn) => {
    return (
        <>
          <GlobalStyle />
          <ThemeProvider>
             { storyFn() }
          </ThemeProvider>
        </>
    );
};

addDecorator(withKnobs);
addDecorator(withThemeAndStyles);
configure(require.context('../src/stories', true, /\.js$/), module);


