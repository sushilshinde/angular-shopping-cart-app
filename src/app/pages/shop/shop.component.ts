import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { loadProducts } from '../../store/shop-actions';
import { ShopState } from '../../store/shop.model';
import { Observable } from 'rxjs';
import { Product } from '../../store/shop.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {
  products$: Observable<Product[]>;
  loading$: Observable<boolean>;
  error$: Observable<any>;

  constructor(private store: Store<{ shop: ShopState }>,private router:Router) {
    this.products$ = store.select(state => state.shop.products);
    this.loading$ = store.select(state => state.shop.loading);
    this.error$ = store.select(state => state.shop.error);
  }
 
  ngOnInit() {
    this.store.dispatch(loadProducts());
  }
  viewProductDetail(product: any) {
    this.router.navigate(['/product-details'], { queryParams: { product: JSON.stringify(product) } });
  }
}
