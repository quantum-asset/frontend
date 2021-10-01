export const estadoInicial = {
  open: false,
  mensaje: "",
  childComponent: null,
};
const openDialogReducer = (state = estadoInicial, action) => {
  switch (action.type) {
    case "OPEN_DIALOG":
      return {
        ...state,
        openMensaje: true,
        mensaje: action.openMensaje.mensaje,
        postClose: action.openMensaje.postClose,
        childComponent: action.openMensaje.childComponent,
      };
    case "CLOSE_DIALOG":
      return {
        ...state,
        openMensaje: false,
        mensaje: "",
        postClose: undefined,
        childComponent: null,
      };
    default:
      return state;
  }
};
export default openDialogReducer;
