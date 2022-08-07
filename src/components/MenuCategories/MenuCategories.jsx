import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Menu } from "antd";
import React, { useState } from "react";
import styled from "styled-components";
const StyledMenu = styled.div`
  .ant-menu-submenu-open .ant-menu-submenu-title,
  i {
    color: #40aa54;
  }
  .ant-menu-light .ant-menu-submenu-title:hover {
    color: #40aa54;
  }
  .ant-menu-light .ant-menu-item:hover {
    color: #40aa54;
  }
  .ant-menu-item-selected {
    background-color: #d5fbdc !important;
    color: #000;
  }
  .ant-menu-inline .ant-menu-item:after {
    border-right: 3px solid #40aa54;
  }
  .ant-menu-submenu-selected {
    color: #40aa54;
  }
  .ant-menu-submenu:hover > .ant-menu-submenu-title > .ant-menu-submenu-arrow {
    color: #40aa54 !important;
  }
`;

function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}

const items = [
  getItem("Navigation One", "sub1", <MailOutlined />, [
    getItem("Option 1", "1"),
    getItem("Option 2", "2"),
    getItem("Option 3", "3"),
    getItem("Option 4", "4"),
  ]),
  getItem("Navigation Two", "sub2", <AppstoreOutlined />, [
    getItem("Option 5", "5"),
    getItem("Option 6", "6"),
  ]),
  getItem("Navigation Three", "sub4", <SettingOutlined />, [
    getItem("Option 9", "9"),
    getItem("Option 10", "10"),
    getItem("Option 11", "11"),
    getItem("Option 12", "12"),
  ]),
]; // submenu keys of first level

const rootSubmenuKeys = ["sub1", "sub2", "sub4"];
const MenuCategories = () => {
  const [openKeys, setOpenKeys] = useState(["sub1"]);

  const onOpenChange = (keys) => {
    const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);

    if (rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      setOpenKeys(keys);
    } else {
      setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
    }
  };
  return (
    <React.Fragment>
      <StyledMenu>
        <Menu
          mode="inline"
          openKeys={openKeys}
          onOpenChange={onOpenChange}
          style={{
            width: 256,
          }}
          items={items}
        />
      </StyledMenu>
    </React.Fragment>
  );
};
export default MenuCategories;
