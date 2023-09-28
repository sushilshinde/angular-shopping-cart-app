import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { SharedModules } from './shared/sharedModules/shared.module';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CategoryListComponent } from './components/navbar/category-list/category-list.component';
import { HomeModule } from './modules/home/home.module';
import { CategoryModule } from './modules/category-page/cat-page.module';
import { CartListComponent } from './components/header/cart-list/cart-list.component';
import { AuthModule } from './modules/authentication/auth.module';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ProductSearchComponent } from './modules/product-search/product-search.component';
import { CartModule } from './modules/cart/cart.module';
import { CheckoutModule } from './modules/checkout/checkout.module';
import { ProductModule } from './modules/product-details/product-detail.module';
import { ShopModule } from './modules/shop/shop.module';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarComponent,
    CategoryListComponent,
    CartListComponent,
    NotFoundComponent,
    ProductSearchComponent, 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModules,
    StoreModule.forRoot(),
    EffectsModule.forRoot([]),
    HomeModule,
    CategoryModule,
    AuthModule,
    CartModule,
    CheckoutModule,
    ProductModule,
    ShopModule,
<<<<<<< HEAD
   
    
=======
    ReactiveFormsModule
>>>>>>> main
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
