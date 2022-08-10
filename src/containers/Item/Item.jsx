import React, { useEffect } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import styled from "styled-components";
import Button from "../../components/Button/Button";
import SwiperCustomize from "../../components/Swiper/Swiper";
import { useDispatch, useSelector } from "../../hooks";
import { useParams } from "react-router-dom";
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
  },
  {
    image:
      "https://i.pinimg.com/564x/4f/7f/38/4f7f385b7639b9a0e3e6446271102020.jpg",
    price: 3.6,
    store: "store of LADA",
  },
  {
    image:
      "https://i.pinimg.com/564x/83/cd/5b/83cd5b6a654978055f79e4e903f085c8.jpg",
    price: 3.6,
    store: "store of LADA",
  },
  {
    image:
      "https://i.pinimg.com/564x/83/cd/5b/83cd5b6a654978055f79e4e903f085c8.jpg",
    price: 3.6,
    store: "store of LADA",
  },
];
const Item = () => {
  const { id } = useParams();
  console.log(id);
  const { product } = useSelector(({ productModel }) => ({
    product: productModel.product,
  }));
  const { getSingleProductById } = useDispatch(({ productModel }) => ({
    getSingleProductById: productModel.getSingleProductById,
  }));
  console.log(product);
  useEffect(() => {
    getSingleProductById(id);
  }, [id]);
  return (
    <React.Fragment>
      <StyledItem>
        <div>
          <Navbar />
          <div className="item container">
            <Row>
              <Col md={5}>
                <div className="item__image">
                  <img
                    src="https://i.pinimg.com/564x/70/f4/f5/70f4f5cbee08d3dc5bf6b8e698a2db97.jpg"
                    alt=""
                    style={{ width: "100%" }}
                  />
                </div>
              </Col>
              <Col md={{ span: 5, offset: 2 }}>
                <div className="item__info">
                  <div className="item__info-name">
                    <h5>{product.Name}</h5>
                  </div>
                  <div className="item__info-price">
                    <h5>Price:{product.Price} ICX</h5>
                  </div>
                  <div className="item__info-des">
                    <p className="p1">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Itaque expedita, nam molestias architecto aspernatur aut
                      perspiciatis nobis quae maxime minus repellat libero quis
                      dolore minima, velit veritatis corrupti fugit amet.
                    </p>
                  </div>
                  <div className="item__info-createBy">
                    <h5>Created by: store of LADA</h5>
                  </div>
                  <div className="item__buy">
                    <Button>BUY NOW</Button>
                  </div>
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

          <footer>
            <Footer />
          </footer>
        </div>
      </StyledItem>
    </React.Fragment>
  );
};
export default Item;
