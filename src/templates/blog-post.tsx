import { graphql, PageRendererProps, Link } from "gatsby";
import React from "react";
import styled from "styled-components";
import { Bio } from "../components/bio";
import { Layout } from "../components/layout";
import { SEO } from "../components/seo";
import { Query, SitePageContext } from "../graphql-types";
import { rhythm, styledScale } from "../utils/typography";
import Share from "../components/share";
import CanonicalBox from "../components/CanonicalBox";
import { JsonLd } from "../components/JsonLD";
import moment from "moment";

interface Props extends PageRendererProps {
  pageContext: SitePageContext;
  data: Query;
}

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

  const {
    canonical,
    lang,
    date: creationDate,
    updated: dateModified,
    tags,
  } = frontmatter;

  return (
    <Layout location={props.location} title={siteTitle}>
      <SEO
        url={`https://lahteenlahti.com${slug}`}
        slug={slug}
        canonical={frontmatter.canonical}
        title={frontmatter.title!}
        description={frontmatter.description || excerpt}
        published={creationDate}
        updated={dateModified}
        lang={lang}
      />
      <h1>{post.frontmatter!.title}</h1>
      <p>{JSON.stringify(tags)}</p>
      <Information>
        {dateModified && (
          <Date dateTime={dateModified}>
            Last updated: {moment(dateModified).format("DD.MM.YYYY")}
          </Date>
        )}
        <Date dateTime={creationDate}>
          Published: {moment(creationDate).format("DD.MM.YYYY")}
        </Date>

        <ReadingTime>{readingTime}</ReadingTime>
      </Information>

      <CanonicalBox canonical={frontmatter.canonical} />

      <div dangerouslySetInnerHTML={{ __html: html }} />
      <Divider />

      <Share url={`https://lahteenlahti.com${slug}`} />

      <PostNavigator>
        <li>
          {previous && (
            <Link to={previous.fields!.slug!} rel='prev'>
              ← {previous.frontmatter!.title}
            </Link>
          )}
        </li>
        <li>
          {next && (
            <Link to={next.fields!.slug!} rel='next'>
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
  query BlogPostBySlug($slug: String!) {
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
        lang
        updated(formatString: "")
        date(formatString: "")
        canonical
      }
    }
  }
`;

const Information = styled.div`
  display: flex;
  flex-direction: column;
`;

const Date = styled.time`
  ${styledScale(-1 / 5)};
`;

const ReadingTime = styled.p`
  ${styledScale(-1 / 5)};
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
