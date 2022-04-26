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
import { RootState } from "../../modules";
import { useSelector, useDispatch } from "react-redux";
import { APIDataRequestAction, RemoveDataAction } from "../../modules/news";
import { useCallback } from "react";
import _ from "lodash";
import { useMemo } from "react";

interface Props {
    onClickSetKeyword: () => void;
    onClickSetAlertSetting: () => void;
    onClickSetSearchSetting: () => void;
}

const IconPadding = {
    paddingLeft: "20px",
};

const HeaderComponent = ({
    onClickSetKeyword,
    onClickSetAlertSetting,
    onClickSetSearchSetting,
}: Props) => {
    const classes = useStyles();

    const { searchParam } = useSelector(
        (state: RootState) => state.searchParamReducer
    );
    const { keywordItems } = useSelector(
        (state: RootState) => state.keywordReducer
    );
    const dispatch = useDispatch();

    const onClickSearchEnter = useCallback(
        (e: React.KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>) => {
            dispatch(RemoveDataAction());
            if (e.currentTarget.value === "") {
                keywordItems.forEach((keywords) => {
                    dispatch(
                        APIDataRequestAction(
                            {
                                ...searchParam,
                                query: keywords.keyword,
                            },
                            keywords
                        )
                    );
                });
            } else {
                dispatch(
                    APIDataRequestAction({
                        ...searchParam,
                        query: e.currentTarget.value,
                    })
                );
            }
        },
        [dispatch, keywordItems, searchParam]
    );

    const searchQuery = useMemo(
        () =>
            _.debounce((query: string) => {
                if (query) {
                    dispatch(RemoveDataAction());
                    dispatch(
                        APIDataRequestAction({
                            ...searchParam,
                            query: query,
                        })
                    );
                }
            }, 300),
        [searchParam, dispatch]
    );

    const onChangeSearchText = useCallback(
        (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
            searchQuery(event.currentTarget.value);
        },
        [searchQuery]
    );

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
                                    onClickSearchEnter(e);
                                }
                            }}
                            onChange={onChangeSearchText}
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
                            style={IconPadding}
                        >
                            <FontAwesomeIcon icon={faBell} />
                        </IconButton>
                    </ToolTipComponent>

                    <ToolTipComponent title="검색 설정" placement="bottom">
                        <IconButton
                            onClick={onClickSetSearchSetting}
                            style={IconPadding}
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

export default React.memo(HeaderComponent);
