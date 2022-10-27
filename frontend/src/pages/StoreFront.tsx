import React from 'react'
import {v4 as uuid} from 'uuid'

import Item from '../components/Item'

import Basketball from '../images/basketball.jpg'

import { useAppDispatch, useAppSelector } from '../app/hooks'
import { addItem } from '../features/cart/cartSlice'

const StoreFront = () => {

    const items = useAppSelector(state => state.cart.entities)

    const uniqueId = () => {
      return uuid()
    }

  return (
    <div>
        <div className='product-display'>
            <Item key={1} id={uniqueId()} img={Basketball} description={'game ready basketball'} name='basketball 1' price={20}/>
            <Item key={2} id={uniqueId()} img={Basketball} description={'game ready basketball'} name='basketball 2' price={25}/>
            <Item key={3} id={uniqueId()} img={Basketball} description={'game ready basketball'} name='basketball 3' price={10}/>
            <Item key={4} id={uniqueId()} img={Basketball} description={'game ready basketball'} name='basketball 4' price={30}/>
        </div>
        <h1>About</h1>
        <article>this is our mission statement</article>
    </div>
  )
}

export default StoreFront