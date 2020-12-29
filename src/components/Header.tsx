import React, { FC } from "react";
import { rhythm } from "../utils/typography";
import styled from "styled-components";
import { Link, useStaticQuery, graphql } from "gatsby";
import ToggleTheme from "./themeToggler";
import Image, { GatsbyImageProps } from "gatsby-image";
import { useTranslation } from "gatsby-plugin-react-i18next";
const menuItems = [
  {
    name: "BLOG",
    link: "/",
  },
  {
    name: "WORK",
    link: "/work",
  },
  {
    name: "ABOUT",
    link: "/about",
  },
];

type Props = {
  title: string;
};

export const Header: FC<Props> = ({ title }) => {
  const { avatar } = useStaticQuery(graphql`
    query HeaderQuery {
      avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
        childImageSharp {
          fixed(width: 25, height: 25) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);

  const { t } = useTranslation();

  return (
    <Container>
      <InnerContainer>
        <Logo to={`/`}>
          <AvatarContainer>
            <Avatar fixed={avatar.childImageSharp.fixed} />
          </AvatarContainer>
          <Title>{title}</Title>
        </Logo>
        <Menu>
          {menuItems.map((item) => (
            <MenuItem key={item.name}>
              <StyledLink to={item.link}>{t(`HEADER.${item.name}`)}</StyledLink>
            </MenuItem>
          ))}
        </Menu>
        <ToggleTheme />
      </InnerContainer>
    </Container>
  );
};

const Container = styled.header`
  width: 100%;
  background-color: var(--bgBanner);
`;

const InnerContainer = styled.div`
  max-width: 1140px;
  width: 100%;
  margin: auto;
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 1rem 1rem;
  box-sizing: border-box;
`;

const StyledLink = styled(Link)`
  box-shadow: none;
  color: inherit;
  text-decoration: none;
  color: var(--textLink);
  margin-bottom: 0;
`;

const Menu = styled.ul`
  display: flex;
  flex-direction: row;
  width: 100%;
  margin: 0;
`;

const MenuItem = styled.li`
  list-style: none;
  margin-right: ${rhythm(3 / 4)};
  margin-bottom: 0;
  line-height: 1rem;
`;

const Title = styled.h2`
  font-size: ${rhythm(3 / 4)};
  margin: 0;
  width: 10rem;
  line-height: 1rem;
`;

const AvatarContainer = styled.figure`
  display: block;
  border: 2px solid var(--textLink);
  border-radius: 30px;
  box-sizing: border-box;
  margin: 0rem 1rem 0rem 0rem;
`;

const Avatar = styled(Image)<GatsbyImageProps>`
  height: 30px;
  width: 30px;
  margin: 5px;
  border-radius: 30px;

  display: block !important;
`;

const Logo = styled(Link)`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
