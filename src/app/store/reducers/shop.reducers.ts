import { createReducer, on } from '@ngrx/store';
import { loadProducts, loadProductsSuccess, loadProductsFailure } from '../actions/shop-actions';
import { initialState } from '../shop.initialState';
import { Product } from '../shop.model';

export interface ShopState {
  products: Product[];
  loading: boolean;
  error: any;
}

export const shopReducer = createReducer(
  initialState,
  on(loadProducts, (state) => ({ ...state, loading: true, error: null })),
  on(loadProductsSuccess, (state, { products }) => ({ ...state, products, loading: false, error: null })),
  on(loadProductsFailure, (state, { error }) => ({ ...state, loading: false, error }))
);
