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

type Props = PageRendererProps;

const About = (props: Props) => {
	const data = useStaticQuery(graphql`
		query {
			site {
				siteMetadata {
					title
				}
			}
		}
	`);

	const siteTitle = data.site.siteMetadata.title;

	return (
		<Layout location={props.location} title={siteTitle}>
			<SEO
				title='Who is Perttu Lähteenlahti?'
				keywords={[`blog`, `gatsby`, `javascript`, `react`]}
			/>
			<div>Perttu is a human</div>
		</Layout>
	);
};

export default About;
