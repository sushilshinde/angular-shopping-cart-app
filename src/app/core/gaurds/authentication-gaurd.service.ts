// Importing necessary modules from Angular and RxJS
import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Store } from '@ngrx/store';
import { map, Observable, take } from 'rxjs';
import { AuthenticationService } from '../services/authentication.service';

// Injectable decorator to declare that this service should be provided at the root level
@Injectable({
  providedIn: 'root',
})
export class RestrictAuth {
  constructor(
    private authService: AuthenticationService,
    private router: Router,
    private store: Store
  ) { }

  // Function to determine if the route can be activated
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    return this.store.select((state: any) => state.auth.userData).pipe(
      take(1),
      map((user) => {
        // Checking if the user is authenticated based on the presence of user data
        const isAuth = Object.values(user).length > 0;

        // Redirecting to the home page if authenticated
        if (!isAuth) {
          return true; // Allowing access to the route
        } else {
          this.router.navigate(['home']); // Redirecting to the home page
          return false;
        }
      })
    );
  }
}
