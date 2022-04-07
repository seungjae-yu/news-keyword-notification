import React, { useState } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import {
    createStyles,
    alpha,
    Theme,
    makeStyles,
} from "@material-ui/core/styles";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import { FilterList } from "@material-ui/icons";
import DialogComponent from "../../common/dialog/DialogComponent";
import KeywordContainer from "../../container/keyword/KeywordContainer";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
        },
        menuButton: {
            marginRight: theme.spacing(2),
        },
        title: {
            flexGrow: 1,
            display: "none",
            [theme.breakpoints.up("sm")]: {
                display: "block",
            },
        },
        search: {
            position: "relative",
            borderRadius: theme.shape.borderRadius,
            backgroundColor: alpha(theme.palette.common.white, 0.15),
            "&:hover": {
                backgroundColor: alpha(theme.palette.common.white, 0.25),
            },
            marginLeft: 0,
            width: "100%",
            [theme.breakpoints.up("sm")]: {
                marginLeft: theme.spacing(1),
                width: "auto",
            },
        },
        searchIcon: {
            padding: theme.spacing(0, 2),
            height: "100%",
            position: "absolute",
            pointerEvents: "none",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
        },
        inputRoot: {
            color: "inherit",
        },
        inputInput: {
            padding: theme.spacing(1, 1, 1, 0),
            // vertical padding + font size from searchIcon
            paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
            transition: theme.transitions.create("width"),
            width: "100%",
            [theme.breakpoints.up("sm")]: {
                width: "12ch",
                "&:focus": {
                    width: "20ch",
                },
            },
        },
    })
);

const MenuBarComponent = () => {
    const classes = useStyles();
    const [keywordOpen, setKeywordOpen] = useState<boolean>(false);

    const onClickSetKeyword = () => {
        setKeywordOpen(true);
    };

    return (
        <div className={classes.root}>
            <AppBar position="static" style={{ background: "#2b6777" }}>
                <Toolbar>
                    {/* <IconButton
                        edge="start"
                        className={classes.menuButton}
                        color="inherit"
                        aria-label="open drawer"
                    >
                        <MenuIcon />
                    </IconButton> */}
                    <Typography className={classes.title} variant="h6" noWrap>
                        News Keyword Notification
                    </Typography>
                    <IconButton onClick={onClickSetKeyword}>
                        <FilterList fontSize={"large"} />
                    </IconButton>
                    <div className={classes.search}>
                        <div className={classes.searchIcon}>
                            <SearchIcon />
                        </div>
                        <InputBase
                            placeholder="Search…"
                            classes={{
                                root: classes.inputRoot,
                                input: classes.inputInput,
                            }}
                            inputProps={{ "aria-label": "search" }}
                            onKeyUp={(e) => {
                                if (e.key === "Enter") {
                                    alert(e.currentTarget.value);
                                }
                            }}
                        />
                    </div>
                </Toolbar>
            </AppBar>
            {
                <DialogComponent
                    open={keywordOpen}
                    children={<KeywordContainer />}
                    onClose={() => setKeywordOpen(false)}
                    title={"키워드 설정할래?"}
                />
            }
        </div>
    );
};

export default MenuBarComponent;
