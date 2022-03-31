import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { keywordItemType } from "../../@types/keyword-type";
import { FlexDiv } from "../../styles/StyledComponents";

interface Props {
    onItemAdd(item: keywordItemType): void;
}

const KeywordComponent = ({ onItemAdd }: Props) => {
    const [keyword, setKeyWord] = useState<string>("");

    const onChangeText = (e: React.ChangeEvent<HTMLInputElement>) => {
        const id = e.currentTarget.id;
        switch (id) {
            case "keyword": {
                setKeyWord(e.currentTarget.value);
                break;
            }
        }
    };

    const onClickKeywordAdd = () => {
        onItemAdd({
            keyword: keyword,
        });
    };

    return (
        <FlexDiv>
            <TextField
                id={"keyword"}
                label={"키워드를 입력하세요"}
                variant={"standard"}
                value={keyword}
                onChange={onChangeText}
            />
            <Button
                id={"addKeyword"}
                color={"primary"}
                variant={"outlined"}
                onClick={onClickKeywordAdd}
            >
                추가
            </Button>
        </FlexDiv>
    );
};

export default KeywordComponent;
