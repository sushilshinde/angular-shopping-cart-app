import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { exhaustMap, map } from "rxjs";
import { environment } from "src/environments/environment";

@Injectable({
    providedIn: 'root'
})

export class CartService {
    userId: number;
    cartItem: [];
    constructor(private http: HttpClient, private store: Store) {
        this.store.select((state: any) => state).subscribe(
            data => {
                this.userId = data.auth?.userData?.id;
                this.cartItem = data.cart.cartItem;
            }
        )
    }
    private URL = environment.apiURL;

    getCartData() {
        return this.http.get(this.URL + '/users/' + this.userId).pipe(
            map(data => {
                return data['cartItem']
            })
        )
    }

    addCartItem(data) {
        return this.http.patch(this.URL + '/add-cart/' + this.userId, {
            product: data.id,
            quantity: data.quantity,
        })
    }

    removeCartItem(_id) {
        return this.http.patch(this.URL + '/remove-cart/' + this.userId, {
            _id: _id
        })
    }

    handleQuantity(id, mode) {
        const data: any = JSON.parse(JSON.stringify(this.cartItem))
        const index = data.findIndex((item: any) => item._id === id)
        let quantity;
        if (mode === 'remove') {
            quantity = data[index].quantity - 1
        } else {
            quantity = data[index].quantity + 1
        }
        return this.http.patch(this.URL + '/handle-cart-quantity/' + this.userId, {
            cartId: id,
            quantity
        })
    }
}