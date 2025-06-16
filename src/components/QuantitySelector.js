import { FaMinus, FaPlus } from 'react-icons/fa';
import { useState } from 'react';

function QuantitySelector() {
  const [quantity, setQuantity] = useState(1);

  const decrement = () => {
    setQuantity(quantity - 1);
  }

  const increment = () => {
    setQuantity(quantity + 1);
  }

  return (
    <div className='quantity-selector'>
      <button onClick={decrement} className='minus quantity-btn'  disabled={quantity === 1}><FaMinus /></button>
      <span className='quantity-value'>{quantity}</span>
      <button onClick={increment} className='plus quantity-btn'><FaPlus /></button>
    </div>
  )
}

export default QuantitySelector;