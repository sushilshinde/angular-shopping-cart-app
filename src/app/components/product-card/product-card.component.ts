import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { addItem } from 'src/app/modules/cart/cart-store/cart.action';

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
  isAuthenticated: boolean = false

  constructor(private store: Store) {
  }

  ngOnInit() {
    this.store.select((state: any) => state
    ).subscribe(data => {
      if (Object.values(data.auth.userData).length > 0) {
        this.isAuthenticated = true
      }
      else {
        this.isAuthenticated = false
      }
      if (data.cart.cartItem.length > 0) {
        const filteredId = data.cart.cartItem.map(item => item.id)
        if (filteredId.includes(this.itemId)) {
          this.existInCart = true;
        }
      }
    })
  }

  addToCart() {
    if (!this.isAuthenticated) {
      alert("Please Login to add items in cart...")
      return;
    }
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
