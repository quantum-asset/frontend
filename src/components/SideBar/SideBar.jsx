import React from "react";
import "./SideBar.scss";
const SideBar = (props) => {
  const { children } = props;
  return <div className="main-side-bar">{children}</div>;
};
export default SideBar;
