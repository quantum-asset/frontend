import React from "react";
import "./SideBarMobileButton.scss";
const SideBarMobileButton = (props) => {
  const { children, onClick, active } = props;
  const handleClick = (evt) => {
    onClick?.();
  };
  return (
    <div
      className="main-side-bar-mobile-button"
      onClick={handleClick}
      color={"#ff605a"}
      //style={active ? buttonStyles.active : buttonStyles.notActive}
    >
      {children}
    </div>
  );
};
export default SideBarMobileButton;
