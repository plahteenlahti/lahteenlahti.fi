import { graphql, PageRendererProps, useStaticQuery } from "gatsby";
import React from "react";
import styled from "styled-components";
import { Bio } from "../components/bio";
import { Layout } from "../components/layout";
import { FadeLink } from "../components/link";
import { SEO } from "../components/seo";
import { MarkdownRemark } from "../graphql-types";
import { rhythm } from "../utils/typography";

const StyledLink = styled(FadeLink)`
  box-shadow: none;
`;

const Title = styled.h3`
  margin-bottom: ${rhythm(1 / 4)};
`;

const Time = styled.time`
  display: inline;
  color: var(--textSecondary);
`;

const ReadingTime = styled.div`
  display: inline;
  color: var(--textSecondary);
  margin-left: ${rhythm(1 / 2)};
`;

type Props = PageRendererProps;

const WeeklyIndex = (props: Props) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
      weekly: allMarkdownRemark(
        filter: {
          frontmatter: { draft: { ne: true } }
          fileAbsolutePath: { regex: "/(weeklies)/" }
        }
        sort: { fields: [frontmatter___date], order: DESC }
      ) {
        edges {
          node {
            fields {
              slug
              readingTime {
                text
              }
            }
            frontmatter {
              title
              date(formatString: "MMMM DD, YYYY")
            }
          }
        }
      }
    }
  `);

  const siteTitle = data.site.siteMetadata.title;
  const posts = data.weekly.edges;

  return (
    <Layout location={props.location} title={siteTitle}>
      <SEO
        slug="weeklies"
        title="All weeklies by Perttu Lähteenlahti"
        keywords={[`blog`, `gatsby`, `javascript`, `react`]}
      />
      <Bio />
      {posts.map(({ node }: { node: MarkdownRemark }) => {
        const frontmatter = node!.frontmatter!;
        const fields = node!.fields!;
        const slug = fields.slug!;
        const readingTime = fields.readingTime.text!;
        const excerpt = node!.excerpt!;

        const title = frontmatter.title || fields.slug;
        return (
          <div key={slug}>
            <Title>
              <StyledLink to={`weekly/${slug}`}>{title}</StyledLink>
            </Title>
            <Time>{frontmatter.date}</Time>
            <ReadingTime>{readingTime}</ReadingTime>
            <p
              dangerouslySetInnerHTML={{
                __html: frontmatter.description || excerpt
              }}
            />
          </div>
        );
      })}
    </Layout>
  );
};

export default WeeklyIndex;
