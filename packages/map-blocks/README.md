# Lote Design System

```sh
yarn add @lote-design-system/map-blocks  
```
or
```sh
npm install @lote-design-system/map-blocks   
```

```js
import React from 'react';
import { createGlobalStyle } from 'styled-components';
import { reset, typography, ThemeProvider } from '@lote-design-system/core';
import { Map1 } from '@lote-design-system/map-blocks';

const GlobalStyle = createGlobalStyle`
  ${reset};  
  ${typography};  
`;

export default function App() {
  return <Map1 />;
}
```


## Documentation

- [Storybook](https://lotesystem.github.io/lote-design-system/packages/map-blocks/www)
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