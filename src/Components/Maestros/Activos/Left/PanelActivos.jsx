import React, { useState } from "react";
import "./PanelActivos.scss";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import { Button, FormLabel, Grid, Tooltip } from "@mui/material";
import UploadFileIcon from "@mui/icons-material/UploadFile";
import SearchInputText from "../../../Formulario/SearchInputText";
import ScrollDialog from "../../../../Templates/Dialogs/ScrollDialog";
import FormInputText from "../../../Formulario/FormInputText";
import DialogCargaMasiva from "../../../Dialogs/DialogCargaMasiva";
/**
1,null,1,1,1,Smarthphone,Pantalla: 6,7 pulgadas;    Resolución: 2.400 x 1.080 píxeles;    Tasa de actualización máxima: 120 Hz;    Procesador: Exynos 2100;    RAM: 8GB;    Almacenamiento: 256 GB;    MicroSD: no;    Cámaras principales: 12 megapíxeles(f/1.8) + gran angular 12 megapíxeles (f/2.2) + telefoto 64 megapíxeles (f/2.0) con zoom óptico híbrido 3x y zoom digital hasta de 30x;    Cámara frontal: 10 megapíxeles;   Resistencia al agua: sí, con la certificación IP68;    Batería: 4.800m Ah;    Carga inalámbrica: sí;    Carga inalámbrica reversible: sí;    Carga rápida: 25 vatios (25W);    Sistema operativo: Android 11;    5G: sí, mmWave y Sub-6;    Lector de huellas: sí, en la pantalla;,Sin conector de audífonos de 3,5 mm, UWB, NFC (sin MST), pantalla planta y no trae cargador ni audífonos en la caja,CTFVYG-VTY-VYB-0001,Phantom black,Galaxy S21 +; SM-G996U1,Samsung,4500,555089,481656562,1022295110,SAMTRONICS S.A,TI,null,
2,20,1,1,1,Smarthphone,Pantalla: 6,7 pulgadas;    Resolución: 2.400 x 1.080 píxeles;    Tasa de actualización máxima: 120 Hz;    Procesador: Exynos 2100;    RAM: 8GB;    Almacenamiento: 256 GB;    MicroSD: no;    Cámaras principales: 12 megapíxeles(f/1.8) + gran angular 12 megapíxeles (f/2.2) + telefoto 64 megapíxeles (f/2.0) con zoom óptico híbrido 3x y zoom digital hasta de 30x;    Cámara frontal: 10 megapíxeles;   Resistencia al agua: sí, con la certificación IP68;    Batería: 4.800m Ah;    Carga inalámbrica: sí;    Carga inalámbrica reversible: sí;    Carga rápida: 25 vatios (25W);    Sistema operativo: Android 11;    5G: sí, mmWave y Sub-6;    Lector de huellas: sí, en la pantalla;,Sin conector de audífonos de 3,5 mm, UWB, NFC (sin MST), pantalla planta y no trae cargador ni audífonos en la caja,CTFVYG-VTY-VYB-0002,Phantom black,Galaxy S21 +; SM-G996U2,Samsung,4501,555089,481656562,1022295110,SAMTRONICS S.A,TI,2021-11-23

 */

const dataPruebaRow1 = `1,null,1,1,1,Smarthphone,Pantalla: 6,7 pulgadas;    Resolución: 2.400 x 1.080 píxeles;    Tasa de actualización máxima: 120 Hz;    Procesador: Exynos 2100;    RAM: 8GB;    Almacenamiento: 256 GB;    MicroSD: no;    Cámaras principales: 12 megapíxeles(f/1.8) + gran angular 12 megapíxeles (f/2.2) + telefoto 64 megapíxeles (f/2.0) con zoom óptico híbrido 3x y zoom digital hasta de 30x;    Cámara frontal: 10 megapíxeles;   Resistencia al agua: sí, con la certificación IP68;    Batería: 4.800m Ah;    Carga inalámbrica: sí;    Carga inalámbrica reversible: sí;    Carga rápida: 25 vatios (25W);    Sistema operativo: Android 11;    5G: sí, mmWave y Sub-6;    Lector de huellas: sí, en la pantalla;,Sin conector de audífonos de 3,5 mm, UWB, NFC (sin MST), pantalla planta y no trae cargador ni audífonos en la caja,CTFVYG-VTY-VYB-0001,Phantom black,Galaxy S21 +; SM-G996U1,Samsung,4500,555089,481656562,1022295110,SAMTRONICS S.A,TI,null\n`;
const dataPruebaRow2 = `2,20,1,1,1,Smarthphone,Pantalla: 6,7 pulgadas;    Resolución: 2.400 x 1.080 píxeles;    Tasa de actualización máxima: 120 Hz;    Procesador: Exynos 2100;    RAM: 8GB;    Almacenamiento: 256 GB;    MicroSD: no;    Cámaras principales: 12 megapíxeles(f/1.8) + gran angular 12 megapíxeles (f/2.2) + telefoto 64 megapíxeles (f/2.0) con zoom óptico híbrido 3x y zoom digital hasta de 30x;    Cámara frontal: 10 megapíxeles;   Resistencia al agua: sí, con la certificación IP68;    Batería: 4.800m Ah;    Carga inalámbrica: sí;    Carga inalámbrica reversible: sí;    Carga rápida: 25 vatios (25W);    Sistema operativo: Android 11;    5G: sí, mmWave y Sub-6;    Lector de huellas: sí, en la pantalla;,Sin conector de audífonos de 3,5 mm, UWB, NFC (sin MST), pantalla planta y no trae cargador ni audífonos en la caja,CTFVYG-VTY-VYB-0002,Phantom black,Galaxy S21 +; SM-G996U2,Samsung,4501,555089,481656562,1022295110,SAMTRONICS S.A,TI,2021-11-23\n`;
const dataPruebaHeaders =
  "ID_TAG,ID_ARCHIVO,ID_TIPO_ACTIVO,ID_LOCACION,ID_AREA_RESPONSABLE,DENOMINACION,CARACTERISTICAS,OBSERVACIONES,SERIE,COLOR,MODELO,MARCA,COSTO_ADQUISICION,NUM_GUIA_REMISION,NUM_FACTURA,PROVEEDOR_RUC,PROVEEDOR_RAZON_SOCIAL,CENTRO_COSTO,FECHA_DE_ALTA";
