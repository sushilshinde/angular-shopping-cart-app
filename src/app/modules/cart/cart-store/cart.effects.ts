import { Actions, createEffect, ofType } from "@ngrx/effects";
import { map, switchMap } from "rxjs";
import { CartService } from "../../../core/services/cart.service";
import * as CartActions from "./cart.action";
import { Injectable } from "@angular/core";

@Injectable()
export class CartEffects {
    constructor(private action$: Actions, private cartService: CartService) { }

    // Effect to load cart data
    loadCart$ = createEffect(() =>
        this.action$.pipe(
            ofType(CartActions.loadCart),
            switchMap(() => {
                return this.cartService.getCartData().pipe(
                    map(cartData => CartActions.loadCartsuccess({ cartData }))
                )
            })
        ))

    // Effect to add an item to the cart
    addItem$ = createEffect(() =>
        this.action$.pipe(
            ofType(CartActions.addItem),
            switchMap((data) => {
                return this.cartService.addCartItem(data.item).pipe(
                    map(cartData => {
                        return CartActions.addItemSuccess({ cartData: cartData['cartItem'] })
                    })
                )
            })
        ))

    // Effect to remove an item from the cart
    removeItem$ = createEffect(() =>
        this.action$.pipe(
            ofType(CartActions.removeItem),
            switchMap((data: any) => {
                return this.cartService.removeCartItem(data.id).pipe(
                    map(cartData => {
                        return CartActions.removeItemSuccess({ cartData: cartData['cartItem'] })
                    })
                )
            })
        ))

    // Effect to remove a quantity of an item from the cart
    removeQuantity$ = createEffect(() =>
        this.action$.pipe(
            ofType(CartActions.removeQuantity),
            switchMap((data: any) => {
                return this.cartService.handleQuantity(data.id, 'remove').pipe(
                    map(cartData => {
                        return CartActions.removeQuantitySuccess({ cartData: cartData['cartItem'] })
                    })
                )
            })
        ))

    // Effect to add a quantity of an item to the cart
    addQuantity$ = createEffect(() =>
        this.action$.pipe(
            ofType(CartActions.addQuantity),
            switchMap((data: any) => {
                return this.cartService.handleQuantity(data.id, 'add').pipe(
                    map(cartData => {
                        return CartActions.addQuantitySuccess({ cartData: cartData['cartItem'] })
                    })
                )
            })
        ))

}
