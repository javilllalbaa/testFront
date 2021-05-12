import { Action, State, createReducer, on } from '@ngrx/store'
import { responseDataUser, responseloginUser } from './user.action'
import { ProductModel } from './../../core/models/product.model'

export interface UserState {
}

export const initialState = { 
  user: {},
};

const featureReducer = createReducer(
    initialState,
    on(responseDataUser, (state, { payload }) => {
        return {
            ...state,
            user: payload
        }
    }),
    on(responseloginUser, (state, { payload }) => {
        return { 
            ...state,
            user: payload
        };
    })
);
  
export function reducer( state: any, action: Action): any {
    return featureReducer(state, action);
}