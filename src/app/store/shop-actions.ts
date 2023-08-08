import { createAction, props } from '@ngrx/store';

export enum ProductActions {
  LOAD_PRODUCTS = '[Shop Component] Load Products',
  LOAD_PRODUCTS_SUCCESS = '[Shop API] Load Products Success',
  LOAD_PRODUCTS_FAILURE = '[Shop API] Load Products Failure'
}

export const loadProducts = createAction(ProductActions.LOAD_PRODUCTS);
export const loadProductsSuccess = createAction(
  ProductActions.LOAD_PRODUCTS_SUCCESS,
  props<{ products}>()
);
export const loadProductsFailure = createAction(
  ProductActions.LOAD_PRODUCTS_FAILURE,
  props<{ error: any }>()
);
