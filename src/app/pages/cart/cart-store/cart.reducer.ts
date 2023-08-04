import { createReducer, on } from "@ngrx/store"
import * as CartActions from "./cart.action"
import { CartModel } from "./cart.model"

export const initialState: CartModel = {
    cartItem: [{
        id: 1,
        productName: 'Bag 1',
        quantity: 2,
        price: 200,
    },
    {
        id: 2,
        productName: 'Bag 2',
        quantity: 1,
        price: 200,
    },
    {
        id: 3,
        productName: 'Bag 3',
        quantity: 1,
        price: 200,
    }],
    error: ''

}

export const cartReducer = createReducer(
    initialState,
    on(CartActions.loadCart, (state) => state),
    on(CartActions.loadCartsuccess, (state) => state),
    on(CartActions.removeItem, (state) => state),
    on(CartActions.removeItemSuccess, (state, { id }) => {
        let data = JSON.parse(JSON.stringify(state.cartItem))
        const index = data.findIndex(item => item.id === id)
        data.splice(index, 1)
        return {
            ...state,
            cartItem: data
        }
    }),
    on(CartActions.addItem, (state) => state),
    on(CartActions.addItemSuccess, (state) => state),
    on(CartActions.removeQuantity, (state, { id }) => {
        let data = JSON.parse(JSON.stringify(state.cartItem))
        const index = data.findIndex(item => item.id === id)
        data[index].quantity = data[index].quantity - 1
        return {
            ...state,
            cartItem: data
        }
    }),
    on(CartActions.removeQuantitySuccess, (state) => state),
    on(CartActions.addQuantity, (state, { id }) => {
        let data = JSON.parse(JSON.stringify(state.cartItem))
        const index = data.findIndex(item => item.id === id)
        data[index].quantity = data[index].quantity + 1
        return {
            ...state,
            cartItem: data
        }
    }),
    on(CartActions.addQuantitySuccess, (state) => state),
    on(CartActions.clearCart, (state) => state),
    on(CartActions.clearCartSuccess, (state) => ({
        cartItem: [], error: ''
    })),
)