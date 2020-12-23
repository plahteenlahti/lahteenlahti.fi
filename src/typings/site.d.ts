export type SiteMetadata = {
  author: string;
  title: string;
  description: string;
  siteUrl: string;
  social: {
    twitter: string;
    linkedIn: string;
    github: string;
  };
};
export type MarkdownRemark = {
  frontmatter: {
    title: string;
    date: string;
    description?: string;
    draft: string;
    canonical: string;
  };
  excerpt: string;
  canonical: string;
  fields: {
    readingTime: {
      text: string;
    };
    slug: string;
  };
  html: string;
  timeToRead?: number;
  tableOfContents?: string;
  wordCount?: string;
};
