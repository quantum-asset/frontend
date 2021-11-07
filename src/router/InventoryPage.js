import React, { Fragment, useEffect } from "react";
import LeftSideInventario from "../Components/Inventario/Left/LeftSideInventario";
import RightSideInventario from "../Components/Inventario/Right/RightSideInventario";
import "../Pages/Inventario.scss";
const InventoryPage = (props) => {
  const { setNavBarTitle } = props;
  const init=()=>{
    
  }
  useEffect(() => {
    setNavBarTitle?.("Gestión de procesos de inventario");
    init();
  }, []);
  return (
    <div className="quantum-page-inventario">
      
      <div className="left-side">
        <LeftSideInventario />
      </div>
      <div className="right-side">
        <RightSideInventario />
      </div>
    </div>
  );
};
export default InventoryPage;
