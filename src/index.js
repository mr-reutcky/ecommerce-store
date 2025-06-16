import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/index.css';
import App from './App';
import { HashRouter } from 'react-router-dom';
import { CartProvider } from './components/CartContext'; 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <CartProvider>
        <HashRouter>
          <App />
        </HashRouter>

     </CartProvider>
    
  </React.StrictMode>
);

