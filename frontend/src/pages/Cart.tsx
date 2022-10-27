import React from 'react'
import {Link} from 'react-router-dom'

import Item from '../components/Item'
import ItemCheckout from '../components/ItemCheckout'

import { useAppDispatch, useAppSelector } from '../app/hooks'
import { addItem } from '../features/cart/cartSlice'

const Cart = () => {

    const cartItems = useAppSelector(state => state.cart.entities)

    const subtotal = () => {
        const numberValues = cartItems.map(item => {
            return item.price
        })

        const total = numberValues.reduce((previousValue, currentValue) => previousValue + currentValue, 0)

        return total
    }

    const total = subtotal()

    const renderCart = cartItems.map(item => {
        return <ItemCheckout key={1} id={item.id} img={item.img} name={item.name} description={item.description} price={item.price} />
    })

  return (
    <div className='cart-container'>
        <div className='cart-items-container'>
            <h2>Cart</h2>
            {cartItems.length ? renderCart : <h2>Your cart is empty</h2>}
        </div>
        <div className='cart-info-checkout'>
            <h2>Summary</h2>
            <p>{`Subtotal: $${subtotal()}`}</p>
            <p>Shipping: FREE</p>
            <p className='cart-total'>Total: ${total}</p>
            <Link to='/checkout' className={cartItems.length ? 'cart-checkout-btn' : 'cart-checkout-btn cart-checkout-btn-disabled'}>Checkout</Link>
        </div>
    </div>
  )
}

export default Cart