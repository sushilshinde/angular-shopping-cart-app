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
import { CartListComponent } from './components/header/cart-list/cart-list.component';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CategoryListComponent } from './components/navbar/category-list/category-list.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { HomeModule } from './pages/home/home.module';
import { ProductModule } from './pages/products/products.module';
import { catPageReducer } from './pages/category-page/category-store/cat-page.reducer';
import { CatPageEffect } from './pages/category-page/category-store/cat-page.effects';
import { CategoryModule } from './pages/category-page/cat-page.module';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DetailsComponent,
    CartComponent,
    AuthenticationComponent,
    CartListComponent,
    NavbarComponent,
    CategoryListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModules,
    RouterModule,
    HttpClientModule,
    HomeModule,
    ProductModule,
    StoreModule.forRoot({  }),
    EffectsModule.forRoot([]),
    CategoryModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
