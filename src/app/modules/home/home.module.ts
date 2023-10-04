// Import necessary Angular modules and components
import { NgModule } from "@angular/core";
import { CarouselComponent } from "src/app/components/carousel/carousel.component";
import { OffersectionCardComponent } from "src/app/components/offersection-card/offersection-card.component";
import { TrandyComponent } from "src/app/components/trandy/trandy.component";
import { SharedModules } from "src/app/shared/sharedModules/shared.module";
import { CatCardComponent } from "./cat-card/cat-card.component";
import { HomeComponent } from "./home.component";

// NgModule decorator for HomeModule
@NgModule({
    // Declarations: Components that belong to this module
    declarations: [OffersectionCardComponent, TrandyComponent, HomeComponent, CatCardComponent, CarouselComponent],
    // Imports: Other modules whose exported components are needed by the components declared in this module
    imports: [SharedModules],
    // Exports: Components that are made available to other modules
    exports: [OffersectionCardComponent, HomeComponent, TrandyComponent, CatCardComponent],
})
// Class representing the Angular module for the home feature
export class HomeModule { }
