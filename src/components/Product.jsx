import React from 'react'
import '../styles/components/product.scss'
import { Link } from 'react-router-dom'


const Product = ({ item }) => {
  return (

      <div className='product-container'>
        <Link to={`/product/${item.id}`}>
          <div className='circle'>
            <img className='product-img' src={item.img} alt="" />
          </div>
        </Link>
      </div>

  )
}

export default Product
