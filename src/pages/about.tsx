import { Link, PageProps } from "gatsby";
import React, { FC } from "react";
import { Layout, Content } from "../components/layout";
import { SEO } from "../components/seo";
import styled from "styled-components";
import { parse, format } from "date-fns";
import { useMetaData } from "../hooks/useMetaData";
import { device } from "../components/Primitives";
import { useTranslation } from "gatsby-plugin-react-i18next";

const positions = [
  {
    period: {
      start: "01-01-2019",
      end: null,
    },
    position: "CEO & Founder",
    company: "Nyxo",
    description: "",
  },
  {
    period: {
      start: "30-09-2016",
      end: "30-10-2018",
    },
    position: "Co-Founder",
    company: "Perfektio",
    description: "Hard to find a company with shittier people.",
  },
  {
    period: {
      start: "30-10-2017",
      end: "31-12-2018",
    },
    position: "Project Lead",
    company: "University Of Helsinki",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur excepturi voluptatibus laborum omnis velit doloremque, rerum possimus molestias sed maxime amet accusantium eius ea rem incidunt error cumque alias vero!",
  },
  {
    period: {
      start: "01-06-2016",
      end: "30-10-2018",
    },
    position: "Analyst",
    company: "Nordea",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur excepturi voluptatibus laborum omnis velit doloremque, rerum possimus molestias sed maxime amet accusantium eius ea rem incidunt error cumque alias vero!",
  },
];

const getDateOrPresent = (date: string | undefined | null): string => {
  if (!date) return "Present";
  return format(parse(date, "dd-mm-yyyy", new Date()), "MMM yyyy");
};

const About: FC<PageProps> = ({ location }) => {
  const { title } = useMetaData();
  const { t } = useTranslation;

  return (
    <Layout location={location} title={title}>
      <SEO
        slug="about"
        title="Who is Perttu Lähteenlahti?"
        keywords={[`blog`, `javascript`, `react`]}
      />

      <Content>
        <h1>Who is Perttu Lähteenlahti?</h1>
        <ExperienceSection>
          {positions.map((work) => (
            <Work key={`${work.position}-${work.company}`}>
              <Column>
                <Period>
                  {getDateOrPresent(work.period.start)} –{" "}
                  {getDateOrPresent(work.period.end)}
                </Period>
                <Company>{work.company}</Company>
                <Position>{work.position}</Position>
              </Column>
              <Description>{work.description}</Description>
            </Work>
          ))}
        </ExperienceSection>

        <div style={{ paddingBottom: 100 }}>
          Here's a little backstory of the person your website you're viewing:
          I'm a developer &amp; designer. Currently, I'm doing that in a company
          I started called <a href="https://nyxo.fi">Nyxo</a>, our main product
          is a mobile app providing personalized sleep coaching. This is my
          third company so far and the first one that can be considered to be a
          startup. The two previous ones were software consultancies.
          <br /> <br />
          In addition to these three companies, I've worked in a variety of
          different companies and projects. Before Nyxo I worked as a product
          lead at the University of Helsinki, in commercializing sleep research.
          Before that I was an analyst at Nordea, a big Nordic bank, building
          investment solutions for SMEs.
          <br /> <br />
          However, before all this I also paid my way through university by
          fixing iPhones, working as a research assistant. I've studied both
          cognitive science and computer science at the University of Helsinki.
          I was a decent student, but even better at studying fast. I did five
          years worth of studies in two years before the working life got to me.
          For that reason, I'm still considered a student as I've never finished
          my master's thesis.
          <br /> <br />
          Originally I was born in Pori, a small town on the west coast of
          Finland. My family was poor, my mom being a welder and my father being
          a carpenter. Partly due to my father's occupation I have worked as a
          carpenter myself as well, for five years. Four of those years I spent
          working for my father, in his company, which eventually went bankrupt
          and bankrupted both of my parent's as well.
          <br /> <br /> Coming from a poor family, I have worked my hardest to
          become as financially independent as possible. This has partly been
          the catalyst for my interest in investing and building companies. I am
          by no means rich, but throughout the years I've accumulated enough
          wealth to buy apartments for both my parent's and little sister, as
          well as pursue my dreams of University education.
          <br /> <br />
          This information should give you a good view of what has shaped my
          world view. What it does not necessarily state is what my writings
          tend to be about, so I'm going to end this about section by mentioning
          those. Most of my writings can be found from this blog, but I've also
          written for:
          <a href="https://medium.muz.li/">Muzli</a>,
          <a href="https://medium.com/dailyjs">DailyJS</a>,
          <a href="https://codeburst.io/">codeburst</a>, and{" "}
          <a href="https://hackernoon.com/">Hackernoon</a>. I like talking and
          writing about:
          <ul>
            <li>Technology</li>
            <li>
              <Link to="tags/programming/">Programming</Link> (currently that
              means React and React Native mostly)
            </li>
            <li>
              <Link to="tags/design/">Design</Link>, of UIs and products
            </li>
            <li>Diversity, especially in technology</li>
            <li>
              Innovation (the fact that I've competed in over 70 different
              innovation challenges provides me with a unique view on this)
            </li>
            <li>
              <Link to="tags/building-companies/">Building companies</Link>
            </li>
          </ul>
          You can reach me through email, [first name]@lahteenlahti.fi and from{" "}
          <a href="https://www.linkedin.com/in/plahteenlahti/">LinkedIn</a> and{" "}
          <a href="https://twitter.com/plahteenlahti">Twitter.</a>
          <br /> <br />
          In addition to this blog, I also have{" "}
          <a href="https://perttu.dev">
            separate one focusing on programming
          </a>{" "}
          and a side project one focusing on{" "}
          <a href="https://react-native.club">React Native development.</a>
          <br></br>
          <em>Perttu Lähteenlahti</em>
        </div>
      </Content>
    </Layout>
  );
};

export default About;

const ExperienceSection = styled.div`
  margin-bottom: 1rem;
`;

const Work = styled.div`
  border-left: 1px solid var(--textLink);
  padding: 1rem;
  position: relative;
  display: flex;

  @media ${device.tablet} {
    flex-direction: column;
  }
`;

const Period = styled.div`
  font-size: 0.7rem;
  line-height: 0.7rem;
  padding: 0.3rem 0.6rem;
  box-sizing: border-box;
  border: 1px solid ${({ theme }) => theme.textSecondary};
  display: inline-block;
  border-radius: 5rem;

  &:before {
    content: "";
    position: absolute;
    display: block;
    left: -0.25rem;
    top: 1.5rem;
    height: 0.5rem;
    width: 0.5rem;
    border-radius: 0.5rem;
    background-color: black;
  }
`;

const Company = styled.h6`
  font-weight: bold;
  font-style: normal;
  font-size: 1.1rem;
  margin: 1rem 0 0.5rem 0;
`;

const Position = styled.span``;

const Column = styled.div`
  flex: 1;
`;

const Description = styled.p`
  @media ${device.tablet} {
    flex: 1;
    padding: 1rem 0rem 0rem;
  }

  flex: 4;
  font-size: 0.9rem;
  padding: 0rem 1rem;
`;
