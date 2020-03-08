import { graphql, PageRendererProps, useStaticQuery } from "gatsby";
import React from "react";
import { Layout } from "../components/layout";
import { SEO } from "../components/seo";

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

      <h3>Nyxo</h3>

      <h3>Nordea Analysis 360°</h3>

      <h3>Scudo Lite & Scudo Pro</h3>
    </Layout>
  );
};

export default About;
