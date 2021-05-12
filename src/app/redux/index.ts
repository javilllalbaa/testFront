import * as productReducer from './products/product.reducer';
import * as userReducer from './user/user.reducer';
import { ActionReducerMap} from '@ngrx/store';

export interface State {
  products: productReducer.ProductsState;
  user: userReducer.UserState
}

export const reducers: ActionReducerMap<State> = {
  products: productReducer.reducer,
  user: userReducer.reducer
};