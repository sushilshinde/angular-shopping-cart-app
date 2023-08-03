import { NgModule } from "@angular/core";
import { EffectsModule } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";
import { AuthEffects } from "./authStore/auth.effects";
import { AuthReducer } from "./authStore/auth.reducer";

@NgModule({
    imports: [
        StoreModule.forFeature("auth", AuthReducer),
        EffectsModule.forFeature([AuthEffects])
    ],
    exports: []
})

export class AuthModule { }