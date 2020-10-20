import { PageRendererProps } from "gatsby";
import React, { ReactNode } from "react";
import styled, { ThemeProvider } from "styled-components";
import { lightTheme } from "../styles/themes";
import { rhythm, styledScale } from "../utils/typography";
import { Header } from "./Header";
import Links from "./links";
import SignUp from "./signup";

interface Props extends PageRendererProps {
  title: string;
  children: ReactNode;
}

export const Layout = (props: Props) => {
  const { location, title, children } = props;
  const rootPath = `/`;

  const HeaderTitle = location.pathname === rootPath ? StyledH1 : StyledH3;

  return (
    <ThemeProvider theme={lightTheme}>
      <Header title={title} />
      <main>{children}</main>
      <Content>
        <footer>
          <SignUp />
          <Links />
          <div>© {new Date().getFullYear()} Perttu Lähteenlahti</div>
        </footer>
      </Content>
    </ThemeProvider>
  );
};

const StyledH1 = styled.h1`
  ${styledScale(1.2)};
  margin-bottom: ${rhythm(1.5)};
  margin-top: 0;
`;

const StyledH3 = styled.h3`
  font-family: "Montserrat", sans-serif;
  margin-top: 0;
`;

export const Content = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: 1140px;
  padding: ${`${rhythm(1.5)} ${rhythm(3 / 4)}`};
`;

export const TextContent = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: ${rhythm(25)};
  padding: ${`${rhythm(1.5)} ${rhythm(3 / 4)}`};
`;
