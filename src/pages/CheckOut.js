import React from 'react';
import '../css/CheckOut.css';
import CountrySelector from "../components/CountrySelector";
import { useForm } from "react-hook-form";
import { useCart } from '../components/CartContext';

function Checkout() {
     const { state: { items } } = useCart();

 
  const totalItems = items.reduce((acc, item) => acc + item.qty, 0);

  
  const totalPrice = items.reduce((acc, item) => acc + item.price * item.qty, 0).toFixed(2);
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const onSubmit = (data) => {
    console.log("Form Data:", data);
  };

  return (
    <div className="checkout-page grid container">
   
      <div className="checkout-form left">
        <h2>Checkout</h2>
        <h3>Choose a payment Method</h3>

        <div className="payment-options">
          <div className="payment-card">Visa **** 1234</div>
          <div className="payment-card">MasterCard **** 5678</div>
          <div className="payment-card">PayPal Account</div>
            <div className="payment-card">Apple pay</div>
        </div>

        {/* FORM */}
        <form onSubmit={handleSubmit(onSubmit)} className="checkout-form-section">
         

          <div className="form-group">
            <label>Full Name</label>
            <input type="text" {...register("fullName", { required: true })} />
           
          </div>
 <div className="form-group">
            <label>Full Address</label>
            <input type="text" {...register("Address", { required: true })} />
          
          </div>
        

          <div className="form-group">
            <label>Phone Number</label>
            <input type="tel" {...register("phone", { required: true })} />
            
          </div>

          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              {...register("email", {
                required: true,
                pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/
              })}
            />
            {errors.email && <p className="error">Valid email is required</p>}
          </div>


        </form>
      </div>

      
      <div className="checkout-summary right">
        <h3 className="summary">Order Summary</h3>
      <h4 className = "items">Total Items: {totalItems}</h4>

      <h4>Total Price: ${totalPrice}</h4>
      <br></br>
      <div className='form-group'>
        <label>Promo code</label>
        <input type = "Text" {...register("promocode", { required: false })}/>
      </div>
      <button className = "pay-button">pay</button>
      </div>
    </div>
  );
}

export default Checkout;
