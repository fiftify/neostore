import * as types from './actionTypes';
import axios from 'axios';

export function loadImagesSuccess(images){
    return {
        type: types.LOAD_IMAGES_SUCCESS,
        images
    };
}

export function loadImages() {
     return function(dispatch){
         return axios('http://180.149.241.208:3000/api/images').then(response => {
             dispatch(loadImagesSuccess(response.data));
         }).catch(error => {
            throw(error) ;
         });
     }
}



