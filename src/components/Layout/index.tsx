import { PageRendererProps, Link, useStaticQuery, graphql } from "gatsby";
import React, { ReactNode } from "react";
import styled from "styled-components";
import { rhythm, styledScale } from "../../utils/typography";
import ToggleTheme from "../themeToggler";
import SignUp from "../signup";
import Links from "../links";
import { FormattedMessage } from "react-intl";
import { getCurrentLangKey, getLangs, getUrlForLang } from "ptz-i18n";
import { IntlProvider } from "react-intl";
import "intl";

export interface Props extends PageRendererProps {
  title: string;
  children: ReactNode;
  i18nMessages?: any;
  menuItems?: any;
}

export const Layout = (props: Props) => {
  const { location, title, children, i18nMessages, menuItems } = props;
  const rootPath = `/`;
  const data = useStaticQuery(graphql`
    query LayoutQuery {
      site {
        siteMetadata {
          languages {
            defaultLangKey
            langs
          }
        }
      }
    }
  `);

  const HeaderTitle = location.pathname === rootPath ? StyledH1 : StyledH3;
  const url = location.pathname;
  const { langs, defaultLangKey } = data.site.siteMetadata.languages;
  const langKey = getCurrentLangKey(langs, defaultLangKey, url);
  const homeLink = `/${langKey}/`.replace(`/${defaultLangKey}/`, "/");
  const langsMenu = getLangs(langs, langKey, getUrlForLang(homeLink, url)).map(
    (item) => ({
      ...item,
      link: item.link.replace(`/${defaultLangKey}/`, "/"),
    })
  );

  const links = langsMenu.map((lang) => (
    <Link
      to={lang.link}
      key={lang.langKey}
      style={{
        color: "white",
      }}>
      <li selected={lang.selected}>{lang.langKey}</li>
    </Link>
  ));

  return (
    <IntlProvider locale={langKey} messages={i18nMessages}>
      <Content>
        <ToggleTheme />
        <section>
          <header
            style={{
              color: "white",
            }}>
            <FormattedMessage id='selectLanguage' />
          </header>
          <ul>{links}</ul>
        </section>
        <header>
          <HeaderTitle>
            <StyledLink to={`/`}>{title}</StyledLink>
          </HeaderTitle>
          <Menu>
            {menuItems.map((item) => (
              <MenuItem key={item.name}>
                <StyledLink to={item.link}>{item.name}</StyledLink>
              </MenuItem>
            ))}
          </Menu>
        </header>
        <main>{children}</main>
        <footer>
          <SignUp />
          <Links />
          <div>© {new Date().getFullYear()} Perttu Lähteenlahti</div>
        </footer>
      </Content>
    </IntlProvider>
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

const StyledLink = styled(Link)`
  box-shadow: none;
  color: inherit;
  text-decoration: none;
  color: var(--textLink);
`;

const Content = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: ${rhythm(25)};
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
