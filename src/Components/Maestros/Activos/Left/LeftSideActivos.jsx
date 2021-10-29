import React, { Fragment } from "react";
import PanelActivos from "./PanelActivos";
import TablaActivos from "./TablaActivos";

const LeftSideActivos = (props) => {
  return (
    <Fragment>
      <PanelActivos />

      <TablaActivos />
    </Fragment>
  );
};
export default LeftSideActivos;
