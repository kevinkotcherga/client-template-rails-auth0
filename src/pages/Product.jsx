import React from 'react'
import { useEffect, useState } from "react"
import { useLocation } from 'react-router-dom';
import { publicRequest } from '../requestMethods';
import '../styles/components/product.scss'

const Product = () => {
    const [product, setProduct] = useState({});
    const location = useLocation();
    const id = location.pathname.split('/')[2];

    useEffect(()=>{
    const getProduct = async () => {
      try {
        const res = await publicRequest.get(`/products/${id}.json`);
        setProduct(res.data);
      } catch {}
    };
    getProduct()
  }, [id]);

  return (

      <div className='product-container'>
        <div>
          <img className='product-img' src={product.img} alt="" />
          <div>{product.title}</div>
          <div>{product.price}€</div>
        </div>
      </div>

  )
}

export default Product
