import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/header/header.component';
import { DetailsComponent } from './pages/details/details.component';
import { CartComponent } from './pages/cart/cart.component';
import { SharedModules } from './sharedModules/shared.module';
import { RouterModule } from '@angular/router';
import { AuthenticationComponent } from './pages/authentication/authentication.component';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CategoryListComponent } from './components/navbar/category-list/category-list.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { ShopComponent } from './components/shop/shop.component';
import { shopReducer } from './store/reducers/shop.reducers';
import { ShopEffects } from './store/shop.effects';
import { ProductCarouselComponent } from './pages/product-details/product-carousel/product-carousel.component';
import { ColorsComponent } from './pages/product-details/colors/colors.component';
import { HomeModule } from './pages/home/home.module';
import { CategoryModule } from './pages/category-page/cat-page.module';
import { RatingComponent } from './pages/product-details/rating/rating.component';
import { SizeComponent } from './pages/product-details/size/size.component';
import { ProductDetailsComponent } from './pages/product-details/product-details.component';
import { CartListComponent } from './components/header/cart-list/cart-list.component';
import { AuthModule } from './pages/authentication/auth.module';
import { cartReducer } from './pages/cart/cart-store/cart.reducer';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { CartEffects } from './pages/cart/cart-store/cart.effects';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { MatTabsModule } from '@angular/material/tabs';
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { CarouselModule } from 'ngx-owl-carousel-o';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DetailsComponent,
    CartComponent,
    AuthenticationComponent,
    NavbarComponent,
    CategoryListComponent,
    ShopComponent,
    ProductDetailsComponent,
    RatingComponent,
    SizeComponent,
    ColorsComponent,
    CategoryListComponent,
    CartListComponent,
    NotFoundComponent,
    ProductCarouselComponent,
    CheckoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModules,
    RouterModule,
    HttpClientModule,
    StoreModule.forRoot({ shop: shopReducer, cart: cartReducer }),
    EffectsModule.forRoot([ShopEffects, CartEffects]),
    HomeModule,
    CategoryModule,
    AuthModule,
    MatButtonToggleModule,
    MatTabsModule,
    CarouselModule, 
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
