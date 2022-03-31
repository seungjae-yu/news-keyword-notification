import { IconButton } from "@material-ui/core";
import { DataGrid, GridColDef, GridColumns } from "@material-ui/data-grid";
import React, { useState } from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import { RightAlignDiv } from "../../styles/StyledComponents";

interface Props<T> {
    data: T[];
    columns: GridColumns;
    pageSize: number;
    useDeleteItem?: boolean;
    style?: React.CSSProperties;
    onRemove?(selectedItems: any[]): void;
}

const SelectTable = <T extends object>({
    data,
    columns,
    pageSize,
    useDeleteItem,
    style,
    onRemove,
}: Props<T>) => {
    const [selectionModel, setSelectionModel] = useState<any[]>([]);

    return (
        <div style={style ?? { height: 400, width: "100%" }}>
            {useDeleteItem && onRemove && (
                <RightAlignDiv>
                    <IconButton
                        onClick={() => {
                            onRemove(selectionModel);
                            setSelectionModel([]);
                        }}
                    >
                        <DeleteIcon />
                    </IconButton>
                </RightAlignDiv>
            )}
            <DataGrid
                rows={data}
                columns={columns}
                pageSize={pageSize}
                selectionModel={selectionModel}
                onSelectionModelChange={(ids) => {
                    setSelectionModel(ids);
                }}
                checkboxSelection
            />
        </div>
    );
};

export default SelectTable;
