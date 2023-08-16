import { NgModule } from "@angular/core";
import { SharedModules } from "src/app/shared/sharedModules/shared.module";

import { CheckoutComponent } from "./checkout.component";
import { PlaceorderComponent } from "./placeorder/placeorder.component";


@NgModule({
    declarations: [CheckoutComponent, PlaceorderComponent],
    imports: [SharedModules],
    exports: [CheckoutComponent, PlaceorderComponent]
})
export class CheckoutModule { }