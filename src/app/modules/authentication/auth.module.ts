import { NgModule } from "@angular/core";
import { EffectsModule } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";
import { SharedModules } from "src/app/shared/sharedModules/shared.module";
import { AuthEffects } from "../../shared/authentication/authStore/auth.effects";
import { AuthReducer } from "../../shared/authentication/authStore/auth.reducer";
import { AuthenticationComponent } from "./authentication.component";

@NgModule({
    declarations:[AuthenticationComponent],
    imports: [
        StoreModule.forFeature("auth", AuthReducer),
        EffectsModule.forFeature([AuthEffects]),
        SharedModules
    ],
    exports: [AuthenticationComponent]
})

export class AuthModule { }