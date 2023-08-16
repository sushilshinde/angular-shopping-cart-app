import { NgModule } from "@angular/core";
import { EffectsModule } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";
import { SharedModules } from "src/app/shared/sharedModules/shared.module";
import { CartEffects } from "./cart-store/cart.effects";
import { cartReducer } from "./cart-store/cart.reducer";
import { CartComponent } from "./cart.component";


@NgModule({
    declarations: [CartComponent],
    imports: [SharedModules,
        StoreModule.forFeature("cart", cartReducer),
        EffectsModule.forFeature([CartEffects])],
    exports: [CartComponent]
})
export class CartModule { }