import { graphql, PageRendererProps, Link, PageProps } from "gatsby";
import React, { FC } from "react";
import styled from "styled-components";
import { Bio } from "../components/bio";
import { Layout, TextContent } from "../components/layout";
import { SEO } from "../components/seo";
import { MarkdownRemark, Site, SitePageContext } from "../graphql-types";
import { rhythm, styledScale } from "../utils/typography";
import Share from "../components/share";
import CanonicalBox from "../components/CanonicalBox";
import moment from "moment";
import "katex/dist/katex.min.css";

interface Props extends PageRendererProps {
  site: Site;
  markdownRemark: MarkdownRemark;
}

const BlogPostTemplate: FC<PageProps<Props, SitePageContext>> = ({
  data: {
    site,
    markdownRemark: {
      tableOfContents,
      excerpt,
      frontmatter: {
        title,
        description,
        lang,
        canonical,
        date: creationDate,
        updated: dateModified,
        tags,
      },
      html,
      fields: {
        slug,
        readingTime: { text: readingTime },
      },
    },
  },
  pageContext: { previous, next },
}) => {
  const siteTitle = site?.siteMetadata?.title;

  return (
    <Layout location={location} title={`${siteTitle}`}>
      <SEO
        url={`https://lahteenlahti.com(${lang}${slug}`}
        slug={slug}
        canonical={canonical}
        title={title}
        description={description || excerpt}
        published={creationDate}
        updated={dateModified}
        lang={lang}
      />
      <h1>{title}</h1>
      {/* <p>{JSON.stringify(tags)}</p>
      <div dangerouslySetInnerHTML={{ __html: `${tableOfContents}` }}></div> */}
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

      <CanonicalBox canonical={canonical} />

      <div dangerouslySetInnerHTML={{ __html: html }} />
      <Divider />

      <Share url={`https://lahteenlahti.com${slug}`} />

      <PostNavigator>
        <li>
          {previous && (
            <Link to={previous?.fields?.slug} rel="prev">
              ← {previous?.title}
            </Link>
          )}
        </li>
        <li>
          {next && (
            <Link to={next?.fields?.slug} rel="next">
              {next?.title} →
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
      tableOfContents
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
