import { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import SimilarProducts from './SimilarProducts';
import StarRating from './StarRating';
import axios from 'axios';
import Button from './Button';
import QuantitySelector from './QuantitySelector';
import { useCart } from './CartContext';


function ProductDetail(){
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [similarProducts, setSimilarProducts] = useState([]);

  const { state: cartState, dispatch } = useCart();
  const cartItem = cartState.items.find(item => item.id === product?.id);

  const URL = 'https://fakestoreapi.com'

  useEffect(() => {
    setLoading(true);

     const fetchProductAndSimilar = async() => {
      try{
        const productResponse = await axios.get(`${URL}/products/${id}`);

        if (!productResponse.data || !productResponse.data.id){
          throw new Error('Product not found');
        }

        const productData = productResponse.data;
        setProduct(productData);

        const similarProductsResponse = await axios.get(`${URL}/products/category/${productData.category}`);
        const similarData = similarProductsResponse.data
          .filter(item => 
            item.id !== productData.id)
          .slice(0, 5);
        setSimilarProducts(similarData);    
      }
      catch(err){
        console.error('Error fetching product categories: ', err);
        navigate('/404');
      }
      finally {
        setLoading(false);
      }
     }

     fetchProductAndSimilar();

  }, [id, navigate]);

  const handleAddToCart = () => {
    dispatch({ type: 'add', payload: { ...product, qty: 1}});
  };

  const handleQtyChange = (newQty) => {
    dispatch({ type: 'set_qty', payload: { id: product.id, qty: newQty } });
  };

  if (loading){
    return (<div className='loading'>Page is loading</div>);
  }

  if (!product){
    return null;
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
              <div className='cart-actions'>
                {cartItem ? (
                  <QuantitySelector 
                    value={cartItem.qty}
                    onChange={handleQtyChange}
                  />
                  ) : (
                    <Button value='Add To Cart' onClick={() => handleAddToCart()} />                    
                  )
                } 
              </div>
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