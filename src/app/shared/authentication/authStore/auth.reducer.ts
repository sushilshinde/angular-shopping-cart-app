// Import the actions from the auth.action file
import * as AuthAction from "./auth.action"

// Define the shape of the authentication state using an interface
export interface UserType {
    isLoading: boolean,   // Indicates if authentication operations are in progress
    userData: any,        // Holds user data after successful authentication
    error: string         // Stores any authentication-related error messages
}

// Define the initial state for the authentication
export const initialState: UserType = {
    isLoading: false,      // Initial state: Not loading
    userData: null,        // Initial state: No user data
    error: ''              // Initial state: No errors
}

// Define the authentication reducer function
export const AuthReducer = (state = initialState, action: AuthAction.AuthActionTypes) => {
    switch (action.type) {
        // Handle the action of type SIGN_IN
        case AuthAction.AuthActions.SIGN_IN:
            return {
                ...state,
                isLoading: true,  // Set isLoading to true when signing in
                error: '',       // Clear any existing error messages
            }

        // Handle the action of type SIGN_IN_SUCCESS
        case AuthAction.AuthActions.SIGN_IN_SUCCESS:
            return {
                ...state,
                isLoading: false,        // Set isLoading to false when sign-in is successful
                userData: action.userData,  // Set userData to the received user data
                error: ''               // Clear any existing error messages
            }

        // Handle the action of type SIGN_IN_FAIL
        case AuthAction.AuthActions.SIGN_IN_FAIL:
            return {
                ...state,
                isLoading: false,  // Set isLoading to false when sign-in fails
                error: action.error, // Set error to the received error message
                userData: {}         // Clear user data
            }

        // Similar handling for other authentication actions...

        // Handle the default case when the action type is not recognized
        default:
            return state;
    }
}
