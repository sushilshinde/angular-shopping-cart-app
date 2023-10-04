// Importing necessary modules from Angular and RxJS
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { exhaustMap, map } from "rxjs";
import { environment } from "src/environments/environment";

// Injectable decorator to declare that this service should be provided at the root level
@Injectable({
    providedIn: 'root'
})
export class CartService {
    // Properties to store user ID and cart items
    userId: number;
    cartItem: [];

    // Constructor to inject the HttpClient and Store services
    constructor(private http: HttpClient, private store: Store) {
        // Subscribe to the store to get user ID and cart items
        this.store.select((state: any) => state).subscribe(
            data => {
                this.userId = data.auth?.userData?.id;
                this.cartItem = data.cart.cartItem;
            }
        )
    }

    // Private property to store the base API URL from the environment
    private URL = environment.apiURL;

    // Function to fetch cart data from the server
    getCartData() {
        return this.http.get(this.URL + '/users/' + this.userId).pipe(
            map(data => {
                return data['cartItem'];
            })
        );
    }

    // Function to add an item to the cart
    addCartItem(data) {
        return this.http.patch(this.URL + '/add-cart/' + this.userId, {
            product: data.id,
            quantity: data.quantity,
        });
    }

    // Function to remove an item from the cart
    removeCartItem(_id) {
        return this.http.patch(this.URL + '/remove-cart/' + this.userId, {
            _id: _id
        });
    }

    // Function to handle the quantity of items in the cart
    handleQuantity(id, mode) {
        const data: any = JSON.parse(JSON.stringify(this.cartItem));
        const index = data.findIndex((item: any) => item._id === id);
        let quantity;
        if (mode === 'remove') {
            quantity = data[index].quantity - 1;
        } else {
            quantity = data[index].quantity + 1;
        }
        return this.http.patch(this.URL + '/handle-cart-quantity/' + this.userId, {
            cartId: id,
            quantity
        });
    }
}
