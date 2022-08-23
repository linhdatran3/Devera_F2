import React, { useState, useEffect } from "react";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { Input as InputAnt } from "antd";
import { Link } from "react-router-dom";
import { Search } from "../../components/Search";
import {
  InstagramOutlined,
  GithubOutlined,
  CopyOutlined,
  AppstoreAddOutlined,
} from "@ant-design/icons";
import { PrimaryLayout } from "../../components/Layout";
import styled from "styled-components";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { CheckCircleOutlined } from "@ant-design/icons";
//Toastify CSS
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { useDispatch, useSelector } from "../../hooks";
import { ENDPOINT } from "../../utils/constant";
import { hashShortener } from "../../sdk/iconSDK";
import axios from "axios";

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
    border: 1.5px solid #dadada;
    padding: 1rem;
    border-radius: 20px;
  }
  .created__head {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 0;
    border-bottom: 1px solid #dadada;
  }
  .created__head-add svg {
    font-size: 30px;
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
`;
const User = () => {
  const [change, setChange] = useState(false);
  const [userTempt, setUserTempt] = useState({
    username: "",
    email: "",
  });
  const [selectedImage, setSelectedImage] = useState();
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

  const id = localStorage.getItem("userId");
  const { user } = useSelector(({ userModel }) => ({
    user: userModel.user,
  }));
  const { carts } = useSelector(({ cartModel }) => ({
    carts: cartModel.carts,
  }));
  const { products } = useSelector(({ productModel }) => ({
    products: productModel.products,
  }));
  const { getUserById } = useDispatch(({ userModel }) => ({
    getUserById: userModel.getUserById,
  }));
  const { getListCarts } = useDispatch(({ cartModel }) => ({
    getListCarts: cartModel.getListCarts,
  }));
  const { getListCreatedByUserId } = useDispatch(({ productModel }) => ({
    getListCreatedByUserId: productModel.getListCreatedByUserId,
  }));
  useEffect(() => {
    getUserById(id);
    getListCarts(id);
    getListCreatedByUserId(id);
    // setUserTempt(user);
    // userTemp.username = user.username;
    // userTemp.email = user.email;
  }, [id, getUserById, getListCarts, userTempt, getListCreatedByUserId]);
  return (
    <React.Fragment>
      <PrimaryLayout>
        <ToastContainer />
        <StyledUser>
          <div className="container">
            {/* personal detail */}
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
                <Col className="user__setting">
                  <div className="personal-detail">
                    <div className="personal-detail__head">
                      <div className="personal-detail__head-title">
                        <h3>Personal detail</h3>
                      </div>
                      <div className="personal-detail__head-edit">
                        {change === false ? (
                          <Button bgColor="#d6d6d6" type={"button"}>
                            Save
                          </Button>
                        ) : (
                          <Button type={"submit"}>Save</Button>
                        )}
                      </div>
                    </div>
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
                              {user?.walletAddress ? user?.walletAddress : ""}
                            </div>
                            <div className="iconCopy">
                              <CopyOutlined />
                            </div>
                          </div>
                        </Col>
                      </Row>
                    </div>
                  </div>
                </Col>
              </Row>
            </form>

            {/* list product was created by user */}
            <Row>
              <Col md={3} xs={2}></Col>
              <Col className="col__created">
                <div className="created">
                  <div className="created__head">
                    <div className="created__head-title">
                      <h3>Created</h3>
                    </div>
                    <div className="created__head-add">
                      <Link to={"/stores/create"}>
                        <AppstoreAddOutlined />
                      </Link>
                    </div>
                  </div>
                  <div className="created__content">
                    {products.map((product, index) => (
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
                                    product?.users_permissions_user
                                      ?.walletAddress
                                  )}
                                </p>
                              </div>
                            </div>
                          </Col>

                          <Col sm={3}>
                            <span className="p2">{product.created_at}</span>
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
                              {" "}
                              {product.isStock === true ? (
                                <div>
                                  <img
                                    src="https://cdn1.vectorstock.com/i/thumb-large/27/75/grunge-green-in-stock-word-square-rubber-seal-vector-27922775.jpg"
                                    alt="in stock"
                                    height={50}
                                  />
                                  <p style={{ color: "gray" }}>(in stock)</p>
                                </div>
                              ) : (
                                <div>
                                  <img
                                    src="https://cdn-icons-png.flaticon.com/512/2331/2331975.png"
                                    alt="sold out"
                                    height={40}
                                  />
                                  <p style={{ color: "gray" }}>(sold out)</p>
                                </div>
                              )}
                            </div>
                          </Col>
                        </Row>
                      </div>
                    ))}
                  </div>
                </div>
              </Col>
            </Row>
            {/* history shopping cart of user */}
            <Row>
              <Col md={3} xs={2}></Col>
              <Col className="col__created">
                <div className="created">
                  <div className="created__head">
                    <div className="created__head-title">
                      <h3>History shopping cart</h3>
                    </div>
                    <div className="created__head-add">
                      <Search />
                    </div>
                  </div>
                  <div className="created__content">
                    {carts.map((cart, index) => (
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
                                    cart?.product?.image[0].url
                                      ? ENDPOINT + cart?.product?.image[0].url
                                      : "http://localhost:1337/uploads/F2_Store512_dbc086bfc0.png?582352.3999999762"
                                  }
                                  alt=""
                                  height="80px"
                                />
                              </div>
                              <div className="item-info">
                                <p className="p1">{cart?.product?.name}</p>
                                <p className="p2 createdBy">
                                  Created by:{" "}
                                  {hashShortener(
                                    cart?.users_permissions_user?.walletAddress
                                  )}
                                </p>
                              </div>
                            </div>
                          </Col>

                          <Col sm={3}>
                            <span className="p2">{cart.created_at}</span>
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
                        </Row>
                      </div>
                    ))}
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </StyledUser>
      </PrimaryLayout>
    </React.Fragment>
  );
};
export default User;
