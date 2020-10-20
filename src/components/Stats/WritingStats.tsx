import React, { FC } from "react";
import { SmallText } from "../Primitives";
import { useStaticQuery, graphql } from "gatsby";
import { prettifyNumber } from "../../helpers/string";

const WritingStats: FC = () => {
  const data = useStaticQuery(graphql`
    query {
      drafts: allMarkdownRemark(
        filter: {
          frontmatter: { draft: { eq: true } }
          fileAbsolutePath: { regex: "/(blog)/" }
        }
      ) {
        nodes {
          timeToRead
          wordCount {
            words
          }
        }
      }
      blog: allMarkdownRemark(
        filter: {
          frontmatter: { draft: { ne: true } }
          fileAbsolutePath: { regex: "/(blog)/" }
        }
      ) {
        nodes {
          timeToRead
          wordCount {
            words
          }
        }
      }
      weekly: allMarkdownRemark(
        filter: {
          frontmatter: { draft: { ne: true } }
          fileAbsolutePath: { regex: "/(weeklies)/" }
        }
      ) {
        nodes {
          timeToRead
        }
      }
    }
  `);

  const posts = data.blog.nodes;
  const drafts = data.drafts.nodes;
  const weeklies = data.weekly.nodes;
  const totalWordCount = posts.reduce((a: number, b: any) => {
    return a + b.wordCount?.words;
  }, 0);

  const draftsTotalWordCount = drafts.reduce((a: number, b: any) => {
    return a + b?.wordCount?.words;
  }, 0);

  const totalReadingTime = posts.reduce((a: number, b: any) => {
    return a + b.timeToRead;
  }, 0);

  const totalHours = Math.floor(totalReadingTime / 60);
  const totalMinutes = totalReadingTime - totalHours * 60;

  return (
    <SmallText>
      <b>
        This site has total of {posts.length} articles and {weeklies.length}{" "}
        Weeklies. The articles I've written have a total of{" "}
        {prettifyNumber(totalWordCount)} words in them, and it would take you
        approximately {totalHours} hours{" "}
        {totalMinutes > 0 && `and ${totalMinutes} minutes`} to read all of the
        them. There are also {drafts.length} posts in draft state totaling to{" "}
        {prettifyNumber(draftsTotalWordCount)} words (huh, that's a lot, better
        get back to work).
      </b>
    </SmallText>
  );
};

export default WritingStats;
