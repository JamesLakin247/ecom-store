import React from 'react'
import {Link} from 'react-router-dom'

const PaymentMethods = () => {
  return (
    <div className='container-small'>
        <Link to='/faq'>{`< FAQ`}</Link>
        <h2>Payment Methods</h2>
        <p>These are our methods of payment.</p>
    </div>
  )
}

export default PaymentMethods