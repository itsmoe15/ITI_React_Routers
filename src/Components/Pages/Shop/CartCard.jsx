import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { removeItemFromCart } from '../../../RTX/Slices/CartSlice';

function CartCard({ product }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

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
      <img src={product.thumbnail} alt={product.title} />
      <h3>{product.title}</h3>
      <div>{product.description}</div>
      <div>Quantity: {product.quantity}</div>
      <div>Total Price: ${product.price * product.quantity}</div>

<button
  onClick={(e) => {
    e.stopPropagation();
    dispatch(removeItemFromCart(product.id)); 
  }}
>
  Remove from Cart
</button>

    </div>
  );
}

export default CartCard;
