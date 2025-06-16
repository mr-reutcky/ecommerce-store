import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Product from './pages/Product';
import Cart from './pages/Cart';
import Header from './components/Header';

function App() {
  return (
    <>
      <Header />
      <main className="container">
        <Routes>
          <Route exct path='/' element={<Home />} />
          <Route exact path='/product/:id' element={<Product />} />
          <Route exact path='/cart' element={<Cart />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
