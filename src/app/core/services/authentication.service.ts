// Importing necessary modules from Angular and RxJS
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, catchError, tap, throwError, of, exhaustMap, map } from 'rxjs';
import { environment } from 'src/environments/environment';
import { LocalUser, User } from '../../shared/authentication/auth.model';

// Constant for setting up HTTP headers
const headerDict = {
  'Content-Type': 'application/json',
};

const requestOptions = {
  headers: new HttpHeaders(headerDict),
};

// Injectable decorator to declare that this service should be provided at the root level
@Injectable({ providedIn: 'root' })
export class AuthenticationService {
  // BehaviorSubject to store the authenticated user information
  user = new BehaviorSubject<User | null>(null);

  constructor(private http: HttpClient, private router: Router) { }

  // Property to store the token expiration timer
  private tokenExpiration: any;

  // API base URL from environment
  private api = environment.apiURL;

  // Function to handle user logout
  handleLogout() {
    this.user.next(null);
    localStorage.removeItem('userData');
    this.router.navigate(['/home']);
    if (this.tokenExpiration) {
      clearTimeout(this.tokenExpiration);
    }
    this.tokenExpiration = null;
  }

  // Function to set up an automatic logout timer
  autoLogout(expirationTime: number) {
    this.tokenExpiration = setTimeout(
      () => this.handleLogout(),
      expirationTime
    );
  }

  // Function to automatically log in the user from local storage
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

  // Function to handle authentication for login and registration
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

  // Function to handle HTTP error responses
  handleError(err: HttpErrorResponse) {
    let errMsg = 'Something went wrong';
    if (err.error.error) {
      errMsg = err.error.error.message;
    }
    return throwError(errMsg);
  }

  // Function to handle user authentication and store user data
  handleAuthentication(email: string, id: number, token: string, exp: Date) {
    const expDate = new Date(new Date().getTime() + +exp);
    const user = new User(email, id, token, expDate);
    this.user.next(user);
    this.autoLogout(+exp * 1000);
    localStorage.setItem('userData', JSON.stringify(user));
  }

  // Function to handle local authentication for login and registration
  handleLocalAuth(email, password, mode) {
    let path = '/auth/login'
    if (mode === 'register') {
      path = '/auth/register'
    }
    return this.http.post(this.api + path, {
      email, password
    }).pipe(
      tap((data: any) => this.handleLocalAuthSuccess(data)),
      catchError((err) => {
        return throwError(err.error.error.message)
      })
    )
  }

  // Function to handle success after local authentication
  handleLocalAuthSuccess(data) {
    localStorage.setItem('local_user', JSON.stringify(data));
    this.router.navigate(['/home'])
    window.location.reload()
  }

  // Function to automatically log in the user from local storage
  localAutoLogin() {
    const user = localStorage.getItem('local_user');
    const parsedUser = user && JSON.parse(user);
    if (!parsedUser) return;
  }

  // Function to handle local logout
  localLogout() {
    localStorage.removeItem('local_user');
    this.router.navigate['/home'];
    window.location.reload()
  }
}
