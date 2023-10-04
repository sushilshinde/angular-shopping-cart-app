import { Action } from "@ngrx/store";

// Enumerating the possible actions related to cat data
export enum CatDataActions {
    LOAD_DATA = 'LOAD_DATA',                // Action to initiate loading cat data
    LOAD_DATA_SUCCESS = 'LOAD_DATA_SUCCESS',// Action dispatched on successful loading of cat data
    LOAD_DATA_FAIL = 'LOAD_DATA_FAIL'      // Action dispatched if there is an error in loading cat data
}

// Action class to trigger loading cat data
export class LoadCatData implements Action {
    readonly type = CatDataActions.LOAD_DATA;
    constructor(public query: string) { } // The query parameter to specify the category or criteria for data retrieval
}

// Action class dispatched on successful loading of cat data
export class LoadCatDataSuccess implements Action {
    readonly type = CatDataActions.LOAD_DATA_SUCCESS;
    constructor(public payload) { } // The payload containing the retrieved cat data
}

// Action class dispatched on failure to load cat data
export class LoadCatDataFail implements Action {
    readonly type = CatDataActions.LOAD_DATA_FAIL;
    constructor(public errorString) { } // The error string indicating the reason for failure
}

// Union type for all the possible actions related to cat data
export type CatPageType = LoadCatData | LoadCatDataSuccess | LoadCatDataFail;
