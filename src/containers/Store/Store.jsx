import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import MenuCategories from "../../components/MenuCategories/MenuCategories";
import PreviewItem from "../../components/PreviewItem/PreviewItem";
import PreviewStore from "../../components/PreviewStore/PreviewStore";
import { Pagination } from "antd";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import styled from "styled-components";

const StyledStore = styled.div`
  .store__list-products .categories ul {
    width: 100% !important;
    padding-right: 0.5rem;
  }
  .store__info__detail {
    padding-top: 0.7rem;
  }
  .store__info__detail .numProduct {
    color: #eb4d4b;
  }
  .list-products__pagination {
    text-align: center;
  }
  .ant-pagination-item-active {
    border-color: #40aa54;
  }
  .ant-pagination-item:hover {
    border-color: #40aa54;
  }
`;
const Store = () => {
  return (
    <React.Fragment>
      <StyledStore>
        <div>
          <Navbar />
          <section className="store__info container">
            <Row>
              <Col sm={3} className="store__info__intro">
                <PreviewStore />
              </Col>
              <Col sm={4} className="store__info__detail">
                <p className="p1">
                  Products: <span className="p1 numProduct">4</span>
                </p>
                <p className="p1">
                  Order completion rate:{" "}
                  <span className="p1 numProduct">90%</span>
                </p>
              </Col>
              <Col sm={4} className="store__info__detail">
                <p className="p1">
                  Participation:{" "}
                  <span className="p1 numProduct">1 year ago</span>
                </p>
                <p className="p1">
                  Order completion rate:{" "}
                  <span className="p1 numProduct">90%</span>
                </p>
              </Col>
            </Row>
          </section>
          <section className="store__list-products container">
            <Row>
              <Col md={2} className="categories">
                <h3>Categories</h3>
                <MenuCategories />
              </Col>
              <Col md={10} className="list-products">
                <div className="list-products__filter"></div>
                <Row>
                  <Col xs={6} md={3}>
                    <PreviewItem />
                  </Col>
                  <Col xs={6} md={3}>
                    <PreviewItem />
                  </Col>
                  <Col xs={6} md={3}>
                    <PreviewItem />
                  </Col>
                  <Col xs={6} md={3}>
                    <PreviewItem />
                  </Col>
                </Row>
                <Row>
                  <Col xs={6} md={3}>
                    <PreviewItem />
                  </Col>
                  <Col xs={6} md={3}>
                    <PreviewItem />
                  </Col>
                  <Col xs={6} md={3}>
                    <PreviewItem />
                  </Col>
                  <Col xs={6} md={3}>
                    <PreviewItem />
                  </Col>
                </Row>
                <Row>
                  <Col xs={6} md={3}>
                    <PreviewItem />
                  </Col>
                  <Col xs={6} md={3}>
                    <PreviewItem />
                  </Col>
                  <Col xs={6} md={3}>
                    <PreviewItem />
                  </Col>
                  <Col xs={6} md={3}>
                    <PreviewItem />
                  </Col>
                </Row>
                <Row>
                  <Col xs={6} md={3}>
                    <PreviewItem />
                  </Col>
                  <Col xs={6} md={3}>
                    <PreviewItem />
                  </Col>
                  <Col xs={6} md={3}>
                    <PreviewItem />
                  </Col>
                  <Col xs={6} md={3}>
                    <PreviewItem />
                  </Col>
                </Row>
                <div className="list-products__pagination">
                  <Pagination defaultCurrent={1} total={50} />
                </div>
              </Col>
            </Row>
          </section>

          <footer>
            <Footer />
          </footer>
        </div>
      </StyledStore>
    </React.Fragment>
  );
};
export default Store;
