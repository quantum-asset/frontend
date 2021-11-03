import React, { useEffect } from "react";
import { getPathFromRol } from "../Context/actions/sesionAction";
import { useUserValue } from "../Context/Sesion";

const Redirector = props =>{
    const [{ auth, usuario }, dispatch] = useUserValue();
  const redirect=()=>{
      props.history.push("/"+getPathFromRol(usuario.rol.DENOMINACION));
  }
    useEffect(()=>{
  if(!auth){
        props.history.push("/");
    }else{
        console.log("lala",getPathFromRol(usuario.rol.DENOMINACION));
        redirect();
    }
    },[]);
    return(
        <div>
        redireccionando....
        </div>
    )
}
export default Redirector;