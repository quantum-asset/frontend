import React, { Fragment, useEffect, useState } from "react";
import { ActivosController } from "../../../Controller/ActivosController";
import { LocacionController } from "../../../Controller/LocacionController";
import { TagController } from "../../../Controller/TagController";
import { TipoActivoController } from "../../../Controller/TipoActivoController";
import LeftSideActivos from "./Left/LeftSideActivos";
import RightSideActivos from "./Right/RightSideActivos";

const ActivosMaestro = (props) => {
  const {  handleDetalle } = props;
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
    console.log("activos", activos.data);
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
        <LeftSideActivos
          handleDetalle={handleDetalle}
          activos={activos}
          locaciones={locaciones}
          tipoActivos={tipoActivos}
          tags={tags}
        />
      </div>
      <div className="right-side">
        <RightSideActivos tipoActivos={tipoActivos}  activos={activos}
          locaciones={locaciones} />
      </div>
    </Fragment>
  );
};
export default ActivosMaestro;
