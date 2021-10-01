export const openMensajePantalla = (dispatchDialog, openMensaje) => {
  const action = {
    type: "OPEN_DIALOG",
    openMensaje: {
      mensaje: openMensaje.mensaje,
      postClose: openMensaje.postClose,
      childComponent: openMensaje.childComponent,
    },
  };
  dispatchDialog(action);
};

export const closeMensajePantalla = (dispatchDialog) => {
  const action = {
    type: "CLOSE_DIALOG",
  };
  dispatchDialog(action);
};
