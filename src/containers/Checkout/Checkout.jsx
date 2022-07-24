import React from "react";
import "./Checkout.css";
import { Steps } from "antd";
import Navbar from "../../components/Navbar/Navbar";
import Button from "../../components/Button/Button";
import Footer from "../../components/Footer/Footer";
import Input from "../../components/Input/Input";
import { Alert } from "antd";
import { DownOutlined, UserOutlined } from "@ant-design/icons";
import { Dropdown, Menu, message, Space, Radio, Select } from "antd";

const { Step } = Steps;
const { Option } = Select;

const handleMenuClick = (e) => {
  message.info("Click on menu item.");
  console.log("click", e);
};

const menu = (
  <Menu
    onClick={handleMenuClick}
    items={[
      {
        label: "1st menu item",
        key: "1",
        icon: <UserOutlined />,
      },
      {
        label: "2nd menu item",
        key: "2",
        icon: <UserOutlined />,
      },
      {
        label: "3rd menu item",
        key: "3",
        icon: <UserOutlined />,
      },
    ]}
  />
);

const Checkout = () => {
  return (
    <React.Fragment>
      <Navbar />
      <h3>Checkout</h3>
      <Alert
        message="Success Tips"
        description="Detailed description and advice about successful copywriting."
        type="success"
        showIcon
      />
      <Steps current={1}>
        <Step title="Finished" description="This is a description." />
        <Step
          title="In Progress"
          subTitle="Left 00:00:08"
          description="This is a description."
        />
        <Step title="Waiting" description="This is a description." />
      </Steps>
      <div className="checkout">
        <div className="checkout__info">
          <h4>Contact information</h4>
          <div className="user__info">
            <div className="user__info-name">
              <div className="row">
                <div className="col1">
                  <label htmlFor="" className="p1">
                    First Name
                  </label>{" "}
                  <br />
                  <Input placeholder={"first name"} />
                </div>
                <div className="col2">
                  <label htmlFor="" className="p1">
                    Last Name
                  </label>{" "}
                  <br />
                  <Input placeholder={"last name"} />
                </div>
              </div>
            </div>
            <div className="user__info-phone">
              <label htmlFor="" className="p1">
                Phone
              </label>{" "}
              <br />
              <Dropdown overlay={menu}>
                <Button>
                  <Space>
                    +84
                    <DownOutlined />
                  </Space>
                </Button>
              </Dropdown>
              <Input type={"phone"} />
            </div>
            <div className="user__info-address">
              <h5>Address</h5>
              <div className="row">
                <div className="col1">
                  <label htmlFor="">Province</label>
                  <Select defaultValue="lucy" style={{ width: 120 }}>
                    <Option value="jack">Jack</Option>
                    <Option value="lucy">Lucy</Option>
                    <Option value="disabled" disabled>
                      Disabled
                    </Option>
                    <Option value="Yiminghe">yiminghe</Option>
                  </Select>
                </div>
              </div>

              <label htmlFor="">Street</label>
              <Input placeholder={"street"} />
              <label htmlFor="">Ward</label>
              <Input placeholder={"Helly ward"} />
              <label htmlFor="">District</label>
              <Input placeholder={"Alo district"} />
            </div>
            <div className="user__info-email">
              <label htmlFor="">Email</label>
              <Input placeholder={"loco@gmail.com"} type={"email"} />
            </div>
            <div className="user__info-notes">
              <label htmlFor="">Notes</label>
              <Input placeholder={"Notes"} type={"textarea"} />
            </div>
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
        </div>
        <div className="bill">
          <h4>Bill</h4>
          <Button>Edit</Button>
          <div className="bill__products-confirm">
            <div className="row ">
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
                  <span>Quantity</span>
                  <span>1</span>
                </h4>
              </div>
              <div className="col col3">
                <h4>5.00</h4>
              </div>
            </div>
            <div className="row ">
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
                  <span>Quantity</span>
                  <span>1</span>
                </h4>
              </div>
              <div className="col col3">
                <h4>5.00</h4>
              </div>
            </div>
          </div>
          <div className="bill__voucher">
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
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
};
export default Checkout;
