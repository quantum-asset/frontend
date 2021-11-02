import { localLogOut, localLogin, getUser } from "../Sesion";
import { closeBackDropAction, openBackDropAction } from "./backDropAction";
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
      usuario: usuario,
      auth: true,
    });
    console.log("iniciarSesionRedux localLogin");
   await localLogin(usuario);
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
export const cerrarSesionRedux = (dispatch
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

    return  true ;
  } catch (error) {
    console.log("error login: ", error);
    return  false;
  }
};
/**
 *
 * @param {*} dispatch
 * @param {*} usuario
 */
export const inicializarSesion = (dispatch, usuario) => {
  console.log("Inicializando...");
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

      return {
        status: true,
        data: usuarioLogueado,
        HOMEPAGE: "/" + usuarioLogueado.rol.nombre.toLowerCase(),
      };
    }
    //console.log("Storage vacio", usuarioLogueado);

    dispatch({
      type: "INITIALIZE_SESION",
      usuario: usuario,
      auth: false,
      // },
    });
    return { status: false, data: "storage vacio" };
  } catch (error) {
    return { status: false, data: "MALDICIOOOOOOOON" };
  }
};
