import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <div className='footer'>
        <div className='footerTop'>
            <div className='footermain contact'>
                <h2>Contact Us</h2>
                <p>Have questions? <span>Chat with us</span> or email us at <br />
                <span>hello@mixbook.com</span> . We'll be glad to help!</p>
                <div className='fdiv'>Help</div>
                <div className='fdiv'>Returns</div>
                <div className='fdiv'>Photo Book Pricing</div>
                <div className='fdiv'>Deals</div>
                <div className='fdiv'>About</div>
                <div className='fdiv'>Careers</div>
                <div className='fdiv'>Customer Stories</div>
                <div className='fdiv'>#1 Rated in Photo Books</div>
                <div className='fdiv'>Mobile App</div>
                <div className='fdiv'>Inspiration</div>
            </div>

            <div className='footermain products'>
                <h2>Product</h2>
                <div className='fdiv'>Photo Books</div>
                <div className='fdiv'>Baby Photo Books</div>
                <div className='fdiv'>Travel Photo Books</div>
                <div className='fdiv'>Home Decor</div>
                <div className='fdiv'>Canvas Print</div>
                <div className='fdiv'>Poster Prints</div>
                <div className='fdiv'>Acrylic Prints</div>
                <div className='fdiv'>Metal Prints</div>
                <div className='fdiv'>Cards</div>
                <div className='fdiv'>Designer Collection</div>
            </div>

            <div className='footermain'>
                <div className='fdiv'>Calendars</div>
                <div className='fdiv'>Photo Birth Announcements</div>
                <div className='fdiv'>Holiday Photo Cards</div>
                <div className='fdiv'>Save the Date Cards</div>
                <div className='fdiv'>Engagement Announcements</div>
                <div className='fdiv'>Wedding Invitations</div>
                <div className='fdiv'>Wedding Photo Books</div>
                <div className='fdiv'>Wedding Guest Books</div>
                <div className='fdiv'>Wedding Albums</div>
            </div>

            <div className='footermain'>
                <h2>Programs</h2>
                <div className='fdiv'>For Business</div>
                <div className='fdiv'>School Yearbooks</div>
                <div className='fdiv'>Affiliate Program</div>
                <div className='fdiv'>Volume Discounts</div>
                <br /><br/>
                <h2>Locations</h2>
                <div className='fdiv'>Australia</div>
                <div className='fdiv'>Canada</div>
                <div className='fdiv'>European Union</div>
                <div className='fdiv'>United Kingdom</div>
            </div>
        </div>
        <div className='footerBottom'>
            <div className='rating'>
                <img src={'Image/rating.png'} alt="" />
            </div>
            <div className='footercenter'>
                <h4>Get Exclusive Offers And Mixbook News</h4>
                <div className='forms'>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email"></input>
                    <button>Submit</button>
                </div>
                <div className='icons'>
                    <img src="https://img.icons8.com/ios-filled/50/null/facebook--v1.png"/>
                    <img src="https://img.icons8.com/glyph-neue/64/null/pinterest.png"/>
                    <img src="https://img.icons8.com/ios-filled/50/null/twitter-squared.png"/>
                    {/* <img src="https://img.icons8.com/sf-black-filled/64/null/instagram-new.png"/> */}
                    <img src="https://img.icons8.com/glyph-neue/64/null/instagram-new.png"/>
                </div>
                <div className='terms'>
                    <div>Press</div>
                    <div>Terms of Service</div>
                    <div>Privacy</div>
                    <div>Returns</div>
                </div>
                <div className='copyright'>
                  © 2006–2023 Mixbook
                </div>
            </div>
            <div className='bbb'>
                <img src={'Image/bbb.png'} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Footer