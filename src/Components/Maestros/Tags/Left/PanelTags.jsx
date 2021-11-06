import React from "react";
import SearchInputText from "../../../Formulario/SearchInputText";
import "./PanelTags.scss";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import UploadFileIcon from "@mui/icons-material/UploadFile";
import { Button, FormLabel, Grid, Tooltip } from "@mui/material";
const PanelTags = (props) => {
  const { download, handleChangeFiltro, filtros } = props;
  /**
   * retorna (valor, nombre)
   */
  const handleChangeFiltroTag = (value, nombre) => {
    handleChangeFiltro?.(value);
  };

  return (
    <div className="panel-tags-container">
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="stretch"
      >
        <Grid item>
          <Grid container>
            <Grid item md={6} xs={12}>
              <FormLabel component="legend">Filtrar Tags</FormLabel>

              <SearchInputText
                onChange={handleChangeFiltroTag}
                style={{ margin: "2px 0" }}
                //name={"DENOMINACION"}
                // value={localFiltros[0].value}
                fullWidth
                placeholder="Buscar tags"
                label={""}
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
                 // style={{textDecoration:"none"}}
                  //size="small"
                  //fullWidth
                  style={{ margin: "1px",textTransform:"capitalize" }}
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
                  style={{ margin: "1px" ,textTransform:"capitalize"}}
                  //fullWidth
                  startIcon={<UploadFileIcon />}
                  //onClick={iniciarSesion}
                  //onClick={() => setOpenCargaMasiva(true)}
                >
                  Subir CSV
                </Button>

                <Tooltip title="Agregar Nuevo Tag">
                  <Fab
                    color="primary"
                    aria-label="add"
                    size="small"
                    style={{ margin: "1px" }}
                    //onClick={() => setOpenDialogRecuperacion(true)}
                  >
                    <AddIcon />
                  </Fab>
                </Tooltip>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};
export default PanelTags;
