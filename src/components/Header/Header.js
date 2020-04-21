import React from "react";
import { Layout, Menu, Button } from "antd";
import logo from "./Img/logo.svg";
import "./style/Header.scss";

const Header = () => {
  const { Header } = Layout;
  return (
    <Header className="custom-header">
      <img className="logo" src={logo} alt="" />
      <Menu
        className="menu-item"
        theme="white"
        mode="horizontal"
        defaultSelectedKeys={["1"]}
      >
        <Menu.Item key="1">Головна</Menu.Item>
        <Menu.Item key="2">Потреби</Menu.Item>
        <Menu.Item key="3">Каталог рішень</Menu.Item>
        <Menu.Item key="4">Про проект</Menu.Item>
        <Menu.Item key="5">Контакти</Menu.Item>
      </Menu>
      {/* <div>
        <Button key="2">Operation</Button>
        <Button key="1" type="primary">
          Primary
        </Button>
      </div> */}
    </Header>
  );
};

export default Header;

// <PageHeader
//   title="Pandemia"
//   className="site-page-header"
//   tags={<Tag>Home</Tag>}
//   extra={[
//     <Button key="2">Operation</Button>,
//     <Button key="1" type="primary">
//       Primary
//     </Button>,
//   ]}
//   avatar={{
//     src: { logo },
//   }}
// ></PageHeader>
