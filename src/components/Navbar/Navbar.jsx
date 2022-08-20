/* eslint-disable */ // dòng này để nhắn nhủ tớiesessslint rằng: bạn làm ơn hãy bỏ qua file này :v, nếu ghét mấy cái warning quá thì tạm thời xài nó, code xong dùng lại
import React, { useState, useEffect } from "react";
import {
  HeartOutlined,
  ShoppingCartOutlined,
  UserOutlined,
} from "@ant-design/icons";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";

import { Link } from "react-router-dom";
import { connectWallet, hashShortener, disConnect } from "../../sdk/iconSDK";
import { ENDPOINT } from "../../utils/constant";
import axios from "axios";

import styled from "styled-components";
const StyledNav = styled.div`
  .navbar {
    background-color: #fff;
    border-bottom: 1.5px solid #d6d6d6;
    border-radius: 20px;
    margin: 0 0.2rem;
    height: 14vh;
  }

  .menu {
    justify-content: right;
    display: flex;
  }

  .menu a {
    font-size: 20px;
    line-height: 40px;
    margin-right: 3rem;
  }
  .icon {
    display: flex;
    font-size: 24px;
  }
  .icon__heart {
    display: flex;
    font-weight: 500 !important;
    justify-content: right;
  }
  .icon__heart .icon__heart-icon {
    background-color: #ffc5c3;
    color: #eb4d4b;
  }
  .icon__heart .icon__heart-num {
    position: relative;
    left: -15%;
    text-align: center;
    height: 18px;
    width: 18px;
    font-size: 14px;
    color: #fff;
    background-color: #eb4d4b;
  }
  .icon__cart {
    display: flex;
    font-weight: 500 !important;
    justify-content: right;
  }
  .icon__cart .icon__cart-icon {
    background-color: #d5fbdc;
    color: #40aa54;
  }
  .icon__cart .icon__cart-num {
    position: relative;
    text-align: center;
    left: -15%;
    height: 18px;
    width: 18px;
    font-size: 14px;
    color: #fff;
    background-color: #40aa54;
  }
  .user {
    display: flex;
    padding: 0 0.5rem;
    justify-content: right;
  }
  .user__icon {
    background-color: #d5fbdc;
    margin-left: 1rem;
  }
  .user__icon .circleItemCenter {
    transform: translate(-50%, -37%) !important;
  }

  .user__more {
    font-size: 12px;
    display: flex;
    justify-content: center;
  }
  .dropdown-menu[data-bs-popper] {
    left: auto !important;
    right: 0 !important;
  }
  .dropdown-menu a:focus {
    background-color: #40aa54;
  }
`;

export const Navbarr = () => {
  const [address, setAddress] = useState(localStorage.getItem("address"));
  const [connect, setConnect] = useState(sessionStorage.getItem("isConnected"));
  const [isLoggin, setIsLoggin] = useState(
    JSON.parse(localStorage.getItem("isLoggin"))
  );
  const handleDisconnect = () => {
    disConnect(setAddress, setConnect);
  };
  const handleConnect = async () => {
    connectWallet(setAddress, setConnect);
    console.log("connect account here");
    loginAccount();
  };
  const loginAccount = async () => {
    console.log("isConnect: " + connect);
    console.log("Address " + address);
    if (connect && address) {
      console.log("connect wallet completed");
      await axios
        .get(`${ENDPOINT}/accounts/findByAddress/${address}`)
        .then((res) => {
          //check account is validate
          const userId = res.data.id;
          if (res.status === 404) {
            //create new account by address of wallet
            axios
              .post(`${ENDPOINT}/accounts`, {
                body: {
                  walletAddress: address,
                },
              })
              .then((res) => {
                console.log("create account completed!");
                userId = res.data.id;
              });
          }
          console.log("connect account completed");
        });
    }
  };
  const handleLogout = () => {
    //sai
  };
  useEffect(() => {}, [address, connect]);
  return (
    <StyledNav>
      <React.Fragment>
        <div className="navbar">
          <Navbar bg="none" expand="lg" fixed="top" style={{ width: "100%" }}>
            <div className="container">
              <Navbar.Brand href="/">
                <img src="F2Store512.png" alt="logo" height={"70px"} />
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
                      {address ? (
                        <div className="user">
                          <div className="user__name">
                            <span className="p2">Hello, </span>
                            <span className="username p1">
                              {hashShortener(address)}
                            </span>
                            <br />
                            <span className="p2">Wallet: </span>
                            <span className="username p1">number</span>
                          </div>
                          <div className="user__icon circleClasses">
                            {/* icon user */}
                            <Link to={"/user"}>
                              <Nav.Link href="/user">
                                <UserOutlined className="circleItemCenter" />
                              </Nav.Link>
                            </Link>
                          </div>
                          <div className="user__more">
                            {/* icon click more */}
                            <NavDropdown title="" id="basic-nav-dropdown">
                              {/* href="history/:id" */}
                              <Link to={"/history"}>
                                <NavDropdown.Item href="/history">
                                  History
                                </NavDropdown.Item>
                              </Link>
                              {isLoggin === true ? (
                                <NavDropdown.Item>
                                  <button onClick={handleLogout}>Logout</button>
                                </NavDropdown.Item>
                              ) : (
                                <Link to={"/auth/login"}>
                                  <NavDropdown.Item href="/auth/login">
                                    Login
                                  </NavDropdown.Item>
                                </Link>
                              )}

                              <Link to={"/user"}>
                                <NavDropdown.Item href="/products">
                                  Change password
                                </NavDropdown.Item>
                              </Link>

                              <NavDropdown.Divider />

                              <NavDropdown.Item>
                                <button
                                  className="connect-btn"
                                  onClick={handleDisconnect}
                                >
                                  Disconnect
                                </button>
                              </NavDropdown.Item>
                            </NavDropdown>
                          </div>
                        </div>
                      ) : (
                        <div className="user">
                          <div className="user__name">
                            <span className="p2">Hello, </span>
                            <span>User</span>
                            <br />
                            <span className="p2">Wallet: </span>
                            <span className="username p1">0 ICX</span>
                          </div>
                          <div className="user__icon circleClasses">
                            {/* icon user */}
                            <Link to={"/user"}>
                              <Nav.Link href="/user">
                                <UserOutlined className="circleItemCenter" />
                              </Nav.Link>
                            </Link>
                          </div>
                          <div className="user__more">
                            <NavDropdown title="" id="basic-nav-dropdown">
                              <Link to={"/history"}>
                                <NavDropdown.Item href="/history">
                                  History
                                </NavDropdown.Item>
                              </Link>
                              {isLoggin === true ? (
                                <NavDropdown.Item>
                                  <button onClick={handleLogout}>Logout</button>
                                </NavDropdown.Item>
                              ) : (
                                <Link to={"/auth/login"}>
                                  <NavDropdown.Item href="/auth/login">
                                    Login
                                  </NavDropdown.Item>
                                </Link>
                              )}
                              <Link to={"/user"}>
                                <NavDropdown.Item href="/products">
                                  Change password
                                </NavDropdown.Item>
                              </Link>
                              <NavDropdown.Divider />
                              <NavDropdown.Item>
                                <button
                                  className="connect-btn"
                                  onClick={handleConnect}
                                >
                                  Connect
                                </button>
                              </NavDropdown.Item>
                            </NavDropdown>
                          </div>
                        </div>
                      )}
                    </Nav.Link>
                  </div>
                </Nav>
              </Navbar.Collapse>
            </div>
          </Navbar>
        </div>
      </React.Fragment>
    </StyledNav>
  );
};
