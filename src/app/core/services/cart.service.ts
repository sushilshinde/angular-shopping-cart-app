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
            map(data => data['cart'])
        )
    }

    addCartItem(data) {
        return this.http.patch(this.URL + '/users/' + this.userId, {
            cart: [
                ...this.cartItem,
                data
            ]
        })
    }

    removeCartItem(id) {
        const filteredarray = this.cartItem.filter(item => item['id'] !== id)
        return this.http.patch(this.URL + '/users/' + this.userId, {
            cart: filteredarray
        })
    }

    handleQuantity(id, mode) {
        const data: any = JSON.parse(JSON.stringify(this.cartItem))
        const index = data.findIndex((item: any) => item.id === id)
        if (mode === 'remove') {
            data[index].quantity = data[index].quantity - 1
        } else {
            data[index].quantity = data[index].quantity + 1
        }
        return this.http.patch(this.URL + '/users/' + this.userId, {
            cart: data
        })
    }
}