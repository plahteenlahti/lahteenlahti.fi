/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import Helmet from 'react-helmet';

interface Meta {
	name: string;
	content: string;
}

interface Props {
	slug: string | undefined | null;
	title: string;
	lang?: string;
	meta?: Meta[];
	keywords?: string[];
	description?: string;
}

export const SEO = (props: Props) => {
	const lang = props.lang || 'en';
	const meta = props.meta || [];
	const keywords = props.keywords || [];
	const description = props.description || '';

	const { site } = useStaticQuery(
		graphql`
			query {
				site {
					siteMetadata {
						title
						description
						author
						siteUrl
						social {
							twitter
						}
					}
				}
			}
		`
	);

	const metaDescription = description || site.siteMetadata.description;
	const { siteMetadata } = site;

	const url = `${siteMetadata.siteUrl}${props.slug}`;
	const socialCard = `${url}seo.jpg`;

	return (
		<Helmet
			htmlAttributes={{
				lang
			}}
			title={props.title}
			titleTemplate={`%s | ${site.siteMetadata.title}`}
			meta={[
				{
					content: metaDescription,
					name: `description`
				},
				{
					content: props.title,
					property: `og:title`
				},
				{
					content: metaDescription,
					property: `og:description`
				},
				{
					content: `website`,
					property: `og:type`
				},
				{
					content: `${siteMetadata.siteUrl}`,
					property: `og:url`
				},
				{
					content: 'summary_large_image',
					name: 'twitter:card'
				},
				{
					content: 'summary_large_image',
					property: 'twitter:card'
				},
				{
					content: socialCard,
					property: 'og:image'
				},

				{
					content: socialCard,
					name: 'twitter:image'
				},
				{
					content: site.siteMetadata.author,
					name: `twitter:creator`
				},
				{
					content: props.title,
					name: `twitter:title`
				},
				{
					content: metaDescription,
					name: `twitter:description`
				}
			]
				.concat(
					keywords.length > 0
						? {
								content: keywords.join(`, `),
								name: `keywords`
						  }
						: []
				)
				.concat(meta)}
		/>
	);
};
