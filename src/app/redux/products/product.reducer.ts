import { Action, State, createReducer, on } from '@ngrx/store'
import * as userActions from './product.action'
import { ProductModel } from './../../core/models/product.model'
import { CategoryModel } from './../../core/models/category.model'

export interface ProductsState {
    products: ProductModel[],
    bank: string[],
    productTypes: string[], 
    categorys: CategoryModel[] 
}

export const initialState = { 
  products: [],
  bank: [],
  productTypes: [], 
  categorys: []
};

const featureReducer = createReducer(
    initialState,
    on(userActions.responseData, (state, { payload }) => {
        return { 
            ...state,
            products: payload

        };
    }),
    on(userActions.responseDataCategory, (state, { payload }) => {
        return { 
            ...state,
            categorys: payload

        };
    }),
    on(userActions.responseProductType, (state, { bankSelected }) => {
        var productTypes = []
        state.products['product'].map(p => {
            if(bankSelected === p.accountInformation.bank){
                if(productTypes.indexOf(p.accountInformation.productType) < 0){
                    productTypes.push(p.accountInformation.productType)
                }
              }
        })
        return { 
            ...state,
            productTypes: productTypes
        };
    })
);
  
export function reducer( state: any, action: Action): any {
    return featureReducer(state, action);
}