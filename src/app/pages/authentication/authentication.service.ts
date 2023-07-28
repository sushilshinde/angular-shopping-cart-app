import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
  HttpResponse,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, catchError, tap, throwError } from 'rxjs';
import { User } from './auth.model';
const headerDict = {
  'Content-Type': 'application/json',
};

const requestOptions = {
  headers: new HttpHeaders(headerDict),
};

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
  user = new BehaviorSubject<User | null>(null);
  constructor(private http: HttpClient, private router: Router) {}
  private tokenExpiration: any;

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
    console.log(err.error.error.message);
    return throwError(errMsg);
  }

  handleAuthentication(email: string, id: number, token: string, exp: Date) {
    const expDate = new Date(new Date().getTime() + +exp);
    const user = new User(email, id, token, expDate);
    this.user.next(user);
    this.autoLogout(+exp * 1000);
    localStorage.setItem('userData', JSON.stringify(user));
  }
}
