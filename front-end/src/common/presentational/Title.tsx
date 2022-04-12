import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";

interface Props {
    title: string;
    size: React.ElementType<any>;
    backgroundColor: string;
}

const Title = ({ title, size, backgroundColor }: Props) => {
    return (
        <div style={{ marginBottom: "10px" }}>
            <AppBar position="relative" style={{ background: backgroundColor }}>
                <Toolbar>
                    <Typography component={size} variant="h4">
                        {title}
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
    );
};

export default Title;
