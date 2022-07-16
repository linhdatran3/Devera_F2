import React from "react";
const Item = () => {
  return (
    <React.Fragment>
      <div>
        <div className="image">
          <img src="" alt="" />
        </div>
      </div>
      <div className="content">
        <div className="left">
          <div className="name__item">
            {/* name item */}
            <h4>Name item</h4>
          </div>
          <div className="create_by__item">
            <span>Create by</span>
            {/* name creator */}
            <span> hx45 ... 250</span>
          </div>
          <div className="price__item">
            <i>icon</i>
            {/* price item */}
            <span>Price</span>
            <span>ICX</span>
          </div>
        </div>
        <div className="right">
          {/* img user */}
          <img src="" alt="" />
        </div>
      </div>
    </React.Fragment>
  );
};
export default Item;
