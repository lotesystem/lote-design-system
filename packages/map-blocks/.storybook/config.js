import React from 'react';
import { createGlobalStyle } from 'styled-components';
import { configure, addDecorator } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { theme, reset, typography, ThemeProvider } from '@lote-design-system/core';

const GlobalStyle = createGlobalStyle`
  ${reset};
  ${typography};
`;

function requireStories() {
  require('../src/stories/index');
}

function withThemeAndStyles(storyFn) {
  return (
    <React.Fragment>
       <GlobalStyle />
      <ThemeProvider theme={theme}>
        {storyFn()}
      </ThemeProvider>
    </React.Fragment>
  );
}

addDecorator(withKnobs);
addDecorator(withThemeAndStyles);

configure(requireStories, module);
