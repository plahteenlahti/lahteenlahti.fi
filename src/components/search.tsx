import React, { useState } from "react";
import { HotKeys } from "react-hotkeys";
import ReactDOM from "react-dom";
import Modal from "react-modal";

const keyMap = {
  OPEN_SEARCH: "command+z"
};

const Search = ({ children }: any) => {
  const [searchOpen, setSearchOpen] = useState(false);

  const toggleSearch = () => {
    console.log("Toggling search");
    setSearchOpen(!searchOpen);
  };

  const handlers = {
    OPEN_SEARCH: toggleSearch
  };

  return (
    <HotKeys keyMap={keyMap} handlers={handlers}>
      {children}
    </HotKeys>
  );
};

export default Search;
