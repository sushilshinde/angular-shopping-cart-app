import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { CarouselComponent } from "src/app/components/carousel/carousel.component";
import { OffersectionCardComponent } from "src/app/components/offersection-card/offersection-card.component";
import { TrandyComponent } from "src/app/components/trandy/trandy.component";
import { SharedModules } from "src/app/shared/sharedModules/shared.module";
import { CatCardComponent } from "./cat-card/cat-card.component";
import { HomeComponent } from "./home.component";

@NgModule({
    declarations: [OffersectionCardComponent, TrandyComponent,
        HomeComponent,
        CatCardComponent, CarouselComponent,],
    imports: [
      
        SharedModules
    ],
    exports: [
        OffersectionCardComponent,
        HomeComponent,
        TrandyComponent,
        CatCardComponent,
    ]
})

export class HomeModule { }