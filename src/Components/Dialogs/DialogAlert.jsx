import React from "react";
import ScrollDialog from "../../Templates/Dialogs/ScrollDialog";

const DialogAlert = ({open, message, onContinue, onDiscard }) => {
  return (
    <ScrollDialog
      title="Inicio de sesión incorrecto :("
      {...{open, onContinue, onDiscard }}
    >
      <p>{message}</p>
    </ScrollDialog>
  );
};
export default DialogAlert;
