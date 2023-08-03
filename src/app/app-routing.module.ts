import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShopComponent } from './components/shop/shop.component';
import { AuthenticationComponent } from './pages/authentication/authentication.component';
import { CartComponent } from './pages/cart/cart.component';
import { HomeComponent } from './pages/home/home.component';
import { ProductDetailsComponent } from './pages/product-details/product-details.component';
import { ProductsComponent } from './pages/products/products.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
  {
   path: 'shop',
   component: ShopComponent
  },
  {
    path: 'auth',
    component: AuthenticationComponent,
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  {
    path: 'shop',
    component: ProductsComponent,
  },
  {
    path: 'cart',
    component: CartComponent,
    data: {
      showCart: false,
    },

  },{
  path: 'details',
  component: ProductDetailsComponent,
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
