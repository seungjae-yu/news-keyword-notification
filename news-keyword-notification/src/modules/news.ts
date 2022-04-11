import produce from "immer";
import { keywordItemType } from "../@types/keyword-type";
import { NaverApiParams } from "../@types/naverApi-info";
import { NewsData } from "../@types/news-data-type";
//import your data type

// 1. Action Type
// saga Async APIs
export const API_DATA_REQUEST = 'news/API_DATA_REQUEST';
export const API_DATA_SUCCESS = 'news/API_DATA_SUCCESS';
export const API_DATA_FAIL = 'news/API_DATA_FAIL';

// 2. Action Creator
// change type any to your data Type
export const APIDataRequestAction = (data: NaverApiParams, keywordInfo?: keywordItemType) => ({ type: API_DATA_REQUEST, payload: { data, keywordInfo } });
export const APIDataRequestSuccessAction = (data: NewsData[]) => ({ type: API_DATA_SUCCESS, payload: data });
export const APIDataRequestFailAction = (data: string) => ({ type: API_DATA_FAIL, payload: data });

// 3. return types
export type newsActions =
    | ReturnType<typeof APIDataRequestAction>
    | ReturnType<typeof APIDataRequestSuccessAction>
    | ReturnType<typeof APIDataRequestFailAction>;

// 4.
interface newsItem extends NewsData {
    //extends data type
    id: number;
    keywordInfo?: keywordItemType;
}
// 5. State type
export interface newsState {
    newsItems: newsItem[]; //any to your data Type
}

// 6. initial State
const initialState: newsState = {
    newsItems: [],
};

// 6. reducer
const newsReducer = (
    state: newsState = initialState,
    action: newsActions
): newsState => {
    switch (action.type) {
        case API_DATA_REQUEST: {
            return produce(state, draft => { })
        }

        case API_DATA_SUCCESS: {
            return produce(state, (draft) => {
                draft.newsItems = action.payload as newsItem[];
            });
        }

        case API_DATA_FAIL: {
            return produce(state, draft => { })
        }

        default: {
            return produce(state, (draft) => { });
        }
    }
};

export default newsReducer;
