// Import necessary Angular modules and libraries
import { NgModule } from "@angular/core";
import { EffectsModule } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";

// Import shared modules for reusability
import { SharedModules } from "src/app/shared/sharedModules/shared.module";

// Import effects and reducer for the Cart feature
import { CartEffects } from "./cart-store/cart.effects";
import { cartReducer } from "./cart-store/cart.reducer";

// Import the CartComponent for declaration and export
import { CartComponent } from "./cart.component";

// NgModule decorator to define the CartModule
@NgModule({
    // Declarations: Components, Directives, and Pipes in this module
    declarations: [CartComponent],

    // Imports: Other modules whose exported classes are needed by component templates declared in this module
    imports: [
        SharedModules, // Import shared modules
        StoreModule.forFeature("cart", cartReducer), // Configure the store for the "cart" feature using the cartReducer
        EffectsModule.forFeature([CartEffects]) // Register effects for the "cart" feature
    ],

    // Exports: Components, Directives, and Pipes that can be used in other modules
    exports: [CartComponent]
})
export class CartModule { }
