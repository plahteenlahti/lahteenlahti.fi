import { graphql, PageRendererProps } from "gatsby";
import React from "react";
import styled from "styled-components";
import { Bio } from "../components/bio";
import { Layout } from "../components/layout";
import { FadeLink } from "../components/link";
import { SEO } from "../components/seo";
import { Query, SitePageContext } from "../graphql-types";
import { rhythm, styledScale } from "../utils/typography";
import Share from "../components/share";
import CanonicalBox from "../components/CanonicalBox";
import { JsonLd } from "../components/JsonLD";

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
    updated: dateModified
  } = frontmatter;

  return (
    <Layout location={props.location} title={siteTitle}>
      <SEO
        url={`https://lahteenlahti.com${slug}`}
        slug={slug}
        canonical={frontmatter.canonical}
        title={frontmatter.title!}
        description={frontmatter.description || excerpt}
        lang={lang}
        jsonLd={
          <JsonLd>
            {{
              "@context": "https://schema.org",
              "@type": "BlogPosting",
              url: `https://lahteenlahti.com${slug}`,
              headline: frontmatter.title!,
              dateCreated: creationDate,
              datePublished: creationDate,
              dateModified: dateModified,
              accountablePerson: {
                "@type": "Person",
                name: "Perttu Lähteenlahti",
                url: "https://www.lahteenlahti.com"
              },
              author: {
                "@type": "Person",
                name: "Perttu Lähteenlahti",
                url: "https://www.lahteenlahti.com"
              }
            }}
          </JsonLd>
        }
      />
      <h1>{post.frontmatter!.title}</h1>
      <Information>
        {dateModified && (
          <Date dateTime={dateModified}>Updated: {dateModified}</Date>
        )}
        <Date dateTime={creationDate}>Originally Posted: {creationDate}</Date>

        <ReadingTime>{readingTime}</ReadingTime>
      </Information>

      <CanonicalBox canonical={frontmatter.canonical} />

      <div dangerouslySetInnerHTML={{ __html: html }} />
      <Divider />

      <Share url={`https://lahteenlahti.com${slug}`} />

      <PostNavigator>
        <li>
          {previous && (
            <FadeLink to={previous.fields!.slug!} rel="prev">
              ← {previous.frontmatter!.title}
            </FadeLink>
          )}
        </li>
        <li>
          {next && (
            <FadeLink to={next.fields!.slug!} rel="next">
              {next.frontmatter!.title} →
            </FadeLink>
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
        updated(formatString: "MMMM DD, YYYY")
        date(formatString: "MMMM DD, YYYY")
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
