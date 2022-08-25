import React, { useEffect } from "react";
import { Filter } from "../../components/Filter";
import { MenuCategories } from "../../components/MenuCategories";
import { PrimaryLayout } from "../../components/Layout";
import { PreviewItem } from "../../components/PreviewItem";
import styled from "styled-components";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

import { Pagination } from "antd";

import { useDispatch, useSelector } from "../../hooks";
import { ENDPOINT } from "../../utils/constant";
import axios from "axios";
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
  const getCurrentOwner = (list, num) => {
    switch (num) {
      case 1:
        return list?.num1;
      case 2:
        return list?.num2;
      case 3:
        return list?.num3;
      case 4:
        return list?.num4;
      case 5:
        return list?.num5;
      case 6:
        return list?.num6;
      default:
      // code block
    }
  };
  const getAvatar = async (list, num) => {
    console.log("hello");
    const address = getCurrentOwner(list, num);
    try {
      const user = await axios.get(
        `${ENDPOINT}/users/findbyaddress/${address}`
      );
      console.log(ENDPOINT + user.data?.avatar?.url);
      return ENDPOINT + user.data?.avatar?.url;
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getListProducts();
  }, [getListProducts]);
  // const productsSate=(state)=>({state:state.productModel})
  // const productsDispatch=(dispatch)=>({
  //   getListProducts:()=>dispatch.productModel.getListProducts()
  // })
  return (
    <React.Fragment>
      <PrimaryLayout>
        <StyledProduct>
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
                        name={pro.name}
                        price={pro.price}
                        image={pro.image.map((img) => ENDPOINT + img.url)}
                        id={pro.id}
                        avatar={() => {
                          getAvatar(pro?.owners_by, pro?.num_owners);
                        }}
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
        </StyledProduct>
      </PrimaryLayout>
    </React.Fragment>
  );
};
export default Products;
