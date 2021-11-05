import React from "react";
import "./VolverButton.scss";
const VolverButton = (props) => {
  const { onClick } = props;
  const handleClick = (e) => {
    onClick?.(e);
  };
  return (
    <div className="quantum-volver-link" onClick={handleClick}>
      {"< volver "}
    </div>
  );
};
export default VolverButton;
