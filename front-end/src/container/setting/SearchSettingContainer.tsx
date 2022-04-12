import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { NaverSearchParam } from "../../@types/naverApi-info";
import SearchSetting from "../../components/setting/SearchSetting";
import { ChangeDataAction } from "../../modules/searchParam";

const SearchSettingContainer = () => {
    const dispatch = useDispatch();

    const onChangeSetting = (data: NaverSearchParam) => {
        dispatch(ChangeDataAction(data));
    };

    return <SearchSetting onChangeSetting={onChangeSetting} />;
};

export default SearchSettingContainer;
