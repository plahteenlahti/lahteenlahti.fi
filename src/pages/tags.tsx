import { graphql, PageProps } from "gatsby";
import { kebabCase } from "lodash";
import React, { FC } from "react";
import { Layout } from "../components/layout";
import { SEO } from "../components/seo";
import { Link, useTranslation } from "gatsby-plugin-react-i18next";

type Props = {
  allMarkdownRemark: {
    group: Array<{ fieldValue: string; totalCount: number }>;
  };
  site: {
    siteMetadata: {
      title: string;
    };
  };
};

const TagsPage: FC<PageProps<Props>> = ({
  location,
  data: {
    allMarkdownRemark: { group: tags },
    site: {
      siteMetadata: { title },
    },
  },
}) => {
  const { t } = useTranslation();

  return (
    <Layout title={title} location={location}>
      <div>
        <SEO
          slug="tags"
          title="Tags"
          description="Browse blog posts by tags"
        />
        <h1>Tags</h1>
        <p>Browse blog posts by tags</p>
        <ul>
          {tags.map((tag) => (
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
};

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
