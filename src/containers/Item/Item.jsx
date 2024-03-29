import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { PrimaryLayout } from "../../components/Layout";
import {
  ExportOutlined,
  ShareAltOutlined,
  MoreOutlined,
  WalletOutlined,
  HeartOutlined,
  EyeOutlined,
  HeartFilled,
} from "@ant-design/icons";
import { Alert, Modal, Switch } from "antd";
import { SwiperCustomize } from "../../components/Swiper";
import styled from "styled-components";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
//Toastify CSS
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "../../hooks";
import { useParams } from "react-router-dom";
import { ENDPOINT } from "../../utils/constant";
import { signTx, transfer } from "../../sdk/iconSDK";
import axios from "axios";
const StyledItem = styled.div`
  .item {
    padding-top: 1rem;
  }
  .item__image img {
    border-radius: 10px;
  }
  .recommend {
    border-top: 1px solid #f4f4f4;
  }
  .explore svg {
    font-size: 20px;
  }
  .explore span {
    border-radius: 5px;
    border: 1px #d6d6d6 solid;
    padding: 0.3rem;
    margin: 0.1rem;
  }
  .item__info-createBy__content {
    color: red;
  }
  .item__info__section1 {
    display: flex;
    justify-content: space-between;
    border-radius: 10px;
    border: 1px #d6d6d6 solid;
    padding: 1rem;
  }
  .item__info-price {
    display: flex;
  }
  .item__info-price-icon {
    margin-right: 0.5rem;
  }
  .item__info__section2 {
    border-radius: 10px;
    border: 1px #d6d6d6 solid;
    padding: 1rem;
    margin-top: 1rem;
  }
  .item__info-price {
    padding-bottom: 0.5rem;
  }
  .item__info-des {
    border-top: 1px #d6d6d6 solid;
    padding: 1rem 0;
    border-bottom: 1px #d6d6d6 solid;
  }
  .item__buy {
    padding-top: 1.5rem;
  }
  .item__buy svg {
    font-size: 20px;
  }
  .item__buy span {
    margin-right: 0.5rem;
  }

  .recommend {
    border-radius: 10px;
    border: 1px #d6d6d6 solid;
    margin-top: 2rem;
  }
  .recommend__title {
    padding: 1rem;
    border-bottom: 1px #d6d6d6 solid;
  }
  .recommend__content {
    padding: 1rem;
  }
  .historyPrice {
    border-radius: 10px;
    border: 1px #d6d6d6 solid;
    margin-top: 2rem;
    padding: 1rem;
  }
  .alert {
    display: flex;
    padding: 0;
  }
  .alert__owner {
    margin-right: 1.5rem;
  }
  .btn-edit {
    background-color: #a6a6a6;
    margin-left: 1rem;
    padding: 0.8rem 1.8rem;
    font-weight: 720;
    color: #fff;
    border: none;
    border-radius: 10px;
  }
`;
const listProduct = [
  {
    image:
      "https://i.pinimg.com/564x/7e/31/9b/7e319bd60fcaef53122fbdee52c2e0b3.jpg",
    price: 3.6,
    store: "store of LADA",
    id: "1",
  },
  {
    image:
      "https://i.pinimg.com/564x/4f/7f/38/4f7f385b7639b9a0e3e6446271102020.jpg",
    price: 3.6,
    store: "store of LADA",
    id: "1",
  },
  {
    image:
      "https://i.pinimg.com/564x/83/cd/5b/83cd5b6a654978055f79e4e903f085c8.jpg",
    price: 3.6,
    store: "store of LADA",
    id: "1",
  },
  {
    image:
      "https://i.pinimg.com/564x/83/cd/5b/83cd5b6a654978055f79e4e903f085c8.jpg",
    price: 3.6,
    store: "store of LADA",
    id: "1",
  },
];

