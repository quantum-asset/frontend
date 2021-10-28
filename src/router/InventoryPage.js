import React, { Fragment, useEffect } from "react";

const InventoryPage = props =>{
    const {setNavBarTitle} = props;
    useEffect(()=>{
      setNavBarTitle?.("Gestión de procesos de inventario");
    },[]);
    return(
        <Fragment>
        
        </Fragment>
    )
}
export default InventoryPage;