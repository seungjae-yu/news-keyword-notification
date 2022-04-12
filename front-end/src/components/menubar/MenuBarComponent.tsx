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
import { localStorageApi } from "../../utils/dataUtils/localStorageApi";
import { saveStorageType } from "../../@types/data-type";

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

    const onClickConfirm = (key: saveStorageType) => {
        const result = window.confirm("정보를 저장하시겠습니까?");
        if (!result) return result;

        localStorageApi.save(key, "");
        return result;
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
                contentHeight="500px"
                children={<KeywordSettingContainer />}
                onClickConfirm={() =>
                    onClickConfirm("keyword") && setKeywordOpen(false)
                }
                onClose={() => setKeywordOpen(false)}
            />
            <DialogComponent
                title={"알림 설정"}
                contentAlign={"left"}
                size={"xs"}
                //contentHeight="200px"
                open={alertSettingOpen}
                children={<NotificationSettingContainer />}
                onClickConfirm={() =>
                    onClickConfirm("notification") && setAlertSettingOpen(false)
                }
                onClose={() => setAlertSettingOpen(false)}
            />
            <DialogComponent
                title={"검색설정"}
                contentAlign={"left"}
                size={"xs"}
                //contentHeight="200px"
                open={searchSettingOpen}
                children={<SearchSettingContainer />}
                onClickConfirm={() =>
                    onClickConfirm("search") && setSearchSettingOpen(false)
                }
                onClose={() => setSearchSettingOpen(false)}
            />
        </div>
    );
};

export default MenuBarComponent;
