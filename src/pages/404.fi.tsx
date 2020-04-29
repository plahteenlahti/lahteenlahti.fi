import { graphql, PageRendererProps, useStaticQuery } from "gatsby";
import React from "react";
import { Layout } from "../components/layout";
import { SEO } from "../components/seo";

type Props = PageRendererProps;

export const NotFoundPage = (props: Props) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <Layout location={props.location} title={data.site.siteMetadata.title}>
      <SEO title='404: Ei vittu löydy täält' slug='404' />
      <h1>No ei löytyny</h1>
      <p>Sori, mut sun pitää ettiä jostai muualt</p>
    </Layout>
  );
};

export default NotFoundPage;
