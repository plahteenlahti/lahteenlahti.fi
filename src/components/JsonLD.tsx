import React from "react";
import Helmet from "react-helmet";

export const JsonLd = ({ children }: any) => {
  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(children)}</script>
    </Helmet>
  );
};
