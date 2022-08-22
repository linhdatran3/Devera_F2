import React, { useEffect } from "react";
import { PrimaryLayout } from "../../components/Layout";
import { CheckCircleOutlined } from "@ant-design/icons";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import styled from "styled-components";
// import axios from "axios";
// import { ENDPOINT } from "../../utils/constant";
import { useDispatch, useSelector } from "../../hooks";

const StyledHistoryCart = styled.div`
  .history__head {
    padding-top: 1rem;
    padding-bottom: 0;
    text-align: center;
  }
  .history-title .row {
    padding: 0;
    padding-left: 1rem;
  }
  .history-item {
    border-radius: 20px;
    border: 1.5px solid #dbdada;
    padding: 1rem;
    margin-bottom: 1rem;
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
`;
const HistoryCart = async () => {
  const id = localStorage.getItem("userId");
  // const token = localStorage.getItem("jwt");
  const { carts } = useSelector(({ cartModel }) => ({
    carts: cartModel.carts,
  }));

  const { getListCarts } = useDispatch(({ cartModel }) => ({
    getListCarts: cartModel.getListCarts,
  }));

  useEffect(() => {
    console.log("carts");
    getListCarts(id);
  }, [id, getListCarts]);
  return (
    <React.Fragment>
      <PrimaryLayout>
        <StyledHistoryCart>
          <section className="historyCart container">
            <div className="temp">
              <div className="history__head">
                <h4>History shopping cart</h4>
              </div>
              {/* history shopping cart */}
              <div className="history__content">
                <div className="history-title">
                  <Row>
                    <Col sm={1}>
                      <p>No</p>
                    </Col>
                    <Col sm={5}>
                      <p>List Product</p>
                    </Col>

                    <Col sm={2}>
                      <p>Date</p>
                    </Col>
                    <Col sm={2}>
                      <p>Total</p>
                    </Col>
                    <Col sm={2}>
                      <p>Status</p>
                    </Col>
                  </Row>
                </div>
                {/* {carts?.map((cart, index) => (
                  <div className="history-item" key={index}>
                    <Row>
                      <Col sm={1}>
                        <h5>#{index}</h5>
                      </Col>
                      <Col sm={5}>
                        <div className="item-products">
                          <div className="item-image">
                            <img src="logo.png" alt="" height="80px" />
                          </div>
                          <div className="item-info">
                            <p className="p1">{cart.product.name}</p>
                            <p className="p2 createdBy">
                              Created by:{" "}
                              {cart.users_permissions_user.walletAddress}
                            </p>
                            <p className="p2 priceItem">
                              Price:
                              {cart.product.price}
                            </p>
                          </div>
                        </div>
                      </Col>

                      <Col sm={2}>
                        <span className="p1">{cart.created_at}</span>
                      </Col>
                      <Col sm={2}>
                        <h5>{cart.total}</h5>
                      </Col>
                      <Col sm={2} className="history__status-success">
                        <CheckCircleOutlined />
                        <span className="p1"> Completed!</span>
                      </Col>
                    </Row>
                  </div>
                ))} */}
              </div>
            </div>
          </section>
        </StyledHistoryCart>
      </PrimaryLayout>
    </React.Fragment>
  );
};
export default HistoryCart;
