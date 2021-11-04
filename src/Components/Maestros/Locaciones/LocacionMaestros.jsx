import React, { Fragment, useEffect, useState } from "react";
import { ActivosController } from "../../../Controller/ActivosController";
import { LocacionController } from "../../../Controller/LocacionController";
import { TagController } from "../../../Controller/TagController";
import { TipoActivoController } from "../../../Controller/TipoActivoController";
import LeftSideLocaciones from "./Left/LeftSideLocaciones";
import RightSideLocaciones from "./Right/RightSideLocaciones";

const LocacionMaestros = (props) => {
  //lista de activos
  const [activos, setActivos] = useState([]);
  //lista de tags
  const [tags, setTags] = useState([]);
  //lista de locaciones
  const [locaciones, setLocaciones] = useState([]);
  //lista de Tipos de activo
  const [tipoActivos, setTipoActivos] = useState([]);
  const init = async () => {
    const activos = await ActivosController.list();
    console.log("activos L", activos.data);
    const locaciones = await LocacionController.list();
    console.log("locaciones", locaciones.data);
    const tags = await TagController.list();
    console.log("tags", tags.data);
    const tipoActivos = await TipoActivoController.list();
    //{ filtrosKeys: ["DENOMINACION"],filtrosValues: ["\"TI\""] }
    console.log("tipoActivos", tipoActivos);
    setActivos(activos.data);
    setLocaciones(locaciones.data);
    setTags(tags.data);
    setTipoActivos(tipoActivos.data);
  };
  useEffect(() => {
    init();
  }, []);
  return (
    <Fragment>
      <div className="left-side">
        <LeftSideLocaciones />
      </div>
      <div className="right-side">
        <RightSideLocaciones />
      </div>
    </Fragment>
  );
};
export default LocacionMaestros;
