import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ProductSearchComponent } from './pages/product-search/product-search.component';
import { ShopComponent } from './pages/shop/shop.component';
import { AuthGaurd } from './core/gaurds/auth-gaurd.service';
import { RestrictAuth } from './core/gaurds/authentication-gaurd.service';
import { AuthenticationComponent } from './pages/authentication/authentication.component';
import { CartComponent } from './pages/cart/cart.component';
import { CategoryPageComponent } from './pages/category-page/category-page.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { PlaceorderComponent } from './pages/checkout/placeorder/placeorder.component';
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
    canActivate: [AuthGaurd],
    data: {
      showCart: false,
    },

  }, {
    path: 'details/:id',
    component: ProductDetailsComponent,
  },
  {
    path: 'product-search',
    component: ProductSearchComponent
  },
  {
    path: 'checkout',
    component: CheckoutComponent,
    canActivate: [AuthGaurd]
  }, 
  { path: 'order', 
  component: PlaceorderComponent
 },
  {
    path: '**',
    component: NotFoundComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule],
})
export class AppRoutingModule { }
