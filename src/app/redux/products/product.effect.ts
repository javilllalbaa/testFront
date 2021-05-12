import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as userActions from './product.action';
import { switchMap, map, mergeMap } from 'rxjs/operators';
import { ProductService } from '../../core/services/product.service';

@Injectable()
export class ProductEffects {

    constructor(
        private actions$: Actions,
        private productService: ProductService
    ) { }

    productsAllEfect$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(userActions.resquestData),
            switchMap((data) => this.productService.getAllProducts().pipe(
                mergeMap((payload) => [
                    userActions.responseData({ payload })
                ])
            ))
        )
    });

    categoryEfect$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(userActions.resquestDataCategory),
            switchMap(() => this.productService.getCategory().pipe(
                mergeMap((payload) => [
                    userActions.responseDataCategory({ payload })
                ])
            ))
        )
    });
}

