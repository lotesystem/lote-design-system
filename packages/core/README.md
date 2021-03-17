# Lote Design System

```sh
yarn add @lote-design-system/core
```
or
```sh
npm install @lote-design-system/core
```

## ThemeProvider

Wrap the root of your application with the  `ThemeProvider`  component, which adds the Design System theme to context for use in styled-components and sets typographic defaults. This should only be included once in your application.

The ThemeProvider is a wrapper around styled-components'  [ThemeProvider](https://www.styled-components.com/docs/advanced#theming).
```js
import React from 'react';
import { ThemeProvider, Button } from '@lote-design-system/core';

export default function App() {
  return (
    <ThemeProvider>
      <Button color="secondary">Hello World</Button>
    </ThemeProvider>
  );
}
```

The design system comes with the default `typography` and the `browser reset` styles. Our typography heavily depends upon the `Roboto` font. So please include that font in your project.

You can include this in your project via [GoogleFontsApi:](https://fonts.google.com/specimen/Roboto)

    <link href="https://fonts.googleapis.com/css?family=Roboto:400,500,700" rel="stylesheet"/>

### Example with browser reset styles and typography:
```js
import React from 'react';
import { createGlobalStyle } from 'styled-components';
import {
  reset,
  typography,
  ThemeProvider,
  Button,
  Breadcrumb,
  BreadcrumbItem,
  Text,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Pagination,
  PaginationItem,
  PaginationLink,
} from '@lote-design-system/core';

const GlobalStyle = createGlobalStyle`
  ${reset};
  ${typography};
`;

export default function App() {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider>
        <Button color="secondary">Hello World</Button>
      </ThemeProvider>
    </>
  );
}

```

### Example: log default theme that came with the design system:
```js
import React from 'react';
import { theme } from '@lote-design-system/core';

export default function App() {
  console.log('Theme: ', theme);
  return (
    <>
      <GlobalStyle />
      <ThemeProvider>
        <Button color="secondary">Hello World</Button>
      </ThemeProvider>
    </>
  );
}
```

### Example with your custom Theme incase if you don't want to use the default Theme:

```js
import React from 'react';
import { createGlobalStyle } from 'styled-components';
import {
  reset,
  typography,
  ThemeProvider,
  Button
} from '@lote-design-system/core';

const GlobalStyle = createGlobalStyle`
  ${reset};
  ${typography};
`;

const theme = {

  // You can define all your color palettes and pass into the theme
  palettes: {...myPalettes},
  
  // Fonts that you can consume on styling
  fonts: {
    body: "'Open Sans', sans-serif", 
    heading: 'inherit', // Same font will also apply to the headings
  },
  
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
    2560,
  ],

  container: {
    paddingRight: '32px',
    paddingLeft: '32px',
  },

  site: {
    xpadding: [144, 108, 72],
    ypadding: [72, 64, 32],
  },
  
  shadowSide: {
    up:
      '0 -6px 16px -8px rgba(0, 0, 0, 0.08), 0 -9px 28px 0 rgba(0, 0, 0, 0.05), 0 -12px 48px 16px rgba(0, 0, 0, 0.03)',
    down:
      '0 6px 16px -8px rgba(0, 0, 0, 0.08), 0 9px 28px 0 rgba(0, 0, 0, 0.05), 0 12px 48px 16px rgba(0, 0, 0, 0.03)',
    left:
      '-6px 0 16px -8px rgba(0, 0, 0, 0.08), -9px 0 28px 0 rgba(0, 0, 0, 0.05), -12px 0 48px 16px rgba(0, 0, 0, 0.03)',
    right:
      '6px 0 16px -8px rgba(0, 0, 0, 0.08), 9px 0 28px 0 rgba(0, 0, 0, 0.05), 12px 0 48px 16px rgba(0, 0, 0, 0.03)',
  },
};


export default function App() {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Button color="secondary">Hello World</Button>
      </ThemeProvider>
    </>
  );
}
```

## Documentation

- [Storybook](https://lotesystem.github.io/lote-design-system/packages/core/www)
- Detailed docs is coming soon.

## Motivation

Initially, the purpose of this design system is to create any kind of website that we see in our normal life, such as. (Marketing / Agency Website), (Ecommerce Website) and Admin Dashboard. Therefore, the main purpose is to save the developer's time and create a complete set of components so that the developer does not have any difficulty in creating such a website.

## Goals

The core goals of this project are to:

- Promote best practices for accessibility, internationalization, and
  responsive web design.
- Speed up design and development velocity
- Help create consistent, beautiful, and usable UI in our applications

We hope to accomplish these goals by:

- Reducing the number of decisions needed when iterating on UI
- Reducing the amount of code duplication in our apps
- Providing easy-to-use and extensible components for anyone to consume.

## License
MIT
