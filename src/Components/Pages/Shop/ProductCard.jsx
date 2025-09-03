import React from 'react';
import { useNavigate } from 'react-router-dom';

function ProductCard({ product }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/product/${product.id}`);
  };

  return (
    <div
      style={{
        border: '4px solid #c20404ff',
        margin: '8px',
        padding: '8px',
        cursor: 'pointer'
      }}
      onClick={handleClick}
    >
      <img
        src={product.thumbnail}
      />
      <h3>{product.title}</h3>
      <div>{product.description}</div>
      <div>Price: ${product.price}</div>
    </div>
  );
}

export default ProductCard;