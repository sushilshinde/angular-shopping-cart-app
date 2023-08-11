import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { ShopService } from '../core/services/shop.service';
import * as ShopActions from '../store/shop-actions';

@Injectable()
export class ShopEffects {
  loadProducts$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(ShopActions.loadProducts),
      switchMap(() =>
        this.shopService.getProducts().pipe(
          map(products => ShopActions.loadProductsSuccess({ products })),
          catchError(error => of(ShopActions.loadProductsFailure({ error })))
        )
      )
    );
  });

  constructor(private actions$: Actions, private shopService: ShopService) {}
}
