import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { addQuantity, removeItem, removeQuantity } from './cart-store/cart.action';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent {
  constructor(private route: ActivatedRoute, private store: Store) {
  }

  cartList = []

  handleRemove(id) {
    this.store.dispatch(removeItem({ id }))
  }

  handleQantity(mode, id) {

    console.log(id);
    if (mode === 'remove') {
      
      // this.cartList[ind].quantity = this.cartList[ind].quantity - 1
      this.store.dispatch(removeQuantity({id}))
    }
    else {
      // this.cartList[ind].quantity = this.cartList[ind].quantity + 1
      this.store.dispatch(addQuantity({id}))
    }
  }

  ngOnInit() {
    this.store.select((state: any) => state.cart).subscribe(
      data => this.cartList = data.cartItem
    )
  }
}
