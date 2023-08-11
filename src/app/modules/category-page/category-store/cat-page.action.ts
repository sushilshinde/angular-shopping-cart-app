import { Action } from "@ngrx/store";


export enum CatDataActions {
    LOAD_DATA = 'LOAD_DATA',
    LOAD_DATA_SUCCESS = 'LOAD_DATA_SUCCESS',
    LOAD_DATA_FAIL = 'LOAD_DATA_FAIL'
}

export class LoadCatData implements Action {
    readonly type = CatDataActions.LOAD_DATA;
    constructor(public query: string) { }
}

export class LoadCatDataSuccess implements Action {
    readonly type = CatDataActions.LOAD_DATA_SUCCESS;
    constructor(public payload) { }
}

export class LoadCatDataFail implements Action {
    readonly type = CatDataActions.LOAD_DATA_FAIL;
    constructor(public errorString) { }
}

export type CatPageType = LoadCatData | LoadCatDataSuccess | LoadCatDataFail; 