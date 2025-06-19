
import { useCart } from './CartContext';
import { Link } from 'react-router-dom';


function ProductCard({ product}) {
  const { state, dispatch } = useCart();

  const cartItem = state.items.find(i => i.id === product.id);
  const qty = cartItem ? cartItem.qty : 0;

  const addOne = () =>
    dispatch({ type: 'add', payload: product });

  const minusOne = () =>
    dispatch({ type: 'dec', id: product.id });
  return (
    <div className="product-card">
      <Link to={`/product/${product.id}`}>
        <img
          src={product.image}
          alt={product.title}
          className="product-image"
        />
      </Link>
      <h3 className="product-title">{product.title}</h3>
      <p className="product-price">${product.price.toFixed(2)}</p>
        {qty === 0 ? (
          <button className="add-to-cart-btn" onClick={addOne}>
            Add to Cart
          </button>
        ) : (
          <div className="qty-stepper">
            <button onClick={minusOne}>−</button>
            <span>{qty}</span>
            <button onClick={addOne}>＋</button>
          </div>
        )}
    </div>
  );
}

export default ProductCard;
