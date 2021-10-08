import React from "react";
import { useUserValue } from "../context/Sesion";

const InventoryPage = props =>{
    const [{auth}, ]=useUserValue();
    if(!auth){
      props.history.push("/");
  
    }
    return(
        <div>
        InventoryPage
        </div>
    )
}
export default InventoryPage;