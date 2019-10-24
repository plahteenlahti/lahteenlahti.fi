import { graphql, PageRendererProps, useStaticQuery } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import { Bio } from '../components/bio';
import { Layout } from '../components/layout';
import { FadeLink } from '../components/link';
import { SEO } from '../components/seo';
import { MarkdownRemark } from '../graphql-types';
import { rhythm } from '../utils/typography';

const StyledLink = styled(FadeLink)`
	box-shadow: none;
`;

const Title = styled.h3`
	margin-bottom: ${rhythm(1 / 4)};
`;

const ReadingTime = styled.div`
	display: inline;
	margin-left: ${rhythm(1 / 4)};
`;

type Props = PageRendererProps;

const BlogIndex = (props: Props) => {
	const data = useStaticQuery(graphql`
		query {
			site {
				siteMetadata {
					title
				}
			}
			allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
				edges {
					node {
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
		<Layout location={props.location} title={siteTitle}>
			<SEO
				title='All posts'
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
							<StyledLink to={slug}>{title}</StyledLink>
						</Title>
						<time>{frontmatter.date}</time>
						<ReadingTime>{readingTime}</ReadingTime>
						<p
							dangerouslySetInnerHTML={{
								__html: frontmatter.description || excerpt,
							}}
						/>
					</div>
				);
			})}
		</Layout>
	);
};

export default BlogIndex;
