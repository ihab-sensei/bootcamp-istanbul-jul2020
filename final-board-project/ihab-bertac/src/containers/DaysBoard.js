import React, { useState } from "react";
import Day from "./Day";
import "./style.css";
import { Card, Col, Row, Menu, Dropdown, Tabs, message, Select } from "antd";
import { DownOutlined } from "@ant-design/icons";
const { TabPane } = Tabs;
const { Option } = Select;

export default function DaysBoard() {
  const [filter, setFilter] = useState("default");
  const [view, setView] = useState("cardView");
  const [sort, setSort] = useState({
    sortType: "createdAt",
    sortOrder: "asc"
  });
  const cardView = () => {
    return (
      <Row gutter={8}>
        {DAYS.map((day) => (
          <Col xs={24} sm={24} md={12} lg={12} xl={8}>
            <Card style={{ margin: "10px 0" }} hoverable title={day} bordered>
              <Day
                sort={sort}
                view={view}
                key={day}
                filter={filter}
                name={day}
              />
            </Card>
          </Col>
        ))}
      </Row>
    );
  };
  const tabView = () => {
    return (
      <Tabs tabPosition="left">
        {DAYS.map((day, index) => (
          <TabPane tab={day} key={index}>
            <Day sort={sort} view={view} key={day} filter={filter} name={day} />
          </TabPane>
        ))}
      </Tabs>
    );
  };
  const warning = () => {
    message.warning("You can't add or modify workouts in tab view", 3.5);
  };
  const DAYS = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday"
  ];

  const handleFilterClick = ({ key }) => {
    setFilter(key);
  };

  const handleViewChange = ({ key }) => {
    setView(key);
    if (key === "tabView") {
      warning();
    }
  };

  const handleSortChange = (key, value) => {
    console.log("e", value);
    setSort({
      ...sort,
      [value.label]: value.value
    });
  };

  const sortMenu = (
    <>
      <Select
        style={{ margin: "5px 0", width: "120px" }}
        defaultValue="createdAt"
        onChange={handleSortChange}
      >
        <Option key="createdAt" label="sortType" value="createdAt">
          Date
        </Option>
        <Option key="completeSort" label="sortType" value="completeSort">
          Completion
        </Option>
      </Select>

      <Select
        style={{ margin: "5px 0", width: "120px" }}
        defaultValue="asc"
        onChange={handleSortChange}
      >
        <Option key="asc" label="sortOrder" value="asc">
          Ascending
        </Option>
        <Option key="desc" label="sortOrder" value="desc">
          Descending
        </Option>
      </Select>
    </>
  );

  const menu = (
    <Menu onClick={handleFilterClick}>
      <Menu.Item key="default">Default</Menu.Item>
      <Menu.Item key="completed">Complete</Menu.Item>
      <Menu.Item key="incomplete">Incomplete</Menu.Item>
    </Menu>
  );
  const viewMenu = (
    <Menu onClick={handleViewChange}>
      <Menu.Item key="cardView">Card View</Menu.Item>
      <Menu.Item key="tabView">Tab View</Menu.Item>
    </Menu>
  );

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap"
        }}
      >
        <Dropdown trigger={["click"]} overlay={menu}>
          <a
            style={{ margin: "5px 0" }}
            className="ant-dropdown-link"
            onClick={(e) => e.preventDefault()}
          >
            Filter by <DownOutlined />
          </a>
        </Dropdown>
        {sortMenu}
        <Dropdown trigger={["click"]} overlay={viewMenu}>
          <a
            style={{ margin: "5px 0" }}
            className="ant-dropdown-link"
            onClick={(e) => e.preventDefault()}
          >
            Change view <DownOutlined />
          </a>
        </Dropdown>
      </div>
      <div className="site-card-wrapper">
        {view === "cardView" ? cardView() : tabView()}
      </div>
    </div>
  );
}
