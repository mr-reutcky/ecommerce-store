import { useCart } from './CartContext';
import { Link } from 'react-router-dom';
import QuantitySelector from './QuantitySelector';
import { FaTrash } from 'react-icons/fa';
import '../css/CartPage.css';
import Button from './Button';

function ViewCart() {
  const { state: {items}, dispatch } = useCart();
  const totalCost = items.reduce((total, item) => total + item.price * item.qty, 0);
  const handleQtyChange = (id, newQty) => {
    dispatch({ type: 'set_qty', payload: {id, qty: newQty }});
  }

  const handleRemoveItem = (id) => {
    dispatch({type: 'remove', id});
  }

  if (items.length === 0){
    return (
      <main className='cart-page container'>
        <div className='empty-cart'>
          <h1>Your Cart is Empty</h1>
          <p>Looks like you haven't added anything to your cart yet.</p>
          <Link to='/'>
            <Button value='Continue Shopping' />
          </Link>
        </div>
      </main>
    )
  }

  return (
    <main className='cart-page container'>
      <h1>Your Cart</h1>
      <div className='cart-layout'>
        <div className='cart-items'>
          {items.map(item => (
            <div key={item.id} className='cart-item'>
              <Link to={`/product/${item.id}`} className='cart-item-image-link'>
                <img src={item.image} alt={item.title} className='cart-item-image' />
              </Link>
              <div claasName='cart-item-details'>
                <Link to={`/product/${item.id}`}>
                  <h3 className='cart-item-title'>{item.title}</h3>
                </Link>
                <p className='cart-item-price'>${item.price.toFixed(2)}</p>
                <QuantitySelector value={item.qty} onChange={(newQty) => handleQtyChange(item.id, newQty)} />
              </div>
              <div className='cart-item-subtotal'>
                <p>${(item.price * item.qty).toFixed(2)}</p>
                <button className='btn remote-item-btn' onClick={() => handleRemoveItem(item.id)} aria-label={`Remove ${item.title}`}>
                  <FaTrash />
                </button>
              </div>
            </div>
          ))}
        </div>

        <aside className='order-summary'>
          <h2>Order Summary</h2>
          <div className='summary-row'>
            <span>Subtotal</span>
            <span>${totalCost.toFixed(2)}</span>
          </div>
          <div className='summary-row'>
            <span>Shipping</span>
            <span>Free</span>
          </div>
          <div className='summary-total'>
            <span>Total</span>
            <span>${totalCost.toFixed(2)}</span>
          </div>
          <div>
            <Button to='/checkout' className='btn full-width' value='Proceed to Checkout' />
          </div>
        </aside>
      </div>
    </main>
  )
}

export default ViewCart 