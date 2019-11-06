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

const Time = styled.time`
	display: inline;
	color: var(--textSecondary);
`;

const ReadingTime = styled.div`
	display: inline;
	color: var(--textSecondary);
	margin-left: ${rhythm(1 / 2)};
`;

const Language = styled.div`
	display: inline;
	margin-left: ${rhythm(1 / 2)};
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
			allMarkdownRemark(
				filter: { frontmatter: { draft: { ne: true } } }
				sort: { fields: [frontmatter___date], order: DESC }
			) {
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
				title='Personal blog of Perttu Lähteenlahti'
				keywords={[
					`blog`,
					`design`,
					'technology',
					'programming',
					`cognitive science`
				]}
				slug=''
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
						<Time>{frontmatter.date}</Time>
						<ReadingTime>{readingTime}</ReadingTime>
						{/* <Language>🇫🇮</Language> */}
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

export default BlogIndex;
