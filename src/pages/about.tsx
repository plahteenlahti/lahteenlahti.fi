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
			<h1>Who is Perttu Lähteenlahti?</h1>
			<div>
				Here's a little backstory of the person your website you're viewing: I'm
				a developer &amp; designer. Currently, I'm doing that in a company I
				started called <a href='https://nyxo.fi'>Nyxo</a>, our main product is a
				mobile app providing personalized sleep coaching. This is my third
				company so far and the first one that can be considered to be a startup.
				The two previous ones were software consultancies. In addition to these
				three companies, I've worked in a variety of different companies and
				projects. Before Nyxo I worked as a product lead at the University of
				Helsinki, in commercializing sleep research. Before that I was an
				analyst at Nordea, a big Nordic bank, building investment solutions for
				SMEs. However, before all this I also paid my way through university by
				fixing iPhones, working as a research assistant. I've studied both
				cognitive science and computer science at the University of Helsinki. I
				was a decent student, but even better at studying fast. I did five years
				worth of studies in two years before the working life got to me. For
				that reason, I'm still considered a student as I've never finished my
				master's thesis. Originally I was born in Pori, a small town on the west
				coast of Finland. My family was poor, my mom being a welder and my
				father being a carpenter. Partly due to my father's occupation I have
				worked as a carpenter myself as well, for five years. Four of those
				years I spent working for my father, in his company, which eventually
				went bankrupt and bankrupted both of my parent's as well. Coming from a
				poor family, I have worked my hardest to become as financially
				independent as possible. This has partly been the catalyst for my
				interest in investing and building companies. I am by no means rich, but
				throughout the years I've accumulated enough wealth to buy apartments
				for both my parent's and little sister, as well as pursue my dreams of
				University education. This information should give you a good view of
				what has shaped my world view. What it does not necessarily state is
				what my writings tend to be about, so I'm going to end this about
				section by mentioning those. I like talking and writing about:
				<ul>
					<li>Technology</li>
					<li>
						Programming (currently that means React and React Native mostly)
					</li>
					<li>Design, of UIs and products</li>
					<li>Diversity, especially in technology</li>
					<li>
						Innovation (the fact that I've competed in over 70 different
						innovation challenges provides me with a unique view on this)
					</li>
					<li>Building companies</li>
					<li>
						Relationships, because I've made so many mistakes in this sector
						that I hope no one else will repeat them
					</li>
				</ul>
				You can reach me through email, [first name]@lahteenlahti.fi and from{' '}
				<a href='https://www.linkedin.com/in/plahteenlahti/'>LinkedIn</a> and{' '}
				<a href='https://twitter.com/plahteenlahti'>Twitter.</a> In addition to
				this blog, I also have{' '}
				<a href='https://perttu.dev'>separate one focusing on programming</a>{' '}
				and a side project one focusing on{' '}
				<a href='https://react-native.club'>React Native development.</a>
				Life is good.
				<em>Perttu Lähteenlahti</em>
			</div>
		</Layout>
	);
};

export default About;
