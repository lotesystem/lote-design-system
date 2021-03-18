# Lote Design System

<p align="center">
    <img alt="ui-kit" src="https://user-images.githubusercontent.com/71380271/110454542-2e73ac00-80e9-11eb-941e-21f3debb3914.png">
</p>

> Lote Design system is a design system which contains set of different components
> that will make it easier for us to create websites by clear standards and best
> practices for accessibility, internationalization, and responsive web design.


What it includes?
- UI Kit
- Color scheme
- Typography
- Gridsystem
- Icongraphy
- and much more

### Some knowledge about `Logo` and word `Lote`
***Lote***
Lote comes from the Lote Tree a location that marks the end of the seventh heaven, the boundary which no creation can pass. It is a symbol of solidarity and determination; it reminds us that the goals of this world are not incompatible with the goals of the spiritual soul.

***Logo***
Life is started with the water and water is divided into the ocean. King of the ocean is a whale.

## Getting started

From the start, I have a goal to help developers to build any kind of site in less amount of time. So I have divided this whole design-system to separate packages and consider this design system as one `monorepo` for all the packages.

For example, if you only want to use core components (**Theme (Default Color scheme)**, **Reset styles**, **GridSystem**, **Button**, and **Input** fields etc) of design system you have to install only the `core` package and if you only want to use icons then install `icons` package. Make sure you have little understanding of the tech stack what I am using to build this design-system.

## Technology stack
-   [React](https://reactjs.org/)
-   [Storybook](https://storybook.js.org/)
-   [JavaScript](https://javascript.info/)
-   [Styled Components](https://styled-components.com/)
-   [Jest](https://jestjs.io/)
-   [Eslint](https://eslint.org/)
-   [Lerna](https://lerna.js.org/)

Back to the point. The following table will explain to you what is the purpose of each package.

| Package name                                      | Description                                                                                                  | Storybook & Docs                                                                                                                                                                              | Installation                                    |
|---------------------------------------------------|--------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------|
| [`core`](./packages/core)                         | Main core components comes with Theme, Typography, ColorScheme, GridSystem, Buttons, Pagination & Input etc. | [Demo](https://lotesystem.github.io/lote-design-system/packages/core/www) & [Docs](https://github.com/lotesystem/lote-design-system/tree/master/packages/core#readme)                         | yarn add `@lote-design-system/core`             |
| [`icons`](./packages/icons)                       | Iconography assets from the design system                                                                    | [Demo](https://lotesystem.github.io/lote-design-system/packages/icons/www) & [Docs](https://github.com/lotesystem/lote-design-system/tree/master/packages/icons#readme)                       | yarn add `@lote-design-system/icons`            |
| [`marketing-blocks`](./packages/marketing-blocks) | all the main components used inside the modern Landing pages                                                 | [Demo](https://lotesystem.github.io/lote-design-system/packages/marketing-blocks/www) & [Docs](https://github.com/lotesystem/lote-design-system/tree/master/packages/marketing-blocks#readme) | yarn add `@lote-design-system/marketing-blocks` |
| [`gallery-blocks`](./packages/gallery-blocks)     | helps to create masonry or justified grid of photos                                                          | [Demo](https://lotesystem.github.io/lote-design-system/packages/gallery-blocks/www) & [Docs](https://github.com/lotesystem/lote-design-system/tree/master/packages/gallery-blocks#readme)     | yarn add `@lote-design-system/gallery-blocks`   |
| [`map-blocks`](./packages/map-blocks)             | integrate mobile-friendly interactive maps                                                                   | [Demo](https://lotesystem.github.io/lote-design-system/packages/map-blocks/www) & [Docs](https://github.com/lotesystem/lote-design-system/tree/master/packages/map-blocks#readme)              | yarn add `@lote-design-system/map-blocks`       |

## Motivation

Initially, the purpose of this design system is to create any kind of website that we see in our normal life, such as. (Marketing / Agency Website), (Ecommerce Website) and Admin Dashboard. Therefore, the main purpose is to save the developer's time and create a complete set of components so that the developer does not have any difficulty in creating such a website.

## Note

You can use the whole design system without installing all other packages. But remember the whole design-system is written with the [Css-In-Js](https://reactjs.org/docs/faq-styling.html#what-is-css-in-js) approach. It is necessary to import `ThemeProvider` and `theme`, if you want to consume `components` & `blocks` inside your website.

Either you can take `ThemeProvider` from external [Css-In-Js](https://reactjs.org/docs/faq-styling.html#what-is-css-in-js) library like [styled-components](https://styled-components.com/docs/api#themeprovider) or you can import this from our `core` package which also comes with the predefined `theme`.

## Tip #1
To use this design-system with an enhanced experience, I highly recommend using browser defaults and typography from our `core` package.

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

## Tip #2

`If we want to use marketing blocks on our website, we need to import special theme!`

`marketing blocks` are dependent upon the special `theme` which is crafted only for `marketing blocks`. To use `marketing-blocks` properly please take this example seriously.

```js
import React from 'react';
import { createGlobalStyle } from 'styled-components';
import {
  reset,
  typography,
  ThemeProvider,
  Button
} from '@lote-design-system/core';
import { theme } from '@lote-design-system/marketing-blocks';

const GlobalStyle = createGlobalStyle`
  ${reset};
  ${typography};
`;

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

## Examples
[Webincubator](https://www.webincubator.io/)


## Contributing

I'm always looking for contributors to help us build new features or help us improve the project documentation. Please clone this repo and feel free to make a PR.

## License
MIT
