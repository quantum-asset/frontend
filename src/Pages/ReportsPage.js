import React from "react";
import { useUserValue } from "../context/Sesion";

const ReportsPage = props =>{
    const [{auth}, ]=useUserValue();
    if(!auth){
      props.history.push("/");
  
    }
    return(
        <div>
        ReportsPage
        </div>
    )
}
export default ReportsPage;