import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { DetailsComponent } from './pages/details/details.component';
import { CartComponent } from './pages/cart/cart.component';
import { SharedModules } from './sharedModules/shared.module';
import { RouterModule } from '@angular/router';
import { AuthenticationComponent } from './pages/authentication/authentication.component';
import { CartListComponent } from './components/header/cart-list/cart-list.component';
import { HttpClientModule } from '@angular/common/http';
import { CarouselComponent } from './components/carousel/carousel.component';
import { CatCardComponent } from './pages/home/cat-card/cat-card.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CategoryListComponent } from './components/navbar/category-list/category-list.component';
import { MatTreeModule } from '@angular/material/tree';
import { OffersectionCardComponent } from './components/offersection-card/offersection-card.component';
import { TrandyComponent } from './components/trandy/trandy.component';
import { TitlebBarComponent } from './components/titleb-bar/titleb-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    DetailsComponent,
    CartComponent,
    AuthenticationComponent,
    CartListComponent,
    CarouselComponent,
    CatCardComponent,
    NavbarComponent,
    CategoryListComponent,
    OffersectionCardComponent,
    TrandyComponent,
    TitlebBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModules,
    RouterModule,
    HttpClientModule,
    NgbModule,
    MatTreeModule,
    NgbModule
   
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
