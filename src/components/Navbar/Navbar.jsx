// dòng này để nhắn nhủ tớiesessslint rằng: bạn làm ơn hãy bỏ qua file này :v, nếu ghét mấy cái warning quá thì tạm thời xài nó, code xong dùng lại
import React, { useState, useEffect } from "react";
import { UserOutlined } from "@ant-design/icons";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import { ENDPOINT } from "../../utils/constant";
import { Link } from "react-router-dom";
import {
  connectWallet,
  hashShortener,
  disConnect,
  getBalance,
} from "../../sdk/iconSDK";
import { useDispatch, useSelector } from "../../hooks";

import styled from "styled-components";
const StyledNav = styled.div`
  .navbar {
    background-color: #fff;
    border-bottom: 1.5px solid #d6d6d6;
    border-radius: 20px;
    margin: 0 0.2rem;
    height: 14vh;
  }
  .navbar-collapse {
    &.show .navbar-nav {
      display: block !important;
      background: #fff;
    }
  }
  .navbar-collapse {
    &.show .menu {
      display: block !important;
    }
  }

  .menu {
    justify-content: right;
    display: flex;
    align-items: center;
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
    transform: translateY(50%);
  }
  .user__icon .circleItemCenter {
    transform: translate(-50%, -10%) !important;
  }

  .user__more {
    font-size: 12px;
    display: flex;
    justify-content: center;
    transform: translateY(35%);
  }
  .dropdown-menu[data-bs-popper] {
    left: auto !important;
    right: 0 !important;
  }
  .dropdown-menu a:focus {
    background-color: #40aa54;
  }
  .ant-input-search > .ant-input-group > .ant-input-group-addon:last-child {
    transform: translateX(-220px);
  }
  .ant-input-search
    > .ant-input-group
    > .ant-input-group-addon:last-child
    .ant-input-search-button:not(.ant-btn-primary) {
  }
  .ant-input-search input {
    border-radius: 7px !important;
  }
  @media (max-width: 990px) {
    navbarScroll {
      order: 1;
    }
  }
  .connect-btn {
    padding: 0.5rem 1.2rem;
    border: none;
    border-radius: 10px;
    color: #fff;
    background-color: #40aa54;
    font-weight: 680;
    font-size: 18px;
  }
`;

export const Navbarr = () => {
  const id = localStorage.getItem("userId");
  const [address, setAddress] = useState(localStorage.getItem("address"));
  const [balance, setBalance] = useState(0);
  const { user } = useSelector(({ userModel }) => ({
    user: userModel.user,
  }));
  const { getUserById } = useDispatch(({ userModel }) => ({
    getUserById: userModel.getUserById,
  }));
  const handleDisconnect = () => {
    disConnect(setAddress);
  };
  const handleConnect = () => {
    connectWallet(setAddress);
  };
  const handleBalance = (address) => {
    getBalance(address).then((data) => setBalance(data));
  };
  useEffect(() => {
    getUserById(id);
    if (address) {
      handleBalance(address);
    }
  }, [id, getUserById, address]);
  return (
    <StyledNav>
      <React.Fragment>
        <div className="navbar">
          <Navbar bg="none" expand="lg" fixed="top" style={{ width: "100%" }}>
            <div className="container">
              <Navbar.Brand href="/">
                <img
                  src={`${ENDPOINT}/uploads/F2_Store512_dbc086bfc0.png?582352.3999999762`}
                  alt="logo"
                  height={"70px"}
                />
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="navbarScroll" />
              <Navbar.Collapse id="navbarScroll">
                <Nav className="me-auto"></Nav>
                <Nav className="justify-content-end">
                  <div className="menu">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/products">Explore</Nav.Link>
                    <Nav.Link href="/favorites">Favorite</Nav.Link>
                    <Nav.Link href="/stores/create">Create</Nav.Link>
                  </div>
                </Nav>
              </Navbar.Collapse>
              <div className="icon">
                <Nav.Link>
                  {address ? (
                    <div className="user">
                      <div className="user__name">
                        <span className="p2">Hello, </span>
                        <span className="username p1">
                          {user.username
                            ? user.username
                            : hashShortener(address)}
                        </span>
                        <br />
                        <span className="p2">Wallet: </span>
                        <span className="username p1">{balance}</span>
                        <span className="p1"> ICX</span>
                      </div>
                      <div className="user__icon circleClasses">
                        {/* icon user */}
                        <Link to={"/user"}>
                          <Nav.Link href="/user">
                            {user?.avatar?.url ? (
                              <img
                                src={`${ENDPOINT}${user?.avatar?.url}`}
                                alt="avatar"
                                height={38}
                                style={{ borderRadius: "50%" }}
                              />
                            ) : (
                              <UserOutlined className="circleItemCenter" />
                            )}
                          </Nav.Link>
                        </Link>
                      </div>
                      <div className="user__more">
                        {/* icon click more */}
                        <NavDropdown title="" id="basic-nav-dropdown">
                          <Link to={"/history"}>
                            {" "}
                            <NavDropdown.Item href="/history">
                              History
                            </NavDropdown.Item>
                          </Link>

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
                        {/* <span className="p2">Hello, </span>
                        <span className="p1">User</span>
                        <br />
                        <span className="p2">Wallet: </span>
                        <span className="username p1">0 ICX</span> */}
                        <button className="connect-btn" onClick={handleConnect}>
                          Connect
                        </button>
                      </div>
                      <div className="user__icon circleClasses">
                        {/* icon user */}
                        <Link to={"/user"}>
                          <Nav.Link href="/user">
                            {user?.avatar?.url ? (
                              <img
                                src={`${ENDPOINT}${user?.avatar?.url}`}
                                alt="avatar"
                              />
                            ) : (
                              <UserOutlined className="circleItemCenter" />
                            )}
                          </Nav.Link>
                        </Link>
                      </div>
                      <div className="user__more">
                        {/* <NavDropdown title="" id="basic-nav-dropdown">
                          <Link to={"/history"}>
                            {" "}
                            <NavDropdown.Item href="/history">
                              History
                            </NavDropdown.Item>
                          </Link>

                          <Link to={"/user"}>
                            <NavDropdown.Item>Change password</NavDropdown.Item>
                          </Link>
                        </NavDropdown> */}
                      </div>
                    </div>
                  )}
                </Nav.Link>
              </div>
            </div>
          </Navbar>
        </div>
      </React.Fragment>
    </StyledNav>
  );
};
