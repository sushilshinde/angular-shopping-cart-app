import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, catchError, tap, throwError, of, exhaustMap, map } from 'rxjs';
import { LocalUser, User } from './auth.model';
const headerDict = {
  'Content-Type': 'application/json',
};

const requestOptions = {
  headers: new HttpHeaders(headerDict),
};

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
  user = new BehaviorSubject<User | null>(null);
  constructor(private http: HttpClient, private router: Router) { }
  private tokenExpiration: any;

  private api = 'http://localhost:3000/users'

  handleLogout() {
    this.user.next(null);
    localStorage.removeItem('userData');
    this.router.navigate(['/home']);
    if (this.tokenExpiration) {
      clearTimeout(this.tokenExpiration);
    }
    this.tokenExpiration = null;
  }

  autoLogout(expirationTime: number) {
    this.tokenExpiration = setTimeout(
      () => this.handleLogout(),
      expirationTime
    );
  }

  autoLogin() {
    const user = localStorage.getItem('userData');
    const parsedUser = user && JSON.parse(user);
    if (!parsedUser) return;

    const loadedUser = new User(
      parsedUser.email,
      parsedUser.id,
      parsedUser._token,
      parsedUser._tokenExp
    );

    if (loadedUser.token) {
      const expiresIn =
        new Date(parsedUser._tokenExp).getTime() - new Date().getTime();
      this.autoLogout(expiresIn);
      this.user.next(loadedUser);
    }
  }

  handleAuth(email: string, password: string, mode: string) {
    return this.http
      .post(
        'http://localhost:5000/auth/' + mode,
        {
          email,
          password,
        },
        requestOptions
      )
      .pipe(
        catchError((err) => this.handleError(err)),
        tap((res: any) => {
          this.handleAuthentication(
            res.email,
            res.id,
            res.accessToken,
            res.expiresIn
          );
        })
      );
  }

  handleError(err: HttpErrorResponse) {
    let errMsg = 'Something went wrong';
    if (err.error.error) {
      errMsg = err.error.error.message;
    }
    return throwError(errMsg);
  }

  handleAuthentication(email: string, id: number, token: string, exp: Date) {
    const expDate = new Date(new Date().getTime() + +exp);
    const user = new User(email, id, token, expDate);
    this.user.next(user);
    this.autoLogout(+exp * 1000);
    localStorage.setItem('userData', JSON.stringify(user));
  }

  handleLocalAuth(email, password, mode) {
    if (mode === 'register') {
      return this.http.get(`${this.api}?email=${email}`).pipe(
        exhaustMap(
          (user: any) => {
            if (user.length) return throwError({ message: "Email Already Exists" })
            return this.http
              .post(this.api, {
                email,
                password,
                cart: [],
              })
          }
        ),
        tap((data: any) => this.handleLocalAuthSuccess(data.id, data.email)),
        catchError((err) => throwError(err.message))
      )
    }
    return this.http.get(`${this.api}?email=${email}`).pipe(
      tap((data: any) => {
        if (!data.length) throw new Error('Invalid Username/Password');
        if (data[0].password === password) {
          this.handleLocalAuthSuccess(data[0].id, data[0].email);
        } else {
          throw new Error('Invalid Username/Password');
        }
      }),
      catchError((err) => throwError(err.message))
    );
  }

  handleLocalAuthSuccess(id: number, email: string) {
    const newLocalUser = new LocalUser(id, email);
    localStorage.setItem('local_user', JSON.stringify(newLocalUser));
    this.router.navigate(['/home'])
    window.location.reload()
  }

  localAutoLogin() {
    const user = localStorage.getItem('local_user');
    const parsedUser = user && JSON.parse(user);
    if (!parsedUser) return;
  }

  localLogout() {
    localStorage.removeItem('local_user');
    this.router.navigate['/home'];
    window.location.reload()
  }
}
