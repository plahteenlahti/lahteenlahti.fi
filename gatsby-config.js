module.exports = {
	siteMetadata: {
		author: `Perttu Lähteenlahti`,
		title: `Perttu Lähteenlahti`,
		description: `Personal blog of Perttu Lähteenlahti`,
		siteUrl: `https://lahteenlahti.fi`,
		social: {
			twitter: `plahteenlahti`
		}
	},
	plugins: [
		`gatsby-remark-reading-time`,
		`gatsby-plugin-dark-mode`,
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				path: `${__dirname}/content/blog`,
				name: `blog`
			}
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				path: `${__dirname}/content/assets`,
				name: `assets`
			}
		},
		// {
		// 	resolve: `gatsby-source-filesystem`,
		// 	options: {
		// 		path: `${__dirname}/content/weeklies`,
		// 		name: `weeklies`
		// 	}
		// },
		{
			resolve: `gatsby-transformer-remark`,
			options: {
				plugins: [
					'gatsby-plugin-social-cards',
					{
						resolve: `gatsby-remark-images`,
						options: {
							maxWidth: 590
						}
					},
					{
						resolve: `gatsby-remark-responsive-iframe`,
						options: {
							wrapperStyle: `margin-bottom: 1.0725rem`
						}
					},
					`gatsby-remark-prismjs`,
					`gatsby-remark-copy-linked-files`,
					`gatsby-remark-smartypants`
				]
			}
		},
		`gatsby-transformer-sharp`,
		`gatsby-plugin-sharp`,
		{
			resolve: `gatsby-plugin-google-analytics`,
			options: {
				trackingId: `UA-112021087-1`
			}
		},
		`gatsby-plugin-feed`,
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: `Blog by Perttu Lähteenlahti`,
				short_name: `Perttu`,
				start_url: `/`,
				background_color: `#ffffff`,
				theme_color: `#663399`,
				display: `minimal-ui`,
				icon: `content/assets/gatsby-icon.png`
			}
		},
		`gatsby-plugin-offline`,
		`gatsby-plugin-react-helmet`,
		{
			resolve: `gatsby-plugin-typography`,
			options: {
				pathToConfigModule: `src/utils/typography`
			}
		},
		`gatsby-plugin-typescript`,
		`gatsby-plugin-styled-components`,
		`gatsby-plugin-transition-link`
	]
};
