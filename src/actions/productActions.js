import * as types from './actionTypes';
import axios from 'axios';

export function loadProductsSuccess(products){
    return {
        type: types.LOAD_PRODUCTS_SUCCESS,
        products
    };
}

export function loadProducts() {
     return function(dispatch){
         return axios('http://180.149.241.208:3000/api/products').then(response => {
             dispatch(loadProductsSuccess(response.data));
         }).catch(error => {
            throw(error) ;
         });
     }
}



