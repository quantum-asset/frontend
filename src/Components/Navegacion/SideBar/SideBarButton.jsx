import React from "react";
import "./SideBarButton.scss";
const buttonStyles = {
  active: {
    backgroundColor: "#ffffffc7",
    color: "#ff1e0a",
  },
  notActive: {
    backgroundColor: "transparent",
    color: "white",
  },
};

const SideBarButton = (props) => {
  const { children, onClick, active } = props;
  const handleClick = (evt) => {
    onClick?.();
  };
  return (
    <div
      className={`main-side-bar-button${!active?" no-active":""}`}
      onClick={handleClick}
      //style={active ? buttonStyles.active : buttonStyles.notActive}
    >
      {children}
    </div>
  );
};
export default SideBarButton;
