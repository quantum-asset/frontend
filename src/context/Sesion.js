import React, { createContext, useContext, useReducer } from "react";

export const UserContext = createContext();

export const UserProvider = ({ reducer, initialState, children }) => (
  <UserContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </UserContext.Provider>
);
export const useUserValue = () => useContext(UserContext);

export const localLogin = (usuario) => {
  //Id
  console.log("localLogin guardando: ", usuario);
  sessionStorage.clear();
  sessionStorage.Sesion = JSON.stringify(usuario);
  console.log("localLogin se guardo: ", sessionStorage.Sesion);

  
  
  localStorage.setItem("userId", usuario.id);
  localStorage.setItem("userCi", usuario.ci);
  localStorage.setItem("userRol", usuario.rol);
  if (usuario?.entidadPrimaria!==null) localStorage.setItem("epId", usuario.entidadPrimaria.id);


  console.log("localLogin se guardo localStorage: ", sessionStorage);

  
};

export const localLogOut = () => {
  sessionStorage.clear();
  //window.location.replace("./");
};
export const localInitLogUser = localLogOut;

export const getUser = () => {
  let retrievedObject = sessionStorage.Sesion;
  console.log("Consultando el Storage", retrievedObject);
  if (!retrievedObject) return retrievedObject;
  let retrievedJson = JSON.parse(retrievedObject);
  return retrievedJson;
};
export const getAuth = () => {
  if (!sessionStorage.Sesion) return false;
  return true;
};
export const getRol = () => {
  if (!sessionStorage.Sesion) return undefined;
  return JSON.parse( sessionStorage.Sesion ).rol.name;
};
/**
 * Revisa ellocalstorage, generalmente en los refresh de pagina
 * @returns El usuario, si había, en el local storage
 */
export const reinitialize = () => {
  let retrievedObject = sessionStorage.Sesion;
  if (!retrievedObject) return retrievedObject;
  let retrievedJson = JSON.parse(retrievedObject);
  return retrievedJson;
};
