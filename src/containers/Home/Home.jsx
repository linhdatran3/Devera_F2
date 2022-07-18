import React from "react";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";
import Navbar from "../../components/Navbar/Navbar";
import {
  LeftOutlined,
  RightOutlined,
  CarOutlined,
  AliwangwangOutlined,
} from "@ant-design/icons";
import "./Home.css";
import PreviewItem from "../../components/PreviewItem/PreviewItem";
const Home = () => {
  return (
    <React.Fragment>
      <div>
        <header>
          <div className="head">
            <Navbar />
          </div>
          <div className="banner">
            <div className="banner__content">
              <div className="banner__content-title">
                <h2>NFTs</h2>
              </div>
              <div className="banner__content-sub-title">
                <p>
                  Digital marketplace for crypto collections and non-fungible
                  tokens (NFTs)
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
        <section className="category">
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
            <div className="item item6">
              <AliwangwangOutlined />
              <p className="p1">Alien</p>
            </div>
            <div className="item item7">
              <AliwangwangOutlined />
              <p className="p1">Alien</p>
            </div>
          </div>
        </section>

        <section className="popular">
          <div className="popular__head">
            <div className="title">
              <h2>Popular Product</h2>
            </div>
            <div className="see-all">
              <Button borderRadius={"10px"}>See all</Button>
            </div>
          </div>
          <div className="popular__content">
            <div className="row">
              <div className="col col1">
                <PreviewItem />
              </div>
              <div className="col col2">
                <PreviewItem />
              </div>
              <div className="col col3">
                <PreviewItem />
              </div>
              <div className="col col4">
                <PreviewItem />
              </div>
            </div>
            <div className="row">
              <div className="col col1">
                <PreviewItem />
              </div>
              <div className="col col2">
                <PreviewItem />
              </div>
              <div className="col col3">
                <PreviewItem />
              </div>
              <div className="col col4">
                <PreviewItem />
              </div>
            </div>
          </div>
        </section>
      </div>
    </React.Fragment>
  );
};
export default Home;
