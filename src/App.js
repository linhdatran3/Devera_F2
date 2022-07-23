
import './App.css';

import {Routes, Route } from 'react-router-dom';
import Home from './containers/Home/Home'
import Products from './containers/Products/Products';
function App() {
  return (
    <div className="container">
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/products' element={<Products/>} />

      </Routes>
    </div>
  );
}

export default App;
