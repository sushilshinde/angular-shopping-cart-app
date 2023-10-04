// Import necessary modules and components
import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { addItem } from 'src/app/modules/cart/cart-store/cart.action';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {
  // Input properties for product information
  @Input() name: string;
  @Input() price: number;
  @Input() discount: number;
  @Input() thumbnail: string;
  @Input() itemId: number;
  @Input() item: any;

  // Flag to indicate whether the item exists in the cart
  existInCart = false;

  // Flag to indicate user authentication status
  isAuthenticated: boolean = false;

  // Constructor to inject the store service
  constructor(private store: Store) {}

  // Lifecycle hook called after the component is initialized
  ngOnInit() {
    // Update cart information when the component is initialized
    this.updateCartInfo();
  }

  // Private method to update cart information based on store data
  private updateCartInfo() {
    this.store.select((state: any) => state).subscribe(data => {
      // Check if the user is authenticated
      if (Object.values(data.auth.userData)?.length > 0) {
        this.isAuthenticated = true;
      } else {
        this.isAuthenticated = false;
      }

      // Check if the item exists in the cart
      if (data.cart.cartItem.length > 0) {
        const filteredId = data.cart.cartItem.map(item => item.product._id);
        this.existInCart = filteredId.includes(this.itemId);
      }
    });
  }

  // Method to add the item to the cart
  addToCart() {
    // Check if the user is authenticated
    if (!this.isAuthenticated) {
      // Display an alert if the user is not authenticated
      alert("Please Login to add items in cart...");
      return;
    }

    // Dispatch the 'addItem' action to add the item to the cart
    this.store.dispatch(
      addItem({
        item: {
          id: this.itemId,
          quantity: 1
        }
      })
    );
  }
}
