import { Grid, MenuItem, Select, TextField } from "@material-ui/core";
import React from "react";
import { useSelector } from "react-redux";
import { SearchParam } from "../../@types/naverApi-info";
import { RootState } from "../../modules";

interface Props {
    onChangeSetting: (data: SearchParam) => void;
}

const SearchSetting = ({ onChangeSetting }: Props) => {
    const { searchParam } = useSelector(
        (state: RootState) => state.searchParamReducer
    );

    const onChangeSelect = (event: any) => {
        onChangeSetting({
            ...searchParam,
            sort: event.target.value,
        });
    };

    const onChangeTextField = (event: any) => {
        onChangeSetting({
            ...searchParam,
            display: event.target.value,
        });
    };

    return (
        <div>
            <Grid
                container
                direction="column"
                spacing={2}
                justifyContent="flex-start"
            >
                <Grid item>
                    <TextField
                        id="standard-number"
                        value={searchParam.display || 10}
                        label="검색 건수 (10 ~ 100)"
                        type="number"
                        onChange={onChangeTextField}
                    />
                </Grid>
                <Grid item>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={searchParam.sort || "date"}
                        onChange={onChangeSelect}
                    >
                        <MenuItem value={"date"}>날짜순</MenuItem>
                        <MenuItem value={"sim"}>유사도순</MenuItem>
                    </Select>
                </Grid>
            </Grid>
        </div>
    );
};

export default SearchSetting;
