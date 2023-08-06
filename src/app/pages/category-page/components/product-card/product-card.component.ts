import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { addItem } from 'src/app/pages/cart/cart-store/cart.action';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent {
  @Input() name: string;
  @Input() price: number;
  @Input() discount: number;
  @Input() thumbnail: string;
  @Input() itemId: number;
  @Input() item: any;
  existInCart = false;

  constructor(private store: Store) {
  }

  ngOnInit() {
    this.store.select((state: any) => state.cart.cartItem
    ).subscribe(data => {
      if (data.length > 0) {
        const filteredId = data.map(item => item.id)
        if (filteredId.includes(this.itemId)) {
          this.existInCart = true;
        }
      }
    })
  }

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
