import React from "react";
import "./Wrapper.scss";
const Wrapper = (props) => {
  const { children } = props;
  return <div className="full-wrapper">{children}</div>;
};
export default Wrapper;
