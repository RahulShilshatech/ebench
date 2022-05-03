import React from "react";
import { Tab } from "semantic-ui-react";

export default function CommonTabs({ menu, panes }) {
  return <Tab menu={menu} panes={panes} />;
}
