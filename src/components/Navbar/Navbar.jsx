import React from "react";
import {
  HeartOutlined,
  ShoppingCartOutlined,
  UserOutlined,
} from "@ant-design/icons";
import "./Navbar.css";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
const Navbarr = () => {
  return (
    <React.Fragment>
      <div className="navbar">
        <Navbar bg="none" expand="lg" fixed="top" style={{ width: "100%" }}>
          <div className="container">
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
                  <Nav.Link href="/history">Popular</Nav.Link>
                  <Nav.Link href="/user">Contact</Nav.Link>
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
                        <Nav.Link href="/user">
                          <UserOutlined className="circleItemCenter" />
                        </Nav.Link>
                      </div>
                      <div className="user__more">
                        {/* icon click more */}
                        <NavDropdown title="" id="basic-nav-dropdown">
                          {/* href="history/:id" */}
                          <NavDropdown.Item href="/history">
                            History
                          </NavDropdown.Item>
                          <NavDropdown.Item href="/products">
                            Change password
                          </NavDropdown.Item>
                          <NavDropdown.Item href="/products">
                            Setting
                          </NavDropdown.Item>
                          <NavDropdown.Divider />
                          <NavDropdown.Item href="/products">
                            Log out
                          </NavDropdown.Item>
                        </NavDropdown>
                      </div>
                    </div>
                  </Nav.Link>
                </div>
              </Nav>
            </Navbar.Collapse>
          </div>
        </Navbar>
      </div>
    </React.Fragment>
  );
};
export default Navbarr;
