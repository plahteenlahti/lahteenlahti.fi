import { graphql, PageRendererProps, useStaticQuery } from "gatsby";
import React from "react";
import styled from "styled-components";
import { Layout } from "../components/layout";
import { SEO } from "../components/seo";
import { rhythm } from "../utils/typography";

const StyledLink = styled(FadeLink)`
  box-shadow: none;
`;

const Title = styled.h3`
  margin-bottom: ${rhythm(1 / 4)};
`;

type Props = PageRendererProps;

const About = (props: Props) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  const siteTitle = data.site.siteMetadata.title;

  return (
    <Layout location={props.location} title={siteTitle}>
      <SEO
        slug="work"
        title="Work by Perttu Lähteenlahti"
        keywords={[`work`, `portfolio`, `javascript`, `react`]}
      />
      <h1>What I've worked on</h1>
    </Layout>
  );
};

export default About;
