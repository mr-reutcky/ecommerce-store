import { FaMinus, FaPlus } from 'react-icons/fa';
import { useState , useEffect} from 'react';

function QuantitySelector({ value = 1, onChange }) {
  const [quantity, setQuantity] = useState(value);

  useEffect(() => setQuantity(value), [value]);

  const decrement = () => {
    if (quantity > 1) {
      const newQty = quantity - 1;
      setQuantity(newQty);
      onChange?.(newQty);
    }
  };

  const increment = () => {
    const newQty = quantity + 1;
    setQuantity(newQty);
    onChange?.(newQty);
  };

  return (
    <div className="quantity-selector">
      <button
        onClick={decrement}
        className="minus quantity-btn"
        disabled={quantity === 1}
      >
        <FaMinus />
      </button>

      <span className="quantity-value">{quantity}</span>

      <button onClick={increment} className="plus quantity-btn">
        <FaPlus />
      </button>
    </div>
  );
}

export default QuantitySelector;