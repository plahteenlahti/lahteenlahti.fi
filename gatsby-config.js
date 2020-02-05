module.exports = {
  siteMetadata: {
    author: `Perttu Lähteenlahti`,
    title: `The Personal Blog of Perttu Lähteenlahti`,
    description: `Personal blog of Perttu Lähteenlahti. Blogging about design, development, cognitive science and startups. `,
    siteUrl: `https://lahteenlahti.com`,
    social: {
      twitter: `plahteenlahti`,
      linkedIn: `plahteenlahti`,
      github: `plahteenlahti`
    }
  },
  plugins: [
    `gatsby-plugin-advanced-sitemap`,
    `gatsby-remark-reading-time`,
    `gatsby-plugin-dark-mode`,
    `gatsby-remark-embed-video`,
    `gatsby-plugin-twitter`,
    {
      resolve: "gatsby-plugin-html2amp",
      options: {
        files: ["public/*.html"],
        dist: "public/amp"
      }
    },
    {
      resolve: `@raae/gatsby-remark-oembed`,
      options: {
        // usePrefix defaults to false
        // usePrefix: true is the same as ["oembed"]
        usePrefix: ["oembed", "video", "embed"]
      }
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /\.inline\.svg$/
        }
      }
    },
    // {
    //   resolve: `gatsby-plugin-amp`,
    //   options: {
    //     analytics: {
    //       type: "gtag",
    //       dataCredentials: "include",
    //       config: {
    //         vars: {
    //           gtag_id: "UA-112021087-1",
    //           config: {
    //             "UA-112021087-1": {
    //               page_location: "{{pathname}}"
    //             }
    //           }
    //         }
    //       }
    //     },
    //     canonicalBaseUrl: "https://www.lahteenlahti.com/",
    //     components: ["amp-form"],
    //     excludedPaths: ["/404*", "/"],
    //     pathIdentifier: "/amp/",
    //     relAmpHtmlPattern: "{{canonicalBaseUrl}}{{pathname}}{{pathIdentifier}}",
    //     useAmpClientIdApi: true
    //   }
    // },
    {
      resolve: "gatsby-plugin-mailchimp",
      options: {
        endpoint:
          "https://lahteenlahti.us4.list-manage.com/subscribe/post?u=e5fc085e3ff83b00d093a8c65&amp;id=6b47e4b337"
      }
    },
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
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/weeklies`,
        name: `weeklies`
      }
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          "gatsby-plugin-social-cards",
          `gatsby-remark-embedder`,
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
        icon: `src/favicon.jpg`
      }
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-react-helmet-canonical-urls`,
      options: {
        siteUrl: `https://www.lahteenlahti.com`
      }
    },
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
