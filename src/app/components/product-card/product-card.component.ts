import { Component, Input, AfterViewChecked } from '@angular/core';
import { Store } from '@ngrx/store';
import { addItem } from 'src/app/modules/cart/cart-store/cart.action';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements AfterViewChecked {
  @Input() name: string;
  @Input() price: number;
  @Input() discount: number;
  @Input() thumbnail: string;
  @Input() itemId: number;
  @Input() item: any;
  existInCart = false;
  isAuthenticated: boolean = false;

  constructor(private store: Store) {}

  ngAfterViewChecked() {
    this.updateCartInfo();
  }

  private updateCartInfo() {
    this.store.select((state: any) => state).subscribe(data => {
      if (Object.values(data.auth.userData)?.length > 0) {
        this.isAuthenticated = true;
      } else {
        this.isAuthenticated = false;
      }
      if (data.cart.cartItem.length > 0) {
        const filteredId = data.cart.cartItem.map(item => item.product._id);
        this.existInCart = filteredId.includes(this.itemId);
      }
    });
  }

  addToCart() {
    if (!this.isAuthenticated) {
      alert("Please Login to add items in cart...");
      return;
    }
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
