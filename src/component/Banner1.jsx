import React from 'react'
import './Banner1.css'
const Banner1 = () => {
  return (
    <div className='Banner1'>
        <div className='Banner1Left'>
            <h2>100% Happiness Guaranteed</h2>
            <p>At Mixbook, we believe your creation experience should be fun and uncomplicated. It’s why we work hard to ensure every step of your creation process — from design to your finished product — is just the way you want it every time, or we’ll make it right.</p>
            <button>FIND OUT MORE</button>
        </div>
        <div className='Banner1Right'>
            <img src={'Image/Banner.png'} alt="" />
        </div>
    </div>
  )
}

export default Banner1