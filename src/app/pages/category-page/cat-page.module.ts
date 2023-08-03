import { NgModule } from '@angular/core'
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { SharedModules } from 'src/app/sharedModules/shared.module';
import { CategoryPageComponent } from './category-page.component';
import { CatPageEffect } from './category-store/cat-page.effects';
import { catPageReducer } from './category-store/cat-page.reducer';
import { FilterCard } from './components/filterCard/filtercard.component';
import { ProductCardComponent } from './components/product-card/product-card.component';

@NgModule({
    declarations: [
        CategoryPageComponent,
        FilterCard,
        ProductCardComponent
    ],
    imports: [SharedModules, StoreModule.forFeature("catData", catPageReducer), EffectsModule.forFeature([CatPageEffect])],
    exports: [
        CategoryPageComponent,
        FilterCard,
        ProductCardComponent
    ]
})

export class CategoryModule {

}