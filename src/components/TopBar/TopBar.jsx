import React from "react";
import "./TopBar.scss";
const TopBar = (props) => {
  const { children } = props;
  return <div className="main-top-bar">{children}</div>;
};
export default TopBar;
