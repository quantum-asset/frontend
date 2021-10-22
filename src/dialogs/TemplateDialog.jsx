import React, { useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import SaveIcon from "@mui/icons-material/Save";
const TemplateDialog = (props) => {
  const { open, onClose, title, onCancel, onAccept, children, body } = props;

  const [changes, setChanges] = useState([]);
  const handleClose = () => {
    onClose?.(false);
  };
  const handleAccept = () => {
    onAccept?.();
    handleClose();
  };
  const handleCancel = () => {
    onCancel?.();
    handleClose();
  };
  const descriptionElementRef = React.useRef(null);
  React.useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);

  return (
    <Dialog
      fullWidth={true}
      maxWidth={"md"}
      open={open}
      onClose={handleClose}
      scroll={"paper"}
      aria-labelledby="scroll-dialog-title"
      aria-describedby="scroll-dialog-description"
    >
      <DialogTitle id="scroll-dialog-title">{title}</DialogTitle>
      <DialogContent dividers={true}>
        <DialogContentText
          id="scroll-dialog-description"
          ref={descriptionElementRef}
          tabIndex={-1}
        >
          {children || body}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        {onAccept || onCancel ? (
          <>
            <Button onClick={handleCancel}>Cancelar</Button>
            <Button
              startIcon={<SaveIcon />}
              variant={"contained"}
              onClick={handleAccept}
            >
              Guardar
            </Button>
          </>
        ) : (
          <Button
            //startIcon={<SaveIcon />}
            variant={"contained"}
            onClick={handleClose}
          >
            Aceptar
          </Button>
        )}
      </DialogActions>
    </Dialog>
  );
};
export default TemplateDialog;
