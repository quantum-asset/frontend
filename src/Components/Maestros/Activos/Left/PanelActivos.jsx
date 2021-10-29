import { Grid } from "@material-ui/core";
import React, { useState } from "react";
import "./PanelActivos.scss";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import { Button, InputAdornment, TextField } from "@mui/material";
import UploadFileIcon from "@mui/icons-material/UploadFile";
import SearchIcon from "@mui/icons-material/Search";
const PanelActivos = (props) => {
  const [filtros, setFriltros] = useState({ DENOMINACION: "" });
  const handleChange = (value, name) => {
    setFriltros({ ...filtros, [name]: value });
  };
  return (
    <div className="panel-activos-container">
      <Grid container spacing={1} style={{ padding: "10px 1%" }}>
        <Grid item md={6} xs={12}>
          <TextField
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
            color="primary"
            fullWidth
            id="outlined-email-input"
            label={"Denominación"}
            type="search"
            placeholder="Denominación del activo"
            autoComplete="current-password"
            variant="outlined"
            // style={{ margin: "4px 0px" }}
            size="small"
            onChange={(e, name) => {
              handleChange(e.target.value, "DENOMINACION");
            }}
            value={filtros.DENOMINACION}
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
              size="small"
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
              size="small"
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
              onClick={() => {
                //setOpenAssetDialog(true);
              }}
            >
              <AddIcon />
            </Fab>
          </Grid>
        </Grid>

        <div className="advanced-search-inputs">
          <TextField
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
            color="primary"
            fullWidth
            id="outlined-email-input"
            label={"Denominación"}
            type="search"
            placeholder="Denominación del activo"
            autoComplete="current-password"
            variant="outlined"
            style={{ margin: "4px 4px" }}

            size="small"
            onChange={(e, name) => {
              handleChange(e.target.value, "DENOMINACION");
            }}
            value={filtros.DENOMINACION}
          />

          <TextField
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
            color="primary"
            fullWidth
            id="outlined-email-input"
            label={"Denominación"}
            type="search"
            placeholder="Denominación del activo"
            autoComplete="current-password"
            variant="outlined"
            style={{ margin: "4px 4px" }}

            size="small"
            onChange={(e, name) => {
              handleChange(e.target.value, "DENOMINACION");
            }}
            value={filtros.DENOMINACION}
          />

          <TextField
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
            color="primary"
            fullWidth
            id="outlined-email-input"
            label={"Denominación"}
            type="search"
            placeholder="Denominación del activo"
            autoComplete="current-password"
            variant="outlined"
            style={{ margin: "4px 4px" }}
            size="small"
            onChange={(e, name) => {
              handleChange(e.target.value, "DENOMINACION");
            }}
            value={filtros.DENOMINACION}
          />

          <TextField
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
            color="primary"
            fullWidth
            id="outlined-email-input"
            label={"Denominación"}
            type="search"
            placeholder="Denominación del activo"
            autoComplete="current-password"
            variant="outlined"
            style={{ margin: "4px 4px" }}

            size="small"
            onChange={(e, name) => {
              handleChange(e.target.value, "DENOMINACION");
            }}
            value={filtros.DENOMINACION}
          />
        </div>
      </Grid>
    </div>
  );
};
export default PanelActivos;
