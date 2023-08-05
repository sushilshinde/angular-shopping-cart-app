import { createReducer, on } from "@ngrx/store"
import * as CartActions from "./cart.action"
import { CartModel } from "./cart.model"

export const initialState: CartModel = {
    cartItem: [],
    error: '',
}

export const cartReducer = createReducer(
    initialState,
    on(CartActions.loadCart, (state) => state),
    on(CartActions.loadCartsuccess, (state, { cartData }) => ({
        ...state,
        cartItem: cartData
    })),
    on(CartActions.removeItem, (state) => state),
    on(CartActions.removeItemSuccess, (state, { cartData }) => ({
        ...state,
        cartItem: cartData
    })),
    on(CartActions.addItem, (state) => state),
    on(CartActions.addItemSuccess, (state, { cartData }) => ({
        ...state,
        cartItem: cartData
    })),
    on(CartActions.removeQuantity, (state) => state),
    on(CartActions.removeQuantitySuccess, (state, { cartData }) => ({
        ...state,
        cartItem: cartData
    })),
    on(CartActions.addQuantity, (state) => state),
    on(CartActions.addQuantitySuccess, (state, { cartData }) => ({
        ...state,
        cartItem: cartData
    })),
    on(CartActions.clearCart, (state) => state),
    on(CartActions.clearCartSuccess, (state) => ({
        cartItem: [], error: ''
    })),
)