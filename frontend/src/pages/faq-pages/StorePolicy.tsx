import React from 'react'
import {Link} from 'react-router-dom'

const StorePolicy = () => {
  return (
    <div className='container-small'>
        <Link to='/faq'>{`< FAQ`}</Link>
        <h2>Store Policy</h2>
        <p>This is our store policy.</p>
    </div>
  )
}

export default StorePolicy