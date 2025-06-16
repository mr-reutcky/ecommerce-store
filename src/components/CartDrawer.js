// CartDrawer.js
import React from 'react';
import { useCart } from './CartContext';
import '../css/CartDrawer.css';


function CartDrawer({ open, onClose }) {
  const { state: { items }, dispatch } = useCart();
  const subtotal = items.reduce((s, i) => s + i.price * i.qty, 0);

  return (
    <>
      {/* 背景遮罩 */}
      <div
        className={`backdrop ${open ? 'show' : ''}`}
        onClick={onClose}
      />

      {/* 侧边抽屉 */}
      <aside className={`drawer ${open ? 'show' : ''}`}>
        <header className="drawer__header">
          <h2>Cart</h2>
          <button className="close-btn" onClick={onClose}>×</button>
        </header>

        {/* 内容 */}
        <div className="drawer__content">
          {items.length === 0 ? (
            <div className="empty">
              <p>Looks like you haven’t added anything yet.</p>
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
                    >🗑</button>
                  </li>
                ))}
              </ul>

              <footer className="drawer__footer">
                <p className="subtotal">
                  <span>Subtotal</span>
                  <span>${subtotal.toFixed(2)}</span>
                </p>
                <button className="primary full" onClick={onClose}>View cart</button>
                <button className="secondary full" onClick={onClose}>Continue shopping</button>
              </footer>
            </>
          )}
        </div>
      </aside>
    </>
  );
}
export default CartDrawer;
