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
import { useCallback } from "react";

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
    }, [dispatch]);

    const onItemAdd = useCallback(
        (data: keywordItemType) => {
            dispatch(AddDataAction(data));
        },
        [dispatch]
    );

    const onItemRemove = useCallback(
        (selectedItems: any[]) => {
            dispatch(RemoveDataAction(selectedItems));
        },
        [dispatch]
    );

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

export default React.memo(KeywordSettingContainer);
