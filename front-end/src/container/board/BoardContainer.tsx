import { CircularProgress, Grid } from "@material-ui/core";
import React from "react";
import { useSelector } from "react-redux";
import Board from "../../components/board/Board";
import { RootState } from "../../modules";

interface Props {
    keywordIndex: number;
    keywordGroups: string[];
}

const BoardContainer = ({ keywordIndex, keywordGroups }: Props) => {
    const { isLoading } = useSelector(
        (state: RootState) => state.loadingReducer
    );

    return (
        <Grid container justifyContent="center" alignItems="center">
            {isLoading === true ? (
                <Grid item>
                    <CircularProgress size={250} style={{ color: "#FE6B8B" }} />
                </Grid>
            ) : (
                <Grid item>
                    <Board
                        keywordIndex={keywordIndex}
                        keywordGroups={keywordGroups}
                    />
                </Grid>
            )}
        </Grid>
    );
};

export default React.memo(BoardContainer);
