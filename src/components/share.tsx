import React from "react";
import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  EmailShareButton,
} from "react-share";
import styled from "styled-components";
import TwitterSvg from "../../content/assets/icons/twitter.inline.svg";
import FacebookSvg from "../../content/assets/icons/facebook.inline.svg";
import LinkedInSvg from "../../content/assets/icons/linkedin.inline.svg";
import EmailSvg from "../../content/assets/icons/email.inline.svg";
import { rhythm } from "../utils/typography";

interface Props {
  url: string;
}

const Share = (props: Props) => {
  const { url } = props;
  return (
    <ShareArticle>
      <Title>Share this post</Title>
      <ShareRow>
        <FacebookButton url={url}>
          <Facebook />
        </FacebookButton>
        <LinkedInButton url={url}>
          <LinkedIn />
        </LinkedInButton>
        <TwitterButton url={url}>
          <Twitter />
        </TwitterButton>
        <EmailButton url={url}>
          <Email />
        </EmailButton>
      </ShareRow>
    </ShareArticle>
  );
};

export default Share;

const ShareArticle = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  margin: ${rhythm(1)} 0px ${rhythm(5)};
`;

const ShareRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-between;
`;

const Title = styled.h3``;

const FacebookButton = styled(FacebookShareButton)`
  box-shadow: var(--shadow);
  padding: 10px;
  border-radius: 5px;
  display: flex;
  flex-direction: row;
  align-items: center;
  color: var(--textLink);
`;
const Facebook = styled(FacebookSvg).attrs(() => ({
  height: 25,
}))`
  stroke: currentColor;
`;

const TwitterButton = styled(TwitterShareButton)`
  box-shadow: var(--shadow);
  padding: 10px;
  border-radius: 5px;
  display: flex;
  flex-direction: row;
  align-items: center;
  color: var(--textLink);
`;

const Twitter = styled(TwitterSvg).attrs(() => ({
  height: 25,
}))`
  stroke: currentColor;
`;

const LinkedInButton = styled(LinkedinShareButton)`
  box-shadow: var(--shadow);
  padding: 10px;
  border-radius: 5px;
  display: flex;
  flex-direction: row;
  align-items: center;
  color: var(--textLink);
`;

const LinkedIn = styled(LinkedInSvg).attrs(() => ({
  height: 25,
}))`
  stroke: currentColor;
`;

const EmailButton = styled(EmailShareButton)`
  box-shadow: var(--shadow);
  padding: 10px;
  border-radius: 5px;
  display: flex;
  flex-direction: row;
  align-items: center;
  color: var(--textLink);
`;

const Email = styled(EmailSvg).attrs(() => ({
  height: 25,
}))`
  stroke: currentColor;
`;
