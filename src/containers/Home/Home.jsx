import React, { useEffect } from "react";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { PrimaryLayout } from "../../components/Layout";
import { PreviewItem } from "../../components/PreviewItem";
import styled from "styled-components";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { ENDPOINT } from "../../utils/constant";
import { Link } from "react-router-dom";
import {
  LeftOutlined,
  RightOutlined,
  CarOutlined,
  AliwangwangOutlined,
} from "@ant-design/icons";
import { useDispatch, useSelector } from "../../hooks";
const StyledHome = styled.div`
  .head {
    height: 16vh;
    align-items: center;
    display: flex;
    padding: 1rem 0;
  }
  .banner {
    display: flex;
    height: 80vh;
    background-color: #d5fbdc;
    padding: 1rem;
    border-radius: 30px;
  }
  .banner__content {
    width: 60%;
  }
  .banner__content-title {
    font-size: 60px;
    line-height: 77px;
  }
  .banner__content-sub-title {
    width: 300px;
    height: 40px;
    left: 62px;
    top: 381px;

    font-family: "Poppins";
    font-style: normal;
    font-weight: 500;
    font-size: 13px;
    line-height: 20px;
  }
  .banner__content-number {
    display: flex;
  }
  .banner__content-number span {
    font-weight: 700;
    font-size: 48px;
    line-height: 61px;
  }
  .banner__content-number .number-nft {
    margin-right: 68px;
  }
  .banner__image {
    width: 40%;
  }

  .category {
    padding: 1rem 0;
    position: relative;
  }
  .category__head {
    display: flex;
    position: relative;
  }
  .category__head .title {
    left: 0;
    position: absolute;
  }
  .category__head .next-pre {
    right: 0;
    position: absolute;
    display: flex;
  }
  .category__head .next-pre .pre-icon {
    background-color: #f7f7f7;
    margin-right: 1rem;
    color: #202020;
  }
  .category__head .next-pre .next-icon {
    background-color: #40aa54;
    color: #fff;
  }

  .category .categories {
    position: relative;
    top: 50px;
    display: flex;
  }
  .category .categories .item {
    background-color: #f7f7f7;
    width: calc(100% / 5);
    margin: 1rem;
    text-align: center;
    padding: 3rem 0 0.5rem 0;
    border-radius: 15px;
  }
  .category .categories .item svg {
    height: 36px;
    width: 36px;
  }
  .popular {
    padding: 2rem 0;
    position: relative;
  }
  .popular .popular__head {
    display: flex;
    position: relative;
    height: 3vh;
    padding: 3rem 0;
  }
  .popular__head .title {
    position: absolute;
    left: 0;
  }
  .popular__head .see-all {
    position: absolute;
    right: 0;
  }
  .popular__content {
    padding: 1rem 0;
  }

  .sales {
    height: 100%;
    background-color: #d5fbdc;
    border-radius: 40px;
  }
  .sales__head {
    padding: 1rem 4rem;
  }
  .sales__content {
    padding: 0rem 3rem;
    padding-bottom: 1rem;
  }
  .row {
    padding: 1rem 0;
  }

  .join-our-community {
    text-align: center;
    padding: 1rem 0;
  }
  .join-our-community .join__content {
    padding: 1rem 0;
  }
`;

