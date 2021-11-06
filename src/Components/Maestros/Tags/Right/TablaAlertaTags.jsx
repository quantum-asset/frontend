import { Button, Fab } from "@mui/material";
import React, { Fragment, useState } from "react";
import UploadFileIcon from "@mui/icons-material/UploadFile";
import AddIcon from "@mui/icons-material/Add";
import { IconButton, Stack, Tooltip } from "@mui/material";
import { Delete, Edit } from "@mui/icons-material";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import "../../Styles/TablaDerecha.scss";
import SuperDenseTable from "../../../../Templates/Tables/SuperDenseTable";
import { downloadTexFile } from "../../../../utils/files.utils";

const TablaAlertaTags = (props) => {
    const {necesidadTags}=props;

// action buttons
    const handleDelete = (id) => {
        alert("delete " + id);
      };
      const handleEdit = (id) => {
        alert("edit " + id);
      };


    //// DOWNLOAD
    const handleDownload = () => {
        const headers = "LOCACION,CANTIDAD,FECHA_SOLICITUD\n";
        let data = "";
    
        for (let i = 0; i < necesidadTags.length; i++) {
          const { ID_NECESIDAD_TAG,LOCACION,CANTIDAD,FECHA_SOLICITUD} = necesidadTags[i];
          const linea = `${ID_NECESIDAD_TAG},${LOCACION},${CANTIDAD},${FECHA_SOLICITUD}\n`;
          data += linea;
        }
        downloadTexFile("alertas-necesidad-tags.csv", headers + data);
      };
  return (
    <Fragment>
      <div className="quantum-tabla-derecha-containe">
        <div className="tabla-derecha-header">
          <h3>Alertas de necesidad</h3>
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
            </Tooltip>
           
          </Stack>
        </div>
        {/* //////////   TABLA    //////////// */}
        <SuperDenseTable
          rows={necesidadTags}
          headers={headers(handleDelete, handleEdit)}
        />
        {/* //////////   TABLA    //////////// */}

        <div className="tabla-derecha-footer">
          <Button
            color="primary"
            variant="contained"
            size="small"
            //fullWidth
            style={{ margin: "1px", textTransform: "capitalize" }}
            startIcon={<FileDownloadIcon />}
            onClick={handleDownload}
            //onClick={iniciarSesion}
          >
            Descargar
          </Button>
        </div>
      </div>
      
    </Fragment>
  );
};
export default TablaAlertaTags;
const headers = (handleDelete, handleEdit) => [
    { title: "Locación", field: "LOCACION" },
    { title: "Cantidad", field: "CANTIDAD" },
    { title: "Fecha de solicitud", field: "NUEVA_FECHA_SOLICITUD" },
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
  