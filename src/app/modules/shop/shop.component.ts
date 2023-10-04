// Import necessary modules from Angular
import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { loadProducts } from './store/shop-actions';
import { ShopState } from './store/shop.model';
import { Observable } from 'rxjs';
import { Product } from './store/shop.model';
import { Router } from '@angular/router';

// Decorate the class with @Component to define an Angular component
@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {
  // Declare variables to store observables related to the shop state
  products$: Observable<Product[]>;
  loading$: Observable<boolean>;
  error$: Observable<any>;

  // Inject the Store service and Router service into the component
  constructor(private store: Store<{ shop: ShopState }>, private router: Router) {
    // Select the relevant slices of the state using the Store service
    this.products$ = store.select(state => state.shop.products);
    this.loading$ = store.select(state => state.shop.loading);
    this.error$ = store.select(state => state.shop.error);
  }
 
  // Lifecycle hook called after the component is initialized
  ngOnInit() {
    // Dispatch an action to load products when the component is initialized
    this.store.dispatch(loadProducts());
  }

  // Method to navigate to the product details page
  viewProductDetail(product: any) {
    // Use the Router service to navigate to the 'product-details' page
    // Pass the selected product as a query parameter in the URL
    this.router.navigate(['/product-details'], { queryParams: { product: JSON.stringify(product) } });
  }
}
