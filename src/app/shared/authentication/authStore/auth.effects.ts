// Import necessary modules from NgRx and Angular
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { AuthenticationService } from "../../../core/services/authentication.service";
import * as AuthActions from "./auth.action";
import { switchMap, map, catchError, of } from 'rxjs';
import { User } from "./user.model";
import { Injectable } from '@angular/core';

// Decorate the class with @Injectable to make it injectable
@Injectable()
export class AuthEffects {
    // Inject the Actions service and AuthenticationService into the constructor
    constructor(private action$: Actions, private authService: AuthenticationService) { }

    // Effect for handling user sign-in
    $authLogin = createEffect(() =>
        this.action$.pipe(
            ofType(AuthActions.AuthActions.SIGN_IN), // Listen for SIGN_IN action
            switchMap((data: User) => {
                const { email, password } = data.userData; // Extract email and password from the action payload
                return this.authService.handleLocalAuth(email, password, '')
                    .pipe(
                        map(data => new AuthActions.SignInSuccess({ id: data.id })),
                        catchError(err => of(new AuthActions.SignInfail(err)))
                    );
            })
        )
    );

    // Effect for handling user sign-up
    $authSignUp = createEffect(() =>
        this.action$.pipe(
            ofType(AuthActions.AuthActions.SIGN_UP), // Listen for SIGN_UP action
            switchMap((data: User) => {
                const { email, password } = data.userData; // Extract email and password from the action payload
                return this.authService.handleLocalAuth(email, password, 'register')
                    .pipe(
                        map(data => new AuthActions.SignUpSuccess({ id: data[0].id, email: data[0].email })),
                        catchError(err => of(new AuthActions.SignUpfail(err)))
                    );
            })
        )
    );

    // Effect for automatically loading user data from local storage
    $autoLogin = createEffect(() =>
        this.action$.pipe(
            ofType(AuthActions.AuthActions.LOAD_USER), // Listen for LOAD_USER action
            switchMap(() => {
                const user = JSON.parse(localStorage.getItem('local_user')); // Retrieve user data from local storage
                if (user) {
                    return of(new AuthActions.LoadUserData(user));
                }
                return of(new AuthActions.LoadUserData({}));
            })
        )
    );

    // Effect for handling user sign-out
    $logout = createEffect(() =>
        this.action$.pipe(
            ofType(AuthActions.AuthActions.SIGN_OUT), // Listen for SIGN_OUT action
            switchMap(() => {
                localStorage.clear(); // Clear local storage on sign-out
                return of(new AuthActions.ClearStorage());
            })
        )
    );
}
