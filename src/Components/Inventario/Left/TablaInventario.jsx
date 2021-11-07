import { Avatar, Chip, IconButton, Stack, Tooltip } from "@mui/material";
import React, { Fragment, useEffect, useState } from "react";
import SuperPaginationTable from "../../../Templates/Tables/SuperPaginationTable";
import PlaceIcon from "@mui/icons-material/Place";
import { Delete, Edit } from "@mui/icons-material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import "./TablaInventario.scss";
const TablaInventario = (props) => {
  console.log("SUperTable TablaInventario props", props);

  const { rowsFiltrado, handleDetalle } = props;
  const [localRows, setLocalRows] = useState([]);
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
  useEffect(() => {
    setLocalRows(rowsFiltrado);
  }, [rowsFiltrado]);
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
export default TablaInventario;
//////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////
const MakeChipLocacion = (locacion) => {
  const { DENOMINACION } = locacion;
  return <Chip icon={<PlaceIcon />} label={DENOMINACION} variant="outlined" />;
};
//////////////////////////
const MakeChipUsuario = (usuario) => {
  const { NOMBRES, PRIMER_APELLIDO } = usuario;
  const [foto, setFoto] = useState("");
  //useEffect(() => {
  //buscare en los archivos su foto de perfil URL
  //lo tarigo como BLOB
  ///.....setFoto(foto del backend)
  // }, []);
  return (
    <Chip
      avatar={<Avatar alt={NOMBRES} src={foto} />}
      label="Avatar"
      variant="outlined"
    />
  );
};
const columns = (handleDelete, handleEdit, handleSee) => [
  { title: "Inicio", field: "NUEVA_FECHA_INICIO" },
  { title: "Fin", field: "NUEVA_FECHA_FIN" },
  //locaciobes
  {
    title: "Locaciones",
    render: (rowData) => {
      return (
        <Fragment>
          {rowData.LOCACIONES.map(({ DENOMINACION }, index) => (
            <Fragment key={index}>
              {/* {MakeChipLocacion(locacion)} */}
              <Chip
                icon={<PlaceIcon />}
                label={DENOMINACION}
                variant="outlined"
              />
            </Fragment>
          ))}
        </Fragment>
      );
    },
  },

  //usuarios
  {
    title: "Usuarios",
    render: (rowData) => {
      return (
        <Fragment>
          {rowData.USUARIOS.map(({ NOMBRES, PRIMER_APELLIDO }, index) => (
            <Fragment key={index}>
              {/*  {MakeChipUsuario(usuario)} */}
              <Chip
                avatar={<Avatar alt={NOMBRES} src={""} />}
                label={NOMBRES}
                variant="outlined"
              />
            </Fragment>
          ))}
        </Fragment>
      );
    },
  },
  {
    title: "Estado",
    field: "ESTADO",
    render: (rowData) => {
      return (
        <div className={`quantum-state-chip ${rowData.ESTADO}`}>{rowData.ESTADO.replace("-", " ")}</div>
      );
    },
  },
  { title: "Observaciones", field: "OBSERVACIONES" },
  {
    title: "Acciones",
    render: (rowData) => {
      return (
        <Stack direction="row">
          <Tooltip title="Ver detalle">
            <IconButton
              color="primary"
              aria-label="See toma inventario"
              component="span"
              onClick={(e) => handleSee(rowData.ID_TOMA_INVENTARIO)}
            >
              <VisibilityIcon />
            </IconButton>
          </Tooltip>

          <Tooltip title="Editar Toma Inventario">
            <IconButton
              color="primary"
              aria-label="Edit Toma inventario"
              component="span"
              onClick={(e) => handleEdit(rowData.ID_TOMA_INVENTARIO)}
            >
              <Edit />
            </IconButton>
          </Tooltip>

          <Tooltip title="Eliminar Toma Inventario">
            <IconButton
              color="primary"
              aria-label="delete toma inventario"
              component="span"
              onClick={(e) => handleDelete(rowData.ID_TOMA_INVENTARIO)}
            >
              <Delete />
            </IconButton>
          </Tooltip>
        </Stack>
      );
    },
  },
];
