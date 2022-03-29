import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const KeywordComponent = () => {
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

  return (
    <div>
      <TextField
        id={"keyword"}
        label={"키워드를 입력하세요"}
        variant={"standard"}
        value={keyword}
        onChange={onChangeText}
      />
    </div>
  );
};

export default KeywordComponent;
