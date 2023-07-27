import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css'],
})
export class CartListComponent {
  @Input() cartData!: Array<any>;
  total: number = 0;

  ngOnInit() {
    this.total = this.cartData.reduce(
      (acc, cur) => acc + cur.price * cur.quantity,
      0
    );
  }
}
