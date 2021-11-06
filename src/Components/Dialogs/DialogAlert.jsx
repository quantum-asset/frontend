import React from "react";
import ScrollDialog from "../../Templates/Dialogs/ScrollDialog";

const DialogAlert = ({title, open, message, onContinue, onDiscard,onAccept }) => {
  return (
    <ScrollDialog
      title={title || "Inicio de sesión incorrecto :("}
      {...{open, onContinue, onDiscard,onAccept }}
    >
      <p>{message}</p>
    </ScrollDialog>
  );
};
export default DialogAlert;
