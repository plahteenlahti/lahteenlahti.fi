import { graphql, Link, PageRendererProps, useStaticQuery } from "gatsby";
import React from "react";
import { HotKeys } from "react-hotkeys";
import styled from "styled-components";
import { Bio } from "../components/bio";
import { Layout, Content } from "../components/layout";
import Search from "../components/search";
import { SEO } from "../components/seo";
import WritingStats from "../components/Stats/WritingStats";
import { MarkdownRemark } from "../graphql-types";
import { rhythm } from "../utils/typography";
import moment from "moment";
import { device } from "../components/Primitives";

const keyMap = {
  OPEN_SEARCH: "z",
};

type Props = PageRendererProps;

const BlogIndex = (props: Props) => {
  const data = useStaticQuery(graphql`
    query {
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
        edges {
          node {
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
    }
  `);

  const siteTitle = data.site.siteMetadata.title;
  const posts = data.allMarkdownRemark.edges;

  return (
    <HotKeys keyMap={keyMap} root>
      <Search>
        <Layout location={props.location} title={siteTitle}>
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
                Personal blog of . For more developer oriented posts checkout{" "}
                <a href="https://perttu.dev">perttu.dev</a> and if you want to
                sleep better check <a href="https://nyxo.app">nyxo.app</a>
              </p>
            </Content>
          </Banner>

          <Content>
            <BlogPosts>
              {posts.map(({ node }: { node: MarkdownRemark }) => {
                const frontmatter = node!.frontmatter!;
                const fields = node!.fields!;
                const slug = fields.slug!;
                const readingTime = fields.readingTime.text!;
                const excerpt = node!.excerpt!;

                const title = frontmatter.title || fields.slug;
                return (
                  <Column key={slug}>
                    <Card>
                      <Title>
                        <StyledLink to={slug}>{title}</StyledLink>
                      </Title>
                      <Details>
                        <Time>{frontmatter.date}</Time>
                        <ReadingTime>{readingTime}</ReadingTime>
                      </Details>

                      <Excerpt
                        dangerouslySetInnerHTML={{
                          __html: frontmatter.description || excerpt,
                        }}
                      />
                    </Card>
                  </Column>
                );
              })}
            </BlogPosts>
            <WritingStats />
          </Content>
        </Layout>
      </Search>
    </HotKeys>
  );
};

export default BlogIndex;

const BlogPosts = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin: 0 -1rem;
`;

const Column = styled.div`
  margin-bottom: ${rhythm(2.5)};
  margin: 0.5rem;
  box-sizing: border-box;

  @media ${device.desktopL} {
    max-width: calc(33.3333% - 2 * 0.5rem);
    flex: 1 1 calc(33.3333% - 2 * 0.5rem);
  }

  @media ${device.desktop} {
    max-width: calc(33.3333% - 2 * 0.5rem);
    flex: 1 1 calc(33.3333% - 2 * 0.5rem);
  }

  @media ${device.laptopL} {
    max-width: calc(33.3333% - 2 * 0.5rem);
    flex: 1 1 calc(33.3333% - 2 * 0.5rem);
  }

  @media ${device.laptop} {
    max-width: calc(33.3333% - 2 * 0.5rem);
    flex: 1 1 calc(33.3333% - 2 * 0.5rem);
  }

  @media ${device.tabletL} {
    max-width: calc(50% - 2 * 0.5rem);
    flex: 1 1 calc(50% - 2 * 0.5rem);
  }

  @media ${device.tablet} {
    max-width: 100%;
    flex: 1 1 100%;
  }

  @media ${device.mobileL} {
    max-width: 100%;
    flex: 1 1 100%;
  }

  @media ${device.mobileM} {
    max-width: 100%;
    flex: 1 1 100%;
  }

  @media ${device.mobileS} {
    max-width: 100%;
    flex: 1 1 100%;
  }
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 4px;
  border: var(--shadowBorder);
  padding: 1rem;
  background-color: var(--bg);
  box-shadow: var(--shadow);
  flex: 1;
  height: 100%;
`;

const Excerpt = styled.p`
  font-size: 0.8rem;
`;

const StyledLink = styled(Link)`
  box-shadow: none;
`;

const Title = styled.h3`
  margin-bottom: ${rhythm(1 / 4)};
`;

const Time = styled.time`
  display: inline;
  color: var(--textSecondary);
  font-size: 0.8rem;
`;

const ReadingTime = styled.span`
  display: inline;
  color: var(--textSecondary);
  margin-left: ${rhythm(1 / 2)};
  font-size: 0.8rem;
`;

const Details = styled.span`
  margin-bottom: ${rhythm(1 / 2)};
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
