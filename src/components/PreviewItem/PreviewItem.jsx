import React from "react";
import "./PreviewItem.css";
import { DollarCircleFilled } from "@ant-design/icons";
const PreviewItem = ({ name, price, createBy, unit, user }) => {
  return (
    <React.Fragment>
      <div className="previewItem">
        <div className="image">
          <img src="../../../public/image\ 3.png" alt="" />
        </div>
        <div className="content">
          <div className="left">
            <div className="name__item">
              {/* name item */}
              <h3>{name}Name item</h3>
            </div>
            <div className="create_by__item">
              <span>Create by</span>
              {/* name creator */}
              <span>{createBy} hx45 ... 250</span>
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
              <span className="p1">{price}Price </span>
              <span className="p1">{unit}ICX</span>
            </div>
          </div>
          <div className="right">
            {/* img user */}
            <div className="user__icon circleClasses">
              <img src={user} alt="" className="circleItemCenter" />
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
export default PreviewItem;
