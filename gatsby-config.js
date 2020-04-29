module.exports = {
  siteMetadata: {
    author: `Perttu Lähteenlahti`,
    title: `The Blog`,
    description: `Personal blog of Perttu Lähteenlahti. Blogging about design, development, cognitive science and startups. `,
    siteUrl: `https://www.lahteenlahti.com`,
    languages: {
      defaultLangKey: "en",
      langs: ["en", "fi"],
    },
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
    `gatsby-plugin-mdx`,
    {
      resolve: "gatsby-plugin-html2amp",
      options: {
        files: ["public/*.html"],
        dist: "public/amp",
      },
    },
    {
      resolve: "gatsby-source-goodreads",
      options: {
        developerKey: "lJeTjb5OfssYdNfuW24qcA",
        goodReadsUserId: "32613066",
        userShelf: "read",
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /\.inline\.svg$/,
        },
      },
    },
    {
      resolve: "gatsby-plugin-i18n",
      options: {
        langKeyDefault: "en",
        useLangKeyLayout: false,
        markdownRemark: {
          postPage: "src/templates/blog-post.js",
          query: `
            {
              allMarkdownRemark {
                edges {
                  node {
                    fields {
                      slug,
                      langKey
                    }
                  }
                }
              }
            }
          `,
        },
      },
    },

    {
      resolve: "gatsby-plugin-mailchimp",
      options: {
        endpoint:
          "https://lahteenlahti.us4.list-manage.com/subscribe/post?u=e5fc085e3ff83b00d093a8c65&amp;id=6b47e4b337",
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
          `gatsby-remark-smartypants`,
          "gatsby-plugin-social-cards",
          {
            resolve: "gatsby-remark-audio",
            options: {
              preload: "auto",
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
              footnoteBackRefPreviousElementDisplay: "inline",
              footnoteBackRefDisplay: "inline",
              //use if you want the Wikipedia style ^ link without an underline beneath it
              footnoteBackRefAnchorStyle: `text-decoration: none;`,
              //use "front" for Wikipedia style ^ links
              footnoteBackRefInnerTextStartPosition: "front",
              useFootnoteMarkerText: false, // Defaults to false
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          {
            resolve: `gatsby-remark-prismjs`,
            showLineNumbers: false,
            inlineCodeMarker: { typescript: "tsx" },
          },
          `gatsby-remark-copy-linked-files`,
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
    `gatsby-plugin-feed`,
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
      resolve: "gatsby-plugin-google-tagmanager",
      options: {
        id: "GTM-TJCVSJ7",
        includeInDevelopment: false,
        defaultDataLayer: { platform: "gatsby" },
      },
    },
  ],
};
