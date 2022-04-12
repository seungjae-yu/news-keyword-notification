import React from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Button from "@material-ui/core/Button";
import { Divider } from "@material-ui/core";
import ToolTipComponent from "../presentational/ToolTipComponent";

interface Props {
    open: boolean;
    onClickConfirm: () => void;
    onClose: () => void;
    title: string;
    children: React.ReactNode;
    contentAlign?: "center" | "left" | "right";
    size?: "xs" | "sm" | "md" | "lg" | "xl";
    contentHeight?: string;
}

const DialogComponent = ({
    open,
    onClickConfirm,
    onClose,
    title,
    children,
    contentAlign,
    size,
    contentHeight,
}: Props) => {
    return (
        <div>
            <Dialog
                open={open}
                onClose={onClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
                fullWidth
                maxWidth={size || "md"}
            >
                <DialogTitle
                    id="dialog-title"
                    style={{
                        background: "white",
                        // "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
                        color: "black",
                    }}
                >
                    {title}
                </DialogTitle>
                <Divider />
                <DialogContent
                    style={{
                        margin: "10px",
                        display: "flex",
                        minHeight: (contentHeight = contentHeight),
                        justifyContent:
                            contentAlign !== undefined
                                ? contentAlign
                                : "center",
                    }}
                >
                    {children}
                </DialogContent>
                {/* <DialogContentText></DialogContentText> */}
                <DialogActions>
                    <ToolTipComponent
                        title="재접속시 정보가 유지됩니다."
                        placement="bottom"
                    >
                        <Button
                            onClick={onClickConfirm}
                            variant={"contained"}
                            style={{ background: "#FE6B8B", color: "white" }}
                            autoFocus
                        >
                            저장
                        </Button>
                    </ToolTipComponent>
                </DialogActions>
            </Dialog>
        </div>
    );
};

export default DialogComponent;
