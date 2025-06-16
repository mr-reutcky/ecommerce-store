import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
// import Home from './components/Home';
// import About from './components/About';
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
        {/* <Route path="/" element={<Home />} />
        {/* <Route path="/about" element={<About />} />
        <Route path="/cart" element={<Cart />} /> */}
      </Routes></>
  );
}

export default App;
