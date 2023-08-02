import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, Observable, of, switchMap, tap } from 'rxjs'
import { CatService } from "../category-page.service.ts/category-page.service";
import * as fromCatAction from './cat-page.action'

@Injectable()
export class CatPageEffect {
    constructor(private action$: Actions, private catService: CatService) { };
    catData: Observable<any> = createEffect(() =>
        this.action$.pipe(
            ofType(fromCatAction.CatDataActions.LOAD_DATA),
            switchMap(
                (data: any) => this.catService.getCatData(data.query).pipe(
                    map(data => new fromCatAction.LoadCatDataSuccess(data)),
                    catchError(err => of(new fromCatAction.LoadCatDataFail(err.message)))
                )
            )
        )
    )
}