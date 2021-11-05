import { FormLabel } from "@mui/material";
import React, { useState } from "react";
import ScrollDialog from "../../Templates/Dialogs/ScrollDialog";
import { downloadTexFile } from "../../utils/files.utils";
import "./DialogCargaMasiva.scss";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import { Dropzone, FileItem } from "@dropzone-ui/react";
import DialogAlert from "./DialogAlert";

const DialogCargaMasiva = (props) => {
  const { entidad, headers, dataPrueba, open, onClose } = props;

  const fileNamePlantilla = `plantilla de carga masiva de ${entidad}`;
  const dataToDownload = `${headers}\n${dataPrueba}`;
  const handleDownloadPlantilla = () => {
    downloadTexFile(fileNamePlantilla, dataToDownload);
  };
  const handleGuardar = () => {};
  const handleCancelar = () => {
    if (filesCargaMasiva.filter((x) => x.valid).length > 0) {
      //si hay archivos validos
      setOpenAlert(true);
    } else {
      onClose?.();
    }
    //aun no se ha cargado los archivos, seguro que desea cancelar la carga masiva
  };
  //files con dropzone
  const [filesCargaMasiva, setFilesCargaMasiva] = useState([]);
  const handleChangeFiles = (files) => {
    setFilesCargaMasiva(files);
  };
  const onDeleteFile = (id) => {
    setFilesCargaMasiva(filesCargaMasiva.filter((x) => x.id !== id));
  };
  //alert dialog
  const [openAlert, setOpenAlert] = useState(false);
  return (
    <ScrollDialog
      title={`Carga Masiva de ${entidad}`}
      open={open}
      onSave={handleGuardar}
      onCancel={handleCancelar}
    >
      <FormLabel component="legend">
        {"1) Descarga la plantilla antes de subir un archivo:"}
      </FormLabel>
      <div className="quantum-plantilla-descargar">
        <div
          className="quantum-plantilla-label"
          onClick={handleDownloadPlantilla}
        >
          {"plantilla.csv"} <FileDownloadIcon />
        </div>
      </div>
      <FormLabel component="legend">{"2) Sube tus Archivos: "}</FormLabel>
      <Dropzone
        style={{ minWidth: "550px", marginTop: "10px" }}
        minHeight="180px"
        onClean
        //header={false}
        onChange={handleChangeFiles}
        value={filesCargaMasiva}
        maxFiles={10}
        maxFileSize={2998000}
        accept=".csv, .xlsx"
        url="http://ec2-99-99-9-9.compute-1.amazonaws.com:2800/upload-my-file"
        fakeUploading
        localization={"ES-es"}
      >
        {filesCargaMasiva.map((file) => (
          <FileItem
            {...file}
            key={file.id}
            onDelete={onDeleteFile}
            localization={"ES-es"}
            info
          />
        ))}
      </Dropzone>
      <DialogAlert
        open={openAlert}
        message="Aun no se ha cargado los archivos, seguro que desea cancelar la carga masiva"
        onDiscard={(e) => {
          setOpenAlert(false);
          onClose?.();
          setFilesCargaMasiva([]);
        }}
        onContinue={(e) => setOpenAlert(false)}
      />
    </ScrollDialog>
  );
};
export default DialogCargaMasiva;
