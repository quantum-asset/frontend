import {
  createSyntheticFile,
  FileItem,
  FullScreenPreview,
  makeSynthticFileValidate,
} from "@dropzone-ui/react";
import { Delete, Edit } from "@mui/icons-material";
import { Button, Fab, FormLabel, Grid, Paper, Tooltip } from "@mui/material";
import React, { Fragment, useEffect, useState } from "react";
import DenseTable from "../../../../Templates/Tables/DenseTable";
import VolverButton from "../../../Navegacion/VolverButton/VolverButton";
import Title from "../../../Title/Title";
import "./ActivoDetalle.scss";
import TablaTomasInventarioXActivo from "./TablaTomasInventarioXActivo";
const ActivosDetalle = (props) => {
  const { currentActivo, handleLista } = props;
  console.log("ActivosDetalle props", props);
  const init = () => {
    //llamada a su archivo con el ID
    //parseo , checar otro proyecto
  };
  const handleVolver = () => {
    console.log("volverrrrr");
    handleLista?.();
  };
  const [urlFullScreen, setUrlFullScreen] = useState(undefined);
  const handleSee = (url) => {
    alert("seee", url);
    setUrlFullScreen(
      "https://http2.mlstatic.com/D_NQ_NP_979852-MPE26420730248_112017-V.jpg"
    );
  };
  useEffect(() => {
    return () => {
      //handleVolver();
    };
  }, []);
  return (
    <Fragment>
      <div className="quantum-detale-main-container">
        <VolverButton onClick={handleVolver} />
        <div style={{ width: "100%" }}>
          <Title title={"Gestion de activos Fijos / Detalle de Activo"} />
        </div>

        <div className="quantum-detalle-header-panel">
          <div className="quantum-detalle-resumen">
            <div className="quantum-detalle-foto">
              <FullScreenPreview
                imgSource={urlFullScreen}
                onClose={() => setUrlFullScreen(undefined)}
                openImage={urlFullScreen}
              />
              <FileItem
                file={createSyntheticFile(
                  "foto del activo",
                  10000,
                  "image/png"
                )}
                valid={true}
                uploadStatus={undefined}
                onSee={handleSee}
                preview
                // onlyImage
                imageUrl="https://http2.mlstatic.com/D_NQ_NP_979852-MPE26420730248_112017-V.jpg"
              />
            </div>
            <div className="quantum-detalle-texto">
              <h2>{currentActivo?.DENOMINACION || "..."}</h2>
              <p>{currentActivo?.MARCA || "..."}</p>
              <p>{currentActivo?.MODELO || "..."}</p>
              <p>
                <b>Locacion: </b>
                {currentActivo?.LOCACION || "..."}
              </p>
            </div>
          </div>

          <div className="quantum-detalle-acciones web">
            <Button
              color="primary"
              variant="contained"
              //size="small"
              //fullWidth
              style={{ margin: "1px" }}
              startIcon={<Edit />}
              //onClick={() => {         download?.();                  }}
              //onClick={iniciarSesion}
            >
              Editar Activo
            </Button>
            <Button
              color="primary"
              variant="contained"
              //size="small"
              style={{ margin: "1px" }}
              //fullWidth
              startIcon={<Delete />}
              //onClick={iniciarSesion}
              //onClick={() => setOpenCargaMasiva(true)}
            >
              Dar de baja activo
            </Button>
          </div>
          <div className="quantum-detalle-acciones mobile">
            <Tooltip title="Editar Activo Fijo">
              <Fab
                color="primary"
                aria-label="edit"
                size="small"
                style={{ margin: "1px" }}
                // size="small"

                // onClick={() => setOpenDialogRecuperacion(true)}
              >
                <Edit />
              </Fab>
            </Tooltip>{" "}
            <Tooltip title="Dar de baja Activo Fijo">
              <Fab
                color="primary"
                aria-label="delete"
                size="small"
                style={{ margin: "1px" }}
                // size="small"

                //onClick={() => setOpenCargaMasiva(true)}
              >
                <Delete />
              </Fab>
            </Tooltip>
          </div>
        </div>
        <Grid container spacing={2} >
          <Grid item sm={12} md={7} xs={12}>
            <h3>Resumen</h3>
            <Paper style={{padding:"3%",
             //width:"calc(100% - 2%)"
             }}>
              <Grid container>
                <Grid item xs={12}>
                  <Grid container>
                    <Grid item md={3} sm={6} xs={12}>
                      <FormLabel component="legend">Marca:</FormLabel>
                      <p>{currentActivo.MARCA || "-"}</p>
                    </Grid>
                    <Grid item md={3} sm={6} xs={12}>
                      <FormLabel component="legend">Modelo:</FormLabel>
                      <p>{currentActivo.MODELO || "-"}</p>
                    </Grid>
                    <Grid item md={3} sm={6} xs={12}>
                      <FormLabel component="legend">Serie:</FormLabel>
                      <p>{currentActivo.SERIE || "-"}</p>
                    </Grid>
                    <Grid item md={3} sm={6} xs={12}>
                      <FormLabel component="legend">Color:</FormLabel>
                      <p>{currentActivo.COLOR || "-"}</p>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={12} style={{marginTop:"1%"}}>
                  <FormLabel component="legend">Caracteristicas:</FormLabel>
                  <p>{currentActivo.CARACTERISTICAS || "-"}</p>
                </Grid>
                <Grid item xs={12} style={{marginTop:"1%"}}>
                  <FormLabel component="legend">Observaciones: </FormLabel>
                  <p>{currentActivo.OBSERVACIONES || "-"}</p>
                </Grid>
              </Grid>
            </Paper>
            <br/>
            <h3>Adquisicion</h3>
            <Paper style={{padding:"3%",
             //width:"calc(100% - 2%)"
             }}>
              <Grid container>
                <Grid item md={4}sm={6} xs={12}>
                  <FormLabel component="legend">
                    Num Guia de remision:
                  </FormLabel>
                  <p>{currentActivo.NUM_GUIA_REMISION || "-"}</p>
                </Grid>

                <Grid item md={4}sm={6} xs={12}>
                  <FormLabel component="legend">Num. Factura:</FormLabel>
                  <p>{currentActivo.NUM_FACTURA || "-"}</p>
                </Grid>

                <Grid item md={4}sm={6} xs={12}>
                  <FormLabel component="legend">
                    Costo de adquisicion:
                  </FormLabel>
                  <p>
                    {"S/. "}
                    {currentActivo.CENTRO_COSTO || "-"}
                  </p>
                </Grid>
                <Grid item md={4}sm={6} xs={12}>
                  <FormLabel component="legend">Proveedor:</FormLabel>
                  <p>{currentActivo.PROVEEDOR_RAZON_SOCIAL || "-"}</p>
                </Grid>
                <Grid item md={4}sm={6} xs={12}>
                  <FormLabel component="legend">Num Ruc:</FormLabel>
                  <p>{currentActivo.PROVEEDOR_RUC || "-"}</p>
                </Grid>
              </Grid>
            </Paper>
          </Grid>

          <Grid item sm={12} md={5} xs={12}>
            <h2>Tomas de inventario</h2>
            <Paper>
              {" "}
              
              <TablaTomasInventarioXActivo idActivo={currentActivo.ID_ACTIVO}/>
            </Paper>
          </Grid>
        </Grid>
      </div>
    </Fragment>
  );
};
export default ActivosDetalle;
