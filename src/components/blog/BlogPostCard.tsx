import { Link } from "gatsby-plugin-react-i18next";
import React, { FC } from "react";
import styled from "styled-components";
import { useLocalizedRelative } from "../../hooks/useLocalizedTime";
import { rhythm } from "../../utils/typography";
import { device } from "../Primitives";

type Props = {
  slug: string;
  title: string;
  published: string;
  readingTime: string;
  excerpt: string;
};

export const BlogPostCard: FC<Props> = ({
  slug,
  title,
  published,
  readingTime,
  excerpt,
}) => {
  const { format } = useLocalizedRelative();

  return (
    <Column>
      <Card>
        <Title>
          <StyledLink to={slug}>{title}</StyledLink>
        </Title>
        <Details>
          <Time>{format(new Date(published))}</Time>
          <ReadingTime>{readingTime}</ReadingTime>
        </Details>

        <Excerpt
          dangerouslySetInnerHTML={{
            __html: excerpt,
          }}
        />
      </Card>
    </Column>
  );
};

const Column = styled.div`
  margin-bottom: ${rhythm(2.5)};
  margin: 0.5rem;
  box-sizing: border-box;

  @media ${device.desktopL} {
    max-width: calc(33.3333% - 2 * 0.5rem);
    flex: 1 1 calc(33.3333% - 2 * 0.5rem);
  }

  @media ${device.desktop} {
    max-width: calc(33.3333% - 2 * 0.5rem);
    flex: 1 1 calc(33.3333% - 2 * 0.5rem);
  }

  @media ${device.laptopL} {
    max-width: calc(33.3333% - 2 * 0.5rem);
    flex: 1 1 calc(33.3333% - 2 * 0.5rem);
  }

  @media ${device.laptop} {
    max-width: calc(33.3333% - 2 * 0.5rem);
    flex: 1 1 calc(33.3333% - 2 * 0.5rem);
  }

  @media ${device.tabletL} {
    max-width: calc(50% - 2 * 0.5rem);
    flex: 1 1 calc(50% - 2 * 0.5rem);
  }

  @media ${device.tablet} {
    max-width: 100%;
    flex: 1 1 100%;
  }

  @media ${device.mobileL} {
    max-width: 100%;
    flex: 1 1 100%;
  }

  @media ${device.mobileM} {
    max-width: 100%;
    flex: 1 1 100%;
  }

  @media ${device.mobileS} {
    max-width: 100%;
    flex: 1 1 100%;
  }
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 4px;
  border: var(--shadowBorder);
  padding: 1rem;
  background-color: var(--bg);
  box-shadow: var(--shadow);
  flex: 1;
  height: 100%;
`;

const Excerpt = styled.p`
  font-size: 0.8rem;
`;

const StyledLink = styled(Link)`
  box-shadow: none;
`;

const Title = styled.h3`
  margin-bottom: ${rhythm(1 / 4)};
`;

const Time = styled.time`
  display: inline;
  color: var(--textSecondary);
  font-size: 0.8rem;
`;

const ReadingTime = styled.span`
  display: inline;
  color: var(--textSecondary);
  margin-left: ${rhythm(1 / 2)};
  font-size: 0.8rem;
`;

const Details = styled.span`
  margin-bottom: ${rhythm(1 / 2)};
`;
