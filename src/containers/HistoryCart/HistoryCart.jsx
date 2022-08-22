import React, { useEffect } from "react";
import { PrimaryLayout } from "../../components/Layout";
import { CheckCircleOutlined } from "@ant-design/icons";
import { Filter } from "../../components/Filter";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import styled from "styled-components";
// import axios from "axios";
// import { ENDPOINT } from "../../utils/constant";
import { useDispatch, useSelector } from "../../hooks";
import { ENDPOINT } from "../../utils/constant";
import { hashShortener } from "../../sdk/iconSDK";
const StyledHistoryCart = styled.div`
  .history__head {
    padding-top: 1rem;
    padding-bottom: 1rem;
    border-bottom: 1px solid #dadada;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .history-title .row {
    padding: 0;
    padding-left: 1rem;
  }
  .history-item {
    border-bottom: 1.5px solid #dbdada;
    padding: 0.5rem;
    margin-bottom: 0.5rem;
  }
  .history-item .item-products {
    display: flex;
    padding-bottom: 0.5rem;
  }
  .history__status-success {
    color: #40aa54;
  }
  .history__status-cancel {
    color: #eb4d4b;
  }
  .item-image img {
    border-radius: 5px;
  }
  .item-info {
    margin-left: 0.5rem;
  }
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
  .historyCart {
    border-radius: 20px;
    border: 1.5px solid #dbdada;
  }
`;
const HistoryCart = () => {
  const id = localStorage.getItem("userId");
  // const token = localStorage.getItem("jwt");
  const { carts } = useSelector(({ cartModel }) => ({
    carts: cartModel.carts,
  }));

  const { getListCarts } = useDispatch(({ cartModel }) => ({
    getListCarts: cartModel.getListCarts,
  }));
  const { user } = useSelector(({ userModel }) => ({
    user: userModel.user,
  }));
  const { getUserById } = useDispatch(({ userModel }) => ({
    getUserById: userModel.getUserById,
  }));

  useEffect(() => {
    getListCarts(id);
    getUserById(id);
  }, [id, getListCarts, getUserById]);
  return (
    <React.Fragment>
      <PrimaryLayout>
        <StyledHistoryCart>
          <div className="container">
            <Row>
              <Col md={3} xs={2}>
                <section className="user__info">
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
                    <h5>{user.username ? user.username : "No name"}</h5>
                    <p>
                      Address:{" "}
                      {user.walletAddress
                        ? hashShortener(user.walletAddress)
                        : "hx2...4d1e9"}
                    </p>
                    <p>Join: {user.created_at} </p>
                  </div>
                </section>
              </Col>
              <Col md={9}>
                {" "}
                <section className="historyCart container">
                  <div className="temp">
                    <div className="history__head">
                      <div className="left">
                        <h4>History shopping cart</h4>
                      </div>
                      <div className="right">
                        <Filter />
                      </div>
                    </div>
                    {/* history shopping cart */}
                    <div className="history__content">
                      <div className="history-title">
                        {/* <Row>
                          <Col sm={1}>
                            <p>No</p>
                          </Col>
                          <Col sm={4}>
                            <p>List Product</p>
                          </Col>

                          <Col sm={3}>
                            <p>Date</p>
                          </Col>
                          <Col sm={2}>
                            <p>Total</p>
                          </Col>
                          <Col sm={2}>
                            <p>Status</p>
                          </Col>
                        </Row> */}
                      </div>
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
                                      cart?.users_permissions_user
                                        ?.walletAddress
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
                </section>
              </Col>
            </Row>
          </div>
        </StyledHistoryCart>
      </PrimaryLayout>
    </React.Fragment>
  );
};
export default HistoryCart;
