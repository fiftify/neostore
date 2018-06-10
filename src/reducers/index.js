import {combineReducers} from 'redux';
import products from './productReducer';
import images from './imageReducer';

const rootReducer = combineReducers({
    products,
    images
})

export default rootReducer;