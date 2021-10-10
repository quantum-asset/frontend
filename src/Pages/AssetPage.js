import { Autocomplete, Grid, Paper, TextField } from "@mui/material";
import React, { Fragment } from "react";
import AssetTabs from "../components/AssetPage/AssetTabs";
import TableCheckBox from "../components/Examples/TableCheckBox";
const proveedores = [
  { id: 0, nombre: "SAMSUNG" },
  { id: 1, nombre: "DELL" },
  { id: 2, nombre: "REPSOL" },
  { id: 3, nombre: "ZEBRA" },
  { id: 4, nombre: "PUCP" },
];
const AssetPage = (props) => { 
  return (
    <Fragment>
      <AssetTabs
        labels={["Activos fijos", "Tipos de activos"]}
        content={[
          <Fragment>
            <Grid
              container
              style={{
                backgroundColor: "white",
                padding: "10px",
                borderRadius: "10px",
              }}
            >
              {" "}
              <h4>Filtros </h4>
              <Grid item md={12} container spacing={2}>
                <Grid item md={3} xs={12}>
                  {/* <div style={{ marginBottom: "5px" }}>Tag:</div> */}
                  <TextField
                    color="primary"
                    fullWidth
                    id="outlined-email-input"
                    label="Número de tag"
                    type="search"
                    autoComplete="current-password"
                    variant="outlined"
                    style={{ margin: "4px 0px" }}
                    size="small"

                    // onChange={ingresoDeCorreooo}
                    // value={usuarioLogin.email}
                  />
                </Grid>
                <Grid item md={3} xs={12}>
                  {/*  <div style={{ marginBottom: "5px" }}>Denominación:</div> */}
                  <TextField
                    fullWidth
                    id="outlined-email-input"
                    label="Denominacion"
                    type="search"
                    autoComplete="current-password"
                    variant="outlined"
                    size="small"
                    // onChange={ingresoDeCorreooo}
                    // value={usuarioLogin.email}
                    style={{ margin: "4px 0px" }}
                  />
                </Grid>
                <Grid item md={3} xs={12}>
                  <TextField
                    fullWidth
                    id="outlined-email-input"
                    label="Denominacion"
                    type="search"
                    autoComplete="current-password"
                    variant="outlined"
                    size="small"
                    // onChange={ingresoDeCorreooo}
                    // value={usuarioLogin.email}
                    style={{ margin: "4px 0px" }}
                  />
                </Grid>
                <Grid item md={3} xs={12}>
                  {/*  <div style={{ marginBottom: "5px" }}>Locación:</div> */}
                  <Autocomplete
                    size="small"
                    id="combo-box-paciente"
                    options={proveedores}
                    getOptionLabel={(option) => `${option.nombre}`}
                    style={{ width: "100%", margin: "4px 0px" }}
                    onChange={(event, newValue) => {
                      //handleChangePaciente(newValue);
                    }}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        size="small"
                        label="Locacion"
                        variant="outlined"
                      />
                    )}
                  />
                </Grid>
              </Grid>
              <Grid item md={12} container spacing={2}>
                <Grid item md={3} xs={12}>
                  {/*  <div style={{ marginBottom: "5px" }}>Locación:</div> */}
                  <Autocomplete
                    id="combo-box-paciente"
                    size="small"
                    options={proveedores}
                    getOptionLabel={(option) => `${option.nombre}`}
                    style={{ width: "100%", margin: "4px 0px" }}
                    onChange={(event, newValue) => {
                      //handleChangePaciente(newValue);
                    }}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        label="Locacion"
                        variant="outlined"
                      />
                    )}
                  />
                </Grid>
                <Grid item md={3} xs={12}></Grid>
                <Grid item md={3} xs={12}></Grid>
                <Grid item md={3} xs={12}>
                  {/*  <div style={{ marginBottom: "5px" }}>Fecha:</div> */}
                  <TextField
                    id="date"
                    label="Fecha"
                    type="date"
                    fullWidth
                    size="small"
                    // defaultValue={date}
                    //value={date}
                    // onChange={(e) => handleChangeDate(e)}
                    //className={classes.textField}
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />
                </Grid>
              </Grid>
            </Grid>
            <div
              style={{
                margin: "20px 0",
                display: "flex",
                flexDirection: "row",
                width: "100%",
                height: "100%",
                alignItems: "center",
                backgroundColor: "white",
                borderRadius: "10px",
              }}
            >
              <div style={{ width: "75%" }}>
                <TableCheckBox />
              </div>

              <div style={{ width: "25%", height: "100%" }}>
                <Paper style={{ height: "100%" }}>Charts</Paper>
              </div>
            </div>
          </Fragment>,

          <div
            style={{
              display: "flex",
              flexDirection: "row",
              width: "100%",
              height: "100%",
              alignItems: "center",
            }}
          >
            <div style={{ width: "75%" }}>Tipo activo Table</div>
            <div style={{ width: "25%" }}>Carts</div>
          </div>,
        ]}
      />
    </Fragment>
  );
};
export default AssetPage;
