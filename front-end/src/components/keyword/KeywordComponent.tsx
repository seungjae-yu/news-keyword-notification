import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { keywordItemType } from "../../@types/keyword-type";
import { createFilterOptions } from "@material-ui/lab";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { useSelector } from "react-redux";
import { RootState } from "../../modules";
import { Grid } from "@material-ui/core";
import _ from "lodash";
import { useCallback } from "react";

interface Props {
    onItemAdd(item: keywordItemType): void;
}

interface KeywordGroupOptionType {
    inputValue?: string;
    title: string;
}

const filter = createFilterOptions<KeywordGroupOptionType>();

const KeywordComponent = ({ onItemAdd }: Props) => {
    const [keyword, setKeyWord] = useState<string>("");
    const [keywordGroup, setKeywordGroup] =
        useState<KeywordGroupOptionType | null>(null);

    const { keywordItems } = useSelector(
        (state: RootState) => state.keywordReducer
    );

    const onChangeText = useCallback(
        (e: React.ChangeEvent<HTMLInputElement>) => {
            const id = e.currentTarget.id;
            switch (id) {
                case "keyword": {
                    setKeyWord(e.currentTarget.value);
                    break;
                }
            }
        },
        []
    );

    const onClickKeywordAdd = useCallback(() => {
        onItemAdd({
            keyword: keyword,
            keywordGroup: keywordGroup?.title || "NONE",
        });
    }, [onItemAdd, keyword, keywordGroup]);

    const getKeyWordGroupOptions = useCallback(() => {
        const keywordOptions = keywordItems.map((m) => ({
            title: m.keywordGroup,
            inputValue: m.keywordGroup,
        }));
        return _.uniqBy(keywordOptions, "title");
    }, [keywordItems]);

    return (
        <Grid container spacing={3}>
            <Grid item>
                <TextField
                    id={"keyword"}
                    label={"키워드를 입력하세요"}
                    variant={"standard"}
                    value={keyword}
                    onChange={onChangeText}
                />
            </Grid>
            <Grid item>
                <Autocomplete
                    id="keyword-group"
                    options={getKeyWordGroupOptions()}
                    value={keywordGroup}
                    size={"small"}
                    style={{ width: 300 }}
                    selectOnFocus
                    clearOnBlur
                    handleHomeEndKeys
                    renderInput={(params) => (
                        <TextField {...params} label={"키워드 그룹 선택"} />
                    )}
                    onChange={(_event, newValue) => {
                        if (typeof newValue === "string") {
                            setKeywordGroup({
                                title: newValue,
                            });
                        } else if (newValue && newValue.inputValue) {
                            // Create a new value from the user input
                            setKeywordGroup({
                                title: newValue.inputValue,
                            });
                        } else {
                            setKeywordGroup(newValue);
                        }
                    }}
                    filterOptions={(options, params) => {
                        const filtered = filter(options, params);

                        // Suggest the creation of a new value
                        if (params.inputValue !== "") {
                            filtered.push({
                                inputValue: params.inputValue,
                                title: `Add "${params.inputValue}"`,
                            });
                        }

                        return filtered;
                    }}
                    getOptionLabel={(option) => {
                        // Value selected with enter, right from the input
                        if (typeof option === "string") {
                            return option;
                        }
                        // Add "xxx" option created dynamically
                        if (option.inputValue) {
                            return option.inputValue;
                        }
                        // Regular option
                        return option.title;
                    }}
                    renderOption={(option) => option.title}
                />
            </Grid>
            <Grid item>
                <Button
                    id={"addKeyword"}
                    color={"primary"}
                    variant={"outlined"}
                    size={"large"}
                    onClick={onClickKeywordAdd}
                >
                    추가
                </Button>
            </Grid>
        </Grid>
    );
};

export default KeywordComponent;
