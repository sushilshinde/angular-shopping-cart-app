import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { emptyCart } from 'src/app/modules/cart/cart-store/cart.action';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css'],
})
export class CartListComponent {
  @Input() cartData!: Array<any>;
  constructor(private store:Store){

  }
  clearCart(){
   this.store.dispatch(emptyCart())
  }
}
