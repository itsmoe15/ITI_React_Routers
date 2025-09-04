import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { clearCart } from "../../RTX/Slices/CartSlice";
import CartCard from "./Shop/CartCard";

function Cart() {
  const { items, totalQuantity } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Welcome To Your Cart</h1>
      <h2 style={{ textAlign: "center" }}>Total Items: {totalQuantity}</h2>

      
      <>
        <div style={{ display: "flex", flexWrap: "wrap" }}>
          {items.map((item) => (
            <CartCard key={item.id} product={item} />
          ))}
          </div>

        {items.length ? (
          <button onClick={() => dispatch(clearCart())} style={{ marginTop: "16px", padding: "8px", cursor: "pointer" }}>
            Clear Cart
          </button>
        ) : (
          <p style={{ textAlign: "center" }}>cart is empty</p>
        )}
      </>
    </div>
  );
}

export default Cart;
