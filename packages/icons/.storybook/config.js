import React from 'react';
import { createGlobalStyle } from 'styled-components';
import { configure, addDecorator } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { reset, typography, ThemeProvider } from '@lote-design-system/core';

const GlobalStyle = createGlobalStyle`
  ${reset};
  ${typography};
`;

/**
function requireStories() {
  require('../src/stories/index');
}
*/

function withThemeAndStyles(storyFn) {
  return (
    <React.Fragment>
      <GlobalStyle />
      <ThemeProvider>
        {storyFn()}
      </ThemeProvider>
    </React.Fragment>
  );
}

addDecorator(withKnobs);
addDecorator(withThemeAndStyles);

// configure(requireStories, module);
configure(require.context('../src/stories', true, /\.js$/), module);
