// Import necessary decorators and classes from Angular and NgRx
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';

// Import RxJS operators for handling observables
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';

// Import the ShopService to interact with the backend
import { ShopService } from '../../../core/services/shop.service';

// Import ShopActions for handling actions related to the shop feature
import * as ShopActions from './shop-actions';

// Decorate the class with @Injectable to indicate that it can be injected with dependencies
@Injectable()
export class ShopEffects {
  // Define an effect to handle the loadProducts action
  loadProducts$ = createEffect(() => {
    return this.actions$.pipe(
      // Listen for the loadProducts action
      ofType(ShopActions.loadProducts),

      // Use switchMap to switch to a new observable, in this case, the result of getProducts from ShopService
      switchMap(() =>
        this.shopService.getProducts().pipe(
          // If successful, dispatch loadProductsSuccess action with the received products
          map(products => ShopActions.loadProductsSuccess({ products })),

          // If an error occurs, dispatch loadProductsFailure action with the error
          catchError(error => of(ShopActions.loadProductsFailure({ error })))
        )
      )
    );
  });

  // Inject the Actions service for handling actions and the ShopService for making backend requests
  constructor(private actions$: Actions, private shopService: ShopService) {}
}
