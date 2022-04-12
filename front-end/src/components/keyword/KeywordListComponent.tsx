import React from "react";
import { keywordItemType } from "../../@types/keyword-type";
import KeywordListTable from "./KeywordListTable";

interface Props {
    keywordList: keywordItemType[];
    onRemove(selectedItems: any[]): void;
}

const KeywordListComponent = ({ keywordList, onRemove }: Props) => {
    return (
        <div>
            <KeywordListTable keywordList={keywordList} onRemove={onRemove} />
        </div>
    );
};

export default KeywordListComponent;
