import React, { useEffect } from "react";
import { TomaInventarioController } from "../../../../Controller/TomaInventarioController";
import DenseTable from "../../../../Templates/Tables/DenseTable";

const TablaTomasInventarioXActivo = props =>{
    const {idActivo} = props;
    const init=async(idActivo)=>{
        const { status, payload, message } = await TomaInventarioController.listJoinByActivo({
            filtrosKeys:["ID_ACTIVO"]
        });
        if(status){
//success

        }else{
            //error
        }
    }
    useEffect(()=>{
if(idActivo){
init(idActivo);
}
    },[idActivo]);
    return(
        <div>
        <DenseTable/>
        </div>
    )
}
export default TablaTomasInventarioXActivo;
/* 

const columns = (handleDelete, handleEdit, handleSee) => [
    { title: "Fecha", field: "FECHA" },
    { title: "Denominación", field: "DENOMINACION" },
    { title: "Tipo de activo", field: "TIPO_ACTIVO" },
    { title: "Locación", field: "LOCACION" },
    { title: "Costo de adquisición", field: "COSTO_ADQUISICION" },
    { title: "Proveedor", field: "PROVEEDOR_RAZON_SOCIAL" },
    { title: "Centro de Costos", field: "CENTRO_COSTO" },
    {
      title: "Acciones",
      render: (rowData) => {
        return (
          <Stack direction="row">
            <Tooltip title="Ver Activo">
              <IconButton
                color="primary"
                aria-label="upload picture"
                component="span"
                onClick={(e) => handleSee(rowData.ID_ACTIVO)}
              >
                <VisibilityIcon />
              </IconButton>
            </Tooltip>
  
            <Tooltip title="Editar Activo">
              <IconButton
                color="primary"
                aria-label="upload picture"
                component="span"
                onClick={(e) => handleEdit(rowData.ID_ACTIVO)}
              >
                <Edit />
              </IconButton>
            </Tooltip>
  
            <Tooltip title="Eliminar Activo">
              <IconButton
                color="primary"
                aria-label="upload picture"
                component="span"
                onClick={(e) => handleDelete(rowData.ID_ACTIVO)}
              >
                <Delete />
              </IconButton>
            </Tooltip>
          </Stack>
        );
      },
    },
  ];
   */