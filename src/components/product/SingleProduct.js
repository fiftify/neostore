import React from 'react';
import { Card, CardImg, CardBody} from 'reactstrap';
import StarRatingComponent from 'react-star-rating-component';
import thousands from 'thousands';

const SingleProduct = ({product}) => {
 return (
      <div className="product-card text-center">
      <Card className="card-item">
        <CardImg top width="250" src={product.ThumbURL250}/>
        <CardBody>
          <h4><a href={product.id}>{product.product_name}</a></h4>
          <h4>₹{thousands(product.product_cost)}</h4>
          <h4><StarRatingComponent 
            name={"rate1"} /* name of the radio input, it is required */
            value={product.product_avg_rating} /* number of selected icon (`0` - none, `1` - first) */
            starColor={"#f03c56"} /* color of selected icons, default `#ffb400` */
            emptyStarColor={"#333"} /* color of non-selected icons, default `#333` */
            editing={false} /* is component available for editing, default `true` */
          /></h4>
        </CardBody>
      </Card>
    </div>
    )   
}

export default SingleProduct;