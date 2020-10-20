import { useStaticQuery, graphql } from "gatsby";

type Query = {
  title: string;
};

export const useMetaData = (): Query => {
  const {
    site: { siteMetadata },
  } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);
  return siteMetadata;
};
