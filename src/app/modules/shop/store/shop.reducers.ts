// Import necessary functions from NgRx
import { createReducer, on } from '@ngrx/store';

// Import actions related to loading products
import { loadProducts, loadProductsSuccess, loadProductsFailure } from './shop-actions';

// Import the ShopState interface representing the state shape
import { ShopState } from './shop.model';

// Define the initial state for the shop feature
export const initialState: ShopState = {
  products: [],   // Initial state: Empty array for products
  loading: false,  // Initial state: Not loading
  error: null,     // Initial state: No errors
};

// Create a reducer function using createReducer from NgRx
export const shopReducer = createReducer(
  initialState,
  // Handle the loadProducts action
  on(loadProducts, (state) => ({ ...state, loading: true, error: null })),

  // Handle the loadProductsSuccess action
  on(loadProductsSuccess, (state, { products }) => ({ ...state, products, loading: false, error: null })),

  // Handle the loadProductsFailure action
  on(loadProductsFailure, (state, { error }) => ({ ...state, loading: false, error }))
);
