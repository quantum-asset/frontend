import React from "react";
import "./MainPageHeader.scss";

const MainPageHeader = (props) => {
  const { children } = props;
  return <div className="main-page-header-root">{children}</div>;
};
export default MainPageHeader;
