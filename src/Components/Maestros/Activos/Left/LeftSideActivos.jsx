import React,{ Fragment,useEffect,useState } from "react";
import { ActivosController } from "../../../../Controller/ActivosController";
import { LocacionController } from "../../../../Controller/LocacionController";
import { TagController } from "../../../../Controller/TagController";
import { TipoActivoController } from "../../../../Controller/TipoActivoController";
import { downloadTexFile } from "../../../../utils/files.utils";
import Title from "../../../Title/Title";
import PanelActivos from "./PanelActivos";
import TablaActivos from "./TablaActivos";

const LeftSideActivos = (props) => {
  //lista de activos
  const [activos,setActivos] = useState([]);
  //lista de tags
  const [tags,setTags] = useState([]);
  //lista de locaciones
  const [locaciones,setLocaciones] = useState([]);
  //lista de Tipos de activo
  const [tipoActivos,setTipoActivos] = useState([]);

  const [rowsFiltrado,setRowsFiltrado] = useState([]);
  const [rowsServer,setRowsServer] = useState([]);

  const makeDataTable = async (
    activos = [],
    locaciones = [],
    tags = [],
    tipoActivos = []
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
    console.log("makeDataTable sactivos.length",activos.length);

    for (let i = 0; i < activos.length; i++) {
      const currentActivo = activos[i];
      console.log("currentActivo",currentActivo);

      const tag = tags.filter((x) => x.ID_TAG === currentActivo.ID_TAG)[0];
      console.log("found tag",tag);
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
      console.log("found locacion",locacion);


      const tipoActivo = tipoActivos.filter(
        (x) => x.ID_TIPO_ACTIVO === currentActivo.ID_TIPO_ACTIVO
      )[0];
      if (!tipoActivo) {
        dataToTable = [];
        break;
      }
      console.log("found tipoActivo",tipoActivo);

      dataToTable.push({
        ...currentActivo,
        ...{ COD_TAG: tag.CODIGO },
        ...{ LOCACION: locacion.DENOMINACION },
        ...{TIPO_ACTIVO:tipoActivo.DENOMINACION}
      });
    }
    //}
    // console.log("makeDataTable end",dataToTable);
    setRowsServer(dataToTable);
    console.log("SUperTable dataToTable",dataToTable);

    setRowsFiltrado(dataToTable);
  };

  const init = async () => {
    const activos = await ActivosController.list();
    console.log("activos",activos.data);
    const locaciones = await LocacionController.list();
    console.log("locaciones",locaciones.data);
    const tags = await TagController.list();
    console.log("tags",tags.data);
    const tipoActivos = await TipoActivoController
      .list
      //{ filtrosKeys: ["DENOMINACION"],filtrosValues: ["\"TI\""] }
      ();
    console.log("tipoActivos",tipoActivos);
    setActivos(activos.data);
    setLocaciones(locaciones.data);
    setTags(tags.data);
    await makeDataTable(
      activos.data,
      locaciones.data,
      tags.data,
      tipoActivos.data
    );
  };
  useEffect(() => {
    init();
  },[]);

  ///////////////    panel
  const [filtros,setFiltros] = useState([{ name: "",value: "" }]);
  const handleChangeFiltro = (newFiltros) => {
    setFiltros(newFiltros);
  };
  /**
   * Filtrp un array dado una array de llaves y valores
   * @param {*} filtros
   * @returns
   */
  const filtrarData = (filtros = []) => {
    let dataFiltrada = rowsServer;
    for (let i = 0; i < filtros.length; i++) {
      if (filtros[i].value && filtros[i].value.length > 0) {
        dataFiltrada = dataFiltrada.filter(
          (x) => x[filtros[i].name] === filtros[i].value
        );
      }
    }
    return dataFiltrada;
  };
  useEffect(() => {
    setRowsFiltrado(filtrarData(rowsFiltrado));
  },[filtros]);
///// DESCARGAR DATA
const downloadActivos=()=>{
  const headers= "CODIGO DE TAG,DENOMINACION,TIPO DE ACTIVO,LOCACION,CENTRO DE COSTOS\n";
  let data="";

  for(let i=0;i<rowsFiltrado.length;i++){
    const {COD_TAG,DENOMINACION,TIPO_ACTIVO,LOCACION,CENTRO_COSTO} =rowsFiltrado[i];
    const linea = `${COD_TAG},${DENOMINACION},${TIPO_ACTIVO},${LOCACION},${CENTRO_COSTO}\n`;
    data+=linea;
  }
  downloadTexFile("activos.csv",headers+ data);
}
  return (
    <Fragment>
      <Title title="Gestión de Activos Fijos" />
      <PanelActivos handleChangeFiltro={handleChangeFiltro} filtros={filtros} download={downloadActivos} />
      <TablaActivos rowsFiltrado={rowsFiltrado} />
    </Fragment>
  );
};
export default LeftSideActivos;
