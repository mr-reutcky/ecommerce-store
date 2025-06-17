
import React, { createContext, useContext, useReducer } from 'react';

const CartContext = createContext();

const initial = { items: [] };          

function reducer(state, action) {
  switch (action.type) {
    case 'add':
      const exists = state.items.find(i => i.id === action.payload.id);
      if (exists) {
        return {
          items: state.items.map(i =>
            i.id === action.payload.id ? { ...i, qty: i.qty + 1 } : i
          ),
        };
      }
      return { items: [...state.items, { ...action.payload, qty: 1 }] };

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
