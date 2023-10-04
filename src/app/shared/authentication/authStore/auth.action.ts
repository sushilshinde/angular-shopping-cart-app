// Import the Action interface from NgRx
import { Action } from "@ngrx/store";

// Define an enumeration for different authentication actions
export enum AuthActions {
    // Actions related to user sign-in
    SIGN_IN = '[AUTH] SIGN_IN',
    SIGN_IN_SUCCESS = '[AUTH] SIGN_IN_SUCCESS',
    SIGN_IN_FAIL = '[AUTH] SIGN_IN_FAIL',

    // Actions related to user sign-up
    SIGN_UP = '[AUTH] SIGN_UP',
    SIGN_UP_SUCCESS = '[AUTH] SIGN_UP_SUCCESS',
    SIGN_UP_FAIL = '[AUTH] SIGN_UP_FAIL',

    // Actions related to loading user data
    LOAD_USER = '[AUTH] LOAD_USER',
    LOAD_USER_DATA = '[AUTH] LOAD_USER_DATA',

    // Action for user sign-out
    SIGN_OUT = '[AUTH] SIGN_OUT',

    // Action for clearing authentication-related storage
    CLEAR_STORAGE = 'auth CLEAR_STORAGE'
}

// Define classes for each action, implementing the Action interface
export class SignIn implements Action {
    readonly type = AuthActions.SIGN_IN;
    constructor(public userData) { }
}

export class SignInSuccess implements Action {
    readonly type = AuthActions.SIGN_IN_SUCCESS;
    constructor(public userData) { }
}

export class SignInfail implements Action {
    readonly type = AuthActions.SIGN_IN_FAIL;
    constructor(public error) { }
}

export class SignUp implements Action {
    readonly type = AuthActions.SIGN_UP;
    constructor(public userData) { }
}

export class SignUpSuccess implements Action {
    readonly type = AuthActions.SIGN_UP_SUCCESS;
    constructor(public userData) { }
}

export class SignUpfail implements Action {
    readonly type = AuthActions.SIGN_UP_FAIL;
    constructor(public error) { }
}

export class LoadUser implements Action {
    readonly type = AuthActions.LOAD_USER;
}

export class LoadUserData implements Action {
    readonly type = AuthActions.LOAD_USER_DATA;
    constructor(public userData) { }
}

export class SignOut implements Action {
    readonly type = AuthActions.SIGN_OUT;
}

export class ClearStorage implements Action {
    readonly type = AuthActions.CLEAR_STORAGE;
}

// Define a union type 'AuthActionTypes' to represent all possible authentication actions
export type AuthActionTypes = SignIn | SignInSuccess | SignInfail | SignUp | SignUpSuccess | SignUpfail | LoadUser | LoadUserData | SignOut | ClearStorage;