const Item = () => {
  const address = localStorage.getItem("address");
  const [productTempt, setProductTempt] = useState();
  const [visible, setVisible] = useState(false);
  const [favorite, setFavorite] = useState({
    status: false,
    count: 12,
  });
  const [published, setPublished] = useState("");
  const [selectedImage, setSelectedImage] = useState();
  // This function will be triggered when the file field change
  const imageChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      setSelectedImage(e.target.files[0]);
    }
  };

  // This function will be triggered when the "Remove This Image" button is clicked
  const removeSelectedImage = () => {
    setSelectedImage();
  };
  const { id } = useParams();
  const { product, historyPrice } = useSelector(({ productModel }) => ({
    product: productModel.product,
    historyPrice: productModel.historyPriceOfProduct,
  }));
  const { getSingleProductById, historyPriceOfProduct } = useDispatch(
    ({ productModel }) => ({
      getSingleProductById: productModel.getSingleProductById,
      historyPriceOfProduct: productModel.historyPriceOfProduct,
    })
  );
  const handlePublish = async (status) => {
    try {
      let token = localStorage.getItem("jwt");

      await axios
        .put(
          `${ENDPOINT}/products/${id}`,
          {
            status: status,
          },
          { headers: { Authorization: "Bearer " + token } }
        )
        .then((res) => {
          toast.success("Update completed !", {
            position: toast.POSITION.TOP_RIGHT,
          });
          setPublished(status);
        });
    } catch (error) {
      console.log(error);
    }
  };
  const getCurrentOwner = (list, num) => {
    switch (num) {
      case 1:
        return list?.num1;
      case 2:
        return list?.num2;
      case 3:
        return list?.num3;
      case 4:
        return list?.num4;
      case 5:
        return list?.num5;
      case 6:
        return list?.num6;
      default:
      // code block
    }
  };
  const setCurrentOwner = (list, num, value) => {
    switch (num) {
      case 1:
        return { ...list, num1: value };
      case 2:
        return { ...list, num2: value };
      case 3:
        return { ...list, num3: value };
      case 4:
        return { ...list, num4: value };
      case 5:
        return { ...list, num5: value };
      case 6:
        return { ...list, num6: value };
      default:
      // code block
    }
  };
  const editProduct = async (e) => {
    e.preventDefault();
    product.price = productTempt.price ? productTempt?.price : product?.price;
    product.name = productTempt.name ? productTempt?.name : product?.name;
    try {
      let token = localStorage.getItem("jwt");
      const headers = { Authorization: "Bearer " + token };
      const data = {
        name: product.name,
        price: product.price,
      };
      const formData = new FormData();
      formData.append("data", JSON.stringify(data));
      console.log(formData.data);
      await axios
        .put(`${ENDPOINT}/products/${id}`, formData, { headers: headers })
        .then((res) => {
          setVisible(false);
          toast.success("Update completed !", {
            position: toast.POSITION.TOP_RIGHT,
          });
          return res.data;
        })
        .catch((err) => err);
    } catch (error) {
      console.log(error);
    }
  };
  const sendToken = async (price) => {
    const from = localStorage.getItem("address");
    // const to = product.users_permissions_user.walletAddress;
    const to = getCurrentOwner(product?.owners_by, product?.num_owners);
    if (!from) {
      toast.warning("Connect wallet first !", {
        position: toast.POSITION.TOP_RIGHT,
      });
    } else {
      const tx = transfer({
        from: from,
        to: to,
        value: price,
      });
      console.log(from);
      console.log(to);
      await signTx(tx);
      console.log("connect wallet");
      let token = localStorage.getItem("jwt");
      const headers = { Authorization: "Bearer " + token };
      console.log(headers);
      //set product status: false, add address to owners_by
      await axios
        .put(
          `${ENDPOINT}/products/${id}`,
          {
            ...product,
            status: false,
            num_owners: product?.num_owners + 1,
            owners_by: setCurrentOwner(
              product?.owners_by,
              product?.num_owners + 1,
              from
            ),
          },
          { headers: headers }
        )
        .catch((err) => err);
      console.log("set status");
      //create cart
      let userId = localStorage.getItem("userId");
      await axios
        .post(
          `${ENDPOINT}/carts`,
          {
            total: product?.price + product?.price * 0.02,
            product: id,
            new_owner: userId,
            serviceCharge: product?.price * 0.02,
            last_owners: setCurrentOwner(
              product?.owners_by,
              product?.num_owners,
              to
            ),
          },
          { headers: headers }
        )
        .then((res) => res.data)
        .catch((err) => err);

      //notify buy product completed
      toast.success("Buy product completed !", {
        position: "top-right",
        autoClose: 10000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        onClose: setTimeout(
          window.location.assign("http://localhost:3000/user"),
          10000
        ),
      });
    }
  };
  const onSubmit = (e) => {
    e.preventDefault();
    sendToken(product.price);
  };

  useEffect(() => {
    getSingleProductById(id);
    historyPriceOfProduct(id);
  }, [
    id,
    getSingleProductById,
    favorite,
    historyPriceOfProduct,
    published,
    productTempt,
  ]);
  return (
    <React.Fragment>
      <PrimaryLayout>
        <StyledItem>
          <div>
            <ToastContainer
              position="top-right"
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
            />
            <div className="item container">
              <Row>
                <Col md={5}>
                  <div className="item__image">
                    <img
                      src={
                        product.image
                          ? ENDPOINT + product.image.map((img) => img.url)
                          : "https://i.pinimg.com/564x/70/f4/f5/70f4f5cbee08d3dc5bf6b8e698a2db97.jpg"
                      }
                      alt=""
                      style={{ width: "100%" }}
                    />
                  </div>
                </Col>
                <Col md={7}>
                  <div className="item__info">
                    <form onSubmit={(e) => onSubmit(e)}>
                      <div className="item__info__section1">
                        <div className="left">
                          <div className="item__info-name">
                            <h3>{product.name}</h3>
                          </div>
                          <div className="item__info-createBy">
                            <p>
                              <span>
                                {product?.created_by_user?.username ? (
                                  <div>
                                    {JSON.stringify(
                                      product?.created_by_user?.id
                                    ) === localStorage.getItem("userId") ? (
                                      <Link to={`../user`}>
                                        Create by:{" "}
                                        {product?.created_by_user?.username}
                                      </Link>
                                    ) : (
                                      <Link
                                        to={`../user/${product?.created_by_user?.id}`}
                                      >
                                        Create by:{" "}
                                        {product?.created_by_user?.username}
                                      </Link>
                                    )}
                                  </div>
                                ) : (
                                  <div>
                                    {" "}
                                    Create by:{" "}
                                    {product?.created_by_user?.walletAddress}
                                  </div>
                                )}
                              </span>
                            </p>
                            <p>
                              Owner by:{" "}
                              <span className="item__info-createBy__content">
                                {getCurrentOwner(
                                  product?.owners_by,
                                  product?.num_owners
                                )}
                              </span>
                            </p>
                            <span>
                              {" "}
                              <EyeOutlined /> 5 view{"      "}
                            </span>
                            <span>
                              {favorite.status === false ? (
                                <span>
                                  <HeartOutlined
                                    onClick={() =>
                                      setFavorite({
                                        status: true,
                                        count: favorite.count + 1,
                                      })
                                    }
                                  />{" "}
                                  {favorite.count} people
                                </span>
                              ) : (
                                <span>
                                  <HeartFilled
                                    twoToneColor="red"
                                    onClick={() => {
                                      setFavorite({
                                        status: false,
                                        count: favorite.count - 1,
                                      });
                                    }}
                                  />{" "}
                                  {favorite.count} people
                                </span>
                              )}
                            </span>
                          </div>
                        </div>
                        <div className="right">
                          <div className="explore">
                            <ExportOutlined />
                            <ShareAltOutlined />
                            <MoreOutlined />
                          </div>
                        </div>
                      </div>
                      <div className="item__info__section2">
                        <p>Current price: </p>
                        <div className="item__info-price">
                          <div className="item__info-price-icon">
                            <img
                              src="https://cryptologos.cc/logos/icon-icx-logo.png"
                              height={24}
                              width={24}
                              alt=""
                            />
                          </div>
                          <div className="item__info-price-content">
                            <h5>{product.price} ICX</h5>
                          </div>
                        </div>

                        <div className="item__info-des">
                          <p>Description: </p>
                          <p className="p1">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Itaque expedita, nam molestias architecto
                            aspernatur aut perspiciatis nobis quae maxime minus
                            repellat libero quis dolore minima, velit veritatis
                            corrupti fugit amet.
                          </p>
                        </div>

                        <div className="item__buy">
                          {/* <Button>BUY NOW</Button> */}
                        </div>
                        <div>
                          {address ===
                          getCurrentOwner(
                            product?.owners_by,
                            product?.num_owners
                          ) ? (
                            product?.status === false ? (
                              <div>
                                <div className="alert">
                                  <Alert
                                    message="You are owner of this NFT"
                                    type="info"
                                    className="alert__owner"
                                  />

                                  <Alert
                                    message={`The NFT is ${
                                      product?.num_owners === 1
                                        ? "DRAFT"
                                        : "STORAGE"
                                    }`}
                                    type="warning"
                                  />
                                </div>

                                <Button
                                  type={"button"}
                                  onClick={() => handlePublish(true)}
                                >
                                  Publish NFT
                                </Button>
                                <button
                                  type={"button"}
                                  className="btn-edit"
                                  onClick={() => setVisible(true)}
                                >
                                  Edit
                                </button>
                              </div>
                            ) : (
                              <div>
                                <div className="alert">
                                  <Alert
                                    message="You are owner of this NFT"
                                    type="info"
                                    className="alert__owner"
                                  />

                                  <Alert
                                    message={`The NFT is SELL`}
                                    type="success"
                                  />
                                </div>

                                <Button
                                  bgColor={"gray"}
                                  type={"button"}
                                  onClick={() => handlePublish(false)}
                                >
                                  Unpublish NFT
                                </Button>
                                <button
                                  type={"button"}
                                  className="btn-edit"
                                  onClick={() => setVisible(true)}
                                >
                                  Edit
                                </button>
                              </div>
                            )
                          ) : product?.status === false ? (
                            <div>
                              <div className="alert">
                                <Alert
                                  message={`The NFT is in DRAFT or STORAGE`}
                                  type="error"
                                />
                              </div>

                              <Button bgColor={"gray"} type={"button"}>
                                CAN NOT BUY
                              </Button>
                            </div>
                          ) : (
                            <Button>
                              <WalletOutlined />
                              BUY NOW
                            </Button>
                          )}
                        </div>
                        <div>
                          {" "}
                          <Modal
                            title="Modal 1000px width"
                            centered
                            visible={visible}
                            onOk={(e) => editProduct(e)}
                            onCancel={() => setVisible(false)}
                            width={1000}
                          >
                            <Row>
                              <Col sm={6} md={4}>
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
                                      product?.image?.[0]?.url
                                        ? ENDPOINT + product?.image[0]?.url
                                        : "http://localhost:1337/uploads/F2_Store512_dbc086bfc0.png?582352.3999999762"
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
                              </Col>
                              <Col>
                                <Row className="personal-detail__content-name">
                                  <Col md={{ span: 3, offset: 1 }}>
                                    <span className="p1">Username</span>
                                  </Col>
                                  <Col>
                                    <Input
                                      name={"Name"}
                                      border={"1px solid #dadada"}
                                      value={
                                        productTempt?.name
                                          ? productTempt?.name
                                          : product.name
                                      }
                                      placeholder={"Enter username"}
                                      onChange={(e) => {
                                        setProductTempt({
                                          ...productTempt,
                                          name: e.target.value,
                                        });
                                      }}
                                    />
                                  </Col>
                                </Row>

                                <Row className="personal-detail__content-email">
                                  <Col md={{ span: 3, offset: 1 }}>
                                    <span className="p1">Price</span>
                                  </Col>
                                  <Col>
                                    <Input
                                      name={"price"}
                                      type="number"
                                      // disabled={"disabled"}
                                      border={"1px solid #dadada"}
                                      value={
                                        productTempt?.price
                                          ? productTempt?.price
                                          : product?.price
                                      }
                                      placeholder={"Enter email"}
                                      onChange={(e) => {
                                        setProductTempt({
                                          ...productTempt,
                                          price: e.target.value,
                                        });
                                      }}
                                    />
                                  </Col>
                                </Row>
                                <Row className="personal-detail__content-bio instagram">
                                  <Col md={{ span: 3, offset: 1 }}>
                                    <span className="p1">Status</span>
                                  </Col>
                                  <Col>
                                    <Switch
                                      checked={product?.status}
                                      checkedChildren=""
                                      unCheckedChildren=""
                                    />
                                    {JSON.stringify(product?.status)}
                                  </Col>
                                </Row>

                                <Row className="personal-detail__content-address">
                                  <Col md={{ span: 3, offset: 1 }}>
                                    <span className="p1">Created by</span>
                                  </Col>
                                  <Col>
                                    <Input
                                      disabled={"disabled"}
                                      value={
                                        product?.created_by_user?.username
                                          ? product?.created_by_user?.username
                                          : product?.created_by_user
                                              ?.walletAddress
                                      }
                                    />
                                  </Col>
                                </Row>
                                <Row className="personal-detail__content-address">
                                  <Col md={{ span: 3, offset: 1 }}>
                                    <span className="p1">Number owners: </span>
                                  </Col>
                                  <Col>
                                    <Input
                                      disabled={"disabled"}
                                      value={product?.num_owners}
                                    />
                                  </Col>
                                </Row>
                              </Col>
                            </Row>
                          </Modal>
                        </div>
                      </div>
                      <div className="historyPrice">
                        {historyPrice === null ? (
                          <Line
                            data={{
                              labels: ["0", "0"],
                              datasets: [
                                {
                                  label: "ICX",
                                  fill: false,
                                  lineTension: 0.2,
                                  backgroundColor: "rgba(75,192,192,1)",
                                  borderColor: "rgba(0,0,0,1)",
                                  borderWidth: 2,
                                  data: ["0", "0"],
                                },
                              ],
                            }}
                            options={{
                              title: {
                                display: true,
                                text: "History price",
                                fontSize: 20,
                              },
                              legend: {
                                display: true,
                                position: "right",
                              },
                            }}
                          />
                        ) : (
                          <Line
                            data={{
                              labels: historyPrice?.date,
                              datasets: [
                                {
                                  label: "ICX",
                                  fill: false,
                                  lineTension: 0.3,
                                  backgroundColor: "rgba(75,192,192,1)",
                                  borderColor: "rgba(0,0,0,1)",
                                  borderWidth: 2,
                                  data: historyPrice?.price,
                                },
                              ],
                            }}
                            options={{
                              title: {
                                display: true,
                                text: "History of product's price",
                                fontSize: 20,
                              },
                              legend: {
                                display: true,
                                position: "right",
                              },
                            }}
                          />
                        )}
                      </div>
                      {/* <div className="item__info__section2">
                        <p>History owners: </p>
                        <div className="item__info-price">
                          <div className="item__info-price-icon">
                            <img
                              src="https://cryptologos.cc/logos/icon-icx-logo.png"
                              height={24}
                              width={24}
                              alt=""
                            />
                          </div>
                          <div className="item__info-price-content">
                            <h5>{product.price} ICX</h5>
                          </div>
                        </div>

                        <div className="item__info-des">
                          <p>Description: </p>
                          <p className="p1">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Itaque expedita, nam molestias architecto
                            aspernatur aut perspiciatis nobis quae maxime minus
                            repellat libero quis dolore minima, velit veritatis
                            corrupti fugit amet.
                          </p>
                        </div>

                        <div className="item__buy">
                        </div>
                        <div>
                          {address ===
                          getCurrentOwner(
                            product?.owners_by,
                            product?.num_owners
                          ) ? (
                            product?.status === false ? (
                              <div>
                                <p>You are owner of this NFT</p>
                                <Button>
                                  <WalletOutlined />
                                  Publish
                                </Button>
                              </div>
                            ) : (
                              <div>
                                <p>You are owner of this NFT</p>
                                <Button bgColor={"gray"} type={"button"}>
                                  Unpublish
                                </Button>
                              </div>
                            )
                          ) : product?.status === false ? (
                            <Button bgColor={"gray"} type={"button"}>
                              CAN NOT BUY
                            </Button>
                          ) : (
                            <Button>
                              <WalletOutlined />
                              BUY NOW
                            </Button>
                          )}
                        </div>
                        <div>
                          {getCurrentOwner(
                            product?.owners_by,
                            product?.num_owners
                          )}
                        </div>
                        <div>{address}</div>
                      </div> */}
                    </form>
                  </div>
                </Col>
              </Row>
            </div>

            <div className="container recommend">
              <Row>
                <h4 className="recommend__title">More from this user</h4>
                <SwiperCustomize
                  listProduct={listProduct}
                  className="recommend__content"
                />
              </Row>
            </div>
          </div>
        </StyledItem>
      </PrimaryLayout>
    </React.Fragment>
  );
};

export default Item;
