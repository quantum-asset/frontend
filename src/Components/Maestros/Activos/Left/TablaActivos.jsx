import { Delete, Edit } from "@mui/icons-material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { IconButton, Stack, Tooltip } from "@mui/material";
import React, { Fragment, useEffect, useState } from "react";
import SuperPaginationTable from "../../../../Templates/Tables/SuperPaginationTable";
//import "./TablActivos.scss";
const TablaActivos = (props) => {
  console.log("SUperTable TablaActivos props", props);

  const { rowsFiltrado ,handleDetalle} = props;
  const [localRows,setLocalRows]=useState([]);
  const handleDelete = (id) => {
    alert("delete " + id);
  };
  const handleEdit = (id) => {
    alert("edit " + id);
  };
  const handleSee = (id) => {
   // alert("see " + id);
   
    handleDetalle?.(id);
  };
  useEffect(()=>{
    setLocalRows(rowsFiltrado);
  },[rowsFiltrado]);
  return (
    <Fragment>
      <SuperPaginationTable
        headers={columns(handleDelete, handleEdit, handleSee)}
        rows={localRows}
      />
      {/**
       *
       * agrgar dialogs
       */}
    </Fragment>
  );
};
export default TablaActivos;

const columns = (handleDelete, handleEdit, handleSee) => [
  { title: "Codigo de Tag", field: "COD_TAG" },
  { title: "Denominación", field: "DENOMINACION" },
  { title: "Tipo de activo", field: "TIPO_ACTIVO" },
  { title: "Locación", field: "LOCACION" },
  { title: "Costo de adquisición", field: "COSTO_ADQUISICION" },
  { title: "Proveedor", field: "PROVEEDOR_RAZON_SOCIAL" },
  { title: "Centro de Costos", field: "CENTRO_COSTO" },
  {
    title: "Acciones",
    render: (rowData) => {
      return (
        <Stack direction="row">
          <Tooltip title="Ver Activo">
            <IconButton
              color="primary"
              aria-label="upload picture"
              component="span"
              onClick={(e) => handleSee(rowData.ID_ACTIVO)}
            >
              <VisibilityIcon />
            </IconButton>
          </Tooltip>

          <Tooltip title="Editar Activo">
            <IconButton
              color="primary"
              aria-label="upload picture"
              component="span"
              onClick={(e) => handleEdit(rowData.ID_ACTIVO)}
            >
              <Edit />
            </IconButton>
          </Tooltip>

          <Tooltip title="Eliminar Activo">
            <IconButton
              color="primary"
              aria-label="upload picture"
              component="span"
              onClick={(e) => handleDelete(rowData.ID_ACTIVO)}
            >
              <Delete />
            </IconButton>
          </Tooltip>
        </Stack>
      );
    },
  },
];
