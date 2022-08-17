import React from "react";

import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { PrimaryLayout } from "../../components/Layout";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

import { Link } from "react-router-dom";
import { CloseOutlined } from "@ant-design/icons";
import { Alert } from "antd";
import styled from "styled-components";
const StyledCart = styled.div`
  .navbar {
    height: 16vh;
    display: flex;
    padding: 1rem 0;
  }
  .cart {
    background-color: #fff;
    margin-right: 0 !important;
    margin-top: 1rem !important;
  }

  .cart .cart__products .temp {
    border-radius: 20px;
    background-color: rgb(149, 241, 150);
    border: 1px solid #f7f7f7;
    padding: 1rem;
  }
  .cart .cart__payment {
    margin-left: 1rem;
    background-color: #d5fbdc;
    padding: 1rem;
    border-radius: 20px;
    border: 1px solid #f7f7f7;
  }
  .cart__products-head {
    padding: 1rem 0;
  }
  .cart__products-item {
    padding-top: 1rem;
  }
  .cart__products-item .item-products {
    display: flex;
  }
  .cart__products-item .item-image {
    width: 40%;
  }
  .cart__products-item .item-info {
    width: 60%;
  }

  .cart__products-item .decrease,
  .increase {
    padding: 0.2rem 0.5rem;
    border: 1px solid #f7f7f7;
  }
  .cart__products-item .qtyItem {
    padding: 0.2rem 1rem;
  }

  /* .cart__products-item .item-image{
 
} */

  .cart__products-foot {
    display: flex;
    justify-content: space-between;
    padding: 1rem;
  }
  .cart__payment {
    height: 100%;
  }
  /* .cart__payment .cart__payment-coupon{
 
} */
  .cart__payment .coupon {
    display: flex;
  }
  .cart__payment input {
    width: 80%;
  }
  .cart__payment .cart__payment-total {
    border-bottom: 1px solid #f7f7f7;
    border-top: 1px solid #f7f7f7;
    margin-top: 1rem;
  }
  .cart__payment .cart__payment-total .row {
    display: flex;
    justify-content: space-between;
  }

  .cart__payment .cart__payment-check-out {
    text-align: center;
    padding: 0.7rem 0;
  }
`;
const Cart = () => {
  return (
    <React.Fragment>
      <PrimaryLayout>
        <StyledCart>
          <div className="container">
            <h3>Shopping Cart</h3>
            <Alert
              message="Success Tips"
              description="Detailed description and advice about successful copywriting."
              type="success"
              showIcon
            />

            <Row className="cart">
              <Col sm={9} className="cart__products ">
                <div className="temp">
                  <div className="cart__products-head">
                    <Row>
                      <Col sm={6}>
                        <h4>Product</h4>
                      </Col>
                      <Col sm={2}>
                        <h4>Quantity</h4>
                      </Col>
                      <Col sm={2}>
                        <h4>Price</h4>
                      </Col>
                      <Col sm={1}>
                        <h4>Total</h4>
                      </Col>
                      <Col sm={1}>
                        <h4> </h4>
                      </Col>
                    </Row>
                  </div>
                  <div className="cart__products-item">
                    <Row>
                      <Col sm={6} className="item-products">
                        <div className="item-image">
                          <img src="logo.png" alt="" height="80px" />
                        </div>
                        <div className="item-info">
                          <h4>Name products</h4>
                          <p className="p2">Created by: aaa</p>
                        </div>
                      </Col>
                      <Col sm={2}>
                        <h5>
                          <span className="decrease">-</span>
                          <span className="qtyItem">1</span>
                          <span className="increase">+</span>
                        </h5>
                      </Col>
                      <Col sm={2}>
                        <h5>5.00</h5>
                      </Col>
                      <Col sm={1}>
                        <h5>10.00</h5>
                      </Col>
                      <Col sm={1}>
                        <CloseOutlined />
                      </Col>
                    </Row>
                  </div>
                  <div className="cart__products-item">
                    <Row>
                      <Col sm={6} className="item-products">
                        <div className="item-image">
                          <img src="logo.png" alt="" height="80px" />
                        </div>
                        <div className="item-info">
                          <h4>Name products</h4>
                          <p className="p2">Created by: aaa</p>
                        </div>
                      </Col>
                      <Col sm={2}>
                        <h5>
                          <span className="decrease">-</span>
                          <span className="qtyItem">1</span>
                          <span className="increase">+</span>
                        </h5>
                      </Col>
                      <Col sm={2}>
                        <h5>5.00</h5>
                      </Col>
                      <Col sm={1}>
                        <h5>10.00</h5>
                      </Col>
                      <Col sm={1}>
                        <CloseOutlined />
                      </Col>
                    </Row>
                  </div>
                  <div className="cart__products-item">
                    <Row>
                      <Col sm={6} className="item-products">
                        <div className="item-image">
                          <img src="logo.png" alt="" height="80px" />
                        </div>
                        <div className="item-info">
                          <h4>Name products</h4>
                          <p className="p2">Created by: aaa</p>
                        </div>
                      </Col>
                      <Col sm={2}>
                        <h5>
                          <span className="decrease">-</span>
                          <span className="qtyItem">1</span>
                          <span className="increase">+</span>
                        </h5>
                      </Col>
                      <Col sm={2}>
                        <h5>5.00</h5>
                      </Col>
                      <Col sm={1}>
                        <h5>10.00</h5>
                      </Col>
                      <Col sm={1}>
                        <CloseOutlined />
                      </Col>
                    </Row>
                  </div>
                  <div className="cart__products-item">
                    <Row>
                      <Col sm={6} className="item-products">
                        <div className="item-image">
                          <img src="logo.png" alt="" height="80px" />
                        </div>
                        <div className="item-info">
                          <h4>Name products</h4>
                          <p className="p2">Created by: aaa</p>
                        </div>
                      </Col>
                      <Col sm={2}>
                        <h5>
                          <span className="decrease">-</span>
                          <span className="qtyItem">1</span>
                          <span className="increase">+</span>
                        </h5>
                      </Col>
                      <Col sm={2}>
                        <h5>5.00</h5>
                      </Col>
                      <Col sm={1}>
                        <h5>10.00</h5>
                      </Col>
                      <Col sm={1}>
                        <CloseOutlined />
                      </Col>
                    </Row>
                  </div>
                </div>

                <div className="cart__products-foot">
                  <div className="continue-shopping">
                    <Link to={"/"}>
                      <Button
                        bgColor={"#fff"}
                        txtColor={"#16162E"}
                        border={"1px solid #40aa54"}
                      >
                        Continue Shopping
                      </Button>
                    </Link>
                  </div>
                </div>
              </Col>
              <Col className="cart__payment ">
                <div className="cart__payment-coupon">
                  <h4>Have coupon?</h4>
                  <div className="coupon">
                    <Input placeholder={"Coupon code"} />
                    <Button>Apply</Button>
                  </div>
                </div>
                <div className="cart__payment-total">
                  <Row>
                    <Col>
                      <span className="p1">Total products: </span>
                    </Col>
                    <Col sm={4}>
                      <h5>252.84</h5>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <span className="p1">Coupon: </span>
                    </Col>
                    <Col sm={4}>
                      <h5>-10.00</h5>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <span className="p1">Total: </span>
                    </Col>
                    <Col sm={4}>
                      <h4 style={{ color: "#eb4d4b" }}>242.84</h4>
                    </Col>
                  </Row>
                </div>
                <div className="cart__payment-check-out">
                  <Link to={"/checkout"}>
                    <Button width={"90%"}>PAYMENT</Button>
                  </Link>
                </div>
              </Col>
            </Row>
          </div>
        </StyledCart>
      </PrimaryLayout>
    </React.Fragment>
  );
};
export default Cart;
