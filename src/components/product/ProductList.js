import React from 'react';
import {Grid,Row,Col} from 'react-bootstrap';
import SingleProduct from './SingleProduct';

const ProductList =({products}) => {
    return (
        
        <Grid>
            <Row className="show-grid">
            {products.slice(0,6).map((product,i) => {
                return (<Col key={product.id} xs={12} md={4}>
                    <SingleProduct key={i} product={product}/>
                </Col>)
            })}
            </Row>
        </Grid>
        
    )
}


export default ProductList;

