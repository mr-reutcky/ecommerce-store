import { useEffect, useState } from 'react';
import axios from 'axios';
import ProductCard from './ProductCard';

function ProductGallery() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [sortType, setSortType] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  useEffect(() => {
    async function fetchData() {
      try {
        const productResponse = await axios.get('https://fakestoreapi.com/products');
        const categoryResponse = await axios.get('https://fakestoreapi.com/products/categories');
        setProducts(productResponse.data);
        setFilteredProducts(productResponse.data);
        setCategories(categoryResponse.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching products:', error);
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  useEffect(() => {
    let updated = [...products];

    if (selectedCategory !== 'all') {
      updated = updated.filter(p => p.category === selectedCategory);
    }

    if (sortType === 'low-to-high') {
      updated.sort((a, b) => a.price - b.price);
    } else if (sortType === 'high-to-low') {
      updated.sort((a, b) => b.price - a.price);
    }

    setFilteredProducts(updated);
  }, [sortType, selectedCategory, products]);

  if (loading) {
    return <div className="product-gallery">Loading products...</div>;
  }

  return (
    <>
      <section id='products' className="product-gallery">
        <h2>Our Products</h2>

        <div className="controls">
          <select value={sortType} onChange={(e) => setSortType(e.target.value)}>
            <option value="">Sort by Price</option>
            <option value="low-to-high">Price: Low to High</option>
            <option value="high-to-low">Price: High to Low</option>
          </select>

          <select value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)}>
            <option value="all">All Categories</option>
            {categories.map(cat => (
              <option key={cat} value={cat}>{cat.charAt(0).toUpperCase() + cat.slice(1)}</option>
            ))}
          </select>
        </div>

        <div className="product-grid container">
          {filteredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </>
  );
}

export default ProductGallery;
