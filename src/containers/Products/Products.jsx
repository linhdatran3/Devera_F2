import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import MenuCategories from "../../components/MenuCategories/MenuCategories";
import PreviewItem from "../../components/PreviewItem/PreviewItem";
import { Pagination } from "antd";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import "./Products.css";
const Products = () => {
  return (
    <React.Fragment>
      <div>
        <header>
          <div className="products__head">
            <Navbar />
          </div>
        </header>

        <section className="products">
          <div className="categories">
            <h3>Categories</h3>
            <MenuCategories />
          </div>
          <div className="list-products">
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
          </div>
        </section>

        <footer>
          <Footer />
        </footer>
      </div>
    </React.Fragment>
  );
};
export default Products;
