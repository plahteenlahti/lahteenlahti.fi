---
title: "TypeScript Configuration For styled-components In React Native"
date: "2020-05-10"
tags: ["Styled-components", "TypeScript", "React Native"]
---

Using [Styled-components](https://styled-components.com/) with React Native is great. Where it really shines in my opinion is theming. However, wouldn't it be cool if you get type-checking for the themes you've created, as well as auto-complete for the theme variables? So that when you're writing something like this:

```typescript
const Text = styled.Text`
  color: ${({ theme }) => theme.primaryColor};
`;
```

Then you wouldn't have to remember if whether the primary color was written as `primaryColor` or `primary_color`, Instead your editor tells you what theme variables stored inside the theme object you've created.

Well good news, you can easily achieve this by using the Typescript interface mergin to override the default theme that comes with styled-components (more info how declaration mergin works can be found [here](https://www.typescriptlang.org/docs/handbook/declaration-merging.html), and [here](https://styled-components.com/docs/api#create-a-declarations-file)). Here's how to achieve that:

1. To access the theme in our app, we need to first setup ThemeProvider and the pass down our custom theme inside it.

```typescript
// App.tsx
import React from "react";
import { ThemeProvider } from "styled-components/native";
import Navigation from "/navigation";
import { lightTheme } from "/styles/theme";

const App = () => {
  return (
    <ThemeProvider theme={lightTheme}>
      <Navigation />
    </ThemeProvider>
  );
};

export default App;
```

2. We create the theme file and merge the declaration of DefaultTheme provided by styled-components with our own definition. Then we tell our themes to use that interface.

```typescript
// theme.ts
import { DefaultTheme } from "styled-components/native";

declare module "styled-components" {
  export interface DefaultTheme {
    primaryColor: string;
  }
}

export const lightTheme: DefaultTheme = {
	primaryColor: #333;
	secondaryColor: #666;
};

export const darkTheme: DefaultTheme = {
	primaryColor: #fff;
	secondaryColor: #cacaca
};
```

## That's it

Now everytime you use the theme variables it comes equipped with TypeScript's typing powers. Even better, if you're using for example VS Code, it automatically provides you with auto-completetion for the theme variables.
