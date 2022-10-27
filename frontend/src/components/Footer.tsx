import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer>
        <div className='footer-container'>
          <div className='footer-links-containier'>
            <div className='footer-faq-links'>
              <Link className='footer-faq-link' to='/shipping-returns'>Shipping & Returns</Link>
              <Link className='footer-faq-link' to='/store-policy'>Shipping & Returns</Link>
              <Link className='footer-faq-link' to='/payment-methods'>Payment Methods</Link>
            </div>
            <div className='footer-contact-links'>
              <Link className='footer-contact-link' to='/contact'>Contact</Link>
              <p>Ph: 123-456-7890</p>
            </div>
            <div className='footer-social-links'>
              <a rel='noopener' className='footer-social-link' href="https://www.facebook.com/facebook/" target='_blank'>Facebook</a>
              <a rel='noopener' className='footer-social-link' href="https://www.instagram.com/instagram/?hl=en" target='_blank'>Instagram</a>
              <a rel='noopener' className='footer-social-link' href="https://www.pinterest.com.au/#top" target='_blank'>Pinterest</a>
            </div>
          </div>
          {/* <div className='mailing-list'>
            <p>Join our mailing list and never miss an update</p>
          </div> */}
        </div>
    </footer>
  )
}

export default Footer