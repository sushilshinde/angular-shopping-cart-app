import { createAction, props } from "@ngrx/store";

// Enum for cart actions
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
    CLEAR_CART_SUCCESS = '[CART] CLEAR_CART_SUCCESS',
    EMPTY_CART = '[CART] EMPTY_CART'
}

// Action to load cart data
export const loadCart = createAction(CartActions.LOAD_CART);

// Action on successful loading of cart data
export const loadCartsuccess = createAction(CartActions.LOAD_CART_SUCCESS, props<{ cartData }>());

// Action to remove an item from the cart
export const removeItem = createAction(CartActions.REMOVE_ITEM, props<{ id }>());

// Action on successful removal of an item from the cart
export const removeItemSuccess = createAction(CartActions.REMOVE_ITEM_SUCCESS, props<{ cartData }>());

// Action to add an item to the cart
export const addItem = createAction(CartActions.ADD_ITEM, props<{ item }>());

// Action on successful addition of an item to the cart
export const addItemSuccess = createAction(CartActions.ADD_ITEM_SUCCESS, props<{ cartData }>());

// Action to add a quantity of an item to the cart
export const addQuantity = createAction(CartActions.ADD_QUANTITY, props<{ id }>());

// Action on successful addition of a quantity to the cart
export const addQuantitySuccess = createAction(CartActions.ADD_QUANTITY_SUCCESS, props<{ cartData }>());

// Action to remove a quantity of an item from the cart
export const removeQuantity = createAction(CartActions.REMOVE_QUANTITY, props<{ id }>());

// Action on successful removal of a quantity from the cart
export const removeQuantitySuccess = createAction(CartActions.REMOVE_QUANTITY_SUCCESS, props<{ cartData }>());

// Action to clear the entire cart
export const clearCart = createAction(CartActions.CLEAR_CART, props<{ id }>());

// Action on successful clearing of the entire cart
export const clearCartSuccess = createAction(CartActions.CLEAR_CART_SUCCESS, props<{ cartData }>());

// Action to empty the cart
export const emptyCart = createAction(CartActions.EMPTY_CART);
