// Import necessary modules and services
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { ShopService } from '../../core/services/shop.service';
import { addItem } from '../cart/cart-store/cart.action';

// Component decorator indicating the selector, template, and style files
@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent {
  // Component properties
  id: number;
  productData;
  count = 1;
  existInCart = false;
  isAuthenticated: boolean = false;
  isLoading = false;

  // Constructor with dependency injection
  constructor(private route: ActivatedRoute, private shopService: ShopService, private store: Store) {
    // Subscribe to route params to get the product ID
    this.route.params.subscribe(params => this.id = params['id']);
  }

  // Method to add the item to the cart
  addItemToCart() {
    // Check if the user is authenticated
    if (!this.isAuthenticated) {
      alert("Please Login to add items in cart...");
      return;
    }

    // Dispatch the addItem action with the item details
    this.store.dispatch(addItem({
      item: {
        id: this.productData._id,
        quantity: this.count
      }
    }));
  }

  // Method to handle increment or decrement of item count
  handleCount(mode) {
    if (mode === 'add') {
      this.count = this.count + 1;
    } else {
      this.count = this.count - 1;
    }
  }

  // Lifecycle hook called when the component is initialized
  ngOnInit() {
    // Set loading to true
    this.isLoading = true;

    // Subscribe to the store to get authentication and cart data
    this.store.select((state: any) => state).subscribe(data => {
      // Check if the user is authenticated
      if (Object.values(data.auth.userData)?.length > 0) {
        this.isAuthenticated = true;
      } else {
        this.isAuthenticated = false;
      }

      // Get product details from the service using the ID
      this.shopService.getProductById(this.id).subscribe(
        (data: any) => {
          this.productData = data.data;
          this.isLoading = false;
        }
      );

      // Subscribe to cart data to check if the product is already in the cart
      this.store.select((state: any) => state.cart.cartItem).subscribe(data => {
        if (data?.length > 0) {
          const filteredId = data.map(item => item?.id);
          if (filteredId.includes(+this.id)) {
            this.existInCart = true;
          }
        }
      });
    });
  }
}
