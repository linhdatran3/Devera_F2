import React from "react";
import Item from "../../components/Item/Item";
import Button from "../../components/Button/Button";
import PreviewItem from "../../components/PreviewItem/PreviewItem";
import Input from "../../components/Input/Input";
import Navbar from "../../components/Navbar/Navbar";
import "./Home.css";
const Home = () => {
  return (
    <React.Fragment>
      <div>
        <h1>HOME</h1>
        <header>
          <div className="head">
            <Navbar />
          </div>
          <div className="banner">
            <div className="banner__content">
              <div className="banner__content-title">
                <h1>Discover, Sell</h1>
                <h2>& Collect Rare</h2>
                <h2>NFTs</h2>
              </div>
              <div className="banner__content-sub-title">
                <p>
                  Digital marketplace for crypto collections and non-fungible
                  tokens (NFTs)
                </p>
              </div>
              <div className="banner__content-btn">
                <Button
                  bgColor={"#8E99F8;"}
                  txtColor={"#fff"}
                  width={"199px"}
                  height={"40px"}
                >
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
                src=".\.\public\Devera-brand-character 1 (1).png"
                alt=""
                height={"513px"}
                width={"505px"}
              />
            </div>
          </div>
        </header>
        <Item />
        <Button />
        <PreviewItem />
        <Input />
      </div>
    </React.Fragment>
  );
};
export default Home;
