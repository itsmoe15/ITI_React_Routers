import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ProductCard from './ProductCard'
import axios from "axios";

function Category() {
  const { category } = useParams()
  const [products, setProducts] = useState([])

  useEffect(() => {
    async function fetchProducts() {
      const res = await axios.get(`https://dummyjson.com/products/category/${category}`);
      setProducts(res.data.products || []);
    }
    fetchProducts();
  }, [category]);

  console.log(`logged from Category ${category}`);

  return (
    <div>
      <h2>Category: {category}</h2>
      <div>
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}


export default Category
