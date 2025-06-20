
import React, { use } from 'react';
import { useCart } from './CartContext';
import '../css/CartDrawer.css';
import Button from './Button';


function CartDrawer({ open, onClose }) {
  const { state: { items }, dispatch } = useCart();
  const subtotal = items.reduce((s, i) => s + i.price * i.qty, 0);
  const navigate = useNavigate();

  return (
    <>
      <div
        className={`backdrop ${open ? 'show' : ''}`}
        onClick={onClose}
      />

      <aside className={`drawer ${open ? 'show' : ''}`}>
        <header className="drawer__header">
          <h2>Cart</h2>
          <button className="close-btn" onClick={onClose}>X</button>
        </header>

        <div className="drawer__content">
          {items.length === 0 ? (
            <div className="empty">
              <p>Looks like you haven't added anything yet.</p>
              <button onClick={onClose} className="primary full">Continue shopping</button>
            </div>
          ) : (
            <>
              <ul className="item-list">
                {items.map(item => (
                  <li key={item.id} className="item-row">
                    <img src={item.image} alt={item.title} />
                    <div className="info">
                      <h3>{item.title}</h3>
                      <p className="price">${item.price}</p>
                      <div className="qty">
                        <button onClick={() => dispatch({ type: 'dec', id: item.id })}>–</button>
                        <span>{item.qty}</span>
                        <button onClick={() => dispatch({ type: 'inc', id: item.id })}>+</button>
                      </div>
                    </div>
                    <button
                      className="remove"
                      onClick={() => dispatch({ type: 'remove', id: item.id })}
                    >X</button>
                  </li>
                ))}
              </ul>

              <footer className="drawer__footer">
                <p className="subtotal">
                  <span>Subtotal</span>
                  <span>${subtotal.toFixed(2)}</span>
                </p>
                <Button to='/cart' className='primary full' onClick={onClose} value='View Cart' />
                <Button value='Continue Shopping' className='secondary full' onClick={onClose} />
              </footer>
            </>
          )}
        </div>
      </aside>
    </>
  );
}
export default CartDrawer;
