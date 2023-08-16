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

@Injectable({
  providedIn: 'root',
})
export class AuthGaurd {
  constructor(
    private authService: AuthenticationService,
    private router: Router, private store: Store
  ) { }

  canActivate(
    Route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    return this.store.select((state: any) => state.auth.userData).pipe(
      take(1),
      map((user) => {
        const isAuth = Object.values(user).length > 0;
        if (isAuth) return true;
        return this.router.createUrlTree(['/auth/login'])
      })
    );
  }
}


