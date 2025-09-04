import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchProducts } from '../../../RTX/Slices/Products.js';

import ProductCard from './ProductCard.jsx'
import { v4 as uuidv4 } from 'uuid';

function All() {
  let products = useSelector(state => state.products)


  let dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchProducts())
  }, [])

  return (
    <div>

      <h1>Home</h1>
      {
        products.map((p) => (
          <ProductCard key={uuidv4()} product={p} />
        ))
      }

    </div>
  )
}

export default All