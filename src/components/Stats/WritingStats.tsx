import React from "react";
import { SmallText } from "../Primitives";
import { useStaticQuery, graphql } from "gatsby";

const WritingStats = () => {
  const data = useStaticQuery(graphql`
    query {
      drafts: allMarkdownRemark(
        filter: { frontmatter: { draft: { eq: true } } }
      ) {
        edges {
          node {
            id
          }
        }
      }
      blog: allMarkdownRemark(
        filter: {
          frontmatter: { draft: { ne: true } }
          fileAbsolutePath: { regex: "/(blog)/" }
        }
      ) {
        edges {
          node {
            timeToRead
            wordCount {
              words
            }
          }
        }
      }
      weekly: allMarkdownRemark(
        filter: {
          frontmatter: { draft: { ne: true } }
          fileAbsolutePath: { regex: "/(weeklies)/" }
        }
      ) {
        edges {
          node {
            timeToRead
          }
        }
      }
    }
  `);

  const posts = data.blog.edges;
  const drafts = data.drafts.edges;
  const weeklies = data.weekly.edges;
  const totalWordCount = posts.reduce((a, b) => {
    return a + b.node.wordCount.words;
  }, 0);

  const totalReadingTime = posts.reduce((a, b) => {
    return a + b.node.timeToRead;
  }, 0);

  const totalHours = Math.floor(totalReadingTime / 60);
  const totalMinutes = totalReadingTime - totalHours * 60;

  return (
    <SmallText>
      <b>
        This site has total of {posts.length} articles and {weeklies.length}{" "}
        Weeklies. The articles I've written have a total of{" "}
        {totalWordCount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")} words
        in them, and it would take you approximately {totalHours} hours{" "}
        {totalMinutes > 0 && `and ${totalMinutes} minutes`} to read all of the
        them. There's also {drafts.length} posts in draft state (huh, that's a
        lot, better get back to work).
      </b>
    </SmallText>
  );
};

export default WritingStats;
