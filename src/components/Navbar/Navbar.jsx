import React from "react";
import { Link } from "react-router-dom";
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
      <div className="navbar container">
        <div className="logo">
          {/* img logo */}

          <Link to="/">
            <img src="logo1.png" alt="logo" height={"70px"} />
          </Link>
        </div>
        <div className="menu">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/products">Categories</Link>
            </li>
            <li>
              <Link to="/products">Popular</Link>
            </li>
            <li>
              <Link to="/d">Contact</Link>
            </li>
          </ul>
        </div>
        <div className="icon">
          <div className="icon__heart">
            <div className="icon__heart-icon circleClasses ">
              <HeartOutlined className="circleItemCenter" />
            </div>
            <div className="icon__heart-num p2 circleClasses ">
              {/* number heart */}
              <div className="circleItemCenter">n</div>
            </div>
          </div>

          <Link className="icon__cart" to="/cart">
            <div className="icon__cart-icon circleClasses">
              <ShoppingCartOutlined className="circleItemCenter" />
            </div>
            <div className="icon__cart-num p2 circleClasses ">
              {/* number cart */}
              <div className="circleItemCenter">n</div>
            </div>
          </Link>

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
    </React.Fragment>
  );
};
export default Navbar;
