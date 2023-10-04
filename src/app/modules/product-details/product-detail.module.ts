// Import necessary Angular modules
import { NgModule } from "@angular/core";
import { StoreModule } from "@ngrx/store";

// Import shared modules (assuming it's defined in 'src/app/shared/sharedModules/shared.module')
import { SharedModules } from "src/app/shared/sharedModules/shared.module";

// Import components from the product details feature
import { ColorsComponent } from "../product-details/colors/colors.component";
import { ProductDetailsComponent } from "../product-details/product-details.component";
import { RatingComponent } from "../product-details/rating/rating.component";
import { SizeComponent } from "../product-details/size/size.component";

// Angular module decorator for the product module
@NgModule({
    // Declare components included in this module
    declarations: [ProductDetailsComponent, RatingComponent, SizeComponent, ColorsComponent],

    // Import other modules required by this module
    imports: [SharedModules],

    // Export components to make them accessible in other modules
    exports: [ProductDetailsComponent, RatingComponent, SizeComponent, ColorsComponent],
})
export class ProductModule { }
