import React from 'react'
import './Main.css'

import { useState } from 'react';

const arr = [
    {
        "img1":'/Image/m1.png',
        "img2" :'/Image/m2.png',
        "img3":'/Image/m3.png',
        "img4":'/Image/m4.png',
        "img5":'/Image/m5.png',
        "img6":'/Image/m6.png',
        "img7":'/Image/m7.png',
        "img8":'/Image/m8.png',
        "img9":'/Image/m9.png',
        "img10":'/Image/m10.png',
        "img11":'/Image/m11.png',
        "img12":'/Image/m12.png',
        "img13":'/Image/m13.png',
        "img14":'/Image/m14.png',
        "img15":'/Image/m15.png',
        "img16":'/Image/m16.png',
        "img17":'/Image/m17.png',
        "img18":'/Image/m18.png',
        "img19":'/Image/m19.png',
        "img20":'/Image/m20.png'
    },
    {
        "img1":'/Image/m10.png',
        "img2" :'/Image/m9.png',
        "img3":'/Image/m8.png',
        "img4":'/Image/m7.png',
        "img5":'/Image/m6.png',
        "img6":'/Image/m5.png',
        "img7":'/Image/m4.png',
        "img8":'/Image/m3.png',
        "img9":'/Image/m2.png',
        "img10":'/Image/m1.png',
        "img11":'/Image/m20.png',
        "img12":'/Image/m19.png',
        "img13":'/Image/m18.png',
        "img14":'/Image/m17.png',
        "img15":'/Image/m16.png',
        "img16":'/Image/m15.png',
        "img17":'/Image/m14.png',
        "img18":'/Image/m13.png',
        "img19":'/Image/m12.png',
        "img20":'/Image/m11.png'
    },
    {
        "img1":'/Image/m20.png',
        "img2" :'/Image/m19.png',
        "img3":'/Image/m18.png',
        "img4":'/Image/m17.png',
        "img5":'/Image/m16.png',
        "img6":'/Image/m15.png',
        "img7":'/Image/m14.png',
        "img8":'/Image/m13.png',
        "img9":'/Image/m12.png',
        "img10":'/Image/m11.png',
        "img11":'/Image/m10.png',
        "img12":'/Image/m9.png',
        "img13":'/Image/m8.png',
        "img14":'/Image/m7.png',
        "img15":'/Image/m6.png',
        "img16":'/Image/m5.png',
        "img17":'/Image/m4.png',
        "img18":'/Image/m3.png',
        "img19":'/Image/m2.png',
        "img20":'/Image/m1.png'
    },
    {
        "img1":'/Image/m9.png',
        "img2" :'/Image/m8.png',
        "img3":'/Image/m7.png',
        "img4":'/Image/m6.png',
        "img5":'/Image/m5.png',
        "img6":'/Image/m4.png',
        "img7":'/Image/m3.png',
        "img8":'/Image/m2.png',
        "img9":'/Image/m1.png',
        "img10":'/Image/m10.png',
        "img11":'/Image/m20.png',
        "img12":'/Image/m19.png',
        "img13":'/Image/m18.png',
        "img14":'/Image/m17.png',
        "img15":'/Image/m16.png',
        "img16":'/Image/m15.png',
        "img17":'/Image/m14.png',
        "img18":'/Image/m13.png',
        "img19":'/Image/m12.png',
        "img20":'/Image/m11.png'
    },
    {
        "img1":'/Image/m11.png',
        "img2" :'/Image/m12.png',
        "img3":'/Image/m13.png',
        "img4":'/Image/m14.png',
        "img5":'/Image/m15.png',
        "img6":'/Image/m16.png',
        "img7":'/Image/m17.png',
        "img8":'/Image/m18.png',
        "img9":'/Image/m19.png',
        "img10":'/Image/m20.png',
        "img11":'/Image/m1.png',
        "img12":'/Image/m2.png',
        "img13":'/Image/m3.png',
        "img14":'/Image/m4.png',
        "img15":'/Image/m5.png',
        "img16":'/Image/m6.png',
        "img17":'/Image/m7.png',
        "img18":'/Image/m8.png',
        "img19":'/Image/m9.png',
        "img20":'/Image/m10.png'
    }
];

const Main = () => {
    const [cal,setCal] = useState(arr[0]);
    const calender = (id) => {
        console.log(arr[id]);
        setCal(arr[id]);
    }
  return (
    <div className='Mains'>
        <div className='line line1'>
            <div className='b1 b11'> <img src={cal.img1} alt="" /> </div>
            <div className='b1 b12'> <img src={cal.img2} alt="" /> </div>
            <div className='b1 b11'> <img src={cal.img3} alt="" /> </div>
            <div className='b1 b12'> <img src={cal.img4} alt="" /> </div>
            <div className='b1 b11'> <img src={cal.img5} alt="" /> </div>
            <div className='b1 b12'> <img src={cal.img6} alt="" /> </div>
            <div className='b1 b11'> <img src={cal.img7} alt="" /> </div>
            <div className='b1 b12'> <img src={cal.img8} alt="" /> </div>
        </div>

        <div className='line line2'>
            <div className='b1 b11'> <img src={cal.img9} alt="" /> </div>
            <div className='b1 b12'> <img src={cal.img10} alt="" /> </div>

            <div className='MainContent'>
                {/* <CenterMain /> */}
                <div className='MainHeading'>Beautiful <span>Designs </span> Made Easy</div>
                <p>Let you creativity run wild with the #1 rated photo book company</p>
                <div className='MainBtn'>
                        <button onMouseEnter={()=>calender(0)} >CALENDARS</button>
                        <button onMouseEnter={()=>calender(1)}>YEAR IN REVIEW</button>
                        <button onMouseEnter={()=>calender(2)}>TRAVEL</button>
                        <button onMouseEnter={()=>calender(3)}>WEDDING</button>
                        <button onMouseEnter={()=>calender(4)}>FAMILY</button>
            </div>
            </div>

            <div className='b1 b11'> <img src={cal.img11} alt="" /> </div>
            <div className='b1 b12'> <img src={cal.img12} alt="" /> </div>

        </div>

        <div className='line line3'>
            <div className='b1 b11'> <img src={cal.img13} alt="" /> </div>
            <div className='b1 b12'> <img src={cal.img14} alt="" /> </div>
            <div className='b1 b11'> <img src={cal.img15} alt="" /> </div>
            <div className='b1 b12'> <img src={cal.img16} alt="" /> </div>
            <div className='b1 b11'> <img src={cal.img17} alt="" /> </div>
            <div className='b1 b12'> <img src={cal.img18} alt="" /> </div>
            <div className='b1 b11'> <img src={cal.img19} alt="" /> </div>
            <div className='b1 b12'> <img src={cal.img20} alt="" /> </div>
        </div>

    </div>
  )
}

export default Main;