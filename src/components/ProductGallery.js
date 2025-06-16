import { useEffect, useState } from 'react';
import axios from 'axios';
import ProductCard from './ProductCard';

function ProductGallery() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
      .then(response => {
        setProducts(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching products:', error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div className="product-gallery">Loading products...</div>;
  }

  return (
    <section className="product-gallery">
      <h2>Our Products</h2>
      <div className="product-grid container">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}

export default ProductGallery;
