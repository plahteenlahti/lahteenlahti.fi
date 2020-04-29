import React from "react";
import { Layout, Props } from "./index";

import messages from "../../data/messages/en";
import "intl/locale-data/jsonp/en";

const menuItems = [
  {
    name: "Blog",
    link: "/",
  },
  {
    name: "Weeklies",
    link: "/weeklies",
  },
  {
    name: "About",
    link: "/about",
  },
  {
    name: "Books",
    link: "/books",
  },
  {
    name: "Tags",
    link: "/tags",
  },
];

const LayoutEN = (props: Props) => (
  <Layout {...props} i18nMessages={messages} menuItems={menuItems} />
);

export default LayoutEN;
