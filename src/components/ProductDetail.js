import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import SimilarProducts from './SimilarProducts';
import StarRating from './StarRating';
import axios from 'axios';
import Button from './Button';
import {Link} from 'react-router-dom';


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
        const productData = response.data;
        setProduct(productData);

        const allProducts = await axios.get(`${URL}/products/`);
        const categories = allProducts.data
          .filter(item => 
            item.category === productData.category && 
            item.id !== id)
          .slice(0, 5);
        setSimilarProducts(categories);
        setLoading(false);
      }
      catch(err){
        console.error('Error fetching product categories: ', error);
        setLoading(false);
      }
     }

     fetchProduct();

  }, [id]);

  if (loading){
    return (<div>Page is loading</div>);
  }

  return (
    <>
      <section className='product-details'>
        <div className='container'>
          <div className='product-detail'>
            <div className='product-detail-image'>
              <Link to='/'>
                <Button value="Back" />
              </Link>
              <img
                src={product.image}
                alt={product.title}
                className="product-detail-image"
              />              
            </div>
            <div className='product-detail-info'>
              <h1>{product.title}</h1>
              <div>
                <StarRating rating={product.rating} />
              </div>
              <div className='price'>
                <h3>Price: <span>${product.price}</span></h3>
              </div>
              <div className='description'>
                <h3>Description</h3>
                <p>{product.description}</p>
              </div>
              <Button value='Add To Cart'/>
            </div>
          </div>
        </div>
      </section>
      <section class='product-gallery'>
        <div className='container'>
          <SimilarProducts products={similarProducts} />
        </div>
      </section>
    </>
  );
}

export default ProductDetail;