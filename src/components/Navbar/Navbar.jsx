import React from "react";
import {
  HeartOutlined,
  ShoppingCartOutlined,
  UserOutlined,
  DownOutlined,
} from "@ant-design/icons";
import "./Navbar.css";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

const Navbarr = () => {
  return (
    <React.Fragment>
      <div className="navbar container">
        <Navbar
          bg="none"
          expand="lg"
          fixed="top"
          style={{ width: "100%" }}
          className="container"
        >
          <Navbar.Brand href="/">
            <img src="logo1.png" alt="logo" height={"70px"} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="me-auto"></Nav>
            <Nav className="justify-content-end">
              <div className="menu">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/products">Product</Nav.Link>
                <Nav.Link href="/products">Popular</Nav.Link>
                <Nav.Link href="/products">Contact</Nav.Link>
              </div>

              <div className="icon">
                <Nav.Link>
                  <div className="icon__heart">
                    <div className="icon__heart-icon circleClasses ">
                      <HeartOutlined className="circleItemCenter" />
                    </div>
                    <div className="icon__heart-num p2 circleClasses ">
                      {/* number heart */}
                      <div className="circleItemCenter">n</div>
                    </div>
                  </div>
                </Nav.Link>
                <Nav.Link href="/cart">
                  <div className="icon__cart" to="/cart">
                    <div className="icon__cart-icon circleClasses">
                      <ShoppingCartOutlined className="circleItemCenter" />
                    </div>
                    <div className="icon__cart-num p2 circleClasses ">
                      {/* number cart */}
                      <div className="circleItemCenter">n</div>
                    </div>
                  </div>
                </Nav.Link>
                <Nav.Link>
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
                </Nav.Link>
              </div>
            </Nav>
          </Navbar.Collapse>
        </Navbar>

        {/* <div className="menu">
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
        </div> */}

        {/* <div className="icon">
          <div className="icon__heart">
            <div className="icon__heart-icon circleClasses ">
              <HeartOutlined className="circleItemCenter" />
            </div>
            <div className="icon__heart-num p2 circleClasses ">
              <div className="circleItemCenter">n</div>
            </div>
          </div>

          <Link className="icon__cart" to="/cart">
            <div className="icon__cart-icon circleClasses">
              <ShoppingCartOutlined className="circleItemCenter" />
            </div>
            <div className="icon__cart-num p2 circleClasses ">
              <div className="circleItemCenter">n</div>
            </div>
          </Link>

          <div className="user">
            <div className="user__name">
              <span className="p2">Hello, </span>
              <span className="username p1">Linhda</span>
            </div>
            <div className="user__icon circleClasses">

              <UserOutlined className="circleItemCenter" />
            </div>
            <div className="user__more">
              <DownOutlined className="circleItemCenter" />
            </div>
          </div>
        </div> */}
      </div>
    </React.Fragment>
  );
};
export default Navbarr;
