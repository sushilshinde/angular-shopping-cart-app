import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShopComponent } from './components/shop/shop.component';
import { AuthGaurd } from './pages/authentication/auth-gaurd.service';
import { RestrictAuth } from './pages/authentication/authentication-gaurd.service';
import { AuthenticationComponent } from './pages/authentication/authentication.component';
import { CartComponent } from './pages/cart/cart.component';
import { CategoryPageComponent } from './pages/category-page/category-page.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { HomeComponent } from './pages/home/home.component';
import { ProductDetailsComponent } from './pages/product-details/product-details.component';

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
    path: 'auth/login',
    component: AuthenticationComponent,
    canActivate: [RestrictAuth]
  },
  {
    path: 'auth/register',
    component: AuthenticationComponent,
    canActivate: [RestrictAuth]
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  {
    path: 'shop/:cat',
    component: CategoryPageComponent,
  },
  {
    path: 'cart',
    component: CartComponent,
    data: {
      showCart: false,
    },

  }, 
  {
    path: 'details',
    component: ProductDetailsComponent,
  },
  { 
    path: 'product-details', 
    component: ProductDetailsComponent
   },

  {
   path:'checkout',
   component: CheckoutComponent
  }
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
