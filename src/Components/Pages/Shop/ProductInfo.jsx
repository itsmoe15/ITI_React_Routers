import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function ProductInfo() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchProduct() {
      setLoading(true);
      try {
        const res = await axios.get(`https://dummyjson.com/products/${id}`);
        setProduct(res.data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }
    fetchProduct();
  }, [id]);

  if (loading) return <div>Loading...</div>;
  if (!product) return <div>Product not found</div>;

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div style={{ maxWidth: "900px", margin: "0 auto", padding: "20px" }}>

      {product.images && product.images.length > 0 && (
        <Slider {...sliderSettings}>
          {product.images.map((img, index) => (
            <div key={index}>
              <img
                src={img}
                alt={`${product.title} ${index + 1}`}
                style={{ width: "100%", maxHeight: "500px", objectFit: "cover" }}
              />
            </div>
          ))}
        </Slider>
      )}

      <h1 style={{ marginTop: "20px" }}>{product.title}</h1>
      <p>{product.description}</p>

      <div style={{ fontSize: "16px", margin: "20px 0" }}>
        <p>
          <strong>Price:</strong> ${product.price}
        </p>
        <p>
          <strong>Brand:</strong> {product.brand}
        </p>
        <p>
          <strong>Category:</strong> {product.category}
        </p>
        <p>
          <strong>Rating:</strong> {product.rating}/5
        </p>
        <p>
          <strong>Stock:</strong> {product.stock} units
        </p>
        <p>
          <strong>SKU:</strong> {product.sku}
        </p>
        <p>
          <strong>Discount:</strong> {product.discountPercentage}%
        </p>
        <p>
          <strong>Weight:</strong> {product.weight} g
        </p>
        <p>
          <strong>Dimensions:</strong> {product.dimensions.width} x {product.dimensions.height} x {product.dimensions.depth} cm
        </p>
        <p>
          <strong>Warranty:</strong> {product.warrantyInformation}
        </p>
        <p>
          <strong>Shipping:</strong> {product.shippingInformation}
        </p>
        <p>
          <strong>Return Policy:</strong> {product.returnPolicy}
        </p>
      </div>

      {product.tags && product.tags.length > 0 && (
        <div style={{ marginBottom: "20px" }}>
          <strong>Tags:</strong>{" "}
          {product.tags.map((tag, index) => (
            <span
              key={index}
              style={{
                display: "inline-block",
                padding: "5px 10px",
                marginRight: "10px",
                backgroundColor: "#f0f0f0",
                borderRadius: "5px",
              }}
            >
              {tag}
            </span>
          ))}
        </div>
      )}

      {product.reviews && product.reviews.length > 0 && (
        <div>
          <h2>Reviews</h2>
          {product.reviews.map((review, index) => (
            <div
              key={index}
              style={{
                border: "1px solid #ccc",
                padding: "10px",
                marginBottom: "10px",
                borderRadius: "5px",
              }}
            >
              <p>
                <strong>{review.reviewerName}</strong> ({new Date(review.date).toLocaleDateString()})
              </p>
              <p>Rating: {review.rating}/5</p>
              <p>{review.comment}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default ProductInfo;
