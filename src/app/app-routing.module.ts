// Import necessary modules from Angular
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Import components used in the routing configuration
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ProductSearchComponent } from './modules/product-search/product-search.component';
import { ShopComponent } from './modules/shop/shop.component';
import { AuthGuard } from './core/gaurds/auth-gaurd.service';
import { RestrictAuth } from './core/gaurds/authentication-gaurd.service';
import { AuthenticationComponent } from './modules/authentication/authentication.component';
import { CartComponent } from './modules/cart/cart.component';
import { CategoryPageComponent } from './modules/category-page/category-page.component';
import { CheckoutComponent } from './modules/checkout/checkout.component';
import { PlaceorderComponent } from './modules/checkout/placeorder/placeorder.component';
import { HomeComponent } from './modules/home/home.component';
import { ProductDetailsComponent } from './modules/product-details/product-details.component';

// Define the routes for the application
const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    // loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'shop',
    component: ShopComponent
  },
  {
    path: 'auth/login',
    component: AuthenticationComponent,
    canActivate: [RestrictAuth] // Use the authentication guard for login
  },
  {
    path: 'auth/register',
    component: AuthenticationComponent,
    canActivate: [RestrictAuth] // Use the authentication guard for registration
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
    canActivate: [AuthGuard], // Use the authentication guard for accessing the cart
    data: {
      showCart: false,
    },
  },
  {
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
    canActivate: [AuthGuard] // Use the authentication guard for accessing the checkout
  },
  {
    path: 'order',
    component: PlaceorderComponent
  },
  {
    path: '**',
    component: NotFoundComponent
  },
];

// Define the routing module
@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule],
})
export class AppRoutingModule { }
