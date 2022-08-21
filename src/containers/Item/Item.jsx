import React, { useEffect } from "react";
import { Button } from "../../components/Button";
import { PrimaryLayout } from "../../components/Layout";
import {
  ExportOutlined,
  ShareAltOutlined,
  MoreOutlined,
  WalletOutlined,
} from "@ant-design/icons";
import { SwiperCustomize } from "../../components/Swiper";
import styled from "styled-components";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
//Toastify CSS
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
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
  const { id } = useParams();
  const { product } = useSelector(({ productModel }) => ({
    product: productModel.product,
  }));
  const { getSingleProductById } = useDispatch(({ productModel }) => ({
    getSingleProductById: productModel.getSingleProductById,
  }));

  const sendToken = async (price) => {
    const from = localStorage.getItem("address");
    const to = product.users_permissions_user.walletAddress;
    if (!from) {
      toast.warning("Connect wallet first !", {
        position: toast.POSITION.TOP_RIGHT,
      });
    } else {
      //console.log(from);
      const tx = transfer({
        // to: "hx4568c57cdb8feaacf80cb5250eb1ca256502b35e",hx2890ea3b972be6c05757dc6417a42b800744d1e9
        from: from,
        to: to,
        value: price,
      });
      await signTx(tx);

      //set product : sold out
      let token = localStorage.getItem("jwt");
      await axios
        .put(
          `${ENDPOINT}/products/${id}`,
          {
            isStock: false,
          },
          {
            headers: { Authorization: "Bearer " + token },
          }
        )
        .then(() => {
          toast.success("Buy product completed !", {
            position: toast.POSITION.TOP_RIGHT,
          });
          setTimeout(window.location.reload(), 10000);
        });
    }
  };
  const onSubmit = (e) => {
    e.preventDefault();
    // console.log(product);
    // console.log(product.price);
    // console.log(e.target.price.value);
    // console.log(parseInt(e.target.price.value));
    sendToken(product.price);
  };

  useEffect(() => {
    getSingleProductById(id);
  }, [id, getSingleProductById]);
  return (
    <React.Fragment>
      <PrimaryLayout>
        <StyledItem>
          <div>
            <ToastContainer />
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
                            <span>
                              Owner by:{" "}
                              <span className="item__info-createBy__content">
                                {localStorage.getItem("address")}
                              </span>
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
                          {product.isStock === true ? (
                            <Button>
                              <WalletOutlined />
                              BUY NOW
                            </Button>
                          ) : (
                            <Button bgColor={"gray"} type={"button"}>
                              <WalletOutlined />
                              SOLD OUT
                            </Button>
                          )}
                        </div>
                      </div>
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
