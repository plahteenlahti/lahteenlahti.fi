/**
 * Bio component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import { graphql, useStaticQuery } from "gatsby";
import Image from "gatsby-image";
import React, { ComponentProps, forwardRef, Ref } from "react";
import styled from "styled-components";
import { rhythm } from "../utils/typography";
import SignUp from "./signup";
import ToggleTheme from "./themeToggler";

const Content = styled.div`
  display: flex;
  margin-bottom: ${rhythm(2.5)};
  border-radius: 4px;
  border: var(--shadowBorder);
  padding: 1rem;
  background-color: var(--bg);
  box-shadow: var(--shadow);
`;

const GatsbyImage = forwardRef(
  (props: ComponentProps<typeof Image>, ref: Ref<Image>) => (
    <Image {...props} ref={ref} />
  )
);

const Avatar = styled(GatsbyImage)`
  border-radius: 100%;
  margin-bottom: 0;
  margin-right: ${rhythm(1 / 2)};
  min-width: 50px;
`;

export const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
        childImageSharp {
          fixed(width: 50, height: 50) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      site {
        siteMetadata {
          author
          social {
            twitter
          }
        }
      }
    }
  `);

  const { author, social } = data.site.siteMetadata;

  return (
    <>
      <Content>
        <Avatar
          fixed={data.avatar.childImageSharp.fixed}
          alt={author}
          imgStyle={{ borderRadius: "50%" }}
        />

        <p>
          Personal blog of{" "}
          <a href={`https://twitter.com/${social.twitter}`}>
            <strong>{author}</strong>
          </a>
          . For more developer oriented posts checkout{" "}
          <a href="https://perttu.dev">perttu.dev</a>
        </p>
      </Content>
      <ToggleTheme />
    </>
  );
};
