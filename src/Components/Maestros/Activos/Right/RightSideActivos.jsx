import React, { Fragment, useEffect, useState } from "react";
import TablaTpoActivos from "./TablaTpoActivos";
import ChartActivos from "./ChartActivos";
import Title from "../../../Title/Title";
import { ActivosController } from "../../../../Controller/ActivosController";

const RightSideActivos = (props) => {
   const {tipoActivos}=props;
  return (
    <Fragment>
      <Title smallTitle="Tipos de Activos Fijos" />

      <TablaTpoActivos tipoActivos={tipoActivos}/>
      <Title smallTitle="Distribucion de Activos Fijos" />

      <ChartActivos />
    </Fragment>
  );
};
export default RightSideActivos;
