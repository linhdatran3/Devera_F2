import React from "react";
import "./Checkout.css";
import { Steps } from "antd";
import Navbar from "../../components/Navbar/Navbar";
import Button from "../../components/Button/Button";
import Footer from "../../components/Footer/Footer";
import Input from "../../components/Input/Input";

import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

import { Space, Radio } from "antd";

const { Step } = Steps;

const Checkout = () => {
  return (
    <React.Fragment>
      <Navbar />
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
        <Col sm={8} className="contact-form">
          <h4>Contact information</h4>
          <div className="user__info">
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

              <Form.Group className="mb-3" id="formGridCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
              </Form.Group>

              <Button>Submit</Button>
            </Form>
          </div>
          <div className="shipping">
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
          <div className="payment__method">
            <h4>Payment method</h4>
            <Radio.Group>
              <Space direction="vertical">
                <Radio value={1}>COD</Radio>
                <Radio value={2}>Internet banking</Radio>
                <Radio value={3}>Coint</Radio>
              </Space>
            </Radio.Group>
          </div>
          <div className="continue-shopping">
            <Button
              bgColor={"#fff"}
              txtColor={"#16162E"}
              border={"1px solid #40aa54"}
            >
              Continue Shopping
            </Button>
          </div>
        </Col>
        <Col className="bill">
          <div className="bill__head">
            <div className="bill__head-title">
              <h4>Bill</h4>
            </div>
            <div className="bill__head-edit">
              <Button bgColor={"#d5fbdc"} txtColor={"#40aa54"}>
                Edit
              </Button>
            </div>
          </div>

          <div className="bill__products-confirm">
            <Row>
              <Col sm={3}>
                <div className="item-image">
                  <img src="logo.png" alt="" height="40px" />
                </div>
              </Col>
              <Col>
                <div className="item-info">
                  <h4>Name products</h4>
                  <p className="p2">Created by: aaa</p>
                </div>
                <span>Quantity</span>
                <span>1</span>
              </Col>
              <Col sm={3}>
                <h5>5.00</h5>
              </Col>
            </Row>
            <Row>
              <Col sm={3}>
                <div className="item-image">
                  <img src="logo.png" alt="" height="40px" />
                </div>
              </Col>
              <Col>
                <div className="item-info">
                  <h4>Name products</h4>
                  <p className="p2">Created by: aaa</p>
                </div>
                <span>Quantity</span>
                <span>1</span>
              </Col>
              <Col sm={3}>
                <h5>5.00</h5>
              </Col>
            </Row>
            <Row>
              <Col sm={3}>
                <div className="item-image">
                  <img src="logo.png" alt="" height="40px" />
                </div>
              </Col>
              <Col>
                <div className="item-info">
                  <h4>Name products</h4>
                  <p className="p2">Created by: aaa</p>
                </div>
                <span>Quantity</span>
                <span>1</span>
              </Col>
              <Col sm={3}>
                <h5>5.00</h5>
              </Col>
            </Row>
          </div>
          <div className="bill__voucher">
            <h4>Voucher</h4>
            <Input placeholder={"voucher code"} />
            <Button>Add</Button>
          </div>
          <div className="bill__shipping-fee">
            <span>Shipping fee: </span>
            <span className="p1">10.00</span>
          </div>
          <div className="bill__total">
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
          <div className="bill__checkout">
            <Button>Check out</Button>
          </div>
        </Col>
      </Row>
      <Footer />
    </React.Fragment>
  );
};
export default Checkout;
