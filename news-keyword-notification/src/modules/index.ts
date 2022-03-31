import { combineReducers } from "redux";
import keywordReducer, { keywordState } from "./keyword";

export interface StoreState {
    //reducer 추가시 아래 형태로 추가
    //reducer : reducerState
    keywordReducer: keywordState
}

const rootReducer = combineReducers<StoreState>({
    //interface에 추가한 reducer 설정
    keywordReducer
});

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;