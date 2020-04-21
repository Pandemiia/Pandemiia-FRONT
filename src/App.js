import React from "react";
import { Router, BrowserRouter } from "react-router-dom";
import { routes } from "./browser-routes";
import history from "./history";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import "antd/dist/antd.css";
import "./App.css";
import { Layout } from "antd";

const App = () => {
  const { Content } = Layout;
  return (
    <Layout className="App">
      <Header />
      <Content>
        <BrowserRouter>
          <Router history={history}>{routes}</Router>
        </BrowserRouter>
      </Content>
      <Footer />
    </Layout>
  );
};

export default App;
