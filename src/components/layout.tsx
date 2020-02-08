import { PageRendererProps } from "gatsby";
import React, { ReactNode } from "react";
import styled from "styled-components";
import { rhythm, styledScale } from "../utils/typography";
import { FadeLink } from "./link";
import ToggleTheme from "./themeToggler";
import SignUp from "./signup";
import Links from "./links";

interface Props extends PageRendererProps {
  title: string;
  children: ReactNode;
}

export const Layout = (props: Props) => {
  const { location, title, children } = props;
  const rootPath = `/`;

  const HeaderTitle = location.pathname === rootPath ? StyledH1 : StyledH3;

  return (
    <Content>
      <ToggleTheme />
      <header>
        <HeaderTitle>
          <StyledLink to={`/`}>{title}</StyledLink>
        </HeaderTitle>
        <Menu>
          <MenuItem>
            <StyledLink to={`/`}>Blog</StyledLink>
          </MenuItem>
          <MenuItem>
            <StyledLink to={`/weeklies`}>Weeklies</StyledLink>
          </MenuItem>
          <MenuItem>
            <StyledLink to={`/about`}>About</StyledLink>
          </MenuItem>
          <MenuItem>
            <StyledLink to={`/tags`}>Tags</StyledLink>
          </MenuItem>
        </Menu>
      </header>
      <main>{children}</main>
      <footer>
        <SignUp />

        <Links />
        <div>© {new Date().getFullYear()} Perttu Lähteenlahti</div>
      </footer>
    </Content>
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

const StyledLink = styled(FadeLink)`
  box-shadow: none;
  color: inherit;
  text-decoration: none;
  color: var(--textLink);
`;

const Content = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: ${rhythm(24)};
  padding: ${`${rhythm(1.5)} ${rhythm(3 / 4)}`};
`;

const Menu = styled.ul`
  display: flex;
  flex-direction: row;
  width: 100%;
`;

const MenuItem = styled.li`
  list-style: none;
  margin-right: ${rhythm(3 / 4)};
`;
