/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import Helmet from "react-helmet";

interface Meta {
  name: string;
  content: string;
}

interface Props {
  slug: string | undefined | null;
  title: string;
  lang?: string;
  url?: string;
  meta?: Meta[];
  keywords?: string[];
  description?: string;
  canonical?: string | null | undefined;
  amp?: boolean;
  weekly?: boolean;
  jsonLd?: any;
  published?: string;
  updated?: string;
}

export const SEO = (props: Props) => {
  const lang = props.lang || "en";
  const meta = props.meta || [];
  const keywords = props.keywords || [];
  const description = props.description || "";
  const slug = props.slug;
  const { weekly, jsonLd, url } = props;

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

  const urlToUse = slug
    ? `${siteMetadata.siteUrl}${slug}`
    : `${siteMetadata.siteUrl}/`;
  const socialCard = weekly
    ? `https://www.lahteenlahti.com/weekly${slug}seo.jpg`
    : `${urlToUse}seo.jpg`;

  return (
    <>
      <Helmet
        htmlAttributes={{
          lang,
        }}
        link={
          !props.amp && props.canonical
            ? [
                {
                  rel: "canonical",
                  key: props.canonical,
                  href: props.canonical,
                },
              ]
            : []
        }
        title={props.title}
        titleTemplate={`%s | ${site.siteMetadata.title}`}
        meta={[
          {
            content: metaDescription,
            name: `description`,
          },
          {
            content: props.title,
            property: `og:title`,
          },
          {
            content: metaDescription,
            property: `og:description`,
          },
          {
            content: `website`,
            property: `og:type`,
          },
          {
            content: url ? url : `${siteMetadata.siteUrl}`,
            property: `og:url`,
          },
          {
            content: "summary_large_image",
            name: "twitter:card",
          },
          {
            content: "summary_large_image",
            property: "twitter:card",
          },
          {
            content: socialCard,
            name: "og:image:secure_url",
          },
          {
            content: socialCard,
            property: "og:image",
          },

          {
            content: socialCard,
            name: "twitter:image",
          },
          {
            content: site.siteMetadata.author,
            name: `twitter:creator`,
          },
          {
            content: props.title,
            name: `twitter:title`,
          },
          {
            content: metaDescription,
            name: `twitter:description`,
          },
        ]
          .concat(
            keywords.length > 0
              ? {
                  content: keywords.join(`, `),
                  name: `keywords`,
                }
              : []
          )
          .concat(meta)}>
        <script type='application/ld+json'>
          {`
      {
        "@context": "https://schema.org",
        "@type": "Article",
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": "${addHttps(url)}"
        },
        "headline": "${props.title}",
        "image": "${addHttps(url)}",
        "datePublished": "${props.published}",
        "dateModified": "${props.updated ? props.updated : props.published}",
        "author": {
          "@type": "Person",
          "name": "Perttu Lähteenlahti"
        },
        "publisher": {
          "@type": "Organization",
          "name": "Perttu Lähteenlahti"
          "logo": {
            "@type": "ImageObject",
            "url": "${seoURL("/perttu.jpg")}"
          }
        },
        "description": "${description.replace(/"/g, '\\"')}"
      }
    `}
        </script>
      </Helmet>
    </>
  );
};

const addHttps = (path: string | undefined) => {
  if (path?.substring(0, 5) === "https") return path;
  return `https:${path}`;
};

const seoURL = (path?: string) => `https://www.lahteenlahti.com${path}`;
