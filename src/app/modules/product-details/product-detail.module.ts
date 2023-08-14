import { NgModule } from "@angular/core";
import { StoreModule } from "@ngrx/store";
import { SharedModules } from "src/app/shared/sharedModules/shared.module";
import { ColorsComponent } from "../product-details/colors/colors.component";
import { ProductDetailsComponent } from "../product-details/product-details.component";
import { RatingComponent } from "../product-details/rating/rating.component";
import { SizeComponent } from "../product-details/size/size.component";


@NgModule({
    declarations: [ProductDetailsComponent, RatingComponent, SizeComponent, ColorsComponent],
    imports: [SharedModules],
    exports: [ProductDetailsComponent, RatingComponent, SizeComponent, ColorsComponent,
    ]
})
export class ProductModule { }