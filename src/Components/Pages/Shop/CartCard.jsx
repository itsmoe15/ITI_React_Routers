import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addItemToCart, removeItemFromCart, removeProductCompletely } from '../../../RTX/Slices/CartSlice';

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

      <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
        <button
          onClick={(e) => {
            e.stopPropagation();
            dispatch(removeItemFromCart(product.id));
          }}
        >
          -
        </button>
        <span>{product.quantity}</span>
        <button
          onClick={(e) => {
            e.stopPropagation();
            dispatch(addItemToCart(product));
          }}
        >
          +
        </button>
      </div>

      <div>Total Price: ${product.price * product.quantity}</div>

      <button
        onClick={(e) => {
            e.stopPropagation();
            dispatch(removeProductCompletely(product.id));
        }}
      >
        Remove from Cart
      </button>
    </div>
  );
}

export default CartCard;
