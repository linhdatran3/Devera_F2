import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import {
  HeartOutlined,
  ShoppingCartOutlined,
  UserOutlined,
  DownOutlined,
} from "@ant-design/icons";
import "./Navbar.css";
const Navbar = () => {
  return (
    <React.Fragment>
      <Router>
        <div className="navbar container">
          <div className="logo">
            {/* img logo */}

            <Link to="/">
              <img src="logo192.png" alt="logo" height={"50px"} />
            </Link>
          </div>
          <div className="menu">
            <ul>
              <li>
                <Link to="/a">Home</Link>
              </li>
              <li>
                <Link to="/b">Categories</Link>
              </li>
              <li>
                <Link to="/c">Popular</Link>
              </li>
              <li>
                <Link to="/d">Contact</Link>
              </li>
            </ul>
          </div>
          <div className="icon">
            <div className="icon__heart">
              <div className="heart circleClasses ">
                <HeartOutlined className="circleItemCenter" />
              </div>
              <div className="numHeart p2 circleClasses ">
                {/* number heart */}
                <div className="circleItemCenter">n</div>
              </div>
            </div>
            <div className="icon__cart">
              <div className="cart circleClasses">
                <ShoppingCartOutlined className="circleItemCenter" />
              </div>
              <div className="numCart p2 circleClasses ">
                {/* number cart */}
                <div className="circleItemCenter">n</div>
              </div>
            </div>
            <div className="user">
              <div className="user__name">
                <span className="p2">Hello, </span>
                <span className="username p1">Linhda</span>
              </div>
              <div className="user__icon circleClasses">
                {/* icon user */}
                <UserOutlined className="circleItemCenter" />
              </div>
              <div className="user__more">
                {/* icon click more */}
                <DownOutlined className="circleItemCenter" />
              </div>
            </div>
          </div>
        </div>
      </Router>
    </React.Fragment>
  );
};
export default Navbar;
