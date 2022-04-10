import React, { useState } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import SearchIcon from "@material-ui/icons/Search";
import { FilterList } from "@material-ui/icons";
import DialogComponent from "../../common/dialog/DialogComponent";
import KeywordSettingContainer from "../../container/keyword/KeywordContainer";
import AppBarComponent from "./AppBarComponent";
import NotificationSettingContainer from "../../container/setting/NotificationSettingContainer";
import SearchSettingContainer from "../../container/setting/SearchSettingContainer";

const MenuBarComponent = () => {
    const [keywordOpen, setKeywordOpen] = useState<boolean>(false);
    const [alertSettingOpen, setAlertSettingOpen] = useState<boolean>(false);
    const [searchSettingOpen, setSearchSettingOpen] = useState<boolean>(false);

    const onClickSetKeyword = () => {
        setKeywordOpen(true);
    };

    const onClickSetAlertSetting = () => {
        setAlertSettingOpen(true);
    };

    const onClickSetSearchSetting = () => {
        setSearchSettingOpen(true);
    };

    return (
        <div style={{ height: "8vh" }}>
            <AppBarComponent
                onClickSetKeyword={onClickSetKeyword}
                onClickSetAlertSetting={onClickSetAlertSetting}
                onClickSetSearchSetting={onClickSetSearchSetting}
            />
            <DialogComponent
                title={"Keyword Setting"}
                open={keywordOpen}
                children={<KeywordSettingContainer />}
                onClickConfirm={() => setKeywordOpen(false)}
                onClose={() => setKeywordOpen(false)}
            />
            <DialogComponent
                title={"알림 설정"}
                open={alertSettingOpen}
                children={<NotificationSettingContainer />}
                onClickConfirm={() => setAlertSettingOpen(false)}
                onClose={() => setAlertSettingOpen(false)}
            />
            <DialogComponent
                title={"검색설정"}
                open={searchSettingOpen}
                children={<SearchSettingContainer />}
                onClickConfirm={() => setSearchSettingOpen(false)}
                onClose={() => setSearchSettingOpen(false)}
            />
        </div>
    );
};

export default MenuBarComponent;
