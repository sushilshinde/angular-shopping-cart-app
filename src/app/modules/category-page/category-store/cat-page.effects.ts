import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, Observable, of, switchMap, tap } from 'rxjs'
import { CatService } from "../../../core/services/category-page.service";
import * as fromCatAction from './cat-page.action'

@Injectable()
export class CatPageEffect {
    constructor(private action$: Actions, private catService: CatService) { };

    // Effect to handle loading cat data
    catData: Observable<any> = createEffect(() =>
        this.action$.pipe(
            // Listening for LOAD_DATA action
            ofType(fromCatAction.CatDataActions.LOAD_DATA),
            switchMap(
                // Fetching cat data from the service based on the query
                (data: any) => this.catService.getCatData(data.query).pipe(
                    // Dispatching a success action with the retrieved data
                    map(data => new fromCatAction.LoadCatDataSuccess(data)),
                    // Handling errors by dispatching a failure action
                    catchError(err => of(new fromCatAction.LoadCatDataFail(err.message)))
                )
            )
        )
    )
}
