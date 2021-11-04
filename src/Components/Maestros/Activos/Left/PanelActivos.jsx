import React, { useState } from "react";
import "./PanelActivos.scss";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import { Button, FormLabel, Grid } from "@mui/material";
import UploadFileIcon from "@mui/icons-material/UploadFile";
import SearchInputText from "../../../Formulario/SearchInputText";
import ScrollDialog from "../../../../Templates/Dialogs/ScrollDialog";
import FormInputText from "../../../Formulario/FormInputText";

const PanelActivos = (props) => {
  const { download, handleChangeFiltro, filtros } = props;
  const [localFiltros, setLocalFiltros] = useState([
    { name: "DENOMINACION", value: "" },
    { name: "LOCACION", value: "" },
    { name: "TIPO_ACTIVO", value: "" },
    { name: "COD_TAG", value: "" },
    { name: "CENTRO_COSTO", value: "" },
  ]);
  /**
   * retorna (valor, nombre)
   */
  const handleChange = (value, nombre) => {
    const newFiltros = localFiltros.map((x) => {
      if (x.name === nombre) {
        return { ...x, value: value };
      }
      return x;
    });
    setLocalFiltros(newFiltros);
    handleChangeFiltro?.(newFiltros);
  };
  useState(() => {
    setLocalFiltros(filtros);
  }, [filtros]);

  //Dialog Nuevo Editar
  const [openDialogRecuperacion, setOpenDialogRecuperacion] = useState(false);

  return (
    <div className="panel-activos-container">
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="stretch"
      >
        <Grid item>
          <Grid container >
            <Grid item md={6} xs={12}>
              <SearchInputText
                onChange={handleChange}
                style={{ margin: "2px 0" }}
                name={"DENOMINACION"}
                // value={localFiltros[0].value}
                fullWidth
                placeholder="Denominación del activo"
                label={"Denominación"}
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <Grid
                container
                direction="row"
                justifyContent="flex-end"
                alignItems="center"
              >
                <Button
                  color="primary"
                  variant="contained"
                  //size="small"
                  //fullWidth
                  style={{ margin: "1px" }}
                  startIcon={<FileDownloadIcon />}
                  onClick={() => {
                    download?.();
                  }}
                  //onClick={iniciarSesion}
                >
                  Descargar
                </Button>
                <Button
                  color="primary"
                  variant="contained"
                  //size="small"
                  style={{ margin: "1px" }}
                  //fullWidth
                  startIcon={<UploadFileIcon />}
                  //onClick={iniciarSesion}
                  //onClick={iniciarSesion}
                >
                  Subir CSV
                </Button>
                <Fab
                  color="primary"
                  aria-label="add"
                  size="small"
                  style={{ margin: "1px" }}
                  onClick={() => setOpenDialogRecuperacion(true)}
                >
                  <AddIcon />
                </Fab>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Grid container spacing={1} >
            <Grid item md={3} sm={12} xs={12}>
              {" "}
              <SearchInputText
                onChange={handleChange}
                style={{ margin: "2px 0" }}
                name={"COD_TAG"}
                // value={localFiltros[0].value}
                fullWidth
                placeholder="Nro de tag"
                label={"Num. de tag"}
              />
            </Grid>
            <Grid item md={3} sm={12} xs={12}>
              
            <SearchInputText
                onChange={handleChange}
                style={{ margin: "2px 0" }}
                name={"LOCACION"}
                fullWidth
                // value={localFiltros[0].value}
                placeholder="Locación"
                label={"Locación"}
              />
            </Grid>
            <Grid item md={3} sm={12} xs={12}>
              <SearchInputText
                onChange={handleChange}
                style={{ margin: "2px 0" }}
                name={"DENOMINACION"}
                fullWidth
                value={filtros.DENOMINACION}
                placeholder="Denominación del activo"
                label={"Denominación"}
              />
            </Grid>
            <Grid item md={3} sm={12} xs={12}>
              <SearchInputText
                onChange={handleChange}
                style={{ margin: "2px 0" }}
                name={"DENOMINACION"}
                fullWidth
                value={filtros.DENOMINACION}
                placeholder="Denominación del activo"
                label={"Denominación"}
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <ScrollDialog
        open={openDialogRecuperacion}
        // onCancel={() => {}}
        onSave={() => {}}
        onCancel={() => {}}
        //onAccept={handleRequestRecoverPassword}
        onClose={() => setOpenDialogRecuperacion(false)}
        title={"Nuevo / Editar Activo Fijo"}
        fullWidth={true}
        maxWidth={"md"}
      >
        <FormLabel
          component="legend"
          style={{ fontSize: "1.1rem", color: "black", margin: "10px 0" }}
        >
          Informacion Crítica
        </FormLabel>
        <FormInputText
          //onChange={handleChageActivo}
          name=""
          //value={correoRecuperacion}
          label="Denominación"
          placeholder="Correo"
        />
      </ScrollDialog>
    </div>
  );
};
export default PanelActivos;
