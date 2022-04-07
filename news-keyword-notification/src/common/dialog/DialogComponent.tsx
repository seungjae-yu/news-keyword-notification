import React from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Button from "@material-ui/core/Button";

interface Props {
    open: boolean;
    onClose: () => void;
    title: string;
    children: React.ReactNode;
}

const DialogComponent = ({ open, onClose, title, children }: Props) => {
    return (
        <div>
            <Dialog
                open={open}
                onClose={onClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="dialog-title">{title}</DialogTitle>
                <DialogContent>{children}</DialogContent>
                <DialogContentText></DialogContentText>
                <DialogActions>
                    <Button>완료</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
};

export default DialogComponent;
