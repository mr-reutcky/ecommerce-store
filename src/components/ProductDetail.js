import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import SimilarProducts from './SimilarProducts';
import StarRating from './StarRating';
import axios from 'axios';
import Button from './Button';
import {Link} from 'react-router-dom';
import QuantitySelector from './QuantitySelector';


function ProductDetail(){
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [similarProducts, setSimilarProducts] = useState([]);
  const [error, setError] = useState(null);

  const URL = 'https://fakestoreapi.com'

  useEffect(() => {
    setLoading(true);
    /*
    axios.get(`${URL}/products/${id}`)
      .then(response => {
        setProduct(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching products:', error);
        setLoading(false);
      });
      */
     const fetchProduct = async() => {
      try{
        const response = await axios.get(`${URL}/products/${id}`);

        if (!response.data || !response.data.id){
          throw new Error('Product not found');
        }

        const productData = response.data;
        setProduct(productData);

        const allProducts = await axios.get(`${URL}/products/`);
        const categories = allProducts.data
          .filter(item => 
            item.category === productData.category && 
            item.id !== productData.id)
          .slice(0, 5);
        setSimilarProducts(categories);
        setLoading(false);
      }
      catch(err){
        console.error('Error fetching product categories: ', error);
        setError('Product not found or failed to load. Please try again later.');
      }
      finally {
        setLoading(false);
      }
     }

     fetchProduct();

  }, [id]);

  if (loading){
    return (<div className='loading'>Page is loading</div>);
  }
  
  if (error){
    return(
      <section className='product-details'>
        <div className='container'>
          <p>{error}</p>
          <Link to="/">
            <Button value="Back to Home" />
          </Link>
        </div>
      </section>
    )
  }

  return (
    <>
      <section className='product-details'>
        <div className='container'>
          <div className='product-detail'>
            <div className='product-detail-image'>
              <img
                src={product.image}
                alt={product.title}
                className="product-detail-image"
              />              
            </div>
            <div className='product-detail-info'>
              <Link to='/'>
                <Button value="Back to Products" />
              </Link>
              <h1>{product.title}</h1>
              <div>
                <StarRating rating={product.rating} />
              </div>
              <div className='price'>
                <h3>Price: <span>${product.price}</span></h3>
              </div>
              <div className='category'>
                <h3>Category: <span>{product.category}</span></h3>
              </div>
              <div className='description'>
                <h3>Description</h3>
                <p>{product.description}</p>
              </div>
              <div>
                <QuantitySelector />
              </div>
              <Button value='Add To Cart'/>
            </div>
          </div>
        </div>
      </section>
      <section className='product-gallery'>
        <div className='container'>
          <SimilarProducts products={similarProducts} />
        </div>
      </section>
    </>
  );
}

export default ProductDetail;