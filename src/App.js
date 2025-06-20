import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';

import CartDrawer from './components/CartDrawer';
import { useState } from 'react';
/*import ProductDetail from './components/ProductDetail';*/
import Product from './pages/Product';
import NotFoundPage from './pages/404'; 
import CartPage from './pages/CartPage';
// import Cart from './components/Cart';


const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Cart', path: '/cart', hidden: true },
];

function App() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  return (
    <>
      <Header links={navLinks} onCartClick={() => { setDrawerOpen(true);}}/>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/product/:id" element={<Product />} />
        <Route exact path="/cart" element={<CartPage />} />
        <Route exact path="/checkout" element={<div><h1>Checkout Page - Coming Soon!</h1></div>} />
        <Route path="*" element={<NotFoundPage />} />
        {/* <Route exact path="/cart" element={<Cart />} /> */}
      </Routes>
      <CartDrawer open={drawerOpen} onClose={() => setDrawerOpen(false)} />
      <Footer />
    </>
  );
}

export default App;
