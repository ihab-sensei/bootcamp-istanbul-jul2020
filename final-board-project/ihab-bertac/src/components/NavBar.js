import React from "react";
import { Link } from "react-router-dom";
import { Menu } from "antd";

export default function Navbar() {
  const menu = (
    <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
      <Menu.Item key="1">
        <Link to="/" exact>
          Home
        </Link>
      </Menu.Item>

      <Menu.Item key="2">
        <Link to="/board">Board</Link>
      </Menu.Item>

      <Menu.Item key="3">
        <Link to="/about">About</Link>
      </Menu.Item>
    </Menu>
  );

  return <>{menu}</>;
}
