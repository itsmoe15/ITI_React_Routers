import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function ProductInfo() {
  const { id } = useParams();
  const [product, setProduct] = React.useState([]);
  const [loading, setLoading] = React.useState([]);

  useEffect(() => {
    async function fetchProduct() {
      setLoading(true);
      const res = await axios.get(`https://dummyjson.com/products/${id}`);
      setProduct(res.data);
      setLoading(false);
    }
    fetchProduct();
  }, [id]);

  if (loading) return <div>Loading...</div>;

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px' }}>
      <hr style={{ marginBottom: '20px' }} />

      <div style={{ textAlign: 'center', marginBottom: '20px' }}>
        <img src={product.thumbnail} alt={product.title} style={{ maxWidth: '100%', height: 'auto' }} />
        {product.images && product.images.length > 0 && (
          <div style={{ marginTop: '20px' }}>
            {product.images.map((img, index) => (
              <img key={index} src={img} style={{ width: '100px', height: '100px', margin: '0 10px' }} />
            ))}
          </div>
        )}
      </div>

      <hr style={{ marginBottom: '20px' }} />

      <div>
        <h1 style={{ fontSize: '24px', marginBottom: '10px' }}>{product.title}</h1>
        <p style={{ fontSize: '16px', lineHeight: '1.5', marginBottom: '20px' }}>{product.description}</p>

        <div style={{ fontSize: '16px', marginBottom: '20px' }}>
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
        </div>

        {product.tags && product.tags.length > 0 && (
          <div style={{ fontSize: '16px' }}>
            <strong>Tags:</strong>
            <ul style={{ listStyleType: 'none', paddingLeft: '0' }}>
              {product.tags.map((tag, index) => (
                <li key={index} style={{ display: 'inline-block', marginRight: '10px', padding: '5px 10px', backgroundColor: '#f0f0f0', borderRadius: '5px' }}>
                  {tag}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default ProductInfo;