import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import SimilarProducts from '../components/SimilarProducts';
import StarRating from '../components/StarRating';
import axios from 'axios';


function Product(){
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [similarProducts, setSimilarProducts] = useState([]);
  const [error, setError] = useState(null);

  const URL = 'https://fakestoreapi.com'

  useEffect(() => {
    const fetchProduct = async() =>{
      try{
        setLoading(true);
        const response = await axios.get(`${URL}/products/${id}`);
        const detail = response.data;
        setProduct(detail);

        const allProducts = await axios.get(`${URL}/products/`);
        const categories = allProducts.data
          .filter(item => 
            item.category === detail.category && 
            item.id !== id);
        setSimilarProducts(categories);
        setLoading(false);
      }
      catch(err){
        setError(err.message);
        //go to error mesage
      }
    }
    fetchProduct();
  }, [id]);

  if (loading){
    return (<section className='product-details'>Loading...</section>);
  }


  return (
    {product} &&
    <>
      <section className='product-details'>
        <div className='container'>
          <div className='product'>
            <div className='product-image'>

            </div>
            <div className='product-info'>
              <h1>{product.title}</h1>
              <div>
                <StarRating rating={product.rating} />
              </div>
              <div>
                <h3>{product.price}</h3>
              </div>
              <div>
                <p>{product.description}</p>
              </div>
              <button>
                Add to Card
              </button>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className='container'>
          <SimilarProducts products={similarProducts} />
        </div>
      </section>
    </>
  );
}

export default Product;