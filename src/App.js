import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import ProductDetail from './components/ProductDetail';
// import Cart from './components/Cart';


const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Cart', path: '/cart' },
];

function App() {
  return (
    <>
      <Header links={navLinks} />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/product/:id" element={<ProductDetail />} />
        {/* <Route exact path="/cart" element={<Cart />} /> */}
      </Routes>
      <Footer />
    </>
  );
}

export default App;
