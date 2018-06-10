import React from 'react';
import {Carousel} from 'react-bootstrap';

const MyCarousel = ({images}) => {
    return (
        <Carousel>
          {images.map(image => {
            return (<Carousel.Item key={image.id}>
                <img width={720} height={300} alt="900x500" src={image.ImgURL} />
                </Carousel.Item>);
          })}
        </Carousel>
    );
}


export default MyCarousel;

