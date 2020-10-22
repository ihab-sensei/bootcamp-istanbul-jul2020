import React from "react";
import "./App.css";
import "antd/dist/antd.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import DaysBoard from "./containers/DaysBoard";
import Home from "./components/Home";
import About from "./components/About";
import { Layout } from "antd";
import { FireTwoTone } from "@ant-design/icons";

const { Header, Content, Footer } = Layout;

function App() {
  return (
    <Router>
      <Layout className="layout">
        <Header>
          <FireTwoTone className="logo" />

          <NavBar />
        </Header>
        <Content style={{ padding: "0 50px" }}>
          <div className="site-layout-content">
            <Route exact path="/" component={Home} />
            <Route path="/board" component={DaysBoard} />
            <Route path="/about" component={About} />
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Thicc Design ©2020 Created by ThiccBois
        </Footer>
      </Layout>
    </Router>
  );
}

export default App;
