import React from "react";
import styled from "styled-components";

interface Props {
  canonical?: string | undefined | null;
}

const CanonicalBox = (props: Props) => {
  if (!props.canonical) return null;

  return (
    <Container>
      <GoogleOff
        dangerouslySetInnerHTML={{ __html: "<!--googleoff: snippet-->" }}
      />
      <Text>
        This article originally appeared on{" "}
        <a href={props.canonical}>{props.canonical}</a>
      </Text>
      <GoogleOff dangerouslySetInnerHTML={{ __html: "<!--googleon: all-->" }} />
    </Container>
  );
};

export default CanonicalBox;

const Container = styled.div`
  font-size: 0.9rem;
  border: 1px solid var(--textLink);
  padding: 0.5rem;
  border-radius: 5px;
`;

const Text = styled.span``;

const GoogleOff = styled.div``;
