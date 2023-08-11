import { NgModule } from '@angular/core'
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { SharedModules } from 'src/app/shared/sharedModules/shared.module';
import { CategoryPageComponent } from './category-page.component';
import { CatPageEffect } from './category-store/cat-page.effects';
import { catPageReducer } from './category-store/cat-page.reducer';
import { FilterCard } from './components/filterCard/filtercard.component';

@NgModule({
    declarations: [
        CategoryPageComponent,
        FilterCard
    ],
    imports: [SharedModules, StoreModule.forFeature("catData", catPageReducer), EffectsModule.forFeature([CatPageEffect])],
    exports: [
        CategoryPageComponent,
        FilterCard
    ]
})

export class CategoryModule {

}