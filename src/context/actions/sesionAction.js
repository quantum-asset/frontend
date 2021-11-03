import { localLogOut, localLogin, getUser } from "../Sesion";
import { closeBackDropAction, openBackDropAction } from "./backDropAction";
export const getPathFromRol = (denominacion) => {
  console.log("rol =P", denominacion);
  if (!denominacion) return null;
  if (denominacion.toLowerCase().includes("control")) {
    return "/encargado-control-activos";
  } else if (denominacion.toLowerCase().includes("inventario")) {
    return "/encargado-toma-inventario";
  }
  if (denominacion.toLowerCase().includes("registro")) {
    return "/encargado-registro-activos";
  }
};
/**
 *
 * @param {*} dispatch
 * @param {*} usuario
 * @param {*} password
 */
export const iniciarSesionContext = async (dispatch, usuario) => {
  try {
    dispatch({
      type: "LOG_IN",
      usuario: { ...usuario, rol: usuario.rol[0] },
      auth: true,
    });
    console.log("iniciarSesionRedux localLogin", {
      ...usuario,
      rol: usuario.rol[0],
    });
    await localLogin({ ...usuario, rol: usuario.rol[0] });
    return usuario;
  } catch (error) {
    return undefined;
  }
};
/**
 *
 * @param {dispatchAciton} dispatch
 * @param {any} newUser
 */
export const registrarse = (dispatch, newUser) => {
  return new Promise((resolve, reject) => {
    try {
      //llamo al back aqui
      //let new User = await POST({servicio:"/api/registrarse",request:usuario});
      dispatch({
        type: "LOG_IN",
        usuario: newUser,
        auth: true,
      });
      localLogin(newUser);
      resolve({ status: true });
    } catch (error) {
      reject();
    }
  });
};
/**
 *
 * @param {*} dispatch
 */
export const cerrarSesionRedux = (
  dispatch
  //, dispatchBackdrop
) => {
  console.log("Logout llamado");

  try {
    localLogOut();
    /* openBackDropAction(dispatchBackdrop, {
      mensajeBD: "Cerrando Sesion, por favor espere",
    });
    //await fakeLogOut();

    closeBackDropAction(dispatchBackdrop, {});
 */
    dispatch({
      type: "FINISH_SESION",
      usuario: {},
      auth: false,
    });

    return true;
  } catch (error) {
    console.log("error login: ", error);
    return false;
  }
};
/**
 *
 * @param {*} dispatch
 * @param {*} usuario
 */
export const inicializarSesion = (dispatch, usuario) => {
  console.log("Inicializando...", dispatch);
  try {
    //chequeo al el storage
    let usuarioLogueado = getUser();
    console.log("Revisando Storage", usuarioLogueado);
    if (usuarioLogueado) {
      console.log("Storage Data inicial", usuarioLogueado);
      dispatch({
        type: "LOG_IN",
        usuario: usuarioLogueado,
        auth: true,
      });
      console.log("=>", usuarioLogueado.rol.DENOMINACION);
      return {
        status: true,
        data: usuarioLogueado,
        //HOMEPAGE: "/" + usuarioLogueado.rol.DENOMINACION.toLowerCase(),
        HOMEPAGE: "/" + getPathFromRol(usuarioLogueado.rol.DENOMINACION),
      };
    } else {
      dispatch({
        type: "INITIALIZE_SESION",
        usuario: undefined,
        auth: false,
        // },
      });
    }
    //console.log("Storage vacio", usuarioLogueado);

    return { status: false, data: "storage vacio" };
  } catch (error) {
    console.log("error", error);
    return { status: false, data: "MALDICIOOOOOOOON" };
  }
};
