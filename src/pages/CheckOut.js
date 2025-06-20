import React from 'react';
import '../css/CheckOut.css';
import CountrySelector from "../components/CountrySelector";


function CheckOut() {
  return (
    <div className="checkout-page container">
      <h1>Checkout</h1>

      <div className="checkout-grid">
        {/* Left Side */}
        <div className="checkout-left">
          {/* Address */}
          <div className="card">
            <h2>No address saved</h2>
            <p>Add an address so we can get tracking on the delivery!</p>
            <button className="primary-btn">Add new locations</button>
          </div>

          {/* Payment */}
          <div className="card">
            <h2>Choose how to pay</h2>
            <div className="payment-options">
              <label><input type="radio" name="payment" /> Visa **** 0912</label>
              <label><input type="radio" name="payment" /> Mastercard **** 0912</label>
              <label><input type="radio" name="payment" /> Pay with Tabby</label>
            </div>
          </div>

          {/* Cart Items */}
          <div className="card">
            <h2>Cart (3 items)</h2>
            {/* Repeat for each item */}
            <div className="cart-item">
              <img src="/images/jacket.png" alt="product" />
              <div className="details">
                <h3>Nike Dri-Fit Jacket</h3>
                <p>XL • Black</p>
                <p>SAR 40.00 per item</p>
              </div>
              <div className="qty-controls">
                <button>-</button>
                <span>2</span>
                <button>+</button>
              </div>
            </div>
            {/* End repeat */}
          </div>
        </div>

        {/* Right Side */}
        <div className="checkout-right">
          <div className="card">
            <div className="option-toggle">
              <p>Use Credit for this purchase</p>
              <span className="switch">ON</span>
            </div>

            <div className="option-toggle">
              <p>Make it a Gift</p>
              <span className="switch">OFF</span>
            </div>

            <div className="discount">
              <p>Discount code</p>
              <input type="text" placeholder="Enter code" />
              <button>Apply</button>
              <p className="coupon-status">Coupon code is valid!</p>
            </div>

            <div className="totals">
              <p>Subtotal: <span>SAR 40.00</span></p>
              <p>Shipping: <span>Free</span></p>
              <p className="total">Total (with VAT): <span>SAR 330.00</span></p>
            </div>

            <button className="checkout-btn">Checkout</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CheckOut;
