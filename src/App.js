
import './App.css';

import {Routes, Route } from 'react-router-dom';
import Home from './containers/Home/Home'
import Products from './containers/Products/Products';
import Cart from './containers/Cart/Cart'
import Checkout from './containers/Checkout/Checkout'
import "antd/dist/antd.min.css";
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min"
function App() {
  return (
    <div className="container">
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/products' element={<Products/>} />
        <Route path='/cart' element={<Cart/>} />
        <Route path='/checkout' element={<Checkout/>} />
      </Routes>
    </div>
  );
}

export default App;
