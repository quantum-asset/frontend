import React from "react";
import "./PageWrapper.scss";
const PageWrapper = (props) => {
  const { children } = props;
  return <div className="quantum-page-wrapper">{children}</div>;
};
export default PageWrapper;
