import React, { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "../../components/Button/Button";
import Modal from "react-bootstrap/Modal";
import { EditOutlined } from "@ant-design/icons";
import Input from "../../components/Input/Input";
import "./User.css";
const User = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <React.Fragment>
      <Navbar />
      <div className="container">
        <Row>
          <Col md={3} xs={2} className="user__info">
            <div className="user__info__avatar">
              <img src="logo192.png" alt="" height={"200px"} />
              <EditOutlined />
              <h5>Linh Da Tran</h5>
            </div>
          </Col>
          <Col className="user__setting">
            <div className="personal-detail">
              <div className="personal-detail__head">
                <div className="personal-detail__head-title">
                  <h3>Personal detail</h3>
                </div>
                <div className="personal-detail__head-edit">
                  <EditOutlined />
                  <Button onClick={handleShow}>Edit</Button>

                  {/* modal */}
                  <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                      <Modal.Title>Modal heading</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                      Woohoo, you're reading this text in a modal!
                    </Modal.Body>
                    <Modal.Footer>
                      <Button onClick={handleClose}>Close</Button>
                      <Button onClick={handleClose}>Save Changes</Button>
                    </Modal.Footer>
                  </Modal>
                </div>
              </div>
              <div className="personal-detail__content">
                <Row className="personal-detail__content-name">
                  <Col md={{ span: 3, offset: 3 }}>
                    <span classname="p1">Name</span>
                  </Col>
                  <Col>
                    <span className="p1">Linh Da Tran</span>
                  </Col>
                </Row>
                <Row className="personal-detail__content-address">
                  <Col md={{ span: 3, offset: 3 }}>
                    <span classname="p1">Address</span>
                  </Col>
                  <Col>
                    <p className="p2">Vinhomes grand park</p>
                    <p className="p2">Long Thanh My Ward, 9 District</p>
                    <p className="p2">Thu Duc City, Ho Chi Minh City</p>{" "}
                  </Col>
                </Row>
                <Row className="personal-detail__content-email">
                  <Col md={{ span: 3, offset: 3 }}>
                    <span classname="p1">Email</span>
                  </Col>
                  <Col>
                    <p className="p2">linhdatran3@gmail.com</p>
                  </Col>
                </Row>
                <Row className="personal-detail__content-phone">
                  <Col md={{ span: 3, offset: 3 }}>
                    <span classname="p1">Phone</span>
                  </Col>
                  <Col>
                    <p className="p2">0582158064</p>
                  </Col>
                </Row>
              </div>
            </div>
          </Col>
        </Row>

        <Row>
          <Col md={3} xs={2}></Col>
          <Col className="accout-setting">
            <div className="account-setting__head">
              <div className="account-setting__head-title">
                <h4>Account setting</h4>
              </div>
              <div className="account-setting__head-edit">
                <EditOutlined />
                <Button onClick={handleShow}>Edit</Button>

                {/* modal */}
                <Modal show={show} onHide={handleClose}>
                  <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    Woohoo, you're reading this text in a modal!
                  </Modal.Body>
                  <Modal.Footer>
                    <Button onClick={handleClose}>Close</Button>
                    <Button onClick={handleClose}>Save Changes</Button>
                  </Modal.Footer>
                </Modal>
              </div>
            </div>
            <div className="account-setting__content">
              <Row className="account-setting__content-username">
                <Col md={{ span: 3, offset: 3 }}>
                  <span classname="p1">Username</span>
                </Col>
                <Col>
                  <Input
                    disabled={"disabled"}
                    border={"1px solid #000"}
                    value={"linhdatran3"}
                  />
                </Col>
              </Row>
              <Row className="account-setting__content-password">
                <Col md={{ span: 3, offset: 3 }}>
                  <span classname="p1">Password</span>
                </Col>
                <Col>
                  <Input
                    disabled={"disabled"}
                    border={"1px solid #000"}
                    value={"linhdatran3"}
                    type={"password"}
                  />
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </div>

      <Footer />
    </React.Fragment>
  );
};
export default User;
