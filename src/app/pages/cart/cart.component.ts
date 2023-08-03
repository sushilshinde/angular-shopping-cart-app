import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent {
  constructor(private route: ActivatedRoute) {
  }

  cartList = [
    {
      id: 1,
      productName: 'Bags',
      quantity: 2,
      price: 200,
    },
    {
      id: 2,
      productName: 'Bags',
      quantity: 1,
      price: 200,
    },
    {
      id: 3,
      productName: 'Bags',
      quantity: 1,
      price: 200,
    }
  ]
}
