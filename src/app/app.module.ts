import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/header/header.component';
import { CartComponent } from './modules/cart/cart.component';
import { SharedModules } from './shared/sharedModules/shared.module';
import { RouterModule } from '@angular/router';
import { AuthenticationComponent } from './modules/authentication/authentication.component';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CategoryListComponent } from './components/navbar/category-list/category-list.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { ShopComponent } from './modules/shop/shop.component';
import { shopReducer } from './store/shop.reducers';
import { ShopEffects } from './store/shop.effects';
import { ProductCarouselComponent } from './modules/product-details/product-carousel/product-carousel.component';
import { ColorsComponent } from './modules/product-details/colors/colors.component';
import { HomeModule } from './modules/home/home.module';
import { CategoryModule } from './modules/category-page/cat-page.module';
import { RatingComponent } from './modules/product-details/rating/rating.component';
import { SizeComponent } from './modules/product-details/size/size.component';
import { ProductDetailsComponent } from './modules/product-details/product-details.component';
import { CartListComponent } from './components/header/cart-list/cart-list.component';
import { AuthModule } from './modules/authentication/auth.module';
import { cartReducer } from './modules/cart/cart-store/cart.reducer';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatTabsModule } from '@angular/material/tabs';
import { CheckoutComponent } from './modules/checkout/checkout.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { CartEffects } from './modules/cart/cart-store/cart.effects';
import { TotalPipe } from './shared/custom-pipes/total.pipe';
import { CustomCurrencyPipe } from './components/custom-pipe/custom-currency.pipe'
import { PlaceorderComponent } from './modules/checkout/placeorder/placeorder.component';
import { ProductSearchComponent } from './modules/product-search/product-search.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
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
    CheckoutComponent,
    TotalPipe,
    CustomCurrencyPipe,
    PlaceorderComponent,
    ProductSearchComponent
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
