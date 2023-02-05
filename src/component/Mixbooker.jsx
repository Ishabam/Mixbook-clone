import React from 'react'
import './Mixbooker.css'
// import { Carousel } from '@trendyol-js/react-carousel'; 
import MixbookCar from './MixbookCar'

const Mixbooker = () => {
  return (
    <div className='Mixbooker'>
        <h1>Meet Our Community Of Mixbookers</h1>
        <p>Get inspired by what others are making, or add your own project to <br/>
        Instagram for a chance to be featured here.</p>

        <MixbookCar />
        

        <button className='mixbookButton'>GET INSPIRED</button>
    </div>
  )
}

export default Mixbooker