const PanelActivos = (props) => {
  const { download, handleChangeFiltro, filtros } = props;
  const [localFiltros, setLocalFiltros] = useState([
    { name: "DENOMINACION", value: "" },
    { name: "LOCACION", value: "" },
    { name: "PROVEEDOR", value: "" },
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
  //DIALOG CARGA MASIVA
  const [openCargaMasiva, setOpenCargaMasiva] = useState(false);
  const handleCloseCargaMasiva = () => {
    setOpenCargaMasiva(false);
  };
  return (
    <div className="panel-activos-container">
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="stretch"
      >
        <Grid item>
          <Grid container>
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
        </Grid>
        <Grid item>
          <Grid container spacing={1}>
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
                name={"PROVEEDOR"}
                fullWidth
                //value={filtros.DENOMINACION}
                placeholder="Razon social del proveedor"
                label={"Proveedor"}
              />
            </Grid>
            <Grid item md={3} sm={12} xs={12}>
              <SearchInputText
                onChange={handleChange}
                style={{ margin: "2px 0" }}
                name={"TIPO_ACTIVO"}
                fullWidth
                value={filtros.DENOMINACION}
                placeholder="Tipo de activo"
                label={"Tipo de Activo"}
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      {/** CARGA MASIVAAAA*/}
      <DialogCargaMasiva
        open={openCargaMasiva}
        headers={dataPruebaHeaders}
        dataPrueba={`${dataPruebaRow1}${dataPruebaRow2}`}
        entidad={"Activos"}
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
/**
{"ID_TAG":1,"ID_ARCHIVO":null,"ID_TIPO_ACTIVO":1,"ID_LOCACION":1,"ID_AREA_RESPONSABLE":1,"DENOMINACION":"Smarthphone","CARACTERISTICAS":"Pantalla: 6,7 pulgadas;    Resolución: 2.400 x 1.080 píxeles;    Tasa de actualización máxima: 120 Hz;    Procesador: Exynos 2100;    RAM: 8GB;    Almacenamiento: 256 GB;    MicroSD: no;    Cámaras principales: 12 megapíxeles(f/1.8) + gran angular 12 megapíxeles (f/2.2) + telefoto 64 megapíxeles (f/2.0) con zoom óptico híbrido 3x y zoom digital hasta de 30x;    Cámara frontal: 10 megapíxeles;   Resistencia al agua: sí, con la certificación IP68;    Batería: 4.800m Ah;    Carga inalámbrica: sí;    Carga inalámbrica reversible: sí;    Carga rápida: 25 vatios (25W);    Sistema operativo: Android 11;    5G: sí, mmWave y Sub-6;    Lector de huellas: sí, en la pantalla;","OBSERVACIONES":"Sin conector de audífonos de 3,5 mm, UWB, NFC (sin MST), pantalla planta y no trae cargador ni audífonos en la caja","SERIE":"CTFVYG-VTY-VYB-0001","COLOR":"Phantom black","MODELO":"Galaxy S21 +; SM-G996U1","MARCA":"Samsung","COSTO_ADQUISICION":4500,"NUM_GUIA_REMISION":"555089","NUM_FACTURA":"481656562","PROVEEDOR_RUC":"1022295110","PROVEEDOR_RAZON_SOCIAL":"SAMTRONICS S.A","CENTRO_COSTO":"TI","FECHA_DE_ALTA":null},
{"ID_TAG":2,"ID_ARCHIVO":null,"ID_TIPO_ACTIVO":1,"ID_LOCACION":1,"ID_AREA_RESPONSABLE":1,"DENOMINACION":"Smarthphone","CARACTERISTICAS":"Pantalla: 6,7 pulgadas;    Resolución: 2.400 x 1.080 píxeles;    Tasa de actualización máxima: 120 Hz;    Procesador: Exynos 2100;    RAM: 8GB;    Almacenamiento: 256 GB;    MicroSD: no;    Cámaras principales: 12 megapíxeles(f/1.8) + gran angular 12 megapíxeles (f/2.2) + telefoto 64 megapíxeles (f/2.0) con zoom óptico híbrido 3x y zoom digital hasta de 30x;    Cámara frontal: 10 megapíxeles;   Resistencia al agua: sí, con la certificación IP68;    Batería: 4.800m Ah;    Carga inalámbrica: sí;    Carga inalámbrica reversible: sí;    Carga rápida: 25 vatios (25W);    Sistema operativo: Android 11;    5G: sí, mmWave y Sub-6;    Lector de huellas: sí, en la pantalla;","OBSERVACIONES":"Sin conector de audífonos de 3,5 mm, UWB, NFC (sin MST), pantalla planta y no trae cargador ni audífonos en la caja","SERIE":"CTFVYG-VTY-VYB-0002","COLOR":"Phantom black","MODELO":"Galaxy S21 +; SM-G996U2","MARCA":"Samsung","COSTO_ADQUISICION":4501,"NUM_GUIA_REMISION":"555089","NUM_FACTURA":"481656562","PROVEEDOR_RUC":"1022295110","PROVEEDOR_RAZON_SOCIAL":"SAMTRONICS S.A","CENTRO_COSTO":"TI","FECHA_DE_ALTA":null},
ID_ACTIVO,ID_TAG,ID_ARCHIVO,ID_TIPO_ACTIVO,ID_LOCACION,ID_AREA_RESPONSABLE,DENOMINACION,CARACTERISTICAS,OBSERVACIONES,SERIE,COLOR,MODELO,MARCA,COSTO_ADQUISICION,NUM_GUIA_REMISION,NUM_FACTURA,PROVEEDOR_RUC,PROVEEDOR_RAZON_SOCIAL,CENTRO_COSTO,FECHA_DE_ALTA

1,null,1,1,1,"Smarthphone","Pantalla: 6,7 pulgadas;    Resolución: 2.400 x 1.080 píxeles;    Tasa de actualización máxima: 120 Hz;    Procesador: Exynos 2100;    RAM: 8GB;    Almacenamiento: 256 GB;    MicroSD: no;    Cámaras principales: 12 megapíxeles(f/1.8) + gran angular 12 megapíxeles (f/2.2) + telefoto 64 megapíxeles (f/2.0) con zoom óptico híbrido 3x y zoom digital hasta de 30x;    Cámara frontal: 10 megapíxeles;   Resistencia al agua: sí, con la certificación IP68;    Batería: 4.800m Ah;    Carga inalámbrica: sí;    Carga inalámbrica reversible: sí;    Carga rápida: 25 vatios (25W);    Sistema operativo: Android 11;    5G: sí, mmWave y Sub-6;    Lector de huellas: sí, en la pantalla;","Sin conector de audífonos de 3,5 mm, UWB, NFC (sin MST), pantalla planta y no trae cargador ni audífonos en la caja","CTFVYG-VTY-VYB-0001","Phantom black","Galaxy S21 +; SM-G996U1","Samsung",4500,"555089","481656562","1022295110","SAMTRONICS S.A","TI",null
2,20,1,1,1,"Smarthphone","Pantalla: 6,7 pulgadas;    Resolución: 2.400 x 1.080 píxeles;    Tasa de actualización máxima: 120 Hz;    Procesador: Exynos 2100;    RAM: 8GB;    Almacenamiento: 256 GB;    MicroSD: no;    Cámaras principales: 12 megapíxeles(f/1.8) + gran angular 12 megapíxeles (f/2.2) + telefoto 64 megapíxeles (f/2.0) con zoom óptico híbrido 3x y zoom digital hasta de 30x;    Cámara frontal: 10 megapíxeles;   Resistencia al agua: sí, con la certificación IP68;    Batería: 4.800m Ah;    Carga inalámbrica: sí;    Carga inalámbrica reversible: sí;    Carga rápida: 25 vatios (25W);    Sistema operativo: Android 11;    5G: sí, mmWave y Sub-6;    Lector de huellas: sí, en la pantalla;","Sin conector de audífonos de 3,5 mm, UWB, NFC (sin MST), pantalla planta y no trae cargador ni audífonos en la caja","CTFVYG-VTY-VYB-0002","Phantom black","Galaxy S21 +; SM-G996U2","Samsung",4501,"555089","481656562","1022295110","SAMTRONICS S.A","TI",02/11/2021


 */
