import { Button, Fab } from "@mui/material";
import React, { Fragment } from "react";
import DenseTable from "../../../../Templates/Tables/DenseTable";
import UploadFileIcon from "@mui/icons-material/UploadFile";
import AddIcon from "@mui/icons-material/Add";
import { IconButton, Stack, Tooltip } from "@mui/material";
import { Delete, Edit } from "@mui/icons-material";

import "./TablaTipoActivos.scss";
import SuperDenseTable from "../../../../Templates/Tables/SuperDenseTable";
const TablaTpoActivos = (props) => {
   const {tipoActivos}=props;
   const handleDelete = (id) => {
    alert("delete " + id);
  };
  const handleEdit = (id) => {
    alert("edit " + id);
  };
  return (
    /*  <div>
        TablaTpoActivos
        </div> */
    <Fragment>
      <div className="quantum-tabla-derecha-containe">
        <div className="tabla-derecha-header">
          <h3>Tipos de Activos</h3>
          <Tooltip title="Agregar Nuevo Tipo de Activo">
            <Fab
              color="primary"
              aria-label="add"
              size="small"
              style={{ margin: "1px" }}
             // onClick={() => setOpenDialogRecuperacion(true)}
            >
              <AddIcon />
            </Fab>
          </Tooltip>
        </div>
        <SuperDenseTable rows={tipoActivos} headers={headers()} />
        <div className="tabla-derecha-footer">
          <Button
            color="primary"
            variant="contained"
            //size="small"
            style={{ margin: "10px" }}
            //fullWidth
            startIcon={<UploadFileIcon />}
            //onClick={iniciarSesion}
            //onClick={iniciarSesion}
          >
            Subir CSV
          </Button>
        </div>
      </div>
    </Fragment>
  );
};
const headers=(handleDelete, handleEdit,)=>[
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
                  onClick={(e) => handleDelete(rowData.ID_TIPO_ACTIVO)}
                >
                  <Delete />
                </IconButton>
              </Tooltip>
            </Stack>
          );
        },
      },
]
export default TablaTpoActivos;
