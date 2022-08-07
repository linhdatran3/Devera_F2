import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import { CheckCircleOutlined, CloseCircleOutlined } from "@ant-design/icons";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import styled from "styled-components";
const StyledHistoryCart = styled.div`
  .history__head {
    padding: 0 1rem;
  }
  .history-item {
    border-radius: 20px;
    border: 1.5px solid #dbdada;
    padding: 1rem;
    margin: 1rem 0;
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
      <StyledHistoryCart>
        <div>
          <header>
            <Navbar />
          </header>

          <section className="historyCart container">
            <div className="temp">
              <div className="history__head">
                <h4>History shopping cart</h4>
                <Row>
                  <Col sm={1}>
                    <h4>No</h4>
                  </Col>
                  <Col sm={5}>
                    <h4>List Product</h4>
                  </Col>

                  <Col sm={2}>
                    <h4>Date</h4>
                  </Col>
                  <Col sm={2}>
                    <h4>Total</h4>
                  </Col>
                  <Col sm={2}>
                    <h4>Status</h4>
                  </Col>
                </Row>
              </div>
              {/* history shopping cart */}
              <div className="history__content">
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
                          <h4>Name products</h4>
                          <p className="p2 createdBy">Created by: aaa</p>
                          <p className="p2 quantity">Quantity: 2</p>
                          <p className="p2 priceItem">Price: 5.84</p>
                        </div>
                      </div>
                      <div className="item-products">
                        <div className="item-image">
                          <img src="logo.png" alt="" height="80px" />
                        </div>
                        <div className="item-info">
                          <h4>Name products</h4>
                          <p className="p2 createdBy">Created by: aaa</p>
                          <p className="p2 quantity">Quantity: 2</p>
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
                          <h4>Name products</h4>
                          <p className="p2 createdBy">Created by: aaa</p>
                          <p className="p2 quantity">Quantity: 2</p>
                          <p className="p2 priceItem">Price: 5.84</p>
                        </div>
                      </div>
                      <div className="item-products">
                        <div className="item-image">
                          <img src="logo.png" alt="" height="80px" />
                        </div>
                        <div className="item-info">
                          <h4>Name products</h4>
                          <p className="p2 createdBy">Created by: aaa</p>
                          <p className="p2 quantity">Quantity: 2</p>
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

          <footer>
            <Footer />
          </footer>
        </div>
      </StyledHistoryCart>
    </React.Fragment>
  );
};
export default HistoryCart;
