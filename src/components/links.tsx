import React from "react";
import styled from "styled-components";
import { rhythm } from "../utils/typography";

const Links = () => {
  return (
    <List>
      <Li>
        <ListItem href="https://medium.com/l%C3%A4hteenlahti">Medium</ListItem>
      </Li>
      <Li>
        <ListItem href="https://perttu.dev">Perttu.dev</ListItem>
      </Li>
      <Li>
        <ListItem href="https://intelligenzia.fi">Intelligenzia</ListItem>
      </Li>
      <Li>
        <ListItem href="https://nyxo.fi">Nyxo</ListItem>
      </Li>
    </List>
  );
};

export default Links;

const List = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  box-shadow: var(--inset);
  border-radius: 5px;
  /* border-top: 1px solid var(--hr);
  border-bottom: 1px solid var(--hr); */
`;

const Li = styled.li`
  margin: ${`${rhythm(0.5)} ${rhythm(0.5)}`};
`;

const ListItem = styled.a`
  font-size: 12px;
`;
