import React, { useState, useEffect } from "react";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { Input as InputAnt } from "antd";

import {
  InstagramOutlined,
  GithubOutlined,
  CopyOutlined,
  MoreOutlined,
} from "@ant-design/icons";
import { PrimaryLayout } from "../../components/Layout";
import styled from "styled-components";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { Filter } from "../../components/Filter";
import { CheckCircleOutlined } from "@ant-design/icons";
//Toastify CSS
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { useDispatch, useSelector } from "../../hooks";
import { ENDPOINT } from "../../utils/constant";
import { hashShortener } from "../../sdk/iconSDK";
import axios from "axios";
import { Tabs, Modal } from "antd";
const { TabPane } = Tabs;

const StyledUser = styled.div`
  .user__info {
    /* background-color: #d5fbdc; */
    padding-top: 2rem;
    padding-bottom: 1rem;
    border-radius: 20px;
    border: 1.5px solid #dbdada;
  }
  .user__info__avatar {
    margin-left: 1rem;
  }
  .user__info__content {
    border-top: 1px solid #dadada;
    margin: 0.5rem 0;
  }
  .user__setting {
    padding: 1rem;
    margin-left: 1rem;
    border-radius: 20px;
    border: 1.5px solid #dbdada;
  }
  .user__setting .personal-detail .row {
    padding: 0.5rem 0 !important;
  }
  .user__setting .personal-detail__head {
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #dbdada;
    align-items: center;
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
  .personal-detail__content-bio input {
    border-radius: 15px;
  }
  .ant-input-affix-wrapper-lg {
    border-radius: 10px;
    width: 70%;
  }
  .personal-detail__content input {
    width: 70%;
  }
  .walletAddress {
    border-radius: 10px;
    width: 70%;
    display: flex;
    justify-content: space-between;
    border: 1px #dadada solid;
    padding: 0.5rem 0.2rem;
    font-size: 14px;
  }
  .personal-detail__head-edit {
    padding: 0.5rem 0;
  }
  .col__created {
    margin-top: 1rem;
    padding: 1rem;
  }
  .created {
    padding: 1rem;
  }

  .history-item {
    border-bottom: 1.5px solid #dbdada;
    padding: 0.5rem;
    margin-bottom: 0.5rem;
  }
  .item-products {
    display: flex;
  }
  .item-info {
    margin-left: 0.5rem;
  }
  .item-image img {
    border-radius: 5px;
  }
  .ant-tabs {
    border: 1px solid #dadada;
    border-radius: 20px;
  }
  .ant-tabs-nav-list {
    margin-left: 1rem;
  }
  .filter {
    align-items: end;
    padding: 0.5rem 1rem;
    padding-top: 1rem;
  }
  .filter__sort {
    align-items: end;
  }

  .ant-alert-message {
    font-size: 12px;
  }
  .personal-detail__content .row {
    margin-bottom: 1rem;
  }
`;
const User = () => {
  const [change, setChange] = useState(false);
  const [userTempt, setUserTempt] = useState({
    username: "",
    email: "",
    status: "",
  });
  const [selectedImage, setSelectedImage] = useState();
  const [published, setPublished] = useState("");
  const [visible, setVisible] = useState(false);
  // This function will be triggered when the file field change
  const imageChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      setSelectedImage(e.target.files[0]);
    }
    setChange(true);
  };

  // This function will be triggered when the "Remove This Image" button is clicked
  const removeSelectedImage = () => {
    setSelectedImage();
  };
  const handlePublish = async (e, proId) => {
    try {
      let token = localStorage.getItem("jwt");
      console.log(e);
      console.log(proId);
      await axios
        .put(
          `${ENDPOINT}/products/${proId}`,
          {
            status: e,
          },
          { headers: { Authorization: "Bearer " + token } }
        )
        .then((res) => {
          toast.success("Update completed !", {
            position: toast.POSITION.TOP_RIGHT,
          });
          if (e === true) {
            setPublished("Unpublish");
          } else {
            setPublished("Publish");
          }
          return res.data;
        });
    } catch (error) {
      console.log(error);
    }
  };
  const handleUpdateUser = async (e) => {
    e.preventDefault();
    user.username =
      userTempt.username !== "" ? userTempt.username : user.username;
    user.email = userTempt.email !== "" ? userTempt.email : user.email;
    try {
      let id = localStorage.getItem("userId");
      let token = localStorage.getItem("jwt");
      const data = {
        username: user.username,
        email: user.email,
      };
      const formData = new FormData();
      formData.append("data", JSON.stringify(data));
      formData.append("files.avatar", e.target.image.files[0]);
      axios
        .put(`${ENDPOINT}/users/${id}`, formData, {
          headers: { Authorization: "Bearer " + token },
        })
        .then((res) => {
          toast.success("Update completed !", {
            position: toast.POSITION.TOP_RIGHT,
          });
          return res.data;
        });
    } catch (error) {
      console.log(error);
      toast.warning("Update failured !", {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  };
  // const getCurrentUser = async (list, index) => {
  //   console.log("alo");
  //   switch (index) {
  //     case 1:
  //       return list?.num1;
  //     case 2:
  //       return list?.num2;
  //     case 3:
  //       return list?.num3;
  //     case 4:
  //       return list?.num4;
  //     case 5:
  //       return list?.num5;
  //     case 6:
  //       return list?.num6;
  //     default:
  //     // code block
  //   }
  // };
  const id = localStorage.getItem("userId");
  const address = localStorage.getItem("address");
  const { user, carts, createdProducts, ownerProducts } = useSelector(
    ({ userModel, cartModel, productModel }) => ({
      user: userModel.user,
      carts: cartModel.carts,
      createdProducts: productModel.createdProducts,
      ownerProducts: productModel.ownerProducts,
    })
  );

  const {
    getUserById,
    getListCarts,
    getListCreatedByUserId,
    getListUserOwnByAddress,
  } = useDispatch(({ userModel, cartModel, productModel }) => ({
    getUserById: userModel.getUserById,
    getListCarts: cartModel.getListCarts,
    getListCreatedByUserId: productModel.getListCreatedByUserId,
    getListUserOwnByAddress: productModel.getListUserOwnByAddress,
  }));

  useEffect(() => {
    getUserById(id);
    getListCarts(id);
    getListCreatedByUserId(id);
    getListUserOwnByAddress(address);
    // setUserTempt(user);
    // userTemp.username = user.username;
    // userTemp.email = user.email;
  }, [
    id,
    getUserById,
    getListCarts,
    userTempt,
    getListCreatedByUserId,
    published,
    address,
    getListUserOwnByAddress,
  ]);
  return (
    <React.Fragment>
      <PrimaryLayout>
        <ToastContainer />
        <StyledUser>
          <div className="container">
            <form
              onSubmit={(e) => handleUpdateUser(e)}
              method="put"
              enctype="multipart/form-data"
              action={`${ENDPOINT}/users`}
            >
              <Row>
                <Col md={3} xs={2} className="user__info">
                  <div className="user__info__avatar">
                    {/* <img
                      src={
                        user?.avatar?.url
                          ? `${ENDPOINT}${user?.avatar?.url}`
                          : "https://png.pngtree.com/png-vector/20191027/ourlarge/pngtree-avatar-vector-icon-white-background-png-image_1884971.jpg"
                      }
                      alt=""
                      height={"200px"}
                    />
                    <EditOutlined /> */}
                    {selectedImage && (
                      <div className="previewImg">
                        <img
                          src={URL.createObjectURL(selectedImage)}
                          alt="Thumb"
                          height={200}
                        />
                        <button onClick={removeSelectedImage}>
                          Remove This Image
                        </button>
                      </div>
                    )}
                    {!selectedImage && (
                      <img
                        src={
                          user?.avatar?.url
                            ? `${ENDPOINT}${user?.avatar?.url}`
                            : "https://png.pngtree.com/png-vector/20191027/ourlarge/pngtree-avatar-vector-icon-white-background-png-image_1884971.jpg"
                        }
                        alt=""
                        height={200}
                      />
                    )}
                    <input
                      name="image"
                      type={"file"}
                      accept="image/*"
                      onChange={imageChange}
                    />
                    <div className="user__info__content">
                      <p>
                        Username:{" "}
                        <strong>
                          {user.username ? user.username : "No name"}
                        </strong>
                      </p>
                      <p>
                        Address:{" "}
                        {user.walletAddress
                          ? hashShortener(user.walletAddress)
                          : "hx2....4d1e9"}
                      </p>
                      <p>Join: {user.created_at} </p>
                    </div>
                  </div>
                </Col>
                <Col>
                  <Tabs
                    defaultActiveKey="2"
                    tabBarExtraContent={{ right: <Filter /> }}
                  >
                    <TabPane tab="Collection" key="1">
                      <div className="created">
                        <div className="created__content">
                          {ownerProducts.map((product, index) => (
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
                                          product?.image[0].url
                                            ? ENDPOINT + product?.image[0].url
                                            : "http://localhost:1337/uploads/F2_Store512_dbc086bfc0.png?582352.3999999762"
                                        }
                                        alt=""
                                        height="80px"
                                      />
                                    </div>
                                    <div className="item-info">
                                      <p className="p1">{product?.name}</p>
                                      <p className="p2 createdBy">
                                        Created by:{" "}
                                        {hashShortener(
                                          product?.created_by_user
                                            ?.walletAddress
                                        )}
                                      </p>
                                      <span className="p2">Status: </span>
                                      <span className="p2">
                                        {product?.num_owners === 1
                                          ? "draft"
                                          : product?.status === true
                                          ? "sell"
                                          : "storage"}
                                      </span>
                                    </div>
                                  </div>
                                </Col>

                                <Col sm={3}>
                                  <span className="p2">
                                    {product.created_at}
                                  </span>
                                </Col>
                                <Col sm={2}>
                                  <p className="p1">
                                    <img
                                      src="https://cryptologos.cc/logos/icon-icx-logo.png"
                                      alt="icx"
                                      height={16}
                                      width={16}
                                    />{" "}
                                    {product.price}
                                    {" ICX"}
                                  </p>
                                </Col>
                                <Col sm={2} className="history__status-success">
                                  <div className="p1">
                                    {product?.num_owners === 1 ? (
                                      <Button
                                        type={"button"}
                                        onClick={() =>
                                          handlePublish(true, product?.id)
                                        }
                                      >
                                        Publish
                                      </Button>
                                    ) : product?.status === true ? (
                                      <Button
                                        type={"button"}
                                        bgColor={"#dadada"}
                                        onClick={() =>
                                          handlePublish(false, product?.id)
                                        }
                                      >
                                        Unpublish
                                      </Button>
                                    ) : (
                                      <Button
                                        type={"button"}
                                        onClick={() =>
                                          handlePublish(true, product?.id)
                                        }
                                      >
                                        Publish
                                      </Button>
                                    )}

                                    <div></div>
                                  </div>
                                </Col>
                              </Row>
                            </div>
                          ))}
                        </div>
                      </div>
                    </TabPane>
                    <TabPane tab="Created" key="2">
                      <div className="created">
                        <div className="created__content">
                          {createdProducts.map((product, index) => (
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
                                          product?.image[0].url
                                            ? ENDPOINT + product?.image[0].url
                                            : "http://localhost:1337/uploads/F2_Store512_dbc086bfc0.png?582352.3999999762"
                                        }
                                        alt=""
                                        height="80px"
                                      />
                                    </div>
                                    <div className="item-info">
                                      <p className="p1">{product?.name}</p>
                                      <p className="p2 createdBy">
                                        Created by:{" "}
                                        {hashShortener(
                                          product?.created_by_user
                                            ?.walletAddress
                                        )}
                                      </p>
                                      <span className="p2">Status: </span>
                                      <span className="p2">
                                        {product?.num_owners > 1
                                          ? "sold"
                                          : product?.status === true
                                          ? "sell"
                                          : "draft"}
                                      </span>
                                    </div>
                                  </div>
                                </Col>

                                <Col sm={3}>
                                  <span className="p2">
                                    {product.created_at}
                                  </span>
                                </Col>
                                <Col sm={2}>
                                  <p className="p1">
                                    <img
                                      src="https://cryptologos.cc/logos/icon-icx-logo.png"
                                      alt="icx"
                                      height={16}
                                      width={16}
                                    />{" "}
                                    {product.price}
                                    {" ICX"}
                                  </p>
                                </Col>
                                <Col sm={2} className="history__status-success">
                                  <div className="p1">
                                    {product?.num_owners > 1 ? (
                                      ""
                                    ) : product?.status === true ? (
                                      <Button
                                        type={"button"}
                                        bgColor={"#dadada"}
                                        onClick={() =>
                                          handlePublish(false, product?.id)
                                        }
                                      >
                                        Unpublish
                                      </Button>
                                    ) : (
                                      <Button
                                        type={"button"}
                                        onClick={() =>
                                          handlePublish(true, product?.id)
                                        }
                                      >
                                        Publish
                                      </Button>
                                    )}

                                    <div></div>
                                  </div>
                                </Col>
                              </Row>
                            </div>
                          ))}
                        </div>
                      </div>
                    </TabPane>
                    <TabPane tab="Purchase history" key="3">
                      <div className="created">
                        <div className="created__content">
                          {carts.map((cart, index) => (
                            <div className="history-item" key={index}>
                              <Row>
                                <Col sm={1}>
                                  <h5>#{index + 1}</h5>
                                </Col>
                                <Col sm={3}>
                                  <div className="item-products">
                                    <div className="item-image">
                                      <img
                                        src={
                                          cart?.product?.image[0].url
                                            ? ENDPOINT +
                                              cart?.product?.image[0].url
                                            : "http://localhost:1337/uploads/F2_Store512_dbc086bfc0.png?582352.3999999762"
                                        }
                                        alt=""
                                        height="80px"
                                      />
                                    </div>
                                    <div className="item-info">
                                      <p className="p1">
                                        {cart?.product?.name}
                                      </p>
                                    </div>
                                  </div>
                                </Col>
                                <Col sm={3}>
                                  <p className="p2">
                                    {"Date: "}
                                    {cart.created_at}
                                  </p>
                                  <p className="p2">From: me</p>
                                  <p className="p2">
                                    {`To: ` +
                                      hashShortener(
                                        JSON.stringify(cart?.last_owners).slice(
                                          JSON.stringify(
                                            cart?.last_owners
                                          ).lastIndexOf("num") + 7,
                                          JSON.stringify(cart?.last_owners)
                                            .length - 2
                                        )
                                      )}
                                  </p>
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

                                <Col sm={1}>
                                  <Button
                                    bgColor={"#fff"}
                                    txtColor={"inherit"}
                                    onClick={() => {
                                      setVisible(true);
                                    }}
                                    type={"button"}
                                  >
                                    <MoreOutlined />
                                  </Button>
                                  <Modal
                                    title="Detail cart"
                                    centered
                                    visible={visible}
                                    onOk={() => setVisible(false)}
                                    onCancel={() => setVisible(false)}
                                    width={1000}
                                  >
                                    <div className="item-products">
                                      <div className="item-image">
                                        <img
                                          src={
                                            cart?.product?.image[0].url
                                              ? ENDPOINT +
                                                cart?.product?.image[0].url
                                              : "http://localhost:1337/uploads/F2_Store512_dbc086bfc0.png?582352.3999999762"
                                          }
                                          alt=""
                                          height="80px"
                                        />
                                      </div>
                                      <div className="item-info">
                                        <p className="p1">
                                          {cart?.product?.name}
                                        </p>
                                      </div>
                                    </div>
                                    <p>
                                      From: {cart?.new_owner?.walletAddress}{" "}
                                      {cart?.new_owner?.username ? (
                                        <span>
                                          ({cart?.new_owner?.username}) (me)
                                        </span>
                                      ) : (
                                        ""
                                      )}{" "}
                                    </p>
                                    <p>
                                      To: {JSON.stringify(cart?.last_owners)}
                                    </p>
                                    <p>Total: {cart?.total} </p>
                                    <p>
                                      Service charge:{cart?.service_charge}{" "}
                                    </p>
                                    <p>Date time: {cart?.created_at}</p>
                                  </Modal>
                                </Col>
                              </Row>
                            </div>
                          ))}
                        </div>
                      </div>
                    </TabPane>
                    <TabPane tab="Setting" key="4">
                      <div className="personal-detail user__setting">
                        <div className="personal-detail__content">
                          <Row className="personal-detail__content-name">
                            <Col md={{ span: 3, offset: 2 }}>
                              <span className="p1">Username</span>
                            </Col>
                            <Col>
                              <Input
                                name={"username"}
                                border={"1px solid #dadada"}
                                value={
                                  userTempt.username === ""
                                    ? user.username
                                    : userTempt.username
                                }
                                placeholder={"Enter username"}
                                onChange={(e) => {
                                  setChange(true);
                                  setUserTempt({
                                    ...userTempt,
                                    username: e.target.value,
                                  });
                                }}
                              />
                            </Col>
                          </Row>

                          <Row className="personal-detail__content-email">
                            <Col md={{ span: 3, offset: 2 }}>
                              <span className="p1">Email</span>
                            </Col>
                            <Col>
                              <Input
                                name={"email"}
                                // disabled={"disabled"}
                                border={"1px solid #dadada"}
                                value={
                                  userTempt.email === ""
                                    ? user.email
                                    : userTempt.email
                                }
                                placeholder={"Enter email"}
                                onChange={(e) => {
                                  setChange(true);
                                  setUserTempt({
                                    ...userTempt,
                                    email: e.target.value,
                                  });
                                }}
                              />
                            </Col>
                          </Row>
                          <Row className="personal-detail__content-bio instagram">
                            <Col md={{ span: 3, offset: 2 }}>
                              <span className="p1">Bio</span>
                            </Col>
                            <Col>
                              <InputAnt
                                prefix={<InstagramOutlined />}
                                size="large"
                                placeholder="Your instagram"
                              />
                            </Col>
                          </Row>
                          <Row className="personal-detail__content-bio github">
                            <Col md={{ span: 3, offset: 2 }}>
                              <span className="p1"></span>
                            </Col>
                            <Col>
                              <InputAnt
                                prefix={<GithubOutlined />}
                                size="large"
                                placeholder="Your github"
                              />
                            </Col>
                          </Row>
                          <Row className="personal-detail__content-address">
                            <Col md={{ span: 3, offset: 2 }}>
                              <span className="p1">Wallet address</span>
                            </Col>
                            <Col>
                              <div className="walletAddress">
                                <div className="walletAddress-info">
                                  {user?.walletAddress
                                    ? user?.walletAddress
                                    : ""}
                                </div>
                                <div className="iconCopy">
                                  <CopyOutlined />
                                </div>
                              </div>
                            </Col>
                          </Row>
                        </div>
                        <div className="personal-detail__save">
                          <Row className="personal-detail__content-email">
                            <Col md={{ span: 3, offset: 2 }}></Col>
                            <Col>
                              {change === false ? (
                                <Button bgColor="#d6d6d6" type={"button"}>
                                  Save
                                </Button>
                              ) : (
                                <Button type={"submit"}>Save</Button>
                              )}
                            </Col>
                          </Row>
                        </div>
                      </div>
                    </TabPane>
                  </Tabs>
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
