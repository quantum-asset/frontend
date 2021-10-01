import React from "react";
import IconAssets from "../../icons/IconAssets";
import IconControl from "../../icons/IconControl";
import IconDashBoard from "../../icons/IconDashBoard";
export const sideBarOptions = ["reportes", "activos", "control"];
const IconSelector = (props) => {
  const { label } = props;
  switch (label) {
    case "reportes":
      return <IconDashBoard {...props} />;
    case "activos":
      return <IconAssets {...props} />;
    case "control":
      return <IconControl {...props} />;

    default:
      <IconDashBoard {...props} />;
  }
};
export default IconSelector;
