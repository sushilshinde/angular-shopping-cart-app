// Import necessary Angular modules and components
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { SharedModules } from 'src/app/shared/sharedModules/shared.module';
import { CategoryPageComponent } from './category-page.component';
import { CatPageEffect } from './category-store/cat-page.effects';
import { catPageReducer } from './category-store/cat-page.reducer';
import { FilterCard } from './components/filterCard/filtercard.component';

// Decorator to declare this class as an Angular module
@NgModule({
    // List of components, directives, and pipes in this module
    declarations: [
        CategoryPageComponent,
        FilterCard
    ],

    // List of external modules used by this module
    imports: [
        SharedModules,
        StoreModule.forFeature("catData", catPageReducer), // Define the feature store for catData
        EffectsModule.forFeature([CatPageEffect]) // Register the effects for the feature
    ],

    // List of components, directives, and pipes that are exported from this module
    exports: [
        CategoryPageComponent,
        FilterCard
    ]
})
export class CategoryModule {
    // This class represents the Angular module for the category feature
}
