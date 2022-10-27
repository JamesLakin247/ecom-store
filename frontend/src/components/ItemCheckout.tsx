import React from 'react'
import { useAppSelector, useAppDispatch } from '../app/hooks'
import {removeItem} from '../features/cart/cartSlice'

interface ItemInput {
  id: string
  name: string
  description: string
  img: any
  price: number
}

const ItemCheckout = (props:ItemInput) => {

  const dispatch = useAppDispatch()

  const items = useAppSelector(state => state.cart.entities)

  const handleRemoveItem = (e: any) => {
     dispatch(removeItem(props.id))
  }

  return (
    <div className='item-checkout-card'>
      <div className='item-info'>
        <img className='item-img' src={props.img} alt=''/>
        <div className='item-desc'>
          <p>{props.name}</p>
          <p>{props.description}</p>
          <button onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => handleRemoveItem(e)}>Remove</button>
        </div>
      </div>
      <p className='item-price'>{`$${props.price}`}</p>
    </div>
  )
}

export default ItemCheckout