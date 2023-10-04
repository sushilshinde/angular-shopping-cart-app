import { createReducer, on } from "@ngrx/store";
import * as CartActions from "./cart.action";
import { CartModel } from "./cart.model";

// Initial state for the cart
export const initialState: CartModel = {
    cartItem: [],
    error: '',
}

// Reducer function for handling cart actions
export const cartReducer = createReducer(
    initialState,
    // Load Cart action
    on(CartActions.loadCart, (state) => state),
    // Load Cart success action
    on(CartActions.loadCartsuccess, (state, { cartData }) => ({
        ...state,
        cartItem: cartData
    })),
    // Remove Item action
    on(CartActions.removeItem, (state) => state),
    // Remove Item success action
    on(CartActions.removeItemSuccess, (state, { cartData }) => ({
        ...state,
        cartItem: cartData
    })),
    // Add Item action
    on(CartActions.addItem, (state) => state),
    // Add Item success action
    on(CartActions.addItemSuccess, (state, { cartData }) => ({
        ...state,
        cartItem: cartData
    })),
    // Remove Quantity action
    on(CartActions.removeQuantity, (state) => state),
    // Remove Quantity success action
    on(CartActions.removeQuantitySuccess, (state, { cartData }) => ({
        ...state,
        cartItem: cartData
    })),
    // Add Quantity action
    on(CartActions.addQuantity, (state) => state),
    // Add Quantity success action
    on(CartActions.addQuantitySuccess, (state, { cartData }) => ({
        ...state,
        cartItem: cartData
    })),
    // Clear Cart action
    on(CartActions.clearCart, (state) => state),
    // Clear Cart success action
    on(CartActions.clearCartSuccess, (state) => ({
        cartItem: [], error: ''
    })),
    // Empty Cart action
    on(CartActions.emptyCart, (state) => ({
        cartItem: []
    })),
);
