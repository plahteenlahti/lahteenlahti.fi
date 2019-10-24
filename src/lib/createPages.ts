import path from 'path';
import { GatsbyCreatePages } from '../types';
const _ = require('lodash');

interface Post {
	node: {
		fields: {
			slug: string;
		};
	};
}

export const createPages: GatsbyCreatePages = async ({
	graphql,
	boundActionCreators
}) => {
	const { createPage } = boundActionCreators;

	const allMarkdown = await graphql(`
		{
			allMarkdownRemark(
				filter: { frontmatter: { draft: { ne: true } } }
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
		}
	`);

	if (allMarkdown.errors) {
		throw allMarkdown.errors;
	}

	// Create blog posts pages.
	const content = allMarkdown.data.allMarkdownRemark.edges;

	content.forEach((post: Post, index: number) => {
		const previous = index === content.length - 1 ? null : content[index + 1].node;
		const next = index === 0 ? null : content[index - 1].node;

    if (_.get(edge, 'node.frontmatter.template') === 'page') {
		createPage({
			path: post.node.fields.slug,
			// tslint:disable-next-line:object-literal-sort-keys
			component: path.resolve(`./src/templates/blog-post.tsx`),
			context: {
				next,
				previous,
				slug: post.node.fields.slug
			}
		});

		createPage({
			path: post.node.fields.slug,
			// tslint:disable-next-line:object-literal-sort-keys
			component: path.resolve(`./src/templates/weekly.tsx`),
			context: {
				next,
				previous,
				slug: post.node.fields.slug
			}
		});
	});

	return null;
};
