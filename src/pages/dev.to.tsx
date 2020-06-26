import React from "react";
import * as _ from "lodash";
import { Helmet } from "react-helmet";
import { Link, graphql } from "gatsby";
import { Layout } from "../components/layout";
import { SEO } from "../components/seo";
import styled from "styled-components";

const TagsPage = ({
  location,
  data: {
    allDevArticles: { edges: devArticles },
    site: {
      siteMetadata: { title },
    },
  },
}: any) => {
  console.log(devArticles);
  return (
    <Layout title={title} location={location}>
      <div>
        <SEO
          slug='tags'
          title='Perttu Lähteenlahti on Medium'
          description={`I've collected all the ${devArticles.length} articles I've written in Medium to this page`}
        />
        <h1>Perttu in Dev.to</h1>
        <p>
          I try to publish my writing in other forums as well, for example
          Medium, Dev.to, Hackernoon, and HashNode. I've collected all the{" "}
          {devArticles.length} articles I've written in Dev.to to this page.
        </p>

        <ul>
          {devArticles.map(({ node: { article } }) => (
            <Li>
              <h2>{article.title}</h2>
              <img src={article.cover_image}></img>
              <p>Published in {article.organization?.name}</p>
              <p>Reactions {article.public_reactions_count}</p>
              <p>
                {article.tag_list.split(",").map((tag) => (
                  <span>{tag}</span>
                ))}
              </p>
            </Li>
          ))}
        </ul>
      </div>
    </Layout>
  );
};

export default TagsPage;

export const pageQuery = graphql`
  query DevToQuery {
    site {
      siteMetadata {
        title
      }
    }
    allDevArticles {
      edges {
        node {
          article {
            organization {
              name
              profile_image_90
              slug
              username
            }
            comments_count
            cover_image
            path
            public_reactions_count
            tag_list
            title
            url
          }
        }
      }
    }
  }
`;

const Li = styled.li`
  list-style: none;
`;
