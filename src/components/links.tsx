import React from "react";
import styled from "styled-components";
import { rhythm } from "../utils/typography";
import { device } from "./Primitives";

const Links = () => {
  return (
    <List>
      <Li>
        <ListItem data-hover="Nyxo" href="https://medium.com/l%C3%A4hteenlahti">
          Medium
        </ListItem>
      </Li>
      <Li>
        <ListItem data-hover="Nyxo" href="https://perttu.dev">
          Perttu.dev
        </ListItem>
      </Li>
      <Li>
        <ListItem data-hover="Nyxo" href="https://intelligenzia.fi">
          Intelligenzia
        </ListItem>
      </Li>
      <Li>
        <ListItem data-hover="Nyxo" href="https://nyxo.fi">
          Nyxo
        </ListItem>
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
  margin-left: 0px;
  border: var(--shadowBorder);

  @media ${device.mobileS} {
    flex-wrap: wrap;
    justify-content: center;
  }

  @media ${device.mobileL} {
    flex-wrap: nowrap;
    justify-content: space-between;
  }

  /* border-top: 1px solid var(--hr);
  border-bottom: 1px solid var(--hr); */
`;

const Li = styled.li`
  margin: ${`${rhythm(0.5)} ${rhythm(0.5)}`};
`;

const ListItem = styled.a`
  font-size: 12px;
  position: relative;
  &::before {
    position: absolute;
    top: 0;
    left: 0;
    overflow: hidden;
    padding: 10px 0;
    max-width: 0;
    border-bottom: 2px solid var(--textLink);
    color: var(--textLink);
    content: attr(data-hover);
    -webkit-transition: max-width 0.5s;
    -moz-transition: max-width 0.5s;
    transition: max-width 0.5s;
  }
`;
