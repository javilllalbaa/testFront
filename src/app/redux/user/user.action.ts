import { createAction, props} from '@ngrx/store';
import { UserModel } from '../../core/models/user.model';

export const resquestDataUser = createAction(
    'REQUEST_DATA_USER',
);

export const responseDataUser = createAction(
    'RESPONSE_DATA_USER',
    props<{ payload: UserModel[] }>()
);


export const loginUser = createAction(
    'LOGIN_USER',
    props<{ payload: UserModel[] }>()
);

export const responseloginUser = createAction(
    'RESPONSE_LOGIN_USER',
    props<{ payload: UserModel }>()
);

// export const responseBank = createAction(
//     'RESPONSE_BANK',
//     props<{ payload: ProductModel[] }>()
// );

// export const responseProductType = createAction(
//     'RESPONSE_PRODUCT_TYPE',
//     props<{ bankSelected: string }>()
// );