import React from "react";
import "./Title.scss";
const Title = (props) => {
  const { title } = props;
  return <div className="quantum-main-title">{title}</div>;
};
export default Title;
