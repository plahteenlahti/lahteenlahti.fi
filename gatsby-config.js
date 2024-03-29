module.exports = {
  siteMetadata: {
    author: `Perttu Lähteenlahti`,
    title: `The Blog`,
    description: `Personal blog of Perttu Lähteenlahti. Blogging about design, development, cognitive science and startups. `,
    siteUrl: `https://www.lahteenlahti.com`,
    social: {
      twitter: `plahteenlahti`,
      linkedIn: `plahteenlahti`,
      github: `plahteenlahti`,
    },
  },
  plugins: [
    `gatsby-plugin-advanced-sitemap`,
    `gatsby-remark-reading-time`,
    `gatsby-plugin-dark-mode`,
    `gatsby-remark-embed-video`,
    `gatsby-plugin-twitter`,
    {
      resolve: `gatsby-plugin-react-svg`,
      options: {
        rule: {
          include: /\.inline\.svg$/,
        },
      },
    },
    {
      resolve: `gatsby-plugin-mailchimp`,
      options: {
        endpoint: `https://lahteenlahti.us4.list-manage.com/subscribe/post?u=e5fc085e3ff83b00d093a8c65&amp;id=6b47e4b337`,
      },
    },
    {
      resolve: `gatsby-plugin-chatwoot`,
      options: {
        baseUrl: `https://app.chatwoot.com`,
        websiteToken: `LoDPm8AKvVDCtT9kxoWBCKPV`,
        includeInDevelopment: false,
        chatwootSettings: {},
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/weeklies`,
        name: `weeklies`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          `gatsby-remark-autolink-headers`,
          `gatsby-remark-check-links`,
          `gatsby-remark-katex`,
          `gatsby-remark-smartypants`,
          `gatsby-plugin-social-cards`,
          {
            resolve: `gatsby-remark-audio`,
            options: {
              preload: `auto`,
              loop: false,
              controls: true,
              muted: false,
              autoplay: false,
            },
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
          `gatsby-remark-numbered-footnotes`,
          {
            resolve: `gatsby-remark-footnotes`,
            options: {
              footnoteBackRefPreviousElementDisplay: `inline`,
              footnoteBackRefDisplay: `inline`,
              footnoteBackRefAnchorStyle: `text-decoration: none;`,
              footnoteBackRefInnerTextStartPosition: `front`,
              useFootnoteMarkerText: false,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-112021087-1`,
      },
    },
    {
      resolve: `gatsby-plugin-react-i18next`,
      options: {
        path: `${__dirname}/locales`,
        languages: [`en`, `fi`],
        defaultLanguage: `en`,
        redirect: false,
        i18nextOptions: {
          interpolation: {
            escapeValue: false,
          },
          keySeparator: false,
          nsSeparator: false,
        },
      },
    },
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allMarkdownRemark } }) => {
              return allMarkdownRemark.edges.map((edge) => {
                return Object.assign({}, edge.node.frontmatter, {
                  description: edge.node.excerpt,
                  date: edge.node.frontmatter.date,
                  url: site.siteMetadata.siteUrl + edge.node.fields.slug,
                  guid: site.siteMetadata.siteUrl + edge.node.fields.slug,
                  custom_elements: [{ "content:encoded": edge.node.html }],
                });
              });
            },
            query: `
              {
                allMarkdownRemark(
                  sort: { order: DESC, fields: [frontmatter___date] },
                  filter: {
                    frontmatter: { draft: { ne: true } }
                  }
                ) {
                  edges {
                    node {
                      excerpt
                      html
                      fields { slug }
                      frontmatter {
                        title
                        date
                      }
                    }
                  }
                }
              }
            `,
            output: `/rss.xml`,
            title: `Rss from Lahteenlahti.com`,
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Blog by Perttu Lähteenlahti`,
        short_name: `Perttu`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#373737`,
        display: `minimal-ui`,
        icon: `src/favicon.jpg`,
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-react-helmet-canonical-urls`,
      options: {
        siteUrl: `https://www.lahteenlahti.com`,
      },
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    `gatsby-plugin-typescript`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-transition-link`,
    {
      resolve: `gatsby-plugin-google-tagmanager`,
      options: {
        id: `GTM-TJCVSJ7`,
        includeInDevelopment: false,
        defaultDataLayer: { platform: `gatsby` },
      },
    },
  ],
};
