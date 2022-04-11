import React, { useState } from "react";
import { makeStyles, Theme } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { TabPanel, getPanelInfo } from "./TabPanel";
import { useSelector } from "react-redux";
import { RootState } from "../../modules";
import { Button, Typography } from "@material-ui/core";
import { NaverApi } from "../../utils/naverApi/NaverApis";
import Article from "../article/Article";
import BoardContainer from "../../container/board/BoardContainer";

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
        display: "flex",
        height: "90vh",
    },
    tabs: {
        borderRight: `1px solid ${theme.palette.divider}`,
        overflow: "visible",
    },
}));

const NavigatorComponent = () => {
    const classes = useStyles();
    const [keywordIndex, setKeywordIndex] = useState(0);
    const { keywordItems } = useSelector(
        (state: RootState) => state.keywordReducer
    );

    const { newsItems } = useSelector((state: RootState) => state.newsReducer);

    const getKeywordGroups = () => {
        return [...new Set(keywordItems.map((m) => m.keywordGroup))];
    };

    const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
        setKeywordIndex(newValue);
    };

    return (
        <div className={classes.root}>
            <Tabs
                orientation="vertical"
                variant="scrollable"
                value={keywordIndex}
                onChange={handleChange}
                className={classes.tabs}
            >
                <Tab label="전체보기" {...getPanelInfo(0)} />
                {getKeywordGroups().map((m, index) => (
                    <Tab label={m} {...getPanelInfo(index)} />
                ))}
            </Tabs>

            <BoardContainer
                keywordIndex={keywordIndex}
                keywordGroups={getKeywordGroups()}
            />
        </div>
    );
};

export default NavigatorComponent;
