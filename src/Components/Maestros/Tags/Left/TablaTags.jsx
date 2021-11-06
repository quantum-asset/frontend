import { Delete, Edit } from "@mui/icons-material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { IconButton, Stack, Tooltip } from "@mui/material";
import React, { Fragment, useEffect, useState } from "react";
import SuperPaginationTable from "../../../../Templates/Tables/SuperPaginationTable";

const TablaTags = (props) => {
  console.log("SUperTable TablaActivos props", props);

  const { rowsFiltrado } = props;

  const [localRows, setLocalRows] = useState([]);
  const handleDelete = (id) => {
    alert("delete " + id);
  };
  const handleEdit = (id) => {
    alert("edit " + id);
  };
  const handleSee = (id) => {
    alert("see " + id);

    //handleDetalle?.(id);
  };
  useEffect(() => {
    setLocalRows(rowsFiltrado);
  }, [rowsFiltrado]);
  return (
    <SuperPaginationTable
      headers={columns(handleDelete, handleEdit, handleSee)}
      rows={localRows}
    />
  );
};
export default TablaTags;

const columns = (handleDelete, handleEdit, handleSee) => [
  { title: "Codigo de Tag", field: "CODIGO" },
  { title: "Locación", field: "LOCACION_DENOMINACION" },
  { title: "Usuario responsable", field: "USUARIO_NOMBRES" },
  { title: "Fecha de creación", field: "FECHA_CREACION" },
  { title: "Última modificación", field: "ULTIMA_MODIFICACION" },
  {
    title: "Acciones",
    render: (rowData) => {
      return (
        <Stack direction="row">
          <Tooltip title="Ver Tag">
            <IconButton
              color="primary"
              aria-label="upload picture"
              component="span"
              onClick={(e) => handleSee(rowData.ID_ACTIVO)}
            >
              <VisibilityIcon />
            </IconButton>
          </Tooltip>

          <Tooltip title="Editar Tag">
            <IconButton
              color="primary"
              aria-label="upload picture"
              component="span"
              onClick={(e) => handleEdit(rowData.ID_ACTIVO)}
            >
              <Edit />
            </IconButton>
          </Tooltip>

          <Tooltip title="Eliminar Tag">
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
