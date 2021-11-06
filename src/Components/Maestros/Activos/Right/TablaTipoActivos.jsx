import { Button, Fab } from "@mui/material";
import React, { Fragment, useState } from "react";
import UploadFileIcon from "@mui/icons-material/UploadFile";
import AddIcon from "@mui/icons-material/Add";
import { IconButton, Stack, Tooltip } from "@mui/material";
import { Delete, Edit } from "@mui/icons-material";
import FileDownloadIcon from "@mui/icons-material/FileDownload";

import "./TablaTipoActivos.scss";
import SuperDenseTable from "../../../../Templates/Tables/SuperDenseTable";
import { downloadTexFile } from "../../../../utils/files.utils";
import DialogCargaMasiva from "../../../Dialogs/DialogCargaMasiva";
const TablaTipoActivos = (props) => {
  const { tipoActivos } = props;
  const handleDelete = (id) => {
    alert("delete " + id);
  };
  const handleEdit = (id) => {
    alert("edit " + id);
  };
  const handleDownload = () => {
    const headers = "ID_TIPO_ACTIVO,DENOMINACION\n";
    let data = "";

    for (let i = 0; i < tipoActivos.length; i++) {
      const { ID_TIPO_ACTIVO, DENOMINACION } = tipoActivos[i];
      const linea = `${ID_TIPO_ACTIVO},${DENOMINACION}\n`;
      data += linea;
    }
    downloadTexFile("tipo-activos.csv", headers + data);
  };
  //dialogs
  const [openCargaMasiva, setOpenCargaMasiva] = useState(false);
  const handleCloseCargaMasiva = () => {
    setOpenCargaMasiva(false);
  };
  return (
    <Fragment>
      <div className="quantum-tabla-derecha-containe">
        <div className="tabla-derecha-header">
          <h3>Tipos de Activos</h3>
          <Stack direction="row">
            <Tooltip title="Agregar Nuevo Tipo de Activo">
              <Fab
                color="primary"
                aria-label="add"
                size="small"
                style={{ margin: "1px" }}
                // size="small"

                // onClick={() => setOpenDialogRecuperacion(true)}
              >
                <AddIcon />
              </Fab>
            </Tooltip>{" "}
            <Tooltip title="Subir en CSV">
              <Fab
                color="primary"
                aria-label="add"
                size="small"
                style={{ margin: "1px" }}
                // size="small"

                onClick={() => setOpenCargaMasiva(true)}
              >
                <UploadFileIcon />
              </Fab>
            </Tooltip>
          </Stack>
        </div>
        <SuperDenseTable
          rows={tipoActivos}
          headers={headers(handleDelete, handleEdit)}
        />
        <div className="tabla-derecha-footer">
          <Button
            color="primary"
            variant="contained"
            size="small"
            //fullWidth
            style={{ margin: "1px" ,textTransform:"capitalize"}}
            startIcon={<FileDownloadIcon />}
            onClick={handleDownload}
            //onClick={iniciarSesion}
          >
            Descargar
          </Button>
        </div>
      </div>
      <DialogCargaMasiva
        open={openCargaMasiva}
        headers="DENOMINACION"
        dataPrueba={`TI\nELECTRODOMESTICO\n`}
        entidad={"Tipo de activos"}
        onClose={handleCloseCargaMasiva}
      />
    </Fragment>
  );
};
const headers = (handleDelete, handleEdit) => [
  { title: "Denominación", field: "DENOMINACION" },
  {
    title: "Acciones",
    render: (rowData) => {
      return (
        <Stack direction="row">
          <Tooltip title="Editar Activo">
            <IconButton
              color="primary"
              aria-label="upload picture"
              component="span"
              size="small"
              onClick={(e) => handleEdit(rowData.ID_TIPO_ACTIVO)}
            >
              <Edit />
            </IconButton>
          </Tooltip>

          <Tooltip title="Eliminar Activo">
            <IconButton
              color="primary"
              aria-label="upload picture"
              component="span"
              size="small"
              onClick={(e) => handleDelete(rowData.ID_TIPO_ACTIVO)}
            >
              <Delete />
            </IconButton>
          </Tooltip>
        </Stack>
      );
    },
  },
];
export default TablaTipoActivos;
