import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { keywordItemType } from "../../@types/keyword-type";
import KeywordComponent from "../../components/keyword/KeywordComponent";
import KeywordListComponent from "../../components/keyword/KeywordListComponent";
import { RootState } from "../../modules";
import {
    AddDataAction,
    RemoveDataAction,
    keywordItem,
    LoadDataAction,
} from "../../modules/keyword";
import { useEffect } from "react";
import { localStorageApi } from "../../utils/dataUtils/localStorageApi";

const KeywordSettingContainer = () => {
    const dispatch = useDispatch();
    const keywordItems = useSelector(
        (state: RootState) => state.keywordReducer.keywordItems
    );

    useEffect(() => {
        const keywordData = localStorageApi.get("keyword");
        if (keywordData) {
            const jsonKeywordData: keywordItem[] = JSON.parse(keywordData);
            dispatch(LoadDataAction(jsonKeywordData));
        }
    }, []);

    const onItemAdd = (data: keywordItemType) => {
        dispatch(AddDataAction(data));
    };

    const onItemRemove = (selectedItems: any[]) => {
        dispatch(RemoveDataAction(selectedItems));
    };

    return (
        <div>
            <KeywordComponent onItemAdd={onItemAdd} />
            <KeywordListComponent
                keywordList={keywordItems ?? []}
                onRemove={onItemRemove}
            />
        </div>
    );
};

export default KeywordSettingContainer;
