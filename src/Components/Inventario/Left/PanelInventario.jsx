import React, { useState } from "react";
import ScrollDialog from "../../../Templates/Dialogs/ScrollDialog";
import DialogCargaMasiva from "../../Dialogs/DialogCargaMasiva";
import SearchInputText from "../../Formulario/SearchInputText";
import { Button, FormLabel, Grid, Tooltip } from "@mui/material";
import UploadFileIcon from "@mui/icons-material/UploadFile";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import FormInputText from "../../Formulario/FormInputText";
import "./PanelTomaInventario.scss";
const dataPruebaRow1 = `1,null,1,1,1,Smarthphone,Pantalla: 6,7 pulgadas;    Resolución: 2.400 x 1.080 píxeles;    Tasa de actualización máxima: 120 Hz;    Procesador: Exynos 2100;    RAM: 8GB;    Almacenamiento: 256 GB;    MicroSD: no;    Cámaras principales: 12 megapíxeles(f/1.8) + gran angular 12 megapíxeles (f/2.2) + telefoto 64 megapíxeles (f/2.0) con zoom óptico híbrido 3x y zoom digital hasta de 30x;    Cámara frontal: 10 megapíxeles;   Resistencia al agua: sí, con la certificación IP68;    Batería: 4.800m Ah;    Carga inalámbrica: sí;    Carga inalámbrica reversible: sí;    Carga rápida: 25 vatios (25W);    Sistema operativo: Android 11;    5G: sí, mmWave y Sub-6;    Lector de huellas: sí, en la pantalla;,Sin conector de audífonos de 3,5 mm, UWB, NFC (sin MST), pantalla planta y no trae cargador ni audífonos en la caja,CTFVYG-VTY-VYB-0001,Phantom black,Galaxy S21 +; SM-G996U1,Samsung,4500,555089,481656562,1022295110,SAMTRONICS S.A,TI,null\n`;
const dataPruebaRow2 = `2,20,1,1,1,Smarthphone,Pantalla: 6,7 pulgadas;    Resolución: 2.400 x 1.080 píxeles;    Tasa de actualización máxima: 120 Hz;    Procesador: Exynos 2100;    RAM: 8GB;    Almacenamiento: 256 GB;    MicroSD: no;    Cámaras principales: 12 megapíxeles(f/1.8) + gran angular 12 megapíxeles (f/2.2) + telefoto 64 megapíxeles (f/2.0) con zoom óptico híbrido 3x y zoom digital hasta de 30x;    Cámara frontal: 10 megapíxeles;   Resistencia al agua: sí, con la certificación IP68;    Batería: 4.800m Ah;    Carga inalámbrica: sí;    Carga inalámbrica reversible: sí;    Carga rápida: 25 vatios (25W);    Sistema operativo: Android 11;    5G: sí, mmWave y Sub-6;    Lector de huellas: sí, en la pantalla;,Sin conector de audífonos de 3,5 mm, UWB, NFC (sin MST), pantalla planta y no trae cargador ni audífonos en la caja,CTFVYG-VTY-VYB-0002,Phantom black,Galaxy S21 +; SM-G996U2,Samsung,4501,555089,481656562,1022295110,SAMTRONICS S.A,TI,2021-11-23\n`;
const dataPruebaHeaders =
  "ID_TAG,ID_ARCHIVO,ID_TIPO_ACTIVO,ID_LOCACION,ID_AREA_RESPONSABLE,DENOMINACION,CARACTERISTICAS,OBSERVACIONES,SERIE,COLOR,MODELO,MARCA,COSTO_ADQUISICION,NUM_GUIA_REMISION,NUM_FACTURA,PROVEEDOR_RUC,PROVEEDOR_RAZON_SOCIAL,CENTRO_COSTO,FECHA_DE_ALTA";

const PanelInventario = (props) => {
  const { download, handleChangeFiltro, filtros } = props;
  const [localFiltros, setLocalFiltros] = useState([
    { name: "USUARIO_RESPONSABLE", value: "" },
    { name: "ESTADO", value: "" },
    { name: "TIPO_CONTROL", value: "" },
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
  //DIALOG CARGA MASIVA
  const [openCargaMasiva, setOpenCargaMasiva] = useState(false);
  const handleCloseCargaMasiva = () => {
    setOpenCargaMasiva(false);
  };

  return (
    <div className="panel-activos-container">
      <Grid container>
        <Grid item md={8} xs={12}>
          <div className="quantum-panel-inventario-filtros">
            <SearchInputText
              onChange={handleChange}
              style={{ margin: "2px 0" }}
              name={"USUARIO_RESPONSABLE"}
              // value={localFiltros[0].value}
              fullWidth
              placeholder="Usuario responsable asignado"
              label={"Usuario Responsable"}
            />
            <SearchInputText
              onChange={handleChange}
              style={{ margin: "2px 0" }}
              name={"ESTADO"}
              // value={localFiltros[0].value}
              fullWidth
              placeholder="Estado de la toma de inventario"
              label={"Denominación"}
            />
            <SearchInputText
              onChange={handleChange}
              style={{ margin: "2px 0" }}
              name={"TIPO_CONTROL"}
              // value={localFiltros[0].value}
              fullWidth
              placeholder="Tipo de control de activos"
              label={"Denominación"}
            />
          </div>
        </Grid>
        <Grid item md={4} xs={12}>
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
              style={{ margin: "1px", textTransform: "capitalize" }}
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
              style={{ margin: "1px", textTransform: "capitalize" }}
              //fullWidth
              startIcon={<UploadFileIcon />}
              //onClick={iniciarSesion}
              onClick={() => setOpenCargaMasiva(true)}
            >
              Subir CSV
            </Button>

            <Tooltip title="Agregar Nuevo Activo">
              <Fab
                color="primary"
                aria-label="add"
                size="small"
                style={{ margin: "1px" }}
                onClick={() => setOpenDialogRecuperacion(true)}
              >
                <AddIcon />
              </Fab>
            </Tooltip>
          </Grid>
        </Grid>
      </Grid>

      {/** CARGA MASIVAAAA*/}
      <DialogCargaMasiva
        open={openCargaMasiva}
        headers={dataPruebaHeaders}
        dataPrueba={`${dataPruebaRow1}${dataPruebaRow2}`}
        entidad={"Tomas de Inventario"}
        onClose={() => setOpenCargaMasiva?.()}
      />
      {/** NUEVO ACTIVO O EDITAR */}
      <ScrollDialog
        open={openDialogRecuperacion}
        // onCancel={() => {}}
        onSave={() => {}}
        onCancel={() => {}}
        //onAccept={handleRequestRecoverPassword}
        onClose={() => setOpenDialogRecuperacion(false)}
        title={"Nuevo / Editar Toma de inventario"}
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
export default PanelInventario;
