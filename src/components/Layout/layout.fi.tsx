import React from "react";
import { Layout, Props } from "./index";

import messages from "../../data/messages/fi";
import "intl/locale-data/jsonp/fi";

const menuItems = [
  {
    name: "Blogi",
    link: "/fi/",
  },
  {
    name: "Weeklies",
    link: "/fi/weeklies",
  },
  {
    name: "Minusta",
    link: "/fi/about",
  },
  {
    name: "Kirjat",
    link: "/fi/books",
  },
  {
    name: "Aiheet",
    link: "/fi/tags",
  },
];

const LayoutEN = (props: Props) => (
  <Layout {...props} i18nMessages={messages} menuItems={menuItems} />
);

export default LayoutEN;
