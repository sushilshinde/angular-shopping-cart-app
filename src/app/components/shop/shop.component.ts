import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { loadProducts } from '../../store/actions/shop-actions';
import { ShopState } from '../../store/reducers/shop.reducers';
import { Observable } from 'rxjs';
import { Product } from '../../store/shop.model';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {
  products$: Observable<Product[]>;
  loading$: Observable<boolean>;
  error$: Observable<any>;

  constructor(private store: Store<{ shop: ShopState }>) {
    this.products$ = store.select(state => state.shop.products);
    this.loading$ = store.select(state => state.shop.loading);
    this.error$ = store.select(state => state.shop.error);
  }

  ngOnInit() {
    this.store.dispatch(loadProducts());
  }
}
