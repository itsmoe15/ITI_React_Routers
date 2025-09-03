import React from "react";
import { Link } from "react-router-dom";

function ProductCard({ product }) {
  return (
    <Link
      to={`/shop/product/${product.id}`}
      style={{ textDecoration: "none", color: "inherit" }}
    >
      <div
        style={{
          border: "4px solid #c20404ff",
          margin: "8px",
          padding: "8px"
        }}
      >
        <h3>{product.title}</h3>
        <div>{product.description}</div>
        <div>Price: ${product.price}</div>
        <img
          src={product.thumbnail}
          alt={product.title}
          style={{ maxWidth: "200px", display: "block", marginTop: "8px" }}
        />
      </div>
    </Link>
  );
}

export default ProductCard;
