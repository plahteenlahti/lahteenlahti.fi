import { graphql, Link, PageRendererProps, useStaticQuery } from "gatsby";
import React from "react";
import { Layout } from "../components/layout";
import { SEO } from "../components/seo";

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
        slug='about'
        title='Who is Perttu Lähteenlahti?'
        keywords={[`blog`, `javascript`, `react`]}
      />
      <h1>Who is Perttu Lähteenlahti?</h1>
      <div style={{ paddingBottom: 100 }}>
      I am a developer and designer who founded Nyxo, a startup that offers personalized sleep coaching through a mobile app. Prior to starting Nyxo, I worked as a product lead at the University of Helsinki and as an analyst at Nordea, a Nordic bank. Before that, I paid my way through university by fixing iPhones and working as a research assistant, while also studying cognitive science and computer science at the University of Helsinki.
        <br /> <br />
        In addition to my work as a developer, I have written for several publications, including Muzli, DailyJS, codeburst, and Hackernoon. My writings often cover topics related to my personal experiences.
        <br /> <br />
        You can reach me through email, [first name]@lahteenlahti.fi and from{" "}
        <a href='https://www.linkedin.com/in/plahteenlahti/'>LinkedIn</a> and{" "}
        <a href='https://twitter.com/plahteenlahti'>Twitter.</a>
        <br /> <br />
        <br /> <br />
        <em>Perttu Lähteenlahti</em>
      </div>
    </Layout>
  );
};

export default About;
