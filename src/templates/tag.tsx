import React from "react";
import { Link, graphql } from "gatsby";
import { Layout } from "../components/layout";
import { SEO } from "../components/seo";
import styled from "styled-components";

const Tags = ({ pageContext, data, location }: any) => {
  const { tag } = pageContext;
  const siteTitle = data.site!.siteMetadata!.title!;

  const { edges, totalCount } = data.allMarkdownRemark;
  const tagHeader = `${totalCount} post${
    totalCount === 1 ? "" : "s"
  } tagged with "${tag}"`;

  return (
    <Layout location={location} title={siteTitle}>
      <SEO
        slug={`tags/${tag}`}
        title={`Blog posts tagged with "${tag}"`}
        description={tagHeader}
      />
      <h1>{tagHeader}</h1>
      <ul>
        {edges.map(({ node }: any) => {
          const { excerpt } = node;
          const { slug } = node.fields;
          const { title, description, date } = node.frontmatter;
          return (
            <TagItem key={slug}>
              <Link to={slug}>
                <h3>{title}</h3>
                <time dateTime={date}>{date}</time>
                <p
                  dangerouslySetInnerHTML={{
                    __html: excerpt || description
                  }}
                />
              </Link>
            </TagItem>
          );
        })}
      </ul>
      <Link to="/tags">All tags</Link>
    </Layout>
  );
};

export default Tags;

export const pageQuery = graphql`
  query($tag: String) {
    site {
      siteMetadata {
        title
        author
      }
    }
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          excerpt
          fields {
            slug
            readingTime {
              text
            }
          }
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            description
          }
        }
      }
    }
  }
`;

const TagItem = styled.li`
  list-style: none;
`;
