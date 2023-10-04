// Importing necessary modules and classes from Angular
import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { emptyCart } from 'src/app/modules/cart/cart-store/cart.action';

// Component decorator to define metadata for the component
@Component({
  selector: 'app-cart-list', // Selector used to embed the component in HTML
  templateUrl: './cart-list.component.html', // Path to the component's HTML template
  styleUrls: ['./cart-list.component.css'], // Array of stylesheet files for the component
})

// CartListComponent class
export class CartListComponent {
  @Input() cartData!: Array<any>; // Input property to receive cart data from the parent component

  // Constructor to inject dependencies
  constructor(private store: Store) {}

  // Function to clear the cart using a Redux action
  clearCart() {
    this.store.dispatch(emptyCart()); // Dispatching the emptyCart action to clear the cart
  }
}
