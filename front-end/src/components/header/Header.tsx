import React, { useState } from "react";
import DialogComponent from "../../common/dialog/DialogComponent";
import KeywordSettingContainer from "../../container/keyword/KeywordContainer";
import HeaderComponent from "./HeaderComponent";
import NotificationSettingContainer from "../../container/setting/NotificationSettingContainer";
import SearchSettingContainer from "../../container/setting/SearchSettingContainer";
import { localStorageApi } from "../../utils/dataUtils/localStorageApi";
import { saveStorageType } from "../../@types/data-type";
import { useSelector } from "react-redux";
import { RootState } from "../../modules";
import { useCallback } from "react";

const headerStyle = {
    height: "8vh",
};

const Header = () => {
    const [keywordOpen, setKeywordOpen] = useState<boolean>(false);
    const [alertSettingOpen, setAlertSettingOpen] = useState<boolean>(false);
    const [searchSettingOpen, setSearchSettingOpen] = useState<boolean>(false);

    const { keywordItems } = useSelector(
        (state: RootState) => state.keywordReducer
    );
    const { searchParam } = useSelector(
        (state: RootState) => state.searchParamReducer
    );

    const onClickSetKeyword = useCallback(() => {
        setKeywordOpen(true);
    }, []);

    const onClickSetAlertSetting = useCallback(() => {
        setAlertSettingOpen(true);
    }, []);

    const onClickSetSearchSetting = useCallback(() => {
        setSearchSettingOpen(true);
    }, []);

    const getValueItem = useCallback(
        (key: saveStorageType) => {
            switch (key) {
                case "keyword":
                    return keywordItems;
                case "notification":
                    return "";
                case "searchParams":
                    return searchParam;
            }
        },
        [keywordItems, searchParam]
    );

    const onClickConfirm = useCallback(
        (key: saveStorageType) => {
            const result = window.confirm("정보를 저장하시겠습니까?");
            if (!result) return result;

            localStorageApi.save(key, getValueItem(key));
            return result;
        },
        [getValueItem]
    );

    return (
        <header style={headerStyle}>
            <HeaderComponent
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
                open={searchSettingOpen}
                children={<SearchSettingContainer />}
                onClickConfirm={() =>
                    onClickConfirm("searchParams") &&
                    setSearchSettingOpen(false)
                }
                onClose={() => setSearchSettingOpen(false)}
            />
        </header>
    );
};

export default React.memo(Header);
