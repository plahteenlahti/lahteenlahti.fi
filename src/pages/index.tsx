import { graphql, PageProps } from "gatsby";
import React, { FC } from "react";
import { HotKeys } from "react-hotkeys";
import styled from "styled-components";
import { Layout, Content } from "../components/layout";
import Search from "../components/search";
import { SEO } from "../components/seo";
import WritingStats from "../components/Stats/WritingStats";
import { rhythm } from "../utils/typography";
import moment from "moment";
import { MarkdownRemark, SiteMetadata } from "../typings/site";
import { BlogPostCard } from "../components/blog/BlogPostCard";
const keyMap = {
  OPEN_SEARCH: "z",
};

type Props = {
  site: {
    siteMetadata: SiteMetadata;
  };
  allMarkdownRemark: {
    nodes: MarkdownRemark[];
  };
};

const BlogIndex: FC<PageProps<Props>> = ({
  data: {
    site: {
      siteMetadata: { title },
    },
    allMarkdownRemark: { nodes: posts },
  },
  location,
}) => {
  return (
    <HotKeys keyMap={keyMap} root>
      <Search>
        <Layout location={location} title={title}>
          <SEO
            published={moment().format("DD.MM.YYYY")}
            updated={moment().format("DD.MM.YYYY")}
            url={`https://lahteenlahti.com`}
            title="Perttu Lähteenlahti"
            description="Personal website of Perttu Lähteenlahti"
            keywords={[
              `blog`,
              `design`,
              "technology",
              "programming",
              `cognitive science`,
            ]}
            slug="/"
          />

          <Banner>
            <Content>
              <Mini>Developer / Designer / Cognitive Scientist</Mini>
              <H1>Perttu Lähteenlahti</H1>
              <p>
                Personal blog of Perttu Lähteenlahti. For more developer
                oriented posts checkout{" "}
                <a href="https://perttu.dev">perttu.dev</a> and if you want to
                sleep better check <a href="https://nyxo.app">nyxo.app</a>
              </p>
            </Content>
          </Banner>

          <Content>
            <BlogPosts>
              {posts.map(
                ({
                  frontmatter: { title, date, description },
                  fields: {
                    slug,
                    readingTime: { text },
                  },
                  excerpt,
                }) => {
                  return (
                    <BlogPostCard
                      key={slug}
                      slug={slug}
                      title={`${title}`}
                      readingTime={text}
                      published={`${date}`}
                      excerpt={description || `${excerpt}`}
                    />
                  );
                }
              )}
            </BlogPosts>
            <WritingStats />
          </Content>
        </Layout>
      </Search>
    </HotKeys>
  );
};

export default BlogIndex;

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      filter: {
        frontmatter: { draft: { ne: true } }
        fileAbsolutePath: { regex: "/(blog)/" }
      }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      nodes {
        timeToRead
        wordCount {
          words
        }
        excerpt
        fields {
          slug
          readingTime {
            text
          }
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
        }
      }
    }
  }
`;
const BlogPosts = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin: 0 -1rem;
`;

const Banner = styled.div`
  width: 100%;
  min-height: ${rhythm(10)};
  background-color: var(--bgBanner);
`;

const Mini = styled.span`
  font-size: 0.8rem;
  color: var(--textSecondary);
`;

const H1 = styled.h1`
  margin: ${rhythm(1 / 4)} 0 ${rhythm(1)};
  text-transform: uppercase;
  font-size: 1.5rem;
`;
