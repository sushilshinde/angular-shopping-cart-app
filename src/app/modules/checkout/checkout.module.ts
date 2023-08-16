import { NgModule } from "@angular/core";

import { CheckoutComponent } from "./checkout.component";
import { PlaceorderComponent } from "./placeorder/placeorder.component";


@NgModule({
    declarations: [CheckoutComponent, PlaceorderComponent],
    imports: [],
    exports: [CheckoutComponent, PlaceorderComponent]
})
export class CheckoutModule { }