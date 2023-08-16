import { NgModule } from "@angular/core";
import { EffectsModule } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";
import { SharedModules } from "src/app/shared/sharedModules/shared.module";
import { ShopEffects } from "src/app/modules/shop/store/shop.effects";
import { shopReducer } from "src/app/modules/shop/store/shop.reducers";
import { ProductCarouselComponent } from "../product-details/product-carousel/product-carousel.component";
import { ShopComponent } from "./shop.component";



@NgModule({
    declarations: [ShopComponent, ProductCarouselComponent],
    imports: [StoreModule.forFeature("shop", shopReducer), EffectsModule.forFeature([ShopEffects])],
    exports: [ShopComponent, ProductCarouselComponent]
})
export class ShopModule { }