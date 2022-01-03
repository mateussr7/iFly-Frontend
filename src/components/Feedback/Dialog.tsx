import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import { DialogActions, DialogContent } from "@material-ui/core";

export interface SimpleDialogProps {
  open: boolean;
  message: string;
  type: "delete" | "edit";
  callback: (value: boolean, type: "delete" | "edit") => void;
}

const SimpleDialog = ({ open, message, type, callback }: SimpleDialogProps) => {
  function handleClick(value: boolean) {
    callback(value, type);
  }
  return (
    <Dialog aria-labelledby="simple-dialog-title" open={open}>
      <DialogContent>{message}</DialogContent>
      <DialogActions>
        <Button style={{ color: "#757575" }} onClick={() => handleClick(false)}>
          RETORNAR
        </Button>
        {type === "delete" && (
          <Button style={{ color: "red" }} onClick={() => handleClick(true)}>
            EXCLUIR
          </Button>
        )}
        {type === "edit" && (
          <Button
            style={{ color: "#3F51B5" }}
            onClick={() => {
              handleClick(true);
            }}
          >
            Confirmar
          </Button>
        )}
      </DialogActions>
    </Dialog>
  );
};

export default SimpleDialog;
