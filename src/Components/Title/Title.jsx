import React, { Fragment } from "react";
import "./Title.scss";
const Title = (props) => {
  const { title, subTitle,smallTitle } = props;
  return (
    <Fragment>
      {title && <div className="quantum-main-title">{title}</div>}
      {smallTitle && <div className="quantum-small-title">{smallTitle}</div>}
      {subTitle && <div className="quantum-sub-title">{subTitle}</div>}
    </Fragment>
  );
};
export default Title;
