import { useState, useEffect } from 'react';
import SimilarProducts from './SimilarProducts';
import StarRating from './StarRating';


function ProductDetail(){
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
        setProduct(response.data);

        const allProducts = await axios.get(`${URL}/products/`);
        const categories = allProducts
          .filter(item => 
            item.category === response.data.category && 
            item.id !== response.data.id);
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

  // "rating":{"rate":3.9,"count":120}

  return (
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

export default ProductDetail;