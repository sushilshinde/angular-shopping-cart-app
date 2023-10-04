// Import necessary functions from NgRx
import { createAction, props } from '@ngrx/store';

// Define an enum to represent different actions related to products
export enum ProductActions {
  LOAD_PRODUCTS = '[Shop Component] Load Products',         // Action to initiate loading products
  LOAD_PRODUCTS_SUCCESS = '[Shop API] Load Products Success', // Action when loading products is successful
  LOAD_PRODUCTS_FAILURE = '[Shop API] Load Products Failure'  // Action when loading products encounters an error
}

// Define actions using createAction from NgRx with optional payload using props
export const loadProducts = createAction(ProductActions.LOAD_PRODUCTS);
export const loadProductsSuccess = createAction(
  ProductActions.LOAD_PRODUCTS_SUCCESS,
  props<{ products: any[] }>() // Define a payload for the successful action, expecting an array of products
);
export const loadProductsFailure = createAction(
  ProductActions.LOAD_PRODUCTS_FAILURE,
  props<{ error: any }>() // Define a payload for the failure action, expecting an error
);
