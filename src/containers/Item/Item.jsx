import React, { useEffect } from "react";
import { Button } from "../../components/Button";
import { PrimaryLayout } from "../../components/Layout";
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
const StyledItem = styled.div`
  .item {
    padding-top: 1rem;
  }
  .recommend {
    border-top: 1px solid #f4f4f4;
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

  const sendToken = (price) => {
    const from = localStorage.getItem("address");
    const to = product.users_permissions_user.walletAddress;
    if (!from) {
      toast.warning("Connect wallet first !", {
        position: toast.POSITION.TOP_RIGHT,
      });
    } else {
      console.log(from);
      const tx = transfer({
        // to: "hx4568c57cdb8feaacf80cb5250eb1ca256502b35e",hx2890ea3b972be6c05757dc6417a42b800744d1e9
        from: from,
        to: to,
        value: price,
      });
      signTx(tx);
    }
  };
  const onSubmit = (e) => {
    e.preventDefault();
    console.log(product);
    console.log(product.price);
    console.log(e.target.price.value);
    console.log(parseInt(e.target.price.value));
    sendToken(e.target.price.value);
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
                <Col md={{ span: 5, offset: 2 }}>
                  <div className="item__info">
                    <form onSubmit={(e) => onSubmit(e)}>
                      <div className="item__info-name">
                        <h5>{product.name}</h5>
                      </div>

                      <div className="item__info-price">
                        <h5>
                          <input name="price" value={product.price} />
                        </h5>
                      </div>

                      <div className="item__info-des">
                        <p className="p1">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Itaque expedita, nam molestias architecto
                          aspernatur aut perspiciatis nobis quae maxime minus
                          repellat libero quis dolore minima, velit veritatis
                          corrupti fugit amet.
                        </p>
                      </div>
                      <div className="item__info-createBy">
                        <h5>Created by: store of LADA</h5>
                      </div>

                      <div className="item__buy">
                        {/* <Button>BUY NOW</Button> */}
                        <Button>BUY NOW</Button>
                      </div>
                    </form>
                  </div>
                </Col>
              </Row>
            </div>
            <div className="recommend">
              <div className="container">
                <Row>
                  <h4>More from this user</h4>
                  <SwiperCustomize listProduct={listProduct} />
                </Row>
              </div>
            </div>
          </div>
        </StyledItem>
      </PrimaryLayout>
    </React.Fragment>
  );
};

export default Item;
