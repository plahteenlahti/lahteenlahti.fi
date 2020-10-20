import { DefaultTheme } from "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    textPrimary: string;
    textSecondary: string;

    bgPrimary: string;
    bgSecondary: string;

    accentPrimary: string;
    accentSecondary: string;
  }
}

export const lightTheme: DefaultTheme = {
  textPrimary: "#333",
  textSecondary: "#696969",

  bgPrimary: "#e0e5ec",
  bgSecondary: "rgb(240, 240, 240, 0.5)",

  accentPrimary: "#4a5aef",
  accentSecondary: "#4a5aef",
};

// transition: all 0.3s cubic-bezier(0.075, 0.82, 0.165, 1);
// /* //white; */
// --bg: #e0e5ec;
// --bgSecondary: rgb(240, 240, 240, 0.5);
// --bgBanner: #d1dcea;
// --textPrimary: #333;
// --textSecondary: #696969;
// --textTitle: #333;
// --textLink: #4a5aef;
// --hr: hsla(0, 0%, 0%, 0.2);
// background-color: var(--bg);
// --lightShadow: rgba(255, 255, 255, 0.52);
// --darkShadow: rgb(163, 177, 198, 0.5);
// --shadowBorder: 0.5px solid var(--lightShadow);

// --shadow: 9px 9px 22px -2px var(--darkShadow),
// 	-9px -9px 18px var(--lightShadow);

// --inset: inset 9px 9px 22px -2px var(--darkShadow),
// 	-9px -9px 18px var(--lightShadow);
