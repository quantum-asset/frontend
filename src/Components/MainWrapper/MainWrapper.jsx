import React from "react";
import "./MainWrapper.scss";
const MainWrapper = (props) => {
  const { children } = props;
  return <div className="quantum-main-wrapper">{children || ""}</div>;
};
export default MainWrapper;
