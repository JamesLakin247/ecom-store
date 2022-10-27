import React from 'react'
import { Link } from 'react-router-dom'
import { useAppSelector } from '../app/hooks'

const Header = () => {

  const cartItems = useAppSelector(state => state.cart.entities)

  return (
    <header>
        <div className='header-container'>
            <span className='header-logo'>Logo</span>
            <ul className='header-nav'>
                <li><Link className='header-nav-link' to='/'>shop</Link></li>
                <li><Link className='header-nav-link' to="/faq">FAQ</Link></li>
                <li><Link className='header-nav-link' to='/contact'>contact</Link></li>
            </ul>
            <div className='header-cart'>
              {/* <Link className='header-cart-link' to='/cart'>cart</Link>
              {cartItems.length && <p className='header-cart-value'>{cartItems.length}</p>} */}
              <Link className='header-cart-link' to='/cart'>
                <p className='header-cart-text'>cart</p>
                {cartItems.length ? <p className='header-cart-value'>{cartItems.length}</p> : ''}
              </Link>
            </div>
        </div>
    </header>
  )
}

export default Header