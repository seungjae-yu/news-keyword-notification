import produce from 'immer';
//import your data type

// 1. Action Type

export const LOADING_START = 'loading/LOADING_START';
export const LOADING_FINISH = 'loading/LOADING_FINISH';

// 2. Action Creator
// change type any to your data Type
export const LoadingStartAction = () => ({ type: LOADING_START });
export const LoadingFinishAction = () => ({ type: LOADING_FINISH });

// 3. return types
export type loadingActions = ReturnType<typeof LoadingStartAction> | ReturnType<typeof LoadingFinishAction>;

// 4.
interface loadingItem { //extends data type

}
// 5. State type
export interface loadingState {
    isLoading: loadingItem;  //any to your data Type
}

// 6. initial State
const initialState: loadingState = {
    isLoading: []
};

// 6. reducer
const loadingReducer = (state: loadingState = initialState, action: loadingActions): loadingState => {
    switch (action.type) {
        case LOADING_START: {
            return produce(state, draft => {
                draft.isLoading = true
            });
        }
        case LOADING_FINISH: {
            return produce(state, draft => {
                draft.isLoading = false;
            });
        }
        default: {
            return produce(state, draft => { });
        }
    }
}

export default loadingReducer;