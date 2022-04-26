import React from "react";
import { Tooltip } from "@material-ui/core";

interface Props {
    title: string;
    children: any;
    placement?:
        | "bottom-end"
        | "bottom-start"
        | "bottom"
        | "left-end"
        | "left-start"
        | "left"
        | "right-end"
        | "right-start"
        | "right"
        | "top-end"
        | "top-start"
        | "top";
}

const ToolTipComponent = ({ title, children, placement }: Props) => {
    return (
        <Tooltip title={title} placement={placement} arrow>
            {children}
        </Tooltip>
    );
};

export default React.memo(ToolTipComponent);
