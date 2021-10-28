import React from "react";
import "./SideBarMobileButton.scss";
const SideBarMobileButton = (props) => {
  const {
    children,
    onClick,
    style,
    // active
  } = props;
  const handleClick = (evt) => {
    onClick?.(evt);
  };
  return (
    <div
      className="main-side-bar-mobile-button"
      onClick={handleClick}
      color={"#ff605a"}
      style={style || {}}
    >
      {children}
    </div>
  );
};
export default SideBarMobileButton;
