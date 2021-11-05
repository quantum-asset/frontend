import React from "react";
import ScrollDialog from "../../Templates/Dialogs/ScrollDialog";

const MessageDialog = ({ message }) => {
  return (
    <ScrollDialog title="Inicio de sesión incorrecto :(" open>
      <p>{message}</p>
    </ScrollDialog>
  );
};
export default MessageDialog;
