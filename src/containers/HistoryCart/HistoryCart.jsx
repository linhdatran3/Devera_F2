import React from "react";
import { PrimaryLayout } from "../../components/Layout";
import { CheckCircleOutlined, CloseCircleOutlined } from "@ant-design/icons";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import styled from "styled-components";
const StyledHistoryCart = styled.div`
  .history__head {
    padding-top: 1rem;
    padding-bottom: 0;
    text-align: center;
  }
  .history-title .row {
    padding: 0;
    padding-left: 1rem;
  }
  .history-item {
    border-radius: 20px;
    border: 1.5px solid #dbdada;
    padding: 1rem;
    margin-bottom: 1rem;
  }
  .history-item .item-products {
    display: flex;
    padding-bottom: 0.5rem;
  }
  .history__status-success {
    color: #40aa54;
  }
  .history__status-cancel {
    color: #eb4d4b;
  }
`;
const HistoryCart = () => {
  return (
    <React.Fragment>
      <PrimaryLayout>
        <StyledHistoryCart>
          <section className="historyCart container">
            <div className="temp">
              <div className="history__head">
                <h4>History shopping cart</h4>
              </div>
              {/* history shopping cart */}
              <div className="history__content">
                <div className="history-title">
                  <Row>
                    <Col sm={1}>
                      <p>No</p>
                    </Col>
                    <Col sm={5}>
                      <p>List Product</p>
                    </Col>

                    <Col sm={2}>
                      <p>Date</p>
                    </Col>
                    <Col sm={2}>
                      <p>Total</p>
                    </Col>
                    <Col sm={2}>
                      <p>Status</p>
                    </Col>
                  </Row>
                </div>
                <div className="history-item">
                  <Row>
                    <Col sm={1}>
                      <h5>#1</h5>
                    </Col>
                    <Col sm={5}>
                      <div className="item-products">
                        <div className="item-image">
                          <img src="logo.png" alt="" height="80px" />
                        </div>
                        <div className="item-info">
                          <p className="p1">Name products</p>
                          <p className="p2 createdBy">Created by: aaa</p>
                          <p className="p2 priceItem">Price: 5.84</p>
                        </div>
                      </div>
                      <div className="item-products">
                        <div className="item-image">
                          <img src="logo.png" alt="" height="80px" />
                        </div>
                        <div className="item-info">
                          <p className="p1">Name products</p>
                          <p className="p2 createdBy">Created by: aaa</p>
                          <p className="p2 priceItem">Price: 5.84</p>
                        </div>
                      </div>
                    </Col>

                    <Col sm={2}>
                      <span className="p1">2022-08-06 22:32:57.743302</span>
                    </Col>
                    <Col sm={2}>
                      <h5>5.76</h5>
                    </Col>
                    <Col sm={2} className="history__status-success">
                      <CheckCircleOutlined />
                      <span className="p1"> Completed!</span>
                    </Col>
                  </Row>
                </div>
                <div className="history-item">
                  <Row>
                    <Col sm={1}>
                      <h5>#2</h5>
                    </Col>
                    <Col sm={5}>
                      <div className="item-products">
                        <div className="item-image">
                          <img src="logo.png" alt="" height="80px" />
                        </div>
                        <div className="item-info">
                          <p className="p1">Name products</p>
                          <p className="p2 createdBy">Created by: aaa</p>
                          <p className="p2 priceItem">Price: 5.84</p>
                        </div>
                      </div>
                      <div className="item-products">
                        <div className="item-image">
                          <img src="logo.png" alt="" height="80px" />
                        </div>
                        <div className="item-info">
                          <p className="p1">Name products</p>
                          <p className="p2 createdBy">Created by: aaa</p>
                          <p className="p2 priceItem">Price: 5.84</p>
                        </div>
                      </div>
                    </Col>

                    <Col sm={2}>
                      <span className="p1">2022-08-06 22:32:57.743302</span>
                    </Col>
                    <Col sm={2}>
                      <h5>5.76</h5>
                    </Col>
                    <Col sm={2} className="history__status-cancel">
                      <CloseCircleOutlined />
                      <span className="p1"> Cancel!</span>
                    </Col>
                  </Row>
                </div>
              </div>
            </div>
          </section>
        </StyledHistoryCart>
      </PrimaryLayout>
    </React.Fragment>
  );
};
export default HistoryCart;
