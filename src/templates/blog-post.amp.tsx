import { graphql, PageRendererProps, Link } from "gatsby";
import React from "react";
import styled from "styled-components";
import { Layout } from "../components/layout";
import { SEO } from "../components/seo";
import Share from "../components/share";
import { Query, SitePageContext } from "../graphql-types";
import { rhythm, styledScale } from "../utils/typography";

interface Props extends PageRendererProps {
  pageContext: SitePageContext;
  data: Query;
}

const Information = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Date = styled.time`
  display: block;
  ${styledScale(-1 / 5)};
  margin-bottom: ${rhythm(1)};
  margin-top: ${rhythm(-1)};
`;

const ReadingTime = styled.p`
  display: block;
  ${styledScale(-1 / 5)};
  margin: ${rhythm(-1)} ${rhythm(1)} ${rhythm(1)};
`;

const Divider = styled.hr`
  margin-bottom: ${rhythm(1)};
`;

const PostNavigator = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  list-style: none;
  padding: 0;
`;

const BlogPostTemplate = (props: Props) => {
  const data = props.data!;

  const post = data.markdownRemark!;
  const excerpt = post.excerpt!;
  const slug = post.fields!.slug!;
  const frontmatter = post.frontmatter!;
  const html = post.html!;
  const siteTitle = data.site!.siteMetadata!.title!;
  const { previous, next } = props.pageContext;
  const readingTime = post.fields!.readingTime.text!;

  return (
    <Layout location={props.location} title={siteTitle}>
      <SEO
        slug={slug}
        canonical={frontmatter.canonical}
        amp={true}
        title={frontmatter.title!}
        description={frontmatter.description || excerpt}
      />
      <h1>{post.frontmatter!.title}</h1>
      <Information>
        <Date>{frontmatter.date}</Date>
        <ReadingTime>{readingTime}</ReadingTime>
      </Information>

      <div dangerouslySetInnerHTML={{ __html: html }} />
      <Divider />
      <Share url={`https://lahteenlahti.com${slug}`} />
      <PostNavigator>
        <li>
          {previous && (
            <Link to={previous.fields!.slug!} rel="prev">
              ← {previous.frontmatter!.title}
            </Link>
          )}
        </li>
        <li>
          {next && (
            <Link to={next.fields!.slug!} rel="next">
              {next.frontmatter!.title} →
            </Link>
          )}
        </li>
      </PostNavigator>
    </Layout>
  );
};

export default BlogPostTemplate;

export const pageQuery = graphql`
  query AmpPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      fields {
        slug
        readingTime {
          text
        }
      }
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        canonical
      }
    }
  }
`;
