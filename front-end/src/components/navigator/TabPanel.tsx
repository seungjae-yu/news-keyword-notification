import Typography from "@material-ui/core/Typography";
import React from "react";

interface TabPanelProps {
    children?: React.ReactNode;
    index: any;
    value: any;
}

export const getPanelInfo = (index: any) => {
    return {
        id: `vertical-tab-${index}`,
        "aria-controls": `vertical-tabpanel-${index}`,
    };
};

export const TabPanel = (props: TabPanelProps) => {
    const { children, value, index, ...other } = props;
    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
            {...other}
        >
            {value === index && <Typography>{children}</Typography>}
        </div>
    );
};
