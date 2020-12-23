import React, { FC, useState } from "react";
import { HotKeys } from "react-hotkeys";

const keyMap = {
  OPEN_SEARCH: "command+z",
};

type Props = {
  children: Element | Array<Node> | JSX.Element;
};

const Search: FC<Props> = ({ children }) => {
  const [searchOpen, setSearchOpen] = useState(false);

  const toggleSearch = () => {
    setSearchOpen(!searchOpen);
  };

  const handlers = {
    OPEN_SEARCH: toggleSearch,
  };

  return (
    <HotKeys keyMap={keyMap} handlers={handlers}>
      {children}
    </HotKeys>
  );
};

export default Search;
