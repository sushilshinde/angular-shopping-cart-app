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

  cartList = []
  total
  constructor(private route: ActivatedRoute, private store: Store) {
  }

  // cartTotal = () => {
  //   console.log(this.cartList)
  //   this.total = this.cartList.reduce((accumulator, currentValue) => {
  //     return accumulator + (currentValue.price * currentValue.quantity)
  //   }, 0)
  // }


  handleRemove(id) {
    this.store.dispatch(removeItem({ id }))
  }

  handleQantity(mode, id) {
    if (mode === 'remove') {
      this.store.dispatch(removeQuantity({ id }))
    }
    else {
      this.store.dispatch(addQuantity({ id }))
    }
  }

  ngOnInit() {
    this.store.select((state: any) => state.cart).subscribe(
      data => {
        this.cartList = data.cartItem
        // this.cartTotal()
      }
    )
  }
}
