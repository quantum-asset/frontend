import axios from "axios";
import React, { useEffect } from "react";

const AssetDetail = props =>{
    const initFOTO = async()=>{
        const reponse = await axios.get("http://localhost:8000/foto/id");
    }
    useEffect(()=>{
        initFOTO();
    },[]);
    return(
        <div>
        Aqui es el detalle WEY
        </div>
    )
}
export default AssetDetail;