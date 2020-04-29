import { graphql, Link } from "gatsby";
import * as _ from "lodash";
import React from "react";
import Layout from "../../components/Layout/layout.fi";
import { SEO } from "../../components/seo";

const TagsPage = ({
  location,
  data: {
    allMarkdownRemark: { group },
    site: {
      siteMetadata: { title },
    },
  },
}: any) => (
  <Layout title={title} location={location}>
    <div>
      <SEO slug='tags' title='Tags' description='Explore posts by tags.' />
      <h1>Tags</h1>
      <p>Explore posts by tags.</p>
      <ul>
        {group.map((tag: any) => (
          <li key={tag.fieldValue}>
            <Link to={`/tags/${_.kebabCase(tag.fieldValue)}/`}>
              {tag.fieldValue} ({tag.totalCount})
            </Link>
          </li>
        ))}
      </ul>
    </div>
  </Layout>
);

export default TagsPage;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      limit: 2000
      filter: {
        frontmatter: { draft: { ne: true } }
        fileAbsolutePath: { regex: "/(blog)/" }
      }
    ) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`;
