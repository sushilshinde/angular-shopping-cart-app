import { createAction, props } from "@ngrx/store";


export enum CartActions {
    LOAD_CART = '[CART] LOAD_CART',
    LOAD_CART_SUCCESS = '[CART] LOAD_CART_SUCCESS',
    REMOVE_ITEM = '[CART] REMOVE_ITEM',
    REMOVE_ITEM_SUCCESS = '[CART] REMOVE_ITEM_SUCCESS',
    ADD_ITEM = '[CART] ADD_ITEM',
    ADD_ITEM_SUCCESS = '[CART] ADD_ITEM_SUCCESS',
    REMOVE_QUANTITY = '[CART] REMOVE_QUANTITY',
    REMOVE_QUANTITY_SUCCESS = '[CART] REMOVE_QUANTITY_SUCCESS',
    ADD_QUANTITY = '[CART] ADD_QUANTITY',
    ADD_QUANTITY_SUCCESS = '[CART] ADD_QUANTITY_SUCCESS',
    CLEAR_CART = '[CART] CLEAR_CART',
    CLEAR_CART_SUCCESS = '[CART] CLEAR_CART_SUCCESS'
}

export const loadCart = createAction(CartActions.LOAD_CART)
export const loadCartsuccess = createAction(CartActions.LOAD_CART_SUCCESS, props<{ cartData }>())
export const removeItem = createAction(CartActions.REMOVE_ITEM, props<{ id }>())
export const removeItemSuccess = createAction(CartActions.REMOVE_ITEM_SUCCESS, props<{ cartData }>())
export const addItem = createAction(CartActions.ADD_ITEM, props<{ item }>())
export const addItemSuccess = createAction(CartActions.ADD_ITEM_SUCCESS, props<{ cartData }>())
export const addQuantity = createAction(CartActions.ADD_QUANTITY, props<{ id }>())
export const addQuantitySuccess = createAction(CartActions.ADD_QUANTITY_SUCCESS, props<{ cartData }>())
export const removeQuantity = createAction(CartActions.REMOVE_QUANTITY, props<{ id }>())
export const removeQuantitySuccess = createAction(CartActions.REMOVE_QUANTITY_SUCCESS, props<{ cartData }>())
export const clearCart = createAction(CartActions.CLEAR_CART, props<{ id }>())
export const clearCartSuccess = createAction(CartActions.CLEAR_CART_SUCCESS, props<{ cartData }>())