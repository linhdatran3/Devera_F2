import React, { useState, useEffect } from "react";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { PrimaryLayout } from "../../components/Layout";
import styled from "styled-components";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Modal from "react-bootstrap/Modal";
import { EditOutlined } from "@ant-design/icons";

import { useDispatch, useSelector } from "../../hooks";
import { ENDPOINT } from "../../utils/constant";

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
    margin: 2rem;
    border-radius: 20px;
    border: 1.5px solid #dbdada;
  }
  .user__setting .personal-detail .row {
    padding: 0.5rem 0 !important;
  }
  .user__setting .personal-detail__head {
    display: flex;
    justify-content: space-between;
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
`;
const User = () => {
  const [show, setShow] = useState(false);
  // const [user, setUser] = useState({ username: "", email: "", avatar: "" });

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleUpdateUser = (e) => {};
  const id = localStorage.getItem("userId");
  const { user } = useSelector(({ userModel }) => ({
    user: userModel.user,
  }));
  const { getUserById } = useDispatch(({ userModel }) => ({
    getUserById: userModel.getUserById,
  }));
  useEffect(() => {
    getUserById(id);
  }, [id, getUserById]);
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
                      {user.walletAddress
                        ? user.walletAddress
                        : "hx2890ea3b972be6c05757dc6417a42b800744d1e9"}
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
                          <span className="p1">Name</span>
                        </Col>
                        <Col>
                          <span className="p1">Linh Da Tran</span>
                        </Col>
                      </Row>
                      <Row className="personal-detail__content-address">
                        <Col md={{ span: 3, offset: 3 }}>
                          <span className="p1">Address</span>
                        </Col>
                        <Col>
                          <p className="p2">Vinhomes grand park</p>
                          <p className="p2">Long Thanh My Ward, 9 District</p>
                          <p className="p2">
                            Thu Duc City, Ho Chi Minh City
                          </p>{" "}
                        </Col>
                      </Row>
                      <Row className="personal-detail__content-email">
                        <Col md={{ span: 3, offset: 3 }}>
                          <span className="p1">Email</span>
                        </Col>
                        <Col>
                          <p className="p2">linhdatran3@gmail.com</p>
                        </Col>
                      </Row>
                      <Row className="personal-detail__content-phone">
                        <Col md={{ span: 3, offset: 3 }}>
                          <span className="p1">Phone</span>
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
                        <span className="p1">Username</span>
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
                        <span className="p1">Password</span>
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
            </form>
          </div>
        </StyledUser>
      </PrimaryLayout>
    </React.Fragment>
  );
};
export default User;
