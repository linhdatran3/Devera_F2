import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Search } from "../Search";
import { Dropdown, Menu, Button } from "antd";
import {
  SortAscendingOutlined,
  SortDescendingOutlined,
  ArrowUpOutlined,
  ArrowDownOutlined,
} from "@ant-design/icons";

const StyledFilter = styled.div`
  .filter {
    display: flex;
    justify-content: space-between;
    background-color: #f4f4f4;
    padding: 0.7rem 1rem;
    border-radius: 5px;
    text-align: center;
  }
  .filter__sort {
    display: flex;
  }
  .filter__sort-title {
    margin-right: 0.5rem;
  }
  .filter__sort-content button {
    margin-right: 0.5rem;
    border-radius: 5px;
  }
  .filter__sort-content button::after {
    color: red;
  }
  .ant-btn:focus,
  .ant-btn:hover {
    color: #40aa54;
    border-color: #40aa54;
    background: #fff;
  }
`;

export const Filter = () => {
  const [sort, setSort] = useState("increase");
  const [sortName, setSortName] = useState("Ascending");

  const handleButtonClick = (e) => {
    if (sort === "increase") {
      console.log(sort);
      //dispatch(fetchSortPriceProductIncrease())
      setSort("decrease");
    } else {
      console.log(sort);
      //dispatch(fetchSortPriceProductIncrease())
      setSort("increase");
    }
  };
  const handleButtonClickName = () => {
    if (sortName === "") {
      setSortName("Ascending");
      console.log(sortName);
    } else {
      if (sortName === "Ascending") {
        console.log(sortName);
        setSortName("Descending");
      } else {
        console.log(sortName);
        setSortName("Ascending");
      }
    }
  };

  const handleMenuClick = (e) => {
    // message.info("Click on menu item.");
    // console.log("click", e.key.value);
    // console.log("click", e);
    if (e.key === "increase") {
      setSort("increase");
      console.log(sort);
    } else {
      setSort("decrease");
      console.log(sort);
    }
  };
  const menu = (
    <Menu onClick={handleMenuClick}>
      <Menu.Item key="increase">
        Increase <ArrowUpOutlined />
      </Menu.Item>
      <Menu.Item key="decrease">
        Decrease <ArrowDownOutlined />
      </Menu.Item>
    </Menu>
  );
  useEffect(() => {}, [sortName, sort]);
  return (
    <React.Fragment>
      <StyledFilter>
        <div className="filter">
          <div className="filter__sort">
            <div className="filter__sort-title">
              <p className="p1"></p>
            </div>
            <div className="filter__sort-content">
              <Dropdown onClick={handleButtonClick} overlay={menu}>
                <Button>
                  Sort by price
                  {/* Sort by price <ArrowUpOutlined /> <ArrowDownOutlined /> */}
                </Button>
              </Dropdown>
              <Button onClick={handleButtonClickName}>
                Sort by name
                {sort === "Ascending" ? (
                  <SortDescendingOutlined />
                ) : (
                  <SortAscendingOutlined />
                )}
              </Button>
            </div>
          </div>
          <div className="filter__search">
            <Search />
          </div>
        </div>
      </StyledFilter>
    </React.Fragment>
  );
};
