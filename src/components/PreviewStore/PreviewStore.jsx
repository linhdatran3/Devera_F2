import React from "react";
import { DollarCircleFilled } from "@ant-design/icons";
import { Link } from "react-router-dom";
import styled from "styled-components";
const StylePreviewStore = styled.div`
  .previewStore {
    display: flex;
    border-radius: 20px;
    border: 1px solid #d6d6d6;
  }
  .previewStore__image {
    margin: 0.7rem;
    border-radius: 10px;
  }
  .previewStore__image img {
    border-radius: 10px;
  }
  .previewStore__widget {
    display: flex;
  }
  .previewStore__widget div {
    margin-right: 0.3rem;
  }
  .previewStore__content {
    margin-left: 0.5rem;
    margin-top: 0.7rem;
  }
`;
const PreviewStore = (props) => {
  const { Name, Widget, Image, unit, id } = props;
  return (
    <React.Fragment>
      <StylePreviewStore>
        <div className="previewStore">
          <div className="previewStore__image">
            <Link to={id ? `/stores/${id}` : `/stores/1`}>
              <img
                src={
                  Image
                    ? Image
                    : "https://i.pinimg.com/564x/d0/cf/56/d0cf56a5ef9ca810288289c7dc7be7ed.jpg"
                }
                alt=""
                height={100}
              />
            </Link>
          </div>
          <div className="previewStore__content">
            <p className="p1">{Name ? Name : "hx408..4679"}</p>
            <p className="p1 previewStore__widget">
              <div className="previewStore__widget-icon">
                <DollarCircleFilled
                  style={{
                    backgroundColor: "#fff",
                    borderRadius: "50%",
                    color: "#40AA54",
                  }}
                />
              </div>
              <div className="previewStore__widget-price">
                {Widget ? Widget : "14.082.730  "}
              </div>
              <div className="previewStore__widget-unit">
                {unit ? unit : "  ICX"}
              </div>
            </p>
          </div>
        </div>
      </StylePreviewStore>
    </React.Fragment>
  );
};
export default PreviewStore;
