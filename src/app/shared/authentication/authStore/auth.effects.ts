import { Actions, createEffect, ofType } from "@ngrx/effects";
import { AuthenticationService } from "../../../core/services/authentication.service";
import * as AuthActions from "./auth.action"
import { switchMap, map, catchError, of } from 'rxjs'
import { User } from "./user.model";
import { Injectable } from '@angular/core'

@Injectable()
export class AuthEffects {
    constructor(private action$: Actions, private authService: AuthenticationService) { }
    $authLogin = createEffect(() =>
        this.action$.pipe(
            ofType(AuthActions.AuthActions.SIGN_IN),
            switchMap((data: User) => {
                const { email, password } = data.userData
                return this.authService.handleLocalAuth(email, password, '')
                    .pipe(
                        map(data => {
                            return new AuthActions.SignInSuccess({
                                id: data.id,
                            })
                        }
                        ),
                        catchError(err => of(new AuthActions.SignInfail(err)))
                    )
            }
            )
        )
    )
    $authSignUp = createEffect(() =>
        this.action$.pipe(
            ofType(AuthActions.AuthActions.SIGN_UP),
            switchMap((data: User) => {
                const { email, password } = data.userData
                return this.authService.handleLocalAuth(email, password, 'register')
                    .pipe(
                        map(data => {
                            return new AuthActions.SignUpSuccess({
                                id: data[0].id,
                                email: data[0].email
                            })
                        }
                        ),
                        catchError(err => of(new AuthActions.SignUpfail(err)))
                    )
            }
            )
        )
    )
    $autoLogin = createEffect(() =>
        this.action$.pipe(
            ofType(AuthActions.AuthActions.LOAD_USER),
            switchMap(() => {
                const user = JSON.parse(localStorage.getItem('local_user'))
                if (user) {
                    return of(new AuthActions.LoadUserData(user))
                }
                return of(new AuthActions.LoadUserData({}))
            })
        )
    )
    $logout = createEffect(() =>
        this.action$.pipe(
            ofType(AuthActions.AuthActions.SIGN_OUT),
            switchMap(() => {
                localStorage.clear();
                return of(new AuthActions.ClearStorage())
            })
        )
    )

}