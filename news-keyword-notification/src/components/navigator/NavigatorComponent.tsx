import React from "react";
import { makeStyles, Theme } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { TabPanel, getPanelInfo } from "./TabPanel";
import { useSelector } from "react-redux";
import { RootState } from "../../modules";
import { Button } from "@material-ui/core";
import { NaverApi } from "../../utils/naverApi/NaverApis";

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
        display: "flex",
        height: "90vh",
    },
    tabs: {
        borderRight: `1px solid ${theme.palette.divider}`,
    },
}));

const NavigatorComponent = () => {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);
    const { keywordItems } = useSelector(
        (state: RootState) => state.keywordReducer
    );

    const getKeywordGroups = () => {
        return [...new Set(keywordItems.map((m) => m.keywordGroup))];
    };

    const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
        setValue(newValue);
    };

    return (
        <div className={classes.root}>
            <Tabs
                orientation="vertical"
                variant="scrollable"
                value={value}
                onChange={handleChange}
                className={classes.tabs}
            >
                <Tab label="전체보기" {...getPanelInfo(0)} />
                {getKeywordGroups().map((m, index) => (
                    <Tab label={m} {...getPanelInfo(index)} />
                ))}
            </Tabs>
            <TabPanel value={value} index={0}>
                <Button
                    onClick={async () =>
                        await NaverApi.getNewsInfo({ query: "손흥민" })
                    }
                >
                    검색
                </Button>
            </TabPanel>
            <TabPanel value={value} index={1}>
                Item Two
            </TabPanel>
            <TabPanel value={value} index={2}>
                Item Three
            </TabPanel>
            <TabPanel value={value} index={3}>
                Item Four
            </TabPanel>
        </div>
    );
};

export default NavigatorComponent;
