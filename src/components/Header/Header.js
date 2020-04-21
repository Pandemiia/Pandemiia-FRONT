import React from "react";
import { PageHeader, Button, Tag } from "antd";
import logo from "./Img/logo.jpg";
import "./style/Header.scss";

const Header = () => {
  return (
    <PageHeader
      title="Pandemia"
      className="site-page-header"
      tags={<Tag>Home</Tag>}
      extra={[
        <Button key="2">Operation</Button>,
        <Button key="1" type="primary">
          Primary
        </Button>,
      ]}
      avatar={{
        src: { logo },
      }}
    ></PageHeader>
  );
};

export default Header;
