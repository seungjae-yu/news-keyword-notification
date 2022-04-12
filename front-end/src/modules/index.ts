import searchParamReducer, { searchParamState } from './searchParam';
import { combineReducers } from "redux";
import keywordReducer, { keywordState } from "./keyword";
import newsReducer, { newsState } from "./news";
import loadingReducer, { loadingState } from './loading';

export interface StoreState {
    //reducer 추가시 아래 형태로 추가
    //reducer : reducerState
    keywordReducer: keywordState;
    newsReducer: newsState;
    searchParamReducer: searchParamState;
    loadingReducer: loadingState;
}

const rootReducer = combineReducers<StoreState>({
    //interface에 추가한 reducer 설정
    keywordReducer,
    newsReducer,
    searchParamReducer,
    loadingReducer
});

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;
