---
title: "Styled-components best practices"
date: "2020-06-13"
draft: true
excerpt: "Highly opinionated take on how to write better styled-components in React and React Native "
---

## Theme First, Components Second

Styled-components provides theming out of the box using the `ThemeProvider` component. Just wrap your application with that

## No String Values

Goes with out saying that using string values is bad. However they are still quite common with CSS, due to the css-variables support being a relatively new feature. However with

## Create Your Own Primitives

## Use Plugins

Writing styled-components a lot better with . For VS Code one should look at installing at least the following plugins:

- Prettier
  This is almost a must have styled-components as it provides automatic indentation for styled-components out of the box.
- [vscode-styled-components](https://marketplace.visualstudio.com/items?itemName=jpoissonnier.vscode-styled-components)
  Gives you syntax highlighting and IntelliSense for styled-components.
- [styled-components-snippets](https://marketplace.visualstudio.com/items?itemName=jpoissonnier.vscode-styled-components)
  There are certain things you will be writing quite often when developing with styled-components, such `const Component = styled...`. Save time by using snippets.
