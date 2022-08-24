import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
const StyledPreviewItem = styled.div`
  .previewItem {
    position: relative;
    background-color: #fff;
    border-radius: 15px;
    width: 100%;
    padding-bottom: 1rem;
    margin-bottom: 1rem;
    /* border: 1.5px solid #f4f4f4; */
  }

  .image {
    position: relative;
    top: 100%;
    left: 50%;
    transform: translate(-50%, 0%);
    /* height: 220px; */
    width: 100%;
    background-color: #fff;
  }
  .image img {
    border-radius: 5px;
  }
  .user__icon img {
    height: 36px;
    width: 36px;
    border-radius: 50%;
  }

  .content {
    display: flex;
    margin: 0 1rem;
    justify-content: space-around;
  }
  .content .right {
    padding-top: 2rem;
    position: relative;
    top: 100%;
    right: 0%;
  }
  .content .price__item {
    display: flex;
  }
  .content .price-icon {
    background-color: "#fff";
    border-radius: "50%";
    color: "#40AA54";
    width: 18px;
    height: 18px;
  }
`;
export const PreviewItem = (props) => {
  const { name, price, walletAddress, image, id, avatar } = props;
  return (
    <StyledPreviewItem>
      {" "}
      <React.Fragment>
        <div className="previewItem">
          <div className="image">
            <Link to={`/products/${id}`}>
              <img
                src={image}
                alt=""
                width={"100%"}
                style={{ maxHeight: "250px", maxWidth: "285px" }}
              />
            </Link>
          </div>
          <div className="content">
            <div className="left">
              <div className="name__item">
                {/* name item */}
                <h3>{name}</h3>
              </div>
              <div className="create_by__item">
                <span>Create by: </span>
                {/* name creator */}
                <span>{walletAddress} </span>
              </div>
              <div className="price__item">
                <div className="price-icon">
                  <img
                    src="https://cryptologos.cc/logos/icon-icx-logo.png"
                    height={16}
                    width={16}
                    alt=""
                  />
                </div>
                {/* price item */}
                <span className="p1"> {price} ICX </span>
              </div>
            </div>
            <div className="right">
              {/* img user */}
              <div className="user__icon circleClasses">
                <img
                  src={
                    avatar ||
                    "https://png.pngtree.com/png-vector/20191027/ourlarge/pngtree-avatar-vector-icon-white-background-png-image_1884971.jpg"
                  }
                  alt=""
                  className="circleItemCenter"
                  height={"100%"}
                  width={"100%"}
                />
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    </StyledPreviewItem>
  );
};
PreviewItem.defaultProps = {
  image:
    "https://i.pinimg.com/564x/d0/cf/56/d0cf56a5ef9ca810288289c7dc7be7ed.jpg",
  name: "Name NFT",
  price: "45.2",
  walletAddress: "hx45...74",
  avatar:
    "https://png.pngtree.com/png-vector/20191027/ourlarge/pngtree-avatar-vector-icon-white-background-png-image_1884971.jpg",
};
