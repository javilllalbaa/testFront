import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { resquestDataUser, responseDataUser, loginUser, responseloginUser } from './user.action';
import { switchMap, map, mergeMap } from 'rxjs/operators';
import { UserService } from '../../core/services/user.service';
import { UserModel } from './../../core/models/user.model'

@Injectable()
export class UserEffects {

    constructor(
        private actions$: Actions,
        private userService: UserService
    ) { }

    userEfect$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(resquestDataUser),
            switchMap(() => this.userService.getJSON().pipe(
                mergeMap((payload) => [
                    responseDataUser({ payload })
                ])
            ))
        )
    });

    loginEfect$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(loginUser),
            switchMap((data) => {
                return this.userService.login(data).pipe(
                    mergeMap((payload) => [
                        responseloginUser({ payload })
                    ])
                );
            })
        )
    });

}