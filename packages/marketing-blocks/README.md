# Lote Design System

```sh  
yarn add @lote-design-system/marketing-blocks
```  
or
```sh  
npm install @lote-design-system/marketing-blocks 
```  

## Note

You can use the whole design system without installing all other packages. But remember the whole design-system is written with the [Css-In-Js](https://reactjs.org/docs/faq-styling.html#what-is-css-in-js) approach. It is necessary to import `ThemeProvider` and `theme`, if you want to consume `blocks` inside your website.

Either you can take `ThemeProvider` from external [Css-In-Js](https://reactjs.org/docs/faq-styling.html#what-is-css-in-js) library like [styled-components](https://styled-components.com/docs/api#themeprovider) or you can import this from our `core` package which also comes with the predefined `theme`.

## Example

To use these `blocks` with an enhanced experience, I highly recommend using browser defaults and typography from the `core` package and If we want to use marketing blocks on our website, we need to import special `theme`.

`marketing blocks` are dependent upon the special `theme` which is crafted only for `marketing blocks`. To use `marketing-blocks` properly please take this example seriously.

```js
import React from 'react';
import { createGlobalStyle } from 'styled-components';
import { reset, typography, ThemeProvider } from '@lote-design-system/core';
import { theme, Feature1 } from '@lote-design-system/marketing-blocks';

const GlobalStyle = createGlobalStyle`
  ${reset};
  ${typography};
`;

export default function App() {
  const featureSchema = React.useMemo(
    () => [
      {
        id: 1,
        icon: <Icon name="rss" />,
        title: 'Faster Growth',
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
        link: {
          icon: <Icon name="arrow-right" />,
          href: '/',
          variation: 'fill'
        }
      },
      {
        id: 2,
        icon: <Icon name="bar-chart" />,
        title: 'Linear Growth',
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
        link: {
          icon: <Icon name="arrow-right" />,
          href: '/',
          variation: 'fill'
        }
      },
      {
        id: 3,
        icon: <Icon name="activity" />,
        title: 'J-Curve Growth',
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
        link: {
          icon: <Icon name="arrow-right" />,
          href: '/',
          variation: 'fill'
        }
      }
    ],
    []
  );

  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Feature1
          majorWords="Hello World"
          minorWords="No, You're missing something!"
          subText="I don't like typing!"
          features={featureSchema}
        />
      </ThemeProvider>
    </>
  );
}
```


## Documentation

- [Storybook](https://lotesystem.github.io/lote-design-system/packages/marketing-blocks/www)
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