import { createAction, props } from '@ngrx/store';
import { Product } from '../shop.model';

export const loadProducts = createAction('[Shop Component] Load Products');
export const loadProductsSuccess = createAction(
  '[Shop API] Load Products Success',
  props<{ products: Product[] }>()
);
export const loadProductsFailure = createAction(
  '[Shop API] Load Products Failure',
  props<{ error: any }>()
);
