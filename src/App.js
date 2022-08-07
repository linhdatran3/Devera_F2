import "./App.css";

import { Routes, Route } from "react-router-dom";
import Home from "./containers/Home/Home";
import Products from "./containers/Products/Products";
import Cart from "./containers/Cart/Cart";
import Checkout from "./containers/Checkout/Checkout";
import User from "./containers/User/User";
import HistoryCart from "./containers/HistoryCart/HistoryCart";
import Store from "./containers/Store/Store";
import Item from "./containers/Item/Item";
import CreateNFT from "./containers/Store/CreateNFT";
import "antd/dist/antd.min.css";
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
import { Provider } from "react-redux";
import store from "./stores";
function App() {
  return (
    <Provider store={store}>
      <div className="a">
        <Routes>
 
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<Item />} />

          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/user" element={<User />} />
          {/* path="/history/:id" */}
          <Route path="/history" element={<HistoryCart />} />
          {/* path="/store/:id" */}
          <Route path="/stores/:id" element={<Store />} />
          <Route path="/stores/create" element={<CreateNFT />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Provider>
  );
}

export default App;
