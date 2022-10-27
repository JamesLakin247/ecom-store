import React from 'react'
import { Link } from 'react-router-dom'

const faq = () => {
  return (
    <div className='faq-container'>
      <h1>FAQ</h1>
      <Link className='faq-link' to='/store-policy'>Store Policy</Link>
      <Link className='faq-link' to='/shipping-returns'>Shipping & Returns</Link>
      <Link className='faq-link' to='/payment-methods'>Payment Methods</Link>
    </div>
  )
}

export default faq