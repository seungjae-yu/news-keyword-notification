import produce from "immer";
import { keywordItemType } from "../@types/keyword-type";

// 1. Action Type
const LOAD_DATA = "keyword/LOAD_DATA";
const ADD_DATA = "keyword/ADD_DATA";
const REMOVE_DATA = "keyword/REMOVE_DATA";

// 2. Action Creator
// change type any to your data Type
export const LoadDataAction = (data: keywordItemType[]) => ({
    type: LOAD_DATA,
    payload: data,
});
export const AddDataAction = (data: keywordItemType) => ({
    type: ADD_DATA,
    payload: data,
});
export const RemoveDataAction = (id: any[]) => ({
    type: REMOVE_DATA,
    payload: id,
});

// 3. return types
export type keywordActions =
    | ReturnType<typeof LoadDataAction>
    | ReturnType<typeof AddDataAction>
    | ReturnType<typeof RemoveDataAction>;

// 4. State type
export interface keywordState {
    //data: keywordItem;  //any to your data Type
    keywordItems: keywordItem[];
}

export interface keywordItem extends keywordItemType {
    id: number;
}

// 5. initial State
const initialState: keywordState = {
    keywordItems: [],
};

// 6. reducer
const keywordReducer = (
    state: keywordState = initialState,
    action: keywordActions
): keywordState => {
    switch (action.type) {
        case LOAD_DATA: {
            return produce(state, (draft) => {
                draft.keywordItems = action.payload as keywordItem[];
            });
        }
        case ADD_DATA: {
            return produce(state, (draft) => {
                //const newItem = action.payload as keywordItemType;
                draft.keywordItems.push({
                    id: draft.keywordItems.length + 1,
                    ...(action.payload as keywordItemType),
                });
            });
        }
        case REMOVE_DATA: {
            return produce(state, (draft) => {
                const selectedIds = new Set(action.payload as any[]);
                let idx = 0;
                draft.keywordItems = draft.keywordItems
                    .filter((keyword) => !selectedIds.has(keyword.id))
                    .map((item) => ({
                        ...item,
                        id: idx++,
                    }));
            });
        }

        default: {
            return produce(state, (_draft) => { });
        }
    }
};

export default keywordReducer;
