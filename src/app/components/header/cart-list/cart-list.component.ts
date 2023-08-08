import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css'],
})
export class CartListComponent {
  @Input() cartData!: Array<any>;
  constructor(private store: Store) { }
  
  
  ngOnInit() {

  }
}
