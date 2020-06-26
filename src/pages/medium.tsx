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
    allMediumFeed: { edges: mediumPosts },
    site: {
      siteMetadata: { title },
    },
  },
}: any) => {
  console.log(mediumPosts);
  return (
    <Layout title={title} location={location}>
      <div>
        <SEO
          slug='tags'
          title='Perttu Lähteenlahti on Medium'
          description={`I've collected all the ${mediumPosts.length} articles I've written in Medium to this page`}
        />
        <h1>My Medium Posts</h1>
        <p>
          I try to publish my writing in other forums as well, for example
          Medium, Dev.to, Hackernoon, and HashNode. I've collected all the{" "}
          {mediumPosts.length} articles I've written in Medium to this page.
        </p>

        <ul>
          {mediumPosts.map(({ node: article }) => (
            <Li>
              <h2>{article.title}</h2>
              <time>{article.date}</time>
              <img src={article.thumbnail}></img>
            </Li>
          ))}
        </ul>
      </div>
    </Layout>
  );
};

export default TagsPage;

export const pageQuery = graphql`
  query MediumPageQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMediumFeed {
      edges {
        node {
          date
          slug
          thumbnail
          title
          link
        }
      }
    }
  }
`;

const Li = styled.li`
  list-style: none;
`;
