import React from "react";
import { Layout, Menu, Button } from "antd";
import "./style/Header.scss";

const Header = () => {
  const { Header } = Layout;
  return (
    <Header className="custom-header">
      <div className="logo"/>
      <Menu
        className="menu-item"
        theme="white"
        mode="horizontal"
        defaultSelectedKeys={["1"]}
      >
        <Menu.Item>
          <a href="/needs">Потреби</a>
        </Menu.Item>
        <Menu.Item>
          <a href="/katalog">Каталог рішень</a>
        </Menu.Item>
        <Menu.Item>
          <a href="/">Про проект</a>
        </Menu.Item>
        <Menu.Item>
          <a href="/">Контакти</a>
        </Menu.Item>
      </Menu>
      <div>
        <Button key="2">Особистий кабінет</Button>
        <Button key="1" type="primary">
          Подати заявку
        </Button>
      </div>
    </Header>
  );
};

export default Header;
