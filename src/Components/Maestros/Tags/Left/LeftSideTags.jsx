import Title from "../../../Title/Title";

import { Fragment, useEffect, useState } from "react";
import { downloadTexFile } from "../../../../utils/files.utils";
import PanelTags from "./PanelTags";
import TablaTags from "./TablaTags";

const LeftSideTags = (props) => {
  const { tags } = props;
  const [rowsFiltrado, setRowsFiltrado] = useState([]);
  const [rowsServer, setRowsServer] = useState([]);

  useEffect(() => {
    setRowsServer(tags);
    setRowsFiltrado(tags);
  }, [tags]);
  ///////////////    panel FILTROS
  const [filtros, setFiltros] = useState("");
  const handleChangeFiltro = (newFiltros) => {
    setFiltros(newFiltros);
  };

  /**
   * Filtrar un array de server dado un string
   * Actualizo y retorno un nuevo array filtrado
   * @param {*} filtros
   * @returns
   */
  const filtrarData = (filtros) => {
    if (!filtros || filtros.length === 0) {
      //sin filtros, no hago naranjas
      return rowsServer;
    }
    let dataFiltrada = [];
    for (let i = 0; i < rowsServer.length; i++) {
      const currentRow = JSON.stringify(rowsServer[i]);
      if (currentRow.includes(filtros)) {
        dataFiltrada.push(rowsServer[i]);
      }
    }
    return dataFiltrada;
  };
  useEffect(() => {
    setRowsFiltrado(filtrarData(filtros));
  }, [filtros]);

  //DOWNLOAD TAGS
  const downloadTags = () => {
    const headers =
      "ID_LOCACION,ID_USUARIO,CODIGO\n";
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
      <Title title="Gestion de Tags RFID y alertas de necesidad" />
      <PanelTags
        handleChangeFiltro={handleChangeFiltro}
        filtros={filtros}
        download={downloadTags}
      />
      <TablaTags
        rowsFiltrado={rowsFiltrado}
       // handleDetalle={handleDetalleActivo}
      />
    </Fragment>
  );
};
export default LeftSideTags;
