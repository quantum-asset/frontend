import React, { Fragment } from "react";
import TablaTpoActivos from "./TablaTpoActivos";
import ChartActivos from "./ChartActivos";

const RightSideActivos = props =>{
    return(
        <Fragment>
        <TablaTpoActivos/>
        <ChartActivos/>
        </Fragment>
    )
}
export default RightSideActivos;