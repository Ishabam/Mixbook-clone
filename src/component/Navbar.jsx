import React from 'react'
import './Navbar.css'
// import mixbooklogo from '../Image/mixbooklogo.png'

const Navbar = () => {
  return (
    <div className='NavBar'>
        <div className='navbarPink'>
        Shipping is unavailable to your region. We ship to the US, Canada, Europe, UK, and Australia.
        </div>

        <div className='navbarGray'>
            <div className='navbarGrayLeft'>
                    <span>50% Off $159+ 40% Off $99+ or 35% Off $49+</span> Code 
                    <span> GIFTJAN</span> Ends: 09/09 <span className='navbarDetails'>Details</span>
                    <button>APPLY</button>
            </div>

            <div className='navbarGrayRight'>
            Create a custom calendar for the new year! | Shop Calendars »
            </div>
        </div>

        <div className='navbarMain'>
            <div className='navbarMainLeft'>
                <span className='navbarImg'>
                    <img src={'Image/mixbooklogo.png'} alt="" />
                </span>
                <div>PHOTO BOOKS</div>
                <div>CARDS</div>
                <div>CALENDERS</div>
                <div>HOME DECOR</div>
                <div>OCCASIONS</div>
                <div>DEALS</div>
                <div className='navSearch'>
                    <img src="https://img.icons8.com/material-sharp/24/null/search.png"/>
                </div>

            </div>

            <div className='navabarMainRight'>
                <div className='navbarSignUp'>Sign Up</div>
                <div>Log in</div>
                <div>Help</div>
                <img src="https://img.icons8.com/ios/50/null/shopping-cart--v1.png"/>
            </div>
        </div>
    </div>
  )
}

export default Navbar