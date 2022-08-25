import React, { useEffect } from "react";

import { PrimaryLayout } from "../../components/Layout";
import styled from "styled-components";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
//Toastify CSS
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { PreviewItem } from "../../components/PreviewItem";
import { useDispatch, useSelector } from "../../hooks";
import { ENDPOINT } from "../../utils/constant";
import { hashShortener } from "../../sdk/iconSDK";
import { Tabs, Alert } from "antd";
import { Filter } from "../../components/Filter";
import { useParams } from "react-router-dom";
const { TabPane } = Tabs;

const StyledStore = styled.div`
  .user__info {
    /* background-color: #d5fbdc; */
    padding-top: 2rem;
    padding-bottom: 1rem;
    border-radius: 20px;
    border: 1.5px solid #dbdada;
    heigh: 100% !important;
  }
  .user__info__avatar {
    margin-left: 1rem;
  }
  .user__info__content {
    border-top: 1px solid #dadada;
    margin: 0.5rem 0;
  }
  .user__setting {
    padding: 1rem;
    margin-left: 1rem;
    border-radius: 20px;
    border: 1.5px solid #dbdada;
  }
  .user__setting .personal-detail .row {
    padding: 0.5rem 0 !important;
  }
  .user__setting .personal-detail__head {
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #dbdada;
    align-items: center;
  }

  .accout-setting {
    padding: 2rem;
    margin: 2rem;
    border-radius: 20px;
    border: 1.5px solid #dbdada;
  }
  .account-setting__head {
    display: flex;
    justify-content: space-between;
  }
  .personal-detail__content-bio input {
    border-radius: 15px;
  }
  .ant-input-affix-wrapper-lg {
    border-radius: 10px;
    width: 70%;
  }
  .personal-detail__content input {
    width: 70%;
  }
  .walletAddress {
    border-radius: 10px;
    width: 70%;
    display: flex;
    justify-content: space-between;
    border: 1px #dadada solid;
    padding: 0.5rem 0.2rem;
    font-size: 14px;
  }
  .personal-detail__head-edit {
    padding: 0.5rem 0;
  }
  .col__created {
    margin-top: 1rem;
    padding: 1rem;
  }
  .created {
    padding: 1rem;
  }
  .created__head {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 0;
    border-bottom: 1px solid #dadada;
  }
  .created__head-add svg {
    font-size: 30px;
  }
  .history-item {
    border-bottom: 1.5px solid #dbdada;
    padding: 0.5rem;
    margin-bottom: 0.5rem;
  }
  .item-products {
    display: flex;
  }
  .item-info {
    margin-left: 0.5rem;
  }
  .item-image img {
    border-radius: 5px;
  }
  .ant-tabs {
    border: 1px solid #dadada;
    border-radius: 20px;
  }
  .ant-tabs-nav-list {
    margin-left: 1rem;
  }
  .filter {
    align-items: end;
    padding: 0.5rem 1rem;
    padding-top: 1rem;
  }
  .filter__sort {
    align-items: end;
  }
  .filter__sort p {
    margin-bottm: 0 !important;
  }
  .ant-alert-message {
    font-size: 12px;
  }
`;
const slot = { right: <Filter /> };
const Store = () => {
  const { id } = useParams();
  const { user, createdProducts, ownerProducts } = useSelector(
    ({ userModel, productModel }) => ({
      user: userModel.user,
      createdProducts: productModel.createdProducts,
      ownerProducts: productModel.ownerProducts,
    })
  );

  const { getUserById, getListCreatedByUserId, getListUserOwnByAddress } =
    useDispatch(({ userModel, productModel }) => ({
      getUserById: userModel.getUserById,
      getListCreatedByUserId: productModel.getListCreatedByUserId,
      getListUserOwnByAddress: productModel.getListUserOwnByAddress,
    }));

  useEffect(() => {
    getUserById(id);
    getListCreatedByUserId(id);
    //address
    getListUserOwnByAddress(user?.walletAddress);
  }, [
    id,
    getUserById,
    getListCreatedByUserId,
    getListUserOwnByAddress,
    user?.walletAddress,
  ]);
  return (
    <React.Fragment>
      <PrimaryLayout>
        <ToastContainer />
        <StyledStore>
          <div className="container">
            <Row>
              <Col md={3} xs={2} className="user__info">
                <div className="user__info__avatar">
                  <img
                    src={
                      user?.avatar?.url
                        ? `${ENDPOINT}${user?.avatar?.url}`
                        : "https://png.pngtree.com/png-vector/20191027/ourlarge/pngtree-avatar-vector-icon-white-background-png-image_1884971.jpg"
                    }
                    alt=""
                    height={200}
                  />
                  <div className="user__info__content">
                    <p>
                      Storename:{" "}
                      <strong>
                        {user.username ? user.username : "No name"}
                      </strong>
                    </p>
                    <p>
                      Address:{" "}
                      {user.walletAddress
                        ? hashShortener(user.walletAddress)
                        : "hx2....4d1e9"}
                    </p>
                    <p>Join: {user.created_at} </p>
                  </div>
                </div>
              </Col>
              <Col>
                <Tabs defaultActiveKey="1" tabBarExtraContent={slot}>
                  <TabPane tab="Created" key="1">
                    <div className="created">
                      <Row>
                        {createdProducts.map((pro, index) => (
                          <Col xs={6} md={3} key={index}>
                            <p style={{ color: "red " }}>
                              {pro?.status === true ? (
                                " ."
                              ) : (
                                <Alert
                                  message="The NFT is currently not for sale"
                                  type="warning"
                                />
                              )}
                            </p>
                            <PreviewItem
                              name={pro.name}
                              price={pro.price}
                              image={pro.image.map((img) => ENDPOINT + img.url)}
                              id={pro.id}
                              walletAddress={
                                user?.username
                                  ? user?.username
                                  : user?.walletAddress
                              }
                              avatar={ENDPOINT + user?.avatar?.url}
                            />
                          </Col>
                        ))}
                      </Row>
                    </div>
                  </TabPane>

                  <TabPane tab="Own" key="2">
                    <div className="created">
                      <Row>
                        {ownerProducts.map((pro, index) => (
                          <Col xs={6} md={3} key={index}>
                            <p>
                              {pro?.status === true ? (
                                "."
                              ) : (
                                <Alert
                                  message="The NFT is currently not for sale"
                                  type="warning"
                                />
                              )}
                            </p>
                            <PreviewItem
                              name={pro.name}
                              price={pro.price}
                              image={pro.image.map((img) => ENDPOINT + img.url)}
                              id={pro.id}
                            />
                          </Col>
                        ))}
                      </Row>
                    </div>
                  </TabPane>
                </Tabs>
              </Col>
            </Row>
          </div>
        </StyledStore>
      </PrimaryLayout>
    </React.Fragment>
  );
};
export default Store;
