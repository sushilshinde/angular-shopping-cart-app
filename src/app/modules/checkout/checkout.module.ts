// Import necessary modules from Angular
import { NgModule } from "@angular/core";

// Import shared modules
import { SharedModules } from "src/app/shared/sharedModules/shared.module";

// Import checkout components
import { CheckoutComponent } from "./checkout.component";
import { PlaceorderComponent } from "./placeorder/placeorder.component";

// NgModule decorator for organizing and configuring the module
@NgModule({
    // Declare the components belonging to this module
    declarations: [CheckoutComponent, PlaceorderComponent],

    // Import other modules needed for the components
    imports: [SharedModules],

    // Export components to make them accessible to other modules
    exports: [CheckoutComponent, PlaceorderComponent]
})
export class CheckoutModule { }
