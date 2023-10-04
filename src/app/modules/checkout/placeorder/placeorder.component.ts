import { Component, OnInit } from '@angular/core';
import { CheckoutDataService } from 'src/app/core/services/checkout-data.service';

@Component({
  selector: 'app-placeorder',
  templateUrl: './placeorder.component.html',
  styleUrls: ['./placeorder.component.css']
})
export class PlaceorderComponent implements OnInit {
  // Properties to store form data and cart list
  formData: any = {};
  cartList: any[] = [];

  constructor(private checkoutDataService: CheckoutDataService) {}

  ngOnInit() {
    // Retrieve form data and cart list from CheckoutDataService during component initialization
    this.formData = this.checkoutDataService.getFormData();
    this.cartList = this.checkoutDataService.cartList || [];
  }
}
