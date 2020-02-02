import React from "react";
import kebabCase from "lodash";
import { Helmet } from "react-helmet";
import { Link, graphql } from "gatsby";
import { Layout } from "../components/layout";

const TagsPage = ({
  location,
  data: {
    allMarkdownRemark: { group },
    site: {
      siteMetadata: { title }
    }
  }
}: any) => (
  <Layout title={title} location={location}>
    <div>
      <h1>Tags</h1>
      <ul>
        {group.map((tag: any) => (
          <li key={tag.fieldValue}>
            <Link to={`/tags/${kebabCase(tag.fieldValue)}/`}>
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
    allMarkdownRemark(limit: 2000) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`;
