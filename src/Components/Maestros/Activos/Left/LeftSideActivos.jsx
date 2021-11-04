import React, { Fragment, useEffect, useState } from "react";
import { ActivosController } from "../../../../Controller/ActivosController";
import { LocacionController } from "../../../../Controller/LocacionController";
import { TagController } from "../../../../Controller/TagController";
import { TipoActivoController } from "../../../../Controller/TipoActivoController";
import { downloadTexFile } from "../../../../utils/files.utils";
import Title from "../../../Title/Title";
import PanelActivos from "./PanelActivos";
import TablaActivos from "./TablaActivos";

const LeftSideActivos = (props) => {
  const {activos,locaciones,tipoActivos,tags}=props;
console.log("LeftSideActivos",props);
  const [rowsFiltrado, setRowsFiltrado] = useState([]);
  const [rowsServer, setRowsServer] = useState([]);

  const makeDataTable = async (
    activos = [],
    locaciones = [],
    tipoActivos = [],
    tags = []
  ) => {
    console.log(
      "makeDataTable start",
      activos.length,
      locaciones.length,
      tags.length
    );
    let dataToTable = [];
    //  dataToTable.length
    // if (activos && locaciones && tags) {
    console.log("makeDataTable sactivos.length", activos.length);

    for (let i = 0; i < activos.length; i++) {
      const currentActivo = activos[i];
      console.log("currentActivo", currentActivo);

      const tag = tags.filter((x) => x.ID_TAG === currentActivo.ID_TAG)[0];
      console.log("found tag", tag);
      if (!tag) {
        dataToTable = [];
        break;
      }
      const locacion = locaciones.filter(
        (x) => x.ID_LOCACION === currentActivo.ID_LOCACION
      )[0];
      if (!locacion) {
        dataToTable = [];
        break;
      }
      console.log("found locacion", locacion);

      const tipoActivo = tipoActivos.filter(
        (x) => x.ID_TIPO_ACTIVO === currentActivo.ID_TIPO_ACTIVO
      )[0];
      if (!tipoActivo) {
        dataToTable = [];
        break;
      }
      console.log("found tipoActivo", tipoActivo);

      dataToTable.push({
        ...currentActivo,
        ...{ COD_TAG: tag.CODIGO },
        ...{ LOCACION: locacion.DENOMINACION },
        ...{ TIPO_ACTIVO: tipoActivo.DENOMINACION },
      });
    }
    //}
    // console.log("makeDataTable end",dataToTable);
    setRowsServer(dataToTable);
    console.log("SUperTable dataToTable", dataToTable);

    setRowsFiltrado(dataToTable);
  };

  const init = async (activos,locaciones,tipoActivos,tags) => {

    await makeDataTable(
      activos,locaciones,tipoActivos,tags
    );
  };
  useEffect(() => {
    init(activos,locaciones,tipoActivos,tags);
  }, [activos,locaciones,tipoActivos,tags]);

  ///////////////    panel filtros
  const [filtros, setFiltros] = useState([
    { name: "DENOMINACION", value: "" },
    { name: "LOCACION", value: "" },
    { name: "PROVEEDOR", value: "" },
    { name: "COD_TAG", value: "" },
    { name: "CENTRO_COSTO", value: "" },
  ]);
  const handleChangeFiltro = (newFiltros) => {
    console.log("filtros", newFiltros);
    setFiltros(newFiltros);
  };
  /**
   * Filtrar un array de server dado una array de llaves y valores
   * Actualizo y retorno un nuevo array filtrado
   * @param {*} filtros
   * @returns
   */
  const filtrarData = (filtrosUpdated = []) => {
    if (!filtrosUpdated || filtrosUpdated.length === 0) {
      //sin filtros, no hago naranjas
      return rowsServer;
    }
    let dataFiltrada = rowsServer;
    for (let i = 0; i < filtrosUpdated.length; i++) {
      if (filtrosUpdated[i].value && filtrosUpdated[i].value.length > 0) {
        const currentKeyFilter = filtrosUpdated[i].name;
        const currentValueFilter = filtrosUpdated[i].value;
   
        dataFiltrada = dataFiltrada.filter((x) =>
          x[currentKeyFilter]
            .toLowerCase()
            .includes(currentValueFilter.toLowerCase())
        );
      }
    }
    return dataFiltrada;
  };
  useEffect(() => {
    setRowsFiltrado(filtrarData(filtros));
  }, [filtros]);
  ///// DESCARGAR DATA
  const downloadActivos = () => {
    const headers =
      "CODIGO DE TAG,DENOMINACION,TIPO DE ACTIVO,LOCACION,CENTRO DE COSTOS\n";
    let data = "";

    for (let i = 0; i < rowsFiltrado.length; i++) {
      const { COD_TAG, DENOMINACION, TIPO_ACTIVO, LOCACION, CENTRO_COSTO } =
        rowsFiltrado[i];
      const linea = `${COD_TAG},${DENOMINACION},${TIPO_ACTIVO},${LOCACION},${CENTRO_COSTO}\n`;
      data += linea;
    }
    downloadTexFile("activos.csv", headers + data);
  };
  return (
    <Fragment>
      {}
      <Title title="Gestión de Activos Fijos" />
      <PanelActivos
        handleChangeFiltro={handleChangeFiltro}
        filtros={filtros}
        download={downloadActivos}
      />
      <TablaActivos rowsFiltrado={rowsFiltrado} />
    </Fragment>
  );
};
export default LeftSideActivos;
