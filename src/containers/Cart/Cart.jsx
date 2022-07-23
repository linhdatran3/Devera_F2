import React from "react";
import "./Cart.css";
import Navbar from "../../components/Navbar/Navbar";
import Button from "../../components/Button/Button";
import Footer from "../../components/Footer/Footer";
import Input from "../../components/Input/Input";
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
      <div className="cart">
        <div className="cart__products">
          <div className="temp">
            <div className="cart__products-head">
              <div className="row">
                <div className="col col1">
                  <h3>Product</h3>
                </div>
                <div className="col col2">
                  <h3>Quantity</h3>
                </div>
                <div className="col col3">
                  <h3>Price</h3>
                </div>
                <div className="col col4">
                  <h3>Total</h3>
                </div>
                <div className="col col5"></div>
              </div>
            </div>
            <div className="cart__products-item">
              <div className="item row ">
                <div className="col col1">
                  <div className="item-image">
                    <img src="logo.png" alt="" height="80px" />
                  </div>
                  <div className="item-info">
                    <h4>Name products</h4>
                    <p className="p2">Created by: aaa</p>
                  </div>
                </div>
                <div className="col col2">
                  <h4>
                    <span className="decrease">-</span>
                    <span className="qtyItem">1</span>
                    <span className="increase">+</span>
                  </h4>
                </div>
                <div className="col col3">
                  <h4>5.00</h4>
                </div>
                <div className="col col4">
                  <h4>10.00</h4>
                </div>
                <div className="col col5">
                  <CloseOutlined />
                </div>
              </div>

              <div className="item row ">
                <div className="col col1">
                  <div className="item-image">
                    <img src="logo.png" alt="" height="80px" />
                  </div>
                  <div className="item-info">
                    <h4>Name products</h4>
                    <p className="p2">Created by: aaa</p>
                  </div>
                </div>
                <div className="col col2">
                  <h4>
                    <span className="decrease">-</span>
                    <span className="qtyItem">1</span>
                    <span className="increase">+</span>
                  </h4>
                </div>
                <div className="col col3">
                  <h4>5.00</h4>
                </div>
                <div className="col col4">
                  <h4>10.00</h4>
                </div>
                <div className="col col5">
                  <CloseOutlined />
                </div>
              </div>
              <div className="item row ">
                <div className="col col1">
                  <div className="item-image">
                    <img src="logo.png" alt="" height="80px" />
                  </div>
                  <div className="item-info">
                    <h4>Name products</h4>
                    <p className="p2">Created by: aaa</p>
                  </div>
                </div>
                <div className="col col2">
                  <h4>
                    <span className="decrease">-</span>
                    <span className="qtyItem">1</span>
                    <span className="increase">+</span>
                  </h4>
                </div>
                <div className="col col3">
                  <h4>5.00</h4>
                </div>
                <div className="col col4">
                  <h4>10.00</h4>
                </div>
                <div className="col col5">
                  <CloseOutlined />
                </div>
              </div>
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
            <div className="makePurcharse">
              <Button>Make Purchase</Button>
            </div>
          </div>
        </div>
        <div className="cart__payment">
          <div className="cart__payment-coupon">
            <h3>Have coupon?</h3>
            <div className="coupon">
              <Input placeholder={"Coupon code"} />
              <Button>Apply</Button>
            </div>
          </div>
          <div className="cart__payment-total">
            <div className="row">
              <div className="col col1">
                <h4>Total price:</h4>
              </div>
              <div className="col col2">
                <h4>467.62</h4>
              </div>
            </div>
            <div className="row">
              <div className="col col1">
                <h4>Discount:</h4>
              </div>
              <div className="col col2">
                <h4>467.62</h4>
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
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
};
export default Cart;
