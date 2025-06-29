import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/index.css';
import App from './App';
import CartProvider from './components/CartContext'; 
//import { BrowserRouter as Router } from 'react-router-dom';
import { HashRouter } from 'react-router-dom';

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

