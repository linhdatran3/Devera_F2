import React from "react";
import "./Cart.css";
import Navbar from "../../components/Navbar/Navbar";
import Button from "../../components/Button/Button";
import Footer from "../../components/Footer/Footer";
import Input from "../../components/Input/Input";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

import { Link } from "react-router-dom";
import { CloseOutlined } from "@ant-design/icons";
import { Alert } from "antd";

const Cart = () => {
  return (
    <React.Fragment>
      <Navbar />
      <h3>Shopping Cart</h3>
      <Alert
        message="Success Tips"
        description="Detailed description and advice about successful copywriting."
        type="success"
        showIcon
      />
      <Row className="cart">
        <Col sm={9} className="cart__products">
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
              <Button
                bgColor={"#fff"}
                txtColor={"#16162E"}
                border={"1px solid #40aa54"}
              >
                Continue Shopping
              </Button>
            </div>
          </div>
        </Col>
        <Col className="cart__payment">
          <div className="cart__payment-coupon">
            <h4>Have coupon?</h4>
            <div className="coupon">
              <Input placeholder={"Coupon code"} />
              <Button>Apply</Button>
            </div>
          </div>
          <div className="cart__payment-total">
            <div className="row">
              <div className="col col1">
                <h5>Total price:</h5>
              </div>
              <div className="col col2">
                <h5>467.62</h5>
              </div>
            </div>
            <div className="row">
              <div className="col col1">
                <h5>Discount:</h5>
              </div>
              <div className="col col2">
                <h5>467.62</h5>
              </div>
            </div>
            <div className="row">
              <div className="col col1">
                <h4>Total:</h4>
              </div>
              <div className="col col2">
                <h4>467.62</h4>
              </div>
            </div>
          </div>
          <Link to={"/checkout"}>
            <Button>Check out</Button>
          </Link>
        </Col>
      </Row>
      <Footer />
    </React.Fragment>
  );
};
export default Cart;
