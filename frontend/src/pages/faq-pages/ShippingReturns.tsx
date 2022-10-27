import React from 'react'
import {Link} from 'react-router-dom'

const ShippingReturns = () => {
  return (
    <div className='container-small'>
        <Link to='/faq'>{`< FAQ`}</Link>
        <h2>Shipping & Returns</h2>
        <p>This is our policy for shipping and returns.</p>
    </div>
  )
}

export default ShippingReturns