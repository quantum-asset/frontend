import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
import SaveOutlinedIcon from "@mui/icons-material/SaveOutlined";
import CheckCircleOutlineOutlinedIcon from "@mui/icons-material/CheckCircleOutlineOutlined";

export default function ScrollDialog(props) {
  const { open, onCancel, onSave, onAccept, onClose, title, body, children } =
    props;
  //const [open, setOpen] = React.useState(false);
  //const [data, setData] = React.useState({});
  const handleClose = () => {
    onClose?.(false);
  };
  const handleAccept = (data) => {
    onAccept?.(data);
    handleClose();
  };
  const handleCancel = (data) => {
    onCancel?.(data);
    handleClose();
  };
  const handleSave = (data) => {
    onSave?.(data);
    handleClose();
  };
  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        scroll={"paper"}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
      >
        <DialogTitle id="scroll-dialog-title">{title || ""}</DialogTitle>
        <DialogContent dividers={true}>
          <DialogContentText id="scroll-dialog-description" tabIndex={-1}>
            {body ||
              children ||
              [...new Array(50)]
                .map(
                  () => `Cras mattis consectetur purus sit amet fermentum.
Cras justo odio, dapibus ac facilisis in, egestas eget quam.
Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`
                )
                .join("\n")}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          {onCancel || onSave || onAccept ? (
            <React.Fragment>
              {onCancel && (
                <Button
                  startIcon={<CancelOutlinedIcon />}
                  variant="text"
                  onClick={handleCancel}
                >
                  Cancelar
                </Button>
              )}

              {onSave && (
                <Button
                  startIcon={<SaveOutlinedIcon />}
                  variant="contained"
                  onClick={handleClose}
                >
                  Guardar
                </Button>
              )}
              {onAccept && (
                <Button
                  startIcon={<CheckCircleOutlineOutlinedIcon />}
                  variant="contained"
                  onClick={handleClose}
                >
                  Aceptar
                </Button>
              )}
            </React.Fragment>
          ) : (
            <React.Fragment>
              <Button variant="text" onClick={handleClose}>
                Cancelar
              </Button>
              <Button variant="contained" onClick={handleClose}>
                Aceptar
              </Button>
            </React.Fragment>
          )}
        </DialogActions>
      </Dialog>
    </div>
  );
}
