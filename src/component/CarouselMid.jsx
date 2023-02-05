import React from 'react'
import './CarouselMid.css'
import Carousel from 'react-bootstrap/Carousel';
import Comp1 from './Comp1';
import Comp2 from './Comp2';
import Comp3 from './Comp3';

const CarouselMid = () => {
    return (
    <Carousel fade className='CarouselMid' indicators={false} prevLabel={null} nextLabel={null}>
      <Carousel.Item interval={2000}>
        <Comp1 />
      </Carousel.Item>
      
      <Carousel.Item interval={2000}>
        <Comp2 />
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <Comp3 />
      </Carousel.Item>
    </Carousel>
  )
}

export default CarouselMid