import React from 'react'

import { useAppDispatch, useAppSelector } from '../app/hooks'
import { addItem } from '../features/cart/cartSlice'

interface ItemInputs {
  id: string
  name: string
  description: string
  img: any
  price: number
}

const Item = (props:ItemInputs) => {

    const items = useAppSelector(state => state.cart.entities)
    const dispatch = useAppDispatch()

    const handleClick = () => {
        dispatch(addItem({
          id: props.id,
          name: props.name,
          price: props.price,
          description: props.description,
          img: props.img
        }))
    }

  return (
    <div className='item-card'>
      <div className='item-img-wrapper'>
        <img className='item-img' src={props.img} alt='' />
      </div>
        <div className='item-description-container'>
            <p className='item-description'>{props.name}</p>
            <p className='item-description'>{props.description}</p>
            <p className='item-price'>{`$${props.price}`}</p>
            <button className='item-btn' onClick={() => handleClick()}>Add to cart</button>
        </div>
    </div>
  )
}

export default Item