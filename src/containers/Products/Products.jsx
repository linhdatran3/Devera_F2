import React, { useEffect } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import MenuCategories from "../../components/MenuCategories/MenuCategories";
import PreviewItem from "../../components/PreviewItem/PreviewItem";
import Filter from "../../components/Filter/Filter";
import { Pagination } from "antd";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import styled from "styled-components";
import { useDispatch, useSelector } from "../../hooks";
import { ENDPOINT } from "../../utils/constant";
const StyledProduct = styled.div`
  .products .categories ul {
    width: 100% !important;
    padding-right: 0.5rem;
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
const Products = () => {
  const { getListProducts } = useDispatch(({ productModel }) => ({
    getListProducts: productModel.getListProducts,
  }));

  const { products } = useSelector(({ productModel }) => ({
    products: productModel.products,
  })); // lấy data từ store ra sài

  useEffect(() => {
    getListProducts();
  }, [getListProducts]);
  // const productsSate=(state)=>({state:state.productModel})
  // const productsDispatch=(dispatch)=>({
  //   getListProducts:()=>dispatch.productModel.getListProducts()
  // })
  return (
    <React.Fragment>
      <StyledProduct>
        <header>
          <Navbar />
        </header>

        <section className="products container">
          <Row>
            <Col md={2} className="categories">
              <h3>Categories</h3>
              <MenuCategories />
            </Col>

            <Col md={10} className="list-products">
              <div className="list-products__filter">
                <Filter />
              </div>
              <Row>
                {products.map((pro) => (
                  <Col xs={6} md={3}>
                    <PreviewItem
                      Name={pro.Name}
                      Price={pro.Price}
                      store={pro.store.Name}
                      Image={pro.Image.map((img) => ENDPOINT + img.url)}
                      id={pro.id}
                    />
                  </Col>
                ))}
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
      </StyledProduct>
    </React.Fragment>
  );
};
export default Products;
