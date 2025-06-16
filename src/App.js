import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import About from './pages/About';
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
        {/* <Route exact path="/cart" element={<Cart />} /> */}
      </Routes></>
  );
}

export default App;
