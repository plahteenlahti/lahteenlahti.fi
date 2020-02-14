import { graphql, PageRendererProps, useStaticQuery, Link } from "gatsby";
import React from "react";
import styled from "styled-components";
import { Layout } from "../components/layout";
import { SEO } from "../components/seo";
import { rhythm } from "../utils/typography";
import moment from "moment";

type Props = PageRendererProps;

const Books = (props: Props) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
      goodreadsShelf {
        id
        reviews {
          book {
            bookID
            link
            title
            titleWithoutSeries
            imageUrl
            smallImageUrl
          }
          dateAdded
          rating
        }
      }
    }
  `);

  const siteTitle = data.site.siteMetadata.title;
  const reviews = data.goodreadsShelf.reviews;

  return (
    <Layout location={props.location} title={siteTitle}>
      <SEO
        slug="about"
        title="Books "
        description=""
        keywords={[`blog`, `javascript`, `react`]}
      />
      <h1>Books that I've read</h1>
      <p>
        I love reading and I read quite a lot. If I could choose, I would retire
        now and spent rest of my life reading in solitude. It wasn't always like
        that,
      </p>
      <p>
        I also like reading other people's book lists. Here's a list of books
        I've read, most of which I also own. Hopefully you find it useful.
      </p>

      <hr />

      {reviews.map((review: any, index: number) => (
        <Book key={index}>
          <Title href={review.book.link}>
            {review.book.titleWithoutSeries}
          </Title>
          <Row>
            <Time>{moment(review.dateAdded).format("DD.MM.YYYY")}</Time>
            <Stars>
              {Array(parseInt(review.rating))
                .fill(1)
                .map((rating, index) => (
                  <Star key={index} />
                ))}
            </Stars>
          </Row>
        </Book>
      ))}
    </Layout>
  );
};

export default Books;

const Book = styled.div`
  margin-bottom: ${`${rhythm(1)}`};
`;

const Title = styled.a`
  font-size: ${`${rhythm(0.6)}`};
  width: 80%;
  display: inline-block;
`;

const Stars = styled.div`
  flex-direction: row;
  display: flex;
  margin-left: 1rem;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Time = styled.time`
  font-size: ${`${rhythm(0.5)}`};
`;

const StyledSvg = styled.svg`
  stroke: var(--textLink);
`;

const Star = () => (
  <StyledSvg
    xmlns="http://www.w3.org/2000/svg"
    version="1.1"
    viewBox="0 0 40 40"
    width="20"
    height="20">
    <g transform="matrix(1.6666666666666667,0,0,1.6666666666666667,0,0)">
      <path
        d="M 12.433,5.518l1.989,3.977l3.826,0.383c0.266,0.026,0.461,0.263,0.435,0.529 c-0.011,0.112-0.06,0.216-0.14,0.295l-3.153,3.152l1.169,4.283c0.07,0.259-0.083,0.525-0.341,0.595 c-0.114,0.031-0.236,0.019-0.343-0.034L12,16.76L8.125,18.7c-0.239,0.119-0.53,0.022-0.649-0.217 c-0.053-0.107-0.065-0.229-0.034-0.344l1.168-4.285L5.457,10.7c-0.189-0.189-0.189-0.495,0-0.684 c0.079-0.079,0.184-0.129,0.295-0.14l3.826-0.383l1.989-3.977c0.12-0.239,0.411-0.335,0.65-0.215 C12.31,5.348,12.386,5.424,12.433,5.518z"
        fill="none"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"></path>
    </g>
  </StyledSvg>
);
