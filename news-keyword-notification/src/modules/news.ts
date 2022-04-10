import produce from "immer";
import { NewsData } from "../@types/news-data-type";
//import your data type

// 1. Action Type
const LOAD_DATA = "news/LOAD_DATA";
const ADD_DATA = "news/ADD_DATA";
const REMOVE_DATA = "news/REMOVE_DATA";

// 2. Action Creator
// change type any to your data Type
export const LoadDataAction = (data: NewsData[]) => ({
    type: LOAD_DATA,
    payload: data,
});
export const AddDataAction = (data: NewsData) => ({
    type: ADD_DATA,
    payload: data,
});
export const RemoveDataAction = (items: NewsData[]) => ({
    type: REMOVE_DATA,
    payload: items,
});

// 3. return types
export type newsActions =
    | ReturnType<typeof LoadDataAction>
    | ReturnType<typeof AddDataAction>
    | ReturnType<typeof RemoveDataAction>;

// 4.
interface newsItem extends NewsData {
    //extends data type
    id: number;
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
        case LOAD_DATA: {
            return produce(state, (draft) => {
                draft.newsItems = action.payload as newsItem[];
            });
        }
        case ADD_DATA: {
            return produce(state, (draft) => {});
        }
        case REMOVE_DATA: {
            return produce(state, (draft) => {});
        }
        default: {
            return produce(state, (draft) => {});
        }
    }
};

export default newsReducer;
