import React from "react";



const CartSummary = () => {
    const { CartItems } = useCart ();
    const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
    
  return (
    <div className="cart-summary">
      <h2>Your Items</h2>
      {cartItems.map((item) => (
        <div key={item.id} className="cart-item">
          <img src={item.image} alt={item.title} />
          <div>
            <p>{item.title}</p>
            <p>Qty: {item.quantity}</p>
            <p>${(item.price * item.quantity).toFixed(2)}</p>
          </div>
        </div>
      ))}
      <h3>Total: ${total.toFixed(2)}</h3>
    </div>)
}
export default Cart-summary;