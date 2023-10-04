// Import necessary modules from Angular
import { NgModule } from "@angular/core";
import { EffectsModule } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";

// Import shared modules from the application
import { SharedModules } from "src/app/shared/sharedModules/shared.module";

// Import NgRx effects and reducer related to the 'shop' feature
import { ShopEffects } from "src/app/modules/shop/store/shop.effects";
import { shopReducer } from "src/app/modules/shop/store/shop.reducers";

// Import components related to the 'shop' feature
import { ProductCarouselComponent } from "../product-details/product-carousel/product-carousel.component";
import { ShopComponent } from "./shop.component";

// Decorate the class with @NgModule to define an Angular module
@NgModule({
    // Declare the components included in this module
    declarations: [ShopComponent, ProductCarouselComponent],

    // Import necessary modules, including shared modules, NgRx StoreModule, and NgRx EffectsModule
    imports: [SharedModules, StoreModule.forFeature("shop", shopReducer), EffectsModule.forFeature([ShopEffects])],

    // Export components to make them accessible outside of this module
    exports: [ShopComponent, ProductCarouselComponent]
})
export class ShopModule { }
