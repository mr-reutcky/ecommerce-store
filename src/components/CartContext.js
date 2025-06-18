
import React, { createContext, useContext, useReducer } from 'react';

const CartContext = createContext();

const initial = { items: [] };          

function reducer(state, action) {
  switch (action.type) {
    case 'add':
      const { id, qty: incomingQty = 1 } = action.payload;   
        const exists = state.items.find(i => i.id === id);
      
        if (exists) {
          return {
            items: state.items.map(i =>
              i.id === id ? { ...i, qty: i.qty + incomingQty } : i
            ),
          };
        }
        return { items: [...state.items, { ...action.payload, qty: incomingQty }] };

    case 'inc':
      return { items: state.items.map(i => i.id === action.id ? { ...i, qty: i.qty + 1 } : i) };
    case 'dec':
      return {
        items: state.items.map(i =>
          i.id === action.id ? { ...i, qty: Math.max(1, i.qty - 1) } : i
        ),
      };
    case 'remove':
      return { items: state.items.filter(i => i.id !== action.id) };
    default:
      return state;
  }
}

function CartProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initial);
  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
}

export default CartProvider;

export const useCart = () => useContext(CartContext);
