import React from 'react'
import {Link} from 'react-router-dom'

const Checkout = () => {
  return (
    <div className='checkout-container'>
      <h1>Coming Soon</h1>
      <Link className='checkout-back-btn' to='/cart'>Back to cart</Link>
    </div>
  )
}

export default Checkout