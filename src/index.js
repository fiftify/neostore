import React from 'react';
import ReactDOM from 'react-dom';

import configureStore from './store/configureStore';
import {Provider} from 'react-redux';
import {loadProducts} from './actions/productActions';
import {loadImages} from './actions/imageActions';

import './styles/styles.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import App from './components/App';


const store = configureStore();
store.dispatch(loadProducts());
store.dispatch(loadImages());

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
document.getElementById('root'));