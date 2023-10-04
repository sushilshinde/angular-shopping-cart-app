// Importing the actions related to the cat page
// import * as CatActions from "./cat-page.action"
import { CatDataActions, CatPageType } from "./cat-page.action"

// Defining the initial state for the cat page
export interface InitialType {
    query: string,
    catProduct: any[],
    isLoading: boolean
}

// Initializing the state with default values
export const initialState: InitialType = {
    query: '',
    catProduct: [],
    isLoading: false
}

// Reducer function for the cat page
export const catPageReducer = (state = initialState, action: CatPageType) => {
    switch (action.type) {
        // Handling the action to load data
        case CatDataActions.LOAD_DATA:
            return {
                ...state,
                isLoading: true,
                query: action.query
            }
        // Handling the action when data loading is successful
        case CatDataActions.LOAD_DATA_SUCCESS:
            return {
                ...state,
                isLoading: true,
                catProduct: action.payload
            }
        // Handling the action when data loading fails
        case CatDataActions.LOAD_DATA_FAIL:
            return {
                ...state,
                isLoading: true,
                error: action.errorString
            }
        // Default case to maintain the current state for unknown actions
        default:
            return state
    }
}

// Selector function to retrieve cat data from the state
export const selectCat = (state: { catData: any[] }) => state.catData;
