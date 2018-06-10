import React from 'react';
import {connect} from 'react-redux';

import Header from './common/Header';
import MyCarousel from './common/MyCarousel';
import Footer from './common/Footer';
import ProductList from './product/ProductList';

const mapStateToProps = (state,ownProps) => {
    const getImageByProductId = id => {
        return state.images.find(image => image.productId === id);
    }
    let modifiedProducts = [];
    let carouselImages = [];
    
    state.products.map(product => {
        let image = getImageByProductId(product.id);
        let modifiedProduct = Object.assign({}, product, image);
        modifiedProducts.push(modifiedProduct);
        return true;
    })
    
    state.images.slice(0,5).map(image => {
        carouselImages.push(image);
        return true;
    })
    
    return {
        products: modifiedProducts,
        carouselImages: carouselImages
    }    
}


class App extends React.Component {
    
    
    render(){
        const {products} = this.props;
        return (
            <div>
                <Header/>
                <div className="container main">
                <MyCarousel images={this.props.carouselImages}/>
                <h3 className="text-center">Popular Products<small>{' '}--<a href="http://180.149.241.208:3001/product/list">view all</a></small></h3>
                <ProductList products={products} />
                </div>
                <Footer/>
            </div>
            )
    }
}


export default connect(mapStateToProps)(App);