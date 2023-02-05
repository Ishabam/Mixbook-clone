import React from 'react'
import './Create.css'
// import create from '../Image/create.png'

const Create = () => {
  return (
    <div className='create'>
        <div className='createLeft'>
            <h1>Your Story, Your Way</h1>
            <p>Our editor gives you the creative freedom to fully customize your design — it's free, fun, and easy to use on any device.</p>
            <button>CREATE NOW</button>
        </div>
        <div className='createRight'>
            <img src={'Image/create.png'} alt="" />
        </div>
    </div>
  )
}

export default Create