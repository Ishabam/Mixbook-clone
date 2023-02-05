import React from 'react'
import Carousel from 'react-bootstrap/Carousel';

import './Mixbooker.css'

const MixbookCar = () => {
  return (
    <div className='MixbookCar'>
        <Carousel fade variant="dark" indicators={false} prevLabel={null} nextLabel={null}>
            <Carousel.Item interval={2000}>
                <img src={'Image/mix1.png'} alt="" />
                <img src={'Image/mix2.png'} alt="" />
                <img src={'Image/mix3.png'} alt="" />
                <img src={'Image/mix7.png'} alt="" />
            </Carousel.Item>
            <Carousel.Item interval={2000}>
                <img src={'Image/mix4.png'} alt="" />
                <img src={'Image/mix5.png'} alt="" />
                <img src={'Image/mix6.png'} alt="" />
                <img src={'Image/mix8.png'} alt="" />
            </Carousel.Item>
            <Carousel.Item interval={2000}>
                <img src={'Image/mix9.png'} alt="" />
                <img src={'Image/mix10.png'} alt="" />
                <img src={'Image/mix11.png'} alt="" />
                <img src={'Image/mix12.png'} alt="" />
            </Carousel.Item>
        </Carousel>
    </div>
  )
}

export default MixbookCar