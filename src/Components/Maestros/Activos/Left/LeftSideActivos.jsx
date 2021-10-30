import React, { Fragment, useEffect, useState } from "react";
import PanelActivos from "./PanelActivos";
import TablaActivos from "./TablaActivos";

const LeftSideActivos = (props) => {
  const [rowsFiltrado,setRowsFiltrado]=useState([]);
  const [rowsServer,setRowsServer]=useState([]);
  const getActivos= async()=>{
//const response = await
  }
  useEffect(()=>{
getActivos();
  },[]);
  return (
    <Fragment>
      <PanelActivos />

      <TablaActivos />
    </Fragment>
  );
};
export default LeftSideActivos;
