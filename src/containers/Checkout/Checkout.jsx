import React from "react";
import { Steps } from "antd";

import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { PrimaryLayout } from "../../components/Layout";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

import { Space, Radio } from "antd";
import { Link } from "react-router-dom";
import styled from "styled-components";

const { Step } = Steps;

const StyledCheckout = styled.div`
  .checkout {
    margin: 0 !important;
    margin-top: 2rem !important;
  }
  .contact-form {
    border-radius: 20px;
    background-color: rgb(149, 241, 150);
    border: 1px solid #f7f7f7;
    padding: 1rem;
    margin-right: 1rem;
  }

  .contact-form .shipping,
  .payment-method {
    padding: 1rem 0;
    border-top: 1px solid #40aa54;
  }
  .bill {
    border-radius: 20px;
    background-color: #d5fbdc;
    border: 1px solid #f7f7f7;
    padding: 1rem;
  }

  .bill__head {
    display: flex;
    justify-content: space-between;
    padding: 0.5rem 1rem;
  }
  .bill .bill__head-edit h5 {
    color: #40aa54 !important;
    font-weight: 680;
  }
  .bill .bill__products-confirm__item {
    padding: 0.7rem 0;
  }
  .bill .bill__voucher,
  .bill__shipping-fee,
  .bill__total {
    padding: 1rem 0;
    border-top: 1px solid #40aa54;
  }
  .bill .bill__voucher__head {
    padding-bottom: 0.7rem;
  }
  .bill .bill__voucher__input input {
    height: 49px;
  }
  .bill .bill__shipping-fee__title {
    padding-bottom: 0.5rem;
  }
  .bill .bill__checkout {
    text-align: center;
    padding-bottom: 1rem;
  }
  .custome-step .ant-steps-item-title:after {
    background: #40aa54 !important;
  }
  .custome-step .ant-steps-item-icon {
    border-color: #40aa54 !important;
  }
  .custome-step .ant-steps-item-icon .ant-steps-icon {
    color: #40aa54 !important;
  }
  .ant-steps-item-process .ant-steps-item-icon > .ant-steps-icon {
    color: #fff !important;
  }
  .ant-steps-item-process > .ant-steps-item-container > .ant-steps-item-icon {
    background: #40aa54 !important;
  }

  .continue-shopping {
    padding: 1rem 0;
  }
`;
const Checkout = () => {
  return (
    <React.Fragment>
      <PrimaryLayout>
        <StyledCheckout>
          {" "}
          <div className="container">
            <h3>Checkout</h3>

            <Steps className="custome-step" current={1}>
              <Step title="Ordered" description="This is a description." />
              <Step
                title="Contact infomation"
                subTitle=""
                description="This is a description."
              />
              <Step title="Confirm" description="This is a description." />
            </Steps>

            <Row className="checkout">
              <Col sm={8} className="contact-form ">
                <h4 className="container">Contact information</h4>
                <div className="user-info container">
                  <Form>
                    <Row className="mb-3">
                      <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                      </Form.Group>

                      <Form.Group as={Col} controlId="formGridPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                      </Form.Group>
                    </Row>

                    <Form.Group className="mb-3" controlId="formGridAddress1">
                      <Form.Label>Address</Form.Label>
                      <Form.Control placeholder="1234 Main St" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formGridAddress2">
                      <Form.Label>Address 2</Form.Label>
                      <Form.Control placeholder="Apartment, studio, or floor" />
                    </Form.Group>

                    <Row className="mb-3">
                      <Form.Group as={Col} controlId="formGridCity">
                        <Form.Label>City</Form.Label>
                        <Form.Control />
                      </Form.Group>

                      <Form.Group as={Col} controlId="formGridState">
                        <Form.Label>State</Form.Label>
                        <Form.Select defaultValue="Choose...">
                          <option>Choose...</option>
                          <option>...</option>
                        </Form.Select>
                      </Form.Group>

                      <Form.Group as={Col} controlId="formGridZip">
                        <Form.Label>Zip</Form.Label>
                        <Form.Control />
                      </Form.Group>
                    </Row>
                  </Form>
                </div>
                <div className="shipping container">
                  <h4>Shipping mode</h4>
                  {/* onChange={onChange} value={value} */}
                  <Radio.Group>
                    <Space direction="vertical">
                      <Radio value={1}>Option A</Radio>
                      <Radio value={2}>Option B</Radio>
                      <Radio value={3}>Option C</Radio>
                    </Space>
                  </Radio.Group>
                </div>
                <div className="payment-method container">
                  <h4>Payment method</h4>
                  <Radio.Group>
                    <Space direction="vertical">
                      <Radio value={1}>COD</Radio>
                      <Radio value={2}>Internet banking</Radio>
                      <Radio value={3}>Coint</Radio>
                    </Space>
                  </Radio.Group>
                </div>
              </Col>
              <Col className="bill ">
                <div className="bill__head container">
                  <div className="bill__head-title">
                    <h4>Bill</h4>
                  </div>
                  <div className="bill__head-edit">
                    <Link to={"/cart"}>
                      <h5>Edit</h5>
                    </Link>
                  </div>
                </div>

                <div className="bill__products-confirm container">
                  <Row className="bill__products-confirm__item">
                    <Col sm={3}>
                      <div className="item-image">
                        <img src="logo.png" alt="" height="40px" />
                      </div>
                    </Col>
                    <Col>
                      <div className="item-info">
                        <span className="p1">Name products</span> <br />
                        <span className="p2">Created by: aaa</span> <br />
                        <span className="p2">Quantity: </span>
                        <span className="p2">1</span>
                      </div>
                    </Col>

                    <Col sm={2}>
                      <h5>5.00</h5>
                    </Col>
                  </Row>
                  <Row className="bill__products-confirm__item">
                    <Col sm={3}>
                      <div className="item-image">
                        <img src="logo.png" alt="" height="40px" />
                      </div>
                    </Col>
                    <Col>
                      <div className="item-info">
                        <span className="p1">Name products</span> <br />
                        <span className="p2">Created by: aaa</span> <br />
                        <span className="p2">Quantity: </span>
                        <span className="p2">1</span>
                      </div>
                    </Col>
                    <Col sm={2}>
                      <h5>5.00</h5>
                    </Col>
                  </Row>
                  <Row className="bill__products-confirm__item">
                    <Col sm={3}>
                      <div className="item-image">
                        <img src="logo.png" alt="" height="40px" />
                      </div>
                    </Col>
                    <Col>
                      <div className="item-info">
                        <span className="p1">Name products</span> <br />
                        <span className="p2">Created by: aaa</span> <br />
                        <span className="p2">Quantity: </span>
                        <span className="p2">1</span>
                      </div>
                    </Col>
                    <Col sm={2}>
                      <h5>5.00</h5>
                    </Col>
                  </Row>
                </div>
                <div className="bill__voucher container">
                  <h5 className="bill__voucher__head">Voucher</h5>
                  <Row>
                    <Col className="bill__voucher__input">
                      <Input placeholder={"voucher code"} />
                    </Col>
                    <Col sm={4}>
                      <Button>Add</Button>
                    </Col>
                  </Row>
                </div>
                <div className="bill__shipping-fee">
                  <h5 className="bill__shipping-fee__title">Shipping</h5>
                  <Row>
                    <Col>
                      <span className="p1">Delivery:</span>
                    </Col>
                    <Col sm={3}>
                      <h5>GHTK</h5>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <span className="p1">Fee:</span>
                    </Col>
                    <Col sm={3}>
                      <h5>2.00</h5>
                    </Col>
                  </Row>
                </div>
                <div className="bill__total">
                  <h5 className="bill__total__title">Total</h5>
                  <Row>
                    <Col>
                      <span className="p1">Total products: </span>
                    </Col>
                    <Col sm={3}>
                      <h5>252.84</h5>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <span className="p1">Discount: </span>
                    </Col>
                    <Col sm={3}>
                      <h5>-10.00</h5>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <span className="p1">Total: </span>
                    </Col>
                    <Col sm={3}>
                      <h4 style={{ color: "#eb4d4b" }}>242.84</h4>
                    </Col>
                  </Row>
                </div>
                <div className="bill__checkout">
                  <Button bgColor={"#eb4d4b"} width={"90%"}>
                    Check out
                  </Button>
                </div>
              </Col>
            </Row>
            <Row>
              <Col sm={8}>
                <div className="continue-shopping container">
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
              </Col>
            </Row>
          </div>
        </StyledCheckout>
      </PrimaryLayout>
    </React.Fragment>
  );
};
export default Checkout;
