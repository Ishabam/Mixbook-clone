import React from 'react'
import './Banner.css'


const Banner = () => {
  return (
    <div className='Banner'>
        <div className='BannerLeft'>
            <p>"Mixbook actually makes it fun to create photo books."</p>
            <img src={'Image/wirecutter.png'} alt="" />
        </div>
        <div className='BannerMid'>
            <img src={'Image/Rated.png'} alt="" />
        </div>
        <div className='BannerRight'>
            <p>"You can customize everything to your liking."</p>
            <img src={'Image/house.png'} alt="" />
        </div>
    </div>
  )
}

export default Banner