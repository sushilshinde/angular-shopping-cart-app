import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { CheckoutDataService } from '../../core/services/checkout-data.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  // Array to store items in the shopping cart
  cartList = [];

  // Available payment methods
  payment: any = [
    "Paypal",
    "Direct Check",
    "Bank Transfer"
  ];

  // Form data for user details
  formData: any = {
    firstName: 'Kanchugatla',
    lastName: 'Divya',
    email: '',
    mobileNo: '',
    addressLine1: '',
    addressLine2: '',
    city: '',
    zipCode: '',
    country: 'india', // Default value
    state: ''
  };

  constructor(
    private store: Store,
    public router: Router,
    public checkoutDataService: CheckoutDataService
  ) { }

  // Method triggered on form submission
  onSubmit() {
    console.log('Form Data:', this.formData);
  }

  // Method to place an order
  placeOrder(cartList: any) {
    console.log('Form Data:', this.formData);
    // Navigate to the order page
    this.router.navigate(['/order']);
    // Set form data and cart list in the checkout data service
    this.checkoutDataService.setFormData(this.formData);
    this.checkoutDataService.cartList = cartList;
  }

  // Lifecycle hook, executed after component initialization
  ngOnInit() {
    // Subscribe to the cart state in the store
    this.store.select((state: any) => state.cart).subscribe(
      data => {
        // Update the cartList array with the current cart items
        this.cartList = data.cartItem;
        console.log(this.cartList);
      }
    );
  }
}
