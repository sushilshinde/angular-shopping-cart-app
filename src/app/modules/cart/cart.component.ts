// Import necessary Angular modules and libraries
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';

// Import action creators for handling cart-related actions
import { addQuantity, removeItem, removeQuantity } from './cart-store/cart.action';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent {
  // Properties to store cart items and total
  cartList = [];
  total;

  constructor(private route: ActivatedRoute, private store: Store) {}

  // Method to handle the removal of an item from the cart
  handleRemove(id) {
    this.store.dispatch(removeItem({ id }));
  }

  // Method to handle the adjustment of quantity (add or remove) for a cart item
  handleQuantity(mode, id) {
    if (mode === 'remove') {
      this.store.dispatch(removeQuantity({ id }));
    } else {
      this.store.dispatch(addQuantity({ id }));
    }
  }

  // Lifecycle hook: ngOnInit is called after the component is initialized
  ngOnInit() {
    // Subscribe to the cart state in the store to get updates
    this.store.select((state: any) => state.cart).subscribe(
      (data) => {
        // Update the cartList property with the latest cart items
        this.cartList = data.cartItem;
        
        // Uncomment the following line if a method for calculating total is needed
        // this.cartTotal();
      }
    );
  }
}