const Home = () => {
  const { getListProducts } = useDispatch(({ productModel }) => ({
    getListProducts: productModel.getListProducts,
  }));

  const { products } = useSelector(({ productModel }) => ({
    products: productModel.products,
  })); // lấy data từ store ra sài

  useEffect(() => {
    getListProducts();
  }, [getListProducts]);
  return (
    <React.Fragment>
      <PrimaryLayout>
        <StyledHome>
          <div>
            <header>
              <div className="banner container">
                <div className="banner__content">
                  <div className="banner__content-title">
                    <h2>NFTs</h2>
                  </div>
                  <div className="banner__content-sub-title">
                    <p>
                      Digital marketplace for crypto collections and
                      non-fungible tokens (NFTs)
                    </p>
                  </div>
                  <div className="banner__content-btn">
                    <Input />
                    <Button width="199px" height="40px" borderRadius="20px">
                      Discover Now
                    </Button>
                  </div>

                  <div className="banner__content-number">
                    <div className="number-nft">
                      <span>460 301</span>
                      <p>NFTs</p>
                    </div>
                    <div className="number-artists">
                      <span>2857</span>
                      <p>Artists</p>
                    </div>
                  </div>
                  <div
                    className="tempt"
                    style={{ fontSize: "20px", color: "red" }}
                  >
                    <h5>A lot of pages on NFT website</h5>
                    <Link to={"/"}>1. Home</Link> <br />
                    <Link to={"/products"}>
                      2. Products: All products in website
                    </Link>
                    <br />
                    <Link to={"/products/:id"}>3. Products: a item</Link> <br />
                    <Link to={"/cart"}>4. Cart</Link> <br />
                    <Link to={"/checkout"}>5. checkout</Link> <br />
                    <Link to={"/user"}>6. user: edit account</Link> <br />
                    <Link to={"/history"}>
                      7. User:history shopping cart
                    </Link>{" "}
                    <br />
                    <Link to={"/stores/:id"}>
                      8. A store (search store by name)
                    </Link>
                    <br />
                    <Link to={"/stores/create"}>
                      9. Edit store (create nft, edit name,..)
                    </Link>
                    <br />
                    <Link to={"/"}>10....</Link>
                    <br />
                  </div>
                </div>
                <div className="banner__image">
                  <img
                    src="Devera-brand-character 1 (1).png"
                    alt=""
                    height={"513px"}
                    width={"505px"}
                  />
                </div>
              </div>
            </header>
            <section className="category container">
              <div className="category__head">
                <div className="title">
                  <h2 className="h2">Category</h2>
                </div>
                <div className="next-pre">
                  <div className="pre-icon circleClasses">
                    <LeftOutlined className="circleItemCenter" />
                  </div>
                  <div className="next-icon circleClasses">
                    <RightOutlined className="circleItemCenter" />
                  </div>
                </div>
              </div>
              <div className="categories">
                <div className="item item1">
                  <CarOutlined />
                  <p className="p1">Car</p>
                </div>
                <div className="item item2">
                  <AliwangwangOutlined />
                  <p className="p1">Alien</p>
                </div>
                <div className="item item3">
                  <AliwangwangOutlined />
                  <p className="p1">Alien</p>
                </div>
                <div className="item item4">
                  <AliwangwangOutlined />
                  <p className="p1">Alien</p>
                </div>
                <div className="item item5">
                  <AliwangwangOutlined />
                  <p className="p1">Alien</p>
                </div>
              </div>
            </section>

            <section className="popular container">
              <div className="popular__head">
                <div className="title">
                  <h2>Popular Product</h2>
                </div>
                <div className="see-all">
                  <Button borderRadius={"10px"}>See all</Button>
                </div>
              </div>
              <div className="popular__content">
                <Row>
                  {products.slice(0, 8).map((pro) => (
                    <Col xs={6} md={3}>
                      <PreviewItem
                        name={pro.name}
                        price={pro.price}
                        image={pro.image.map((img) => ENDPOINT + img.url)}
                        id={pro.id}
                      />
                    </Col>
                  ))}
                </Row>
              </div>
            </section>

            <section className="sales container">
              <div className="sales__head">
                <div className="title">
                  <h2>Flash sales</h2>
                </div>
              </div>
              <div className="sales__content">
                <Row>
                  {products.slice(8, 17).map((pro) => (
                    <Col xs={6} md={3}>
                      <PreviewItem
                        name={pro.name}
                        price={pro.price}
                        image={pro.image.map((img) => ENDPOINT + img.url)}
                        id={pro.id}
                      />
                    </Col>
                  ))}
                </Row>
              </div>
            </section>

            <section className="join-our-community container">
              <div className="join__head">
                <div className="join__head-title">
                  <h2>Join Our Community</h2>
                </div>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Harum, nostrum? Itaque sapiente ratione illum nulla labore.
                  Dicta, ullam sint! Eum corrupti, laborum alias provident velit
                  animi suscipit eaque accusantium incidunt?
                </p>
              </div>
              <div className="join__content">
                <Input border={"1px solid #40aa54 "} />
                <Button>Submit</Button>
              </div>
            </section>
          </div>
        </StyledHome>
      </PrimaryLayout>
    </React.Fragment>
  );
};
export default Home;
