import { PageRendererProps, Link } from "gatsby";
import React, { ReactNode } from "react";
import styled from "styled-components";
import { rhythm, styledScale } from "../utils/typography";
import ToggleTheme from "./themeToggler";
import SignUp from "./signup";
import Links from "./links";
import { Header } from "./Header";

interface Props extends PageRendererProps {
  title: string;
  children: ReactNode;
}

export const Layout = (props: Props) => {
  const { location, title, children } = props;
  const rootPath = `/`;

  const HeaderTitle = location.pathname === rootPath ? StyledH1 : StyledH3;

  return (
    <>
      <Header title={title} />
      <main>{children}</main>
      <Content>
        <footer>
          <SignUp />
          <Links />
          <div>© {new Date().getFullYear()} Perttu Lähteenlahti</div>
        </footer>
      </Content>
    </>
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
