import React, { Fragment, useEffect, useState } from "react";
import TablaTpoActivos from "./TablaTpoActivos";
import ChartActivos from "./ChartActivos";
import Title from "../../../Title/Title";
import { ActivosController } from "../../../../Controller/ActivosController";

const RightSideActivos = (props) => {
   
  return (
    <Fragment>
      <Title title="Tipos de Activos Fijos" />

      <TablaTpoActivos />
      <Title title="Distribucion de Activos Fijos" />

      <ChartActivos />
    </Fragment>
  );
};
export default RightSideActivos;
