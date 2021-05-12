import { createAction, props} from '@ngrx/store';
import { ProductModel } from '../../core/models/product.model';
import { CategoryModel } from '../../core/models/category.model';


export const resquestDataCategory = createAction(
    'REQUEST_DATA_CATEGORY',
);

export const responseDataCategory = createAction(
    'RESPONSE_DATA_CATEGORY',
    props<{ payload:  CategoryModel[]}>()
);

export const resquestData = createAction(
    'REQUEST_DATA',
);

export const responseData = createAction(
    'RESPONSE_DATA',
    props<{ payload: ProductModel[] }>()
);

export const responseBank = createAction(
    'RESPONSE_BANK',
    props<{ payload: ProductModel[] }>()
);

export const responseProductType = createAction(
    'RESPONSE_PRODUCT_TYPE',
    props<{ bankSelected: string }>()
);

export const resquestDataProducts = createAction(
    'REQUEST_DATA_PRODUCT',
    props<{ bankSelected: string }>()
);

export const responseDataProducts = createAction(
    'RESPONSE_DATA_PRODUCT',
    props<{ payload: ProductModel[] }>()
);