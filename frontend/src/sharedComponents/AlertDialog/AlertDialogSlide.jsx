import { useState, forwardRef } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const AlertDialogSlide = () => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      {/* Button to trigger the alert dialog */}
      {/* When clicked, it opens the dialog with a slide transition */}
      <Button variant="outlined" onClick={handleClickOpen}>
        Slide in alert dialog
      </Button>
      {/* Dialog component with a slide transition */}
      {/* It displays a title, content, and actions (buttons) */}
      {/* The dialog is controlled by the 'open' state and 'handleClose' function */}
      <Dialog
        open={open}
        slots={{
          transition: Transition,
        }}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{"You poked a pic!"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            Hey! You poked me! Bet you were trying to open me right?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>That's Rad!</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default AlertDialogSlide;
