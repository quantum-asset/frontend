import React, { Fragment, useEffect, useState } from "react";
import LeftSideInventario from "../Components/Inventario/Left/LeftSideInventario";
import RightSideInventario from "../Components/Inventario/Right/RightSideInventario";
import "../Pages/Inventario.scss";
import Title from "../Components/Title/Title";
import { TomaInventarioController } from "../Controller/TomaInventarioController";
const InventoryPage = (props) => {
  const { setNavBarTitle } = props;
  const [tomasInventario, setTomasInventario] = useState([]);
  const init = async () => {
    const {success,data,message} = await TomaInventarioController.list();
    if(success){
      //alert("OK: " + message);
      setTomasInventario(data);
    }else{
      alert("Error: "+message);
    }
    
    
  };
  useEffect(() => {
    setNavBarTitle?.("Gestión de procesos de inventario");
    init();
  }, []);

  //mostrra detalle de la toma de inventario
  const handleDetalle = () => {
    alert("detalleeeeeee toma inv..");
  };
  return (
    <Fragment>
      <Title title="Procesos de toma de inventario" />

      <div className="quantum-page-inventario">
        <div className="left-side">
          <LeftSideInventario
            tomasInventario={tomasInventario}
            handleDetalle={handleDetalle}
          />
        </div>
        <div className="right-side">
          <RightSideInventario tomasInventario={tomasInventario} />
        </div>
      </div>
    </Fragment>
  );
};
export default InventoryPage;
