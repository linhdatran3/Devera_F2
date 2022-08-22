import React, { useState, useEffect } from "react";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { Input as InputAnt } from "antd";
import {
  InstagramOutlined,
  GithubOutlined,
  CopyOutlined,
  AppstoreAddOutlined,
} from "@ant-design/icons";
import { PrimaryLayout } from "../../components/Layout";
import styled from "styled-components";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { EditOutlined, CheckCircleOutlined } from "@ant-design/icons";

import { useDispatch, useSelector } from "../../hooks";
import { ENDPOINT } from "../../utils/constant";
import { hashShortener } from "../../sdk/iconSDK";

const StyledUser = styled.div`
  .user__info {
    /* background-color: #d5fbdc; */
    padding-top: 2rem;
    padding-bottom: 1rem;
    border-radius: 20px;
    border: 1.5px solid #dbdada;
  }
  .user__info__avatar {
    text-align: center;
  }
  .user__setting {
    padding: 1rem;
    margin-left: 1rem;
    border-radius: 20px;
    border: 1.5px solid #dbdada;
  }
  .user__setting .personal-detail .row {
    padding: 0.5rem 0 !important;
  }
  .user__setting .personal-detail__head {
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #dbdada;
    align-items: center;
  }

  .accout-setting {
    padding: 2rem;
    margin: 2rem;
    border-radius: 20px;
    border: 1.5px solid #dbdada;
  }
  .account-setting__head {
    display: flex;
    justify-content: space-between;
  }
  .personal-detail__content-bio input {
    border-radius: 15px;
  }
  .ant-input-affix-wrapper-lg {
    border-radius: 10px;
    width: 70%;
  }
  .personal-detail__content input {
    width: 70%;
  }
  .walletAddress {
    border-radius: 10px;
    width: 70%;
    display: flex;
    justify-content: space-between;
    border: 1px #dadada solid;
    padding: 0.5rem 0.2rem;
    font-size: 14px;
  }
  .personal-detail__head-edit {
    padding: 0.5rem 0;
  }
  .col__created {
    margin-top: 1rem;
    padding: 1rem;
  }
  .created {
    border: 1.5px solid #dadada;
    padding: 1rem;
    border-radius: 20px;
  }
  .created__head {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 0;
    border-bottom: 1px solid #dadada;
  }
  .created__head-add svg {
    font-size: 30px;
  }
  .history-item {
    border-bottom: 1.5px solid #dbdada;
    padding: 0.5rem;
    margin-bottom: 0.5rem;
  }
  .item-products {
    display: flex;
  }
  .item-info {
    margin-left: 0.5rem;
  }
  .item-image img {
    border-radius: 5px;
  }
`;
const User = () => {
  const [change, setChange] = useState(false);
  // const [user, setUser] = useState({ username: "", email: "", avatar: "" });
  const handleUpdateUser = (e) => {};
  const id = localStorage.getItem("userId");
  const { user } = useSelector(({ userModel }) => ({
    user: userModel.user,
  }));
  const { getUserById } = useDispatch(({ userModel }) => ({
    getUserById: userModel.getUserById,
  }));
  const { carts } = useSelector(({ cartModel }) => ({
    carts: cartModel.carts,
  }));

  const { getListCarts } = useDispatch(({ cartModel }) => ({
    getListCarts: cartModel.getListCarts,
  }));
  useEffect(() => {
    getUserById(id);
    getListCarts(id);
  }, [id, getUserById, getListCarts]);
  return (
    <React.Fragment>
      <PrimaryLayout>
        <StyledUser>
          <div className="container">
            <form
              onSubmit={(e) => handleUpdateUser(e)}
              method="post"
              enctype="multipart/form-data"
            >
              <Row>
                <Col md={3} xs={2} className="user__info">
                  <div className="user__info__avatar">
                    <img
                      src={
                        user?.avatar?.url
                          ? `${ENDPOINT}${user?.avatar?.url}`
                          : "https://png.pngtree.com/png-vector/20191027/ourlarge/pngtree-avatar-vector-icon-white-background-png-image_1884971.jpg"
                      }
                      alt=""
                      height={"200px"}
                    />
                    <EditOutlined />
                    <h5>{user.username ? user.username : "No name"}</h5>
                    <p>
                      Address:{" "}
                      {user.walletAddress
                        ? hashShortener(user.walletAddress)
                        : "hx2....4d1e9"}
                    </p>
                    <p>Join: {user.created_at} </p>
                  </div>
                </Col>
                <Col className="user__setting">
                  <div className="personal-detail">
                    <div className="personal-detail__head">
                      <div className="personal-detail__head-title">
                        <h3>Personal detail</h3>
                      </div>
                      <div className="personal-detail__head-edit">
                        {change === false ? (
                          <Button bgColor="#d6d6d6" type={"button"}>
                            Save
                          </Button>
                        ) : (
                          <Button type={"submit"}>Save</Button>
                        )}
                      </div>
                    </div>
                    <div className="personal-detail__content">
                      <Row className="personal-detail__content-name">
                        <Col md={{ span: 3, offset: 2 }}>
                          <span className="p1">Username</span>
                        </Col>
                        <Col>
                          <Input
                            border={"1px solid #dadada"}
                            value={user?.username ? user?.username : ""}
                            placeholder={"Enter username"}
                            onChange={() => setChange(true)}
                          />
                        </Col>
                      </Row>

                      <Row className="personal-detail__content-email">
                        <Col md={{ span: 3, offset: 2 }}>
                          <span className="p1">Email</span>
                        </Col>
                        <Col>
                          <Input
                            disabled={"disabled"}
                            border={"1px solid #dadada"}
                            value={user?.email ? user?.email : ""}
                            placeholder={"Enter email"}
                            onChange={() => setChange(true)}
                          />
                        </Col>
                      </Row>
                      <Row className="personal-detail__content-bio instagram">
                        <Col md={{ span: 3, offset: 2 }}>
                          <span className="p1">Bio</span>
                        </Col>
                        <Col>
                          <InputAnt
                            prefix={<InstagramOutlined />}
                            size="large"
                            placeholder="Your instagram"
                          />
                        </Col>
                      </Row>
                      <Row className="personal-detail__content-bio github">
                        <Col md={{ span: 3, offset: 2 }}>
                          <span className="p1"></span>
                        </Col>
                        <Col>
                          <InputAnt
                            prefix={<GithubOutlined />}
                            size="large"
                            placeholder="Your github"
                          />
                        </Col>
                      </Row>
                      <Row className="personal-detail__content-address">
                        <Col md={{ span: 3, offset: 2 }}>
                          <span className="p1">Wallet address</span>
                        </Col>
                        <Col>
                          <div className="walletAddress">
                            <div className="walletAddress-info">
                              {user?.walletAddress ? user?.walletAddress : ""}
                            </div>
                            <div className="iconCopy">
                              <CopyOutlined />
                            </div>
                          </div>
                        </Col>
                      </Row>
                    </div>
                  </div>
                </Col>
              </Row>
            </form>
            <Row>
              <Col md={3} xs={2}></Col>
              <Col className="col__created">
                <div className="created">
                  <div className="created__head">
                    <div className="created__head-title">
                      <h3>Created</h3>
                    </div>
                    <div className="created__head-add">
                      <AppstoreAddOutlined />
                    </div>
                  </div>
                  <div className="created__content">
                    {carts.map((cart, index) => (
                      <div className="history-item" key={index}>
                        <Row>
                          <Col sm={1}>
                            <h5>#{index + 1}</h5>
                          </Col>
                          <Col sm={4}>
                            <div className="item-products">
                              <div className="item-image">
                                <img
                                  src={
                                    cart?.product?.image[0].url
                                      ? ENDPOINT + cart?.product?.image[0].url
                                      : "http://localhost:1337/uploads/F2_Store512_dbc086bfc0.png?582352.3999999762"
                                  }
                                  alt=""
                                  height="80px"
                                />
                              </div>
                              <div className="item-info">
                                <p className="p1">{cart?.product?.name}</p>
                                <p className="p2 createdBy">
                                  Created by:{" "}
                                  {hashShortener(
                                    cart?.users_permissions_user?.walletAddress
                                  )}
                                </p>
                                {/* <p className="p2 priceItem">
                              Price:
                              {cart?.product?.price}
                            </p> */}
                              </div>
                            </div>
                          </Col>

                          <Col sm={3}>
                            <span className="p2">{cart.created_at}</span>
                          </Col>
                          <Col sm={2}>
                            <p className="p1">
                              <img
                                src="https://cryptologos.cc/logos/icon-icx-logo.png"
                                alt="icx"
                                height={16}
                                width={16}
                              />{" "}
                              {cart.total}
                              {" ICX"}
                            </p>
                          </Col>
                          <Col sm={2} className="history__status-success">
                            <CheckCircleOutlined />
                            <span className="p1"> Completed!</span>
                          </Col>
                        </Row>
                      </div>
                    ))}
                  </div>
                </div>
              </Col>
            </Row>

            <Row>
              <Col md={3} xs={2}></Col>
              <Col className="col__created">
                <div className="created">
                  <div className="created__head">
                    <div className="created__head-title">
                      <h3>History shopping cart</h3>
                    </div>
                    <div className="created__head-add">
                      <AppstoreAddOutlined />
                    </div>
                  </div>
                  <div className="created__content">
                    {carts.map((cart, index) => (
                      <div className="history-item" key={index}>
                        <Row>
                          <Col sm={1}>
                            <h5>#{index + 1}</h5>
                          </Col>
                          <Col sm={4}>
                            <div className="item-products">
                              <div className="item-image">
                                <img
                                  src={
                                    cart?.product?.image[0].url
                                      ? ENDPOINT + cart?.product?.image[0].url
                                      : "http://localhost:1337/uploads/F2_Store512_dbc086bfc0.png?582352.3999999762"
                                  }
                                  alt=""
                                  height="80px"
                                />
                              </div>
                              <div className="item-info">
                                <p className="p1">{cart?.product?.name}</p>
                                <p className="p2 createdBy">
                                  Created by:{" "}
                                  {hashShortener(
                                    cart?.users_permissions_user?.walletAddress
                                  )}
                                </p>
                                {/* <p className="p2 priceItem">
                              Price:
                              {cart?.product?.price}
                            </p> */}
                              </div>
                            </div>
                          </Col>

                          <Col sm={3}>
                            <span className="p2">{cart.created_at}</span>
                          </Col>
                          <Col sm={2}>
                            <p className="p1">
                              <img
                                src="https://cryptologos.cc/logos/icon-icx-logo.png"
                                alt="icx"
                                height={16}
                                width={16}
                              />{" "}
                              {cart.total}
                              {" ICX"}
                            </p>
                          </Col>
                          <Col sm={2} className="history__status-success">
                            <CheckCircleOutlined />
                            <span className="p1"> Completed!</span>
                          </Col>
                        </Row>
                      </div>
                    ))}
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </StyledUser>
      </PrimaryLayout>
    </React.Fragment>
  );
};
export default User;
