import { IconButton } from "@material-ui/core";
import { DataGrid, GridColumns } from "@material-ui/data-grid";
import React, { useCallback, useState } from "react";
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

const defaultSizeStyle = {
    height: 400,
    width: "100%",
};

const SelectTable = <T extends object>({
    data,
    columns,
    pageSize,
    useDeleteItem,
    style,
    onRemove,
}: Props<T>) => {
    const [selectionModel, setSelectionModel] = useState<any[]>([]);

    const onClickButton = useCallback(() => {
        if (onRemove) {
            onRemove(selectionModel);
        }
        setSelectionModel([]);
    }, [onRemove, selectionModel, setSelectionModel]);

    return (
        <div style={style ?? defaultSizeStyle}>
            {useDeleteItem && onRemove && (
                <RightAlignDiv>
                    <IconButton onClick={onClickButton}>
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

export default React.memo(SelectTable);
