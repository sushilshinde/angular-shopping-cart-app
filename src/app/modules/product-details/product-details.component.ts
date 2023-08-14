import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { ShopService } from '../../core/services/shop.service';
import { addItem } from '../cart/cart-store/cart.action';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent {
  id: number;
  productData;
  count = 1
  existInCart = false;
  isAuthenticated: boolean = false
  
  constructor(private route: ActivatedRoute, private shopService: ShopService, private store: Store) {
    this.route.params.subscribe(params => this.id = params['id'])
  }

  addItemToCart() {
    if (!this.isAuthenticated) {
      alert("Please Login to add items in cart...")
      return;
    }
    this.store.dispatch(addItem({
      item: {
        title: this.productData.title,
        id: this.productData.id,
        price: this.productData.price,
        quantity: this.count
      }
    }))
  }

  handleCount(mode) {
    if (mode === 'add') {
      this.count = this.count + 1
    }
    else {
      this.count = this.count - 1
    }
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
    this.shopService.getProductById(this.id).subscribe(
      (data: any) => {
        this.productData = data
      }
    )
    this.store.select((state: any) => state.cart.cartItem
    ).subscribe(data => {
      if (data.length > 0) {
        const filteredId = data.map(item => item?.id)
        if (filteredId.includes(+this.id)) {
          this.existInCart = true;
        }
      }
    })
  }

    )
}
}
