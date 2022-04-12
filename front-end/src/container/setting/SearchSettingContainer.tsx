import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NaverSearchParam } from "../../@types/naverApi-info";
import SearchSetting from "../../components/setting/SearchSetting";
import {
    ChangeDataAction,
    searchParamItem,
    LoadDataAction,
} from "../../modules/searchParam";
import { localStorageApi } from "../../utils/dataUtils/localStorageApi";
import { RootState } from "../../modules";

const SearchSettingContainer = () => {
    const dispatch = useDispatch();

    const { searchParam } = useSelector(
        (state: RootState) => state.searchParamReducer
    );

    useEffect(() => {
        const searchParams = localStorageApi.get("searchParams");
        if (searchParams) {
            const jsonSearchParams: searchParamItem = JSON.parse(searchParams);
            dispatch(LoadDataAction(jsonSearchParams));
        }
    }, []);

    const onChangeSetting = (data: NaverSearchParam) => {
        dispatch(ChangeDataAction(data));
    };

    return (
        <SearchSetting
            searchParam={searchParam}
            onChangeSetting={onChangeSetting}
        />
    );
};

export default SearchSettingContainer;
