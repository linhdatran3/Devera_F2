import React from "react";
import "./PreviewItem.css";
import { DollarCircleFilled } from "@ant-design/icons";
import { Link } from "react-router-dom";
const PreviewItem = (props) => {
  const { Name, Price, unit, store, Image, id } = props;
  return (
    <React.Fragment>
      <div className="previewItem">
        <div className="image">
          <Link to={`/products/${id}`}>
            <img
              src={Image}
              alt=""
              width={"100%"}
              style={{ maxHeight: "250px" }}
            />
          </Link>
        </div>
        <div className="content">
          <div className="left">
            <div className="name__item">
              {/* name item */}
              <h3>{Name}</h3>
            </div>
            <div className="create_by__item">
              <span>Create by: </span>
              {/* name creator */}
              <span>{store} </span>
            </div>
            <div className="price__item">
              <div className="price-icon">
                <DollarCircleFilled
                  style={{
                    backgroundColor: "#fff",
                    borderRadius: "50%",
                    color: "#40AA54",
                  }}
                />
              </div>
              {/* price item */}
              <span className="p1">Price: {Price} </span>
              <span className="p1">{unit}</span>
            </div>
          </div>
          <div className="right">
            {/* img user */}
            <div className="user__icon circleClasses">
              <img
                src={Image}
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
  );
};
PreviewItem.defaultProps = {
  Image:
    "https://i.pinimg.com/564x/d0/cf/56/d0cf56a5ef9ca810288289c7dc7be7ed.jpg",
  Name: "Name NFT",
  Price: "45.2",
  unit: "ICX",
  store: "hx45...74",
};
export default PreviewItem;
