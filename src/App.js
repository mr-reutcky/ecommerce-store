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
// import Cart from './components/Cart';
import CheckOut from "../src/pages/CheckOut";


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
        <Route path="*" element={<NotFoundPage />} />
        {/* <Route exact path="/cart" element={<Cart />} /> */}
        <Route exact path="/CheckOut" element={<CheckOut />} />
      </Routes>
      <CartDrawer open={drawerOpen} onClose={() => setDrawerOpen(false)} />
      <Footer />
    </>
  );
}

export default App;
