import React from "react";
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
import SearchIcon from "@material-ui/icons/Search";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTag } from "@fortawesome/free-solid-svg-icons";
import { faBell } from "@fortawesome/free-solid-svg-icons";
import { faGear } from "@fortawesome/free-solid-svg-icons";
import ToolTipComponent from "../../common/presentational/ToolTipComponent";
import { NaverApi } from "../../utils/naverApi/NaverApis";
import { RootState } from "../../modules";
import { useSelector, useDispatch } from "react-redux";
import { LoadDataAction } from "../../modules/news";
import { NewsData } from "../../@types/news-data-type";

interface Props {
    onClickSetKeyword: () => void;
    onClickSetAlertSetting: () => void;
    onClickSetSearchSetting: () => void;
}

const AppBarComponent = ({
    onClickSetKeyword,
    onClickSetAlertSetting,
    onClickSetSearchSetting,
}: Props) => {
    const classes = useStyles();

    const { newsItems } = useSelector((state: RootState) => state.newsReducer);
    const dispatch = useDispatch();

    return (
        <div className={classes.root}>
            <AppBar className={classes.appBar}>
                <Toolbar>
                    <Typography className={classes.title} variant="h6" noWrap>
                        News Keyword Notification
                    </Typography>
                    <div className={classes.search}>
                        <div className={classes.searchIcon}>
                            <SearchIcon />
                        </div>
                        <InputBase
                            placeholder="Search..."
                            classes={{
                                root: classes.inputRoot,
                                input: classes.inputInput,
                            }}
                            inputProps={{ "aria-label": "search" }}
                            onKeyUp={async (e) => {
                                if (e.key === "Enter") {
                                    const newsInfo = await NaverApi.getNewsInfo(
                                        {
                                            query: e.currentTarget.value,
                                        }
                                    );
                                    console.log(JSON.stringify(newsInfo.data));
                                    const newsJson: NewsData = JSON.parse(
                                        JSON.stringify(newsInfo.data)
                                    );
                                    dispatch(LoadDataAction([newsJson]));
                                }
                            }}
                        />
                        <ToolTipComponent
                            title="키워드 설정"
                            placement="bottom"
                        >
                            <IconButton onClick={onClickSetKeyword}>
                                <FontAwesomeIcon icon={faTag} />
                            </IconButton>
                        </ToolTipComponent>
                    </div>

                    <ToolTipComponent title="알림 설정" placement="bottom">
                        <IconButton
                            onClick={onClickSetAlertSetting}
                            style={{ paddingLeft: "20px" }}
                        >
                            <FontAwesomeIcon icon={faBell} />
                        </IconButton>
                    </ToolTipComponent>

                    <ToolTipComponent title="검색 설정" placement="bottom">
                        <IconButton
                            onClick={onClickSetSearchSetting}
                            style={{ paddingLeft: "20px" }}
                        >
                            <FontAwesomeIcon icon={faGear} />
                        </IconButton>
                    </ToolTipComponent>
                </Toolbar>
            </AppBar>
        </div>
    );
};

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
        },
        appBar: {
            position: "static",
            background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
        },
        title: {
            flexGrow: 1,
            display: "flex",
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
                width: "50ch",
                "&:focus": {
                    width: "80ch",
                },
            },
        },
    })
);

export default AppBarComponent;
