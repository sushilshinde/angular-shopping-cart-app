import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { SharedModules } from "src/app/sharedModules/shared.module";
import { ProductsComponent } from "./products.component";

@NgModule({
    declarations: [ProductsComponent],
    imports: [SharedModules, RouterModule.forChild([])],
    exports: [ProductsComponent, RouterModule]
})
export class ProductModule { }