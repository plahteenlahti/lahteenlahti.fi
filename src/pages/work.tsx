import { graphql, PageProps } from "gatsby";
import React, { FC } from "react";
import styled from "styled-components";
import { Layout } from "../components/layout";
import { SEO } from "../components/seo";
import { SiteMetadata } from "../typings/site";
import { rhythm } from "../utils/typography";

type Props = {
  site: { siteMetadata: SiteMetadata };
  markdownRemark: {
    html: string;
  };
};

const Work: FC<PageProps<Props>> = ({
  location,
  data: {
    site: {
      siteMetadata: { title },
    },
    markdownRemark: { html },
  },
}) => {
  return (
    <Layout location={location} title={title}>
      <SEO
        slug="work"
        title="Work by Perttu Lähteenlahti"
        keywords={[`work`, `portfolio`, `javascript`, `react`]}
      />
      <Content>
        <h1>What I've worked on</h1>
        <div dangerouslySetInnerHTML={{ __html: html }}></div>
      </Content>
    </Layout>
  );
};

export const PageQuery = graphql`
  query WorkPageQuery {
    markdownRemark(fileAbsolutePath: { regex: "/(pages/work)/" }) {
      html
    }
    site {
      siteMetadata {
        title
      }
    }
  }
`;

export default Work;

export const Content = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: 1140px;
  padding: ${`${rhythm(1.5)} ${rhythm(3 / 4)}`};
`;
