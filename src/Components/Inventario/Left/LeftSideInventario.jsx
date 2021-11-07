import React, { Fragment, useEffect, useState } from "react";
import { SuperDate } from "../../../utils/date.utils";
import { downloadTexFile } from "../../../utils/files.utils";
import PanelInventario from "./PanelInventario";
import TablaInventario from "./TablaInventario";

const LeftSideInventario = (props) => {
  const { tomasInventario, handleDetalle } = props;
  //los rows para la tabla
  const [rowsFiltrado, setRowsFiltrado] = useState([]);
  //los rows sin filtar que se obtuvieron del servidor
  const [rowsServer, setRowsServer] = useState([]);
  const getEstado = (estado) => {
    switch (estado) {
      case 0:
        return "procesado";
      case 1:
        return "por-iniciar";
      case 2:
        return "iniciado";
      case 3:
        return "por-procesar";
      case 4:
        return "anulado";
      default:
        return "";
    }
  };
  const makeDataTable = async (tomasInventario = []) => {
    console.log("makeDataTable tomasInventario start", tomasInventario.length);
    let dataToTable = [];
    //  dataToTable.length
    // if (activos && locaciones && tags) {

    for (let i = 0; i < tomasInventario.length; i++) {
      //console.log("tomasInventario[i].FECHA_INICIO",tomasInventario[i]);

      const nuevaFechaInicioStr = SuperDate.parseDate(
        tomasInventario[i].TOMA_INVENTARIO.FECHA_INICIO
      );
      let fechaDeFin = "Aun no ha finalizado la toma de inventario";
      if (tomasInventario[i].TOMA_INVENTARIO.FECHA_FIN) {
        const nuevaFechaFinStr = SuperDate.parseDate(
          tomasInventario[i].TOMA_INVENTARIO.FECHA_INICIO
        );
        fechaDeFin = `${nuevaFechaFinStr.yy}/${nuevaFechaFinStr.mm}/${nuevaFechaFinStr.dd} `;
      }

      // console.log("nuevaFechaStr",nuevaFechaStr);

      dataToTable.push({
        ...tomasInventario[i].TOMA_INVENTARIO,

        ...{
          LOCACIONES: tomasInventario[i].LOCACIONES,
          USUARIOS: tomasInventario[i].USUARIOS,
          NUEVA_FECHA_INICIO: `${nuevaFechaInicioStr.yy}/${nuevaFechaInicioStr.mm}/${nuevaFechaInicioStr.dd} `,
          NUEVA_FECHA_FIN: fechaDeFin,
          ESTADO: getEstado(tomasInventario[i].TOMA_INVENTARIO.POR_PROCESAR),
          OBSERVACIONES: tomasInventario[i].TOMA_INVENTARIO.OBSERVACIONES || "-"
        },
      });
    }
    //}
    // console.log("makeDataTable end",dataToTable);
    setRowsServer(dataToTable);
    console.log("SUperTable dataToTable", dataToTable);

    setRowsFiltrado(dataToTable);
  };

  const init = async (tomasInventario) => {
    await makeDataTable(tomasInventario);
  };
  //recibe los datos adecuados del server
  useEffect(() => {
    init(tomasInventario);
    return () => {
      setRowsServer([]);
      setRowsFiltrado([]);
    };
  }, [tomasInventario]);

  ///////////////    panel filtros, 3 comboboxes
  const [filtros, setFiltros] = useState([
    { name: "USUARIO_RESPONSABLE", value: "" },
    { name: "ESTADO", value: "" },
    { name: "TIPO_CONTROL", value: "" },
  ]);
  //para cambiar la data filtrada segun filtros
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
  //efecto que se dispara en cada cabio de los filtros
  useEffect(() => {
    setRowsFiltrado(filtrarData(filtros));
  }, [filtros]);
  ///// DESCARGAR DATA
  const downloadTomasInventario = () => {
    const headers =
      "ID_TOMA_INVENTARIO,FECHA_INICIO,FECHA_FIN,CANT_LOCACIONES,OBSERVACIONES,ESTADO\n";
    let data = "";

    for (let i = 0; i < rowsFiltrado.length; i++) {
      const {
        ID_TOMA_INVENTARIO,
        FECHA_INICIO,
        FECHA_FIN,
        CANT_LOCACIONES,
        OBSERVACIONES,
        ESTADO,
      } = rowsFiltrado[i];
      const linea = `${ID_TOMA_INVENTARIO},${FECHA_INICIO},${FECHA_FIN},${CANT_LOCACIONES},${OBSERVACIONES},${ESTADO}\n`;
      data += linea;
    }
    downloadTexFile("tomas-inventario.csv", headers + data);
  };
  //detalle
  const handleDetalleActivo = (id) => {
    const activoEncontrado = rowsServer.filter((x) => x.ID_ACTIVO === id);
    if (activoEncontrado.length > 0) {
      handleDetalle?.(activoEncontrado[0]);
    } else {
      alert("No se encontró el activo");
    }
  };
  return (
    <Fragment>
      <PanelInventario
        handleChangeFiltro={handleChangeFiltro}
        filtros={filtros}
        download={downloadTomasInventario}
      />

      <TablaInventario
        rowsFiltrado={rowsFiltrado}
        handleDetalle={handleDetalleActivo}
      />
    </Fragment>
  );
};
export default LeftSideInventario;
