import { graphql, PageProps } from "gatsby";
import React, { FC } from "react";
import { Content, Layout } from "../../components/layout";
import { SEO } from "../../components/seo";
import { MarkdownRemark, SiteMetadata } from "../../typings/site";

type Props = {
  site: {
    siteMetadata: SiteMetadata;
  };
  markdownRemark: MarkdownRemark;
};

const Nyxo: FC<PageProps<Props>> = ({
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
        <h1>{"Nyxo"}</h1>
        <div dangerouslySetInnerHTML={{ __html: `${html}` }}></div>
      </Content>
    </Layout>
  );
};

export default Nyxo;

export const PageQuery = graphql`
  query NyxoPageQuery {
    markdownRemark(fileAbsolutePath: { regex: "/(pages/nyxo)/" }) {
      html
    }
    site {
      siteMetadata {
        title
      }
    }
  }
`;
