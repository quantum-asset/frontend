export const openBackDropAction = (dispatchBackdrop, mensajeBD) => {
  const action = {
    type: "OPEN_BACKDROP",
    mensajeBD: mensajeBD,
  };
  dispatchBackdrop(action);
};
export const closeBackDropAction = (dispatchBackdrop) => {
  const action = {
    type: "CLOSE_BACKDROP",
    mensajeBD: "",
  };
  dispatchBackdrop(action);
};
