import path from "path";
import { GatsbyCreatePages } from "../types";
const _ = require("lodash");

interface Post {
  node: {
    fields: {
      slug: string;
    };
  };
}

export const createPages: GatsbyCreatePages = async ({
  graphql,
  boundActionCreators,
}) => {
  const { createPage } = boundActionCreators;

  const allMarkdown = await graphql(`
    {
      blog: allMarkdownRemark(
        filter: {
          frontmatter: { draft: { ne: true } }
          fileAbsolutePath: { regex: "/(blog)/" }
        }
        sort: { fields: [frontmatter___date], order: DESC }
        limit: 1000
      ) {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              title
            }
          }
        }
      }

      weekly: allMarkdownRemark(
        filter: {
          frontmatter: { draft: { ne: true } }
          fileAbsolutePath: { regex: "/(weeklies)/" }
        }
        sort: { fields: [frontmatter___date], order: DESC }
        limit: 1000
      ) {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              title
            }
          }
        }
      }

      tagsGroup: allMarkdownRemark(limit: 2000) {
        group(field: frontmatter___tags) {
          fieldValue
        }
      }
    }
  `);

  if (allMarkdown.errors) {
    throw allMarkdown.errors;
  }

  // Create blog posts pages.
  const blogPosts = allMarkdown.data.blog.edges;
  const weeklies = allMarkdown.data.weekly.edges;

  blogPosts.forEach((post: Post, index: number) => {
    const previous =
      index === blogPosts.length - 1 ? null : blogPosts[index + 1].node;
    const next = index === 0 ? null : blogPosts[index - 1].node;

    createPage({
      path: post.node.fields.slug,
      // tslint:disable-next-line:object-literal-sort-keys
      component: path.resolve(`./src/templates/blog-post.tsx`),
      context: {
        next,
        previous,
        slug: post.node.fields.slug,
      },
    });

    // createPage({
    //   path: `${post.node.fields.slug}amp/`,
    //   component: path.resolve("./src/templates/blog-post.amp.tsx"),
    //   context: {
    //     slug: post.node.fields.slug,
    //     previous,
    //     next
    //   }
    // });
  });

  const tags = allMarkdown.data.tagsGroup.group;

  tags.forEach((tag: any) => {
    createPage({
      path: `/tags/${_.kebabCase(tag.fieldValue)}/`,
      component: path.resolve(`./src/templates/tag.tsx`),
      context: {
        tag: tag.fieldValue,
      },
    });
  });

  weeklies.forEach((weekly: any, index: any) => {
    const previous =
      index === weeklies.length - 1 ? null : weeklies[index + 1].node;
    const next = index === 0 ? null : weeklies[index - 1].node;

    createPage({
      path: `weekly${weekly.node.fields.slug}`,
      component: path.resolve(`./src/templates/weekly.tsx`),
      context: {
        next,
        previous,
        slug: weekly.node.fields.slug,
      },
    });
  });

  return null;
};
