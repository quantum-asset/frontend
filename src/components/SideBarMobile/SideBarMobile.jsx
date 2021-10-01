import React from "react";
import "./SideBarMobile.scss";
const SideBarMobile = (props) => {
  const { actions, open, onClose } = props;
  if (open)
    return (
      <div className="main-side-bar-mobile">
        <button onClick={onClose}>X</button>
        <div className="side-bar-actions">{actions}</div>

        <div className="side-bar-logout"></div>
      </div>
    );
  else return <></>;
};
export default SideBarMobile;
