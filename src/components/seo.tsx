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
  canonical?: string | undefined;
  amp?: boolean;
  weekly?: boolean;
  jsonLd?: any;
  published?: string;
  updated?: string;
}

export const SEO = (props: Props) => {
  const {
    slug,
    title,
    lang = "en",
    url,
    meta = [],
    keywords = [],
    description = "",
    canonical = "",
    amp,
    weekly,
    jsonLd,
    published,
    updated,
  } = props;

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
        titleTemplate={`%s | ${site.siteMetadata.title}`}>
        <link rel='canonical' href={canonical} />
        <meta charset='utf-8' />
        <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
        <meta name='description' content={description} />
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:site' content='Lahteenlahti.com' />
        <meta name='twitter:title' content={`${title} – Perttu Lähteenlahti`} />
        <meta name='twitter:description' content={description} />
        <meta name='twitter:creator' content={"Perttu Lähteenlahti"} />

        <meta name='twitter:image' content={socialCard} />

        {published && (
          <meta name='article:published_time' content={published} />
        )}
        {updated && <meta name='article:modified_time' content={updated} />}
        <meta property='og:title' content={`${title} – Perttu Lähteenlahti`} />
        <meta property='og:type' content={"website"} />
        <meta property='og:url' content={canonical} />
        <meta property='og:author' content={"Perttu Lähteenlahti"} />
        <meta property='og:image' content={socialCard} />
        <meta property='og:description' content={description} />
        <meta property='og:site_name' content='Perttu Lähteenlahti' />
        <meta itemProp='name' content={`${title} – Perttu Lähteenlahti`} />
        <meta itemProp='description' content={description} />
        <meta itemProp='image' content={socialCard} />
        <meta name='monetization' content='$ilp.uphold.com/nrDbfNBy4rEZ' />
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
        "image": "${addHttps(url)}/seo.jpg",
        "datePublished": "${props.published}",
        "dateModified": "${props.updated ? props.updated : props.published}",
        "author": {
          "@type": "Person",
          "name": "Perttu Lähteenlahti"
        },
        "publisher": {
          "@type": "Organization",
          "name": "Perttu Lähteenlahti",
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
