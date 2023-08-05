import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { addItem } from 'src/app/pages/cart/cart-store/cart.action';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent {
  @Input() name: string
  @Input() price: number
  @Input() discount: number
  @Input() thumbnail: string
  @Input() itemId: number

  constructor(private store: Store) { }

  addToCart() {
    this.store.dispatch(addItem({
      item: {
        title: this.name,
        id: this.itemId,
        price: this.price,
        quantity: 1
      }
    }))
  }

}
