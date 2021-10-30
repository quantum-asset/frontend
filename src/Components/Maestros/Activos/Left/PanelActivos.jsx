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
  const [filtros, setFriltros] = useState({ DENOMINACION: "" });
  const handleChange = (value, name) => {
    setFriltros({ ...filtros, [name]: value });
    console.log("filtros", { ...filtros, [name]: value });
  };
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
          <Grid
            container
            //spacing={1}
            style={{ margin: "7px 0" }}
            //style={{ padding: "10px 1%" }}
          >
            <Grid item md={6} xs={12}>
              <SearchInputText
                onChange={handleChange}
                style={{ margin: "2px 0" }}
                name={"DENOMINACION"}
                value={filtros.DENOMINACION}
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
                  //onClick={iniciarSesion}
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
          <Grid container style={{ margin: "15px 0" }}>
            <Grid item md={3} sm={12} xs={12}>
              {" "}
              <SearchInputText
                onChange={handleChange}
                style={{ margin: "2px 0" }}
                name={"DENOMINACION"}
                value={filtros.DENOMINACION}
                placeholder="Denomisssnación del activo"
                label={"Denominación"}
              />
            </Grid>
            <Grid item md={3} sm={12} xs={12}>
              <SearchInputText
                onChange={handleChange}
                style={{ margin: "2px 0" }}
                name={"DENOMINACION"}
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
        onSave={()=>{}}
        onCancel={()=>{}}
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
