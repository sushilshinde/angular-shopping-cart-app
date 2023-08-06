import { Actions, createEffect, ofType } from "@ngrx/effects";
import { map, switchMap } from "rxjs";
import { CartService } from "../cart.service";
import * as CartActions from "./cart.action"
import { Injectable } from "@angular/core"

@Injectable()
export class CartEffects {
    constructor(private action$: Actions, private cartService: CartService) { }
    loadCart$ = createEffect(() =>
        this.action$.pipe(
            ofType(CartActions.loadCart),
            switchMap(() => {
                return this.cartService.getCartData().pipe(
                    map(cartData => CartActions.loadCartsuccess({ cartData }))
                )
            })
        ))

    addItem$ = createEffect(() =>
        this.action$.pipe(
            ofType(CartActions.addItem),
            switchMap((data) => {
                return this.cartService.addCartItem(data.item).pipe(
                    map(cartData => {
                        return CartActions.addItemSuccess({ cartData: cartData['cart'] })
                    })
                )
            })
        ))

    removeItem$ = createEffect(() =>
        this.action$.pipe(
            ofType(CartActions.removeItem),
            switchMap((data: any) => {
                return this.cartService.removeCartItem(data.id).pipe(
                    map(cartData => {
                        return CartActions.removeItemSuccess({ cartData: cartData['cart'] })
                    })
                )
            })
        ))

    removeQuantity$ = createEffect(() =>
        this.action$.pipe(
            ofType(CartActions.removeQuantity),
            switchMap((data: any) => {
                return this.cartService.handleQuantity(data.id, 'remove').pipe(
                    map(cartData => {
                        return CartActions.removeQuantitySuccess({ cartData: cartData['cart'] })
                    })
                )
            })
        ))
    addQuantity$ = createEffect(() =>
        this.action$.pipe(
            ofType(CartActions.addQuantity),
            switchMap((data: any) => {
                return this.cartService.handleQuantity(data.id, 'add').pipe(
                    map(cartData => {
                        return CartActions.addQuantitySuccess({ cartData: cartData['cart'] })
                    })
                )
            })
        ))

}