import React, { Fragment, useEffect, useState } from "react";
import TablaTpoActivos from "./TablaTipoActivos";
import ChartActivos from "./ChartActivos";
import Title from "../../../Title/Title";
import { ActivosController } from "../../../../Controller/ActivosController";

const RightSideActivos = (props) => {
  const { tipoActivos, activos, locaciones } = props;
  
  return (
    <Fragment>
      <Title smallTitle="Tipos de Activos Fijos" />

      <TablaTpoActivos tipoActivos={tipoActivos} />
      <Title smallTitle="Distribucion de Activos Fijos" />
      {activos && locaciones && (
        <ChartActivos activos={activos} locaciones={locaciones} />
      )}
    </Fragment>
  );
};
export default RightSideActivos;
