import { GridColDef } from "@material-ui/data-grid";
import React from "react";
import { keywordItemType } from "../../@types/keyword-type";
import SelectTable from "../../common/table/SelectTable";

interface Props {
    keywordList: keywordItemType[];
    onRemove(selectedItems: any[]): void;
}

const KeywordListTable = ({ keywordList, onRemove }: Props) => {
    const columns: GridColDef[] = [
        { field: "id", headerName: "ID", width: 50 },
        { field: "keyword", headerName: "키워드", width: 200 },
        { field: "keywordGroup", headerName: "키워드그룹", width: 250 },
    ];

    return (
        <SelectTable
            data={keywordList}
            columns={columns}
            pageSize={10}
            useDeleteItem={true}
            onRemove={onRemove}
            style={{
                height: 400,
                width: 800,
            }}
        />
    );
};

export default React.memo(KeywordListTable);
