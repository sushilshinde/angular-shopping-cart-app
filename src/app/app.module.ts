// Import necessary modules from Angular and third-party libraries
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

// Import the main routing module
import { AppRoutingModule } from './app-routing.module';

// Import the root component of the application
import { AppComponent } from './app.component';

// Import various components used in the application
import { HeaderComponent } from './components/header/header.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CategoryListComponent } from './components/navbar/category-list/category-list.component';
import { CartListComponent } from './components/header/cart-list/cart-list.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ProductSearchComponent } from './modules/product-search/product-search.component';

// Import shared modules (assumed to be custom shared modules)
import { SharedModules } from './shared/sharedModules/shared.module';

// Import feature modules for different sections of the application
import { HomeModule } from './modules/home/home.module';
import { CategoryModule } from './modules/category-page/cat-page.module';
import { AuthModule } from './modules/authentication/auth.module';
import { CartModule } from './modules/cart/cart.module';
import { CheckoutModule } from './modules/checkout/checkout.module';
import { ProductModule } from './modules/product-details/product-detail.module';
import { ShopModule } from './modules/shop/shop.module';

// Import Angular Reactive Forms module
import { ReactiveFormsModule } from '@angular/forms';

// Define the main application module using the @NgModule decorator
@NgModule({
  // Declare all the components that belong to this module
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarComponent,
    CategoryListComponent,
    CartListComponent,
    NotFoundComponent,
    ProductSearchComponent,
  ],

  // Import all the necessary modules for the application
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModules,
    StoreModule.forRoot(), // Setup the NgRx store
    EffectsModule.forRoot([]), // Setup NgRx effects
    HomeModule,
    CategoryModule,
    AuthModule,
    CartModule,
    CheckoutModule,
    ProductModule,
    ShopModule,
    ReactiveFormsModule, // Include the Reactive Forms module
  ],

  // Define providers for the application
  providers: [],

  // Specify the root component of the application
  bootstrap: [AppComponent],
})
export class AppModule {}
