// import * as CatActions from "./cat-page.action"

import { CatDataActions, CatPageType } from "./cat-page.action"

export interface InitialType {
    query: string,
    catProduct: any[],
    isLoading: boolean
}

export const initialState: InitialType = {
    query: '',
    catProduct: [],
    isLoading: false
}

export const catPageReducer = (state = initialState, action:CatPageType) => {
    switch (action.type) {
        case CatDataActions.LOAD_DATA:
            return {
                ...state,
                isLoading: true,
                query: action.query
            }
        case CatDataActions.LOAD_DATA_SUCCESS:
            return {
                ...state,
                isLoading: true,
                catProduct: action.payload
            }
        case CatDataActions.LOAD_DATA_FAIL:
            return {
                ...state,
                isLoading: true,
                error: action.errorString
            }
        default:
            return state
    }
}

export const selectCat = (state: { catData: any[] }) => state.catData;