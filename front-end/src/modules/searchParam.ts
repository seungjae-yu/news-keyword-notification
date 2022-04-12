import produce from "immer";
import { NaverSearchParam } from "../@types/naverApi-info";
//import your data type

// 1. Action Type
const LOAD_DATA = "searchParam/LOAD_DATA";
const CHANGE_DATA = "searchParam/CHANGE_DATA";

// 2. Action Creator
// change type any to your data Type
export const LoadDataAction = (data: NaverSearchParam) => ({
    type: LOAD_DATA,
    payload: data,
});
export const ChangeDataAction = (data: NaverSearchParam) => ({
    type: CHANGE_DATA,
    payload: data,
});

// 3. return types
export type searchParamActions =
    | ReturnType<typeof LoadDataAction>
    | ReturnType<typeof ChangeDataAction>;

// 4.
export interface searchParamItem extends NaverSearchParam {
    //extends data type
    //id: number;
}
// 5. State type
export interface searchParamState {
    searchParam: searchParamItem; //any to your data Type
}

// 6. initial State
const initialState: searchParamState = {
    searchParam: {} as searchParamItem,
};

// 6. reducer
const searchParamReducer = (
    state: searchParamState = initialState,
    action: searchParamActions
): searchParamState => {
    switch (action.type) {
        case LOAD_DATA: {
            return produce(state, (draft) => {
                draft.searchParam = action.payload as searchParamItem;
            });
        }
        case CHANGE_DATA: {
            return produce(state, (draft) => {
                draft.searchParam = action.payload;
            });
        }
        default: {
            return produce(state, (draft) => {});
        }
    }
};

export default searchParamReducer;
