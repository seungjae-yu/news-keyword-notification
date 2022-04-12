import React from "react";
import Board from "../../components/board/Board";

interface Props {
    keywordIndex: number;
    keywordGroups: string[];
}

const BoardContainer = ({ keywordIndex, keywordGroups }: Props) => {
    return <Board keywordIndex={keywordIndex} keywordGroups={keywordGroups} />;
};

export default BoardContainer;
