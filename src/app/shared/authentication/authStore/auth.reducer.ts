import * as AuthAction from "./auth.action"

export interface UserType {
    isLoading: boolean,
    userData: any,
    error: string
}

export const initialState: UserType = {
    isLoading: false,
    userData: null,
    error: ''
}

export const AuthReducer = (state = initialState, action: AuthAction.AuthActionTypes) => {
    switch (action.type) {
        case AuthAction.AuthActions.SIGN_IN:
            return {
                ...state,
                isLoading: true,
                error: '',
            }
        case AuthAction.AuthActions.SIGN_IN_SUCCESS:
            return {
                ...state,
                isLoading: false,
                userData: action.userData,
                error: ''
            }
        case AuthAction.AuthActions.SIGN_IN_FAIL:
            return {
                ...state,
                isLoading: false,
                error: action.error,
                userData: {}
            }
        case AuthAction.AuthActions.SIGN_UP:
            return {
                ...state,
                error: '',
                isLoading: true,
            }
        case AuthAction.AuthActions.SIGN_UP_SUCCESS:
            return {
                ...state,
                isLoading: false,
                userData: action.userData,
                error: ''
            }
        case AuthAction.AuthActions.SIGN_UP_FAIL:
            return {
                ...state,
                isLoading: false,
                error: action.error,
                userData: {}
            }
        case AuthAction.AuthActions.LOAD_USER:
            return {
                ...state,
                isLoading: false,
            }
        case AuthAction.AuthActions.LOAD_USER_DATA:
            return {
                ...state,
                isLoading: false,
                userData: action.userData,
            }
        case AuthAction.AuthActions.SIGN_OUT:
            return {
                ...state,
                isLoading: false,
            }
        case AuthAction.AuthActions.CLEAR_STORAGE:
            return {
                ...state,
                isLoading: false,
                userData: {}
            }
        default:
            return state;
    }
}
