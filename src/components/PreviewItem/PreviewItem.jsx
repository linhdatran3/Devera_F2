import React from "react";
const PreviewItem = () => {
  return (
    <React.Fragment>
      <div>
        <div className="row">
          <div className="col col-1">
            <img src="" alt="" />
          </div>
          <div className="col col-2">
            {/*name creator */}
            <h4>name creator</h4>
            <div className="price">
              <i></i>
              {/* price - item */}
              <span>Price</span>
              <span>ICX</span>
            </div>
          </div>
          <div className="col col-3">
            {/* icon - more */}
            <i></i>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
export default PreviewItem;
