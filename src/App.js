import "./App.css";

import { Routes, Route } from "react-router-dom";
import Home from "./containers/Home";
import Products from "./containers/Products";
import Cart from "./containers/Cart";
import Checkout from "./containers/Checkout";
import User from "./containers/User";
import Store from "./containers/Store/Store"
import HistoryCart from "./containers/HistoryCart";
import Item from "./containers/Item";
import CreateNFT from "./containers/Store/CreateNFT";
import Reg from "./containers/Auth/Reg"
import Login from "./containers/Auth/Login"
import PageNotFound from "./containers/pageNotFound/pageNotFound";
import "antd/dist/antd.min.css";
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";

//Provider
import { Provider } from "react-redux";
import store from "./stores";
import Favorites from "./containers/Favorites";
function App() {
  return (
    <Provider store={store}>
      <div className="a">
        <Routes>
 
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<Item />} />
        <Route path="/favorites" element={<Favorites />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/user" element={<User />} />
          <Route path="/user/:id" element={<Store />} />
          {/* path="/history/:id" */}
          <Route path="/history" element={<HistoryCart />} />
          {/* path="/store/:id" */}
          <Route path="/stores/create" element={<CreateNFT />} />
          <Route path="/auth/register" element={<Reg />} />
          <Route path="/auth/login" element={<Login />} />
          <Route path="*" element={<PageNotFound />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Provider>
  );
}

export default App;
