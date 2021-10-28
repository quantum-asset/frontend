import React, { Fragment, useEffect } from "react";


const ReportsPage = props =>{
    const {setNavBarTitle} = props;
    useEffect(()=>{
      setNavBarTitle?.("Gestión de reportes");
    },[]);
    return(
        <Fragment>
        REPORTESSS
        </Fragment>
    )
}
export default ReportsPage;