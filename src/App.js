import React from "react";
import { Router, BrowserRouter } from "react-router-dom";
import { routes } from "./browser-routes";
import history from "./history";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { Layout } from "antd";
import "./App.css";

const App = () => {
  const { Content } = Layout;
  return (
    <div className="App">
      <Layout>
        <BrowserRouter>
          <Header />
          <Content>
            <Router history={history}>{routes}</Router>
          </Content>
          <Footer />
        </BrowserRouter>
      </Layout>
    </div>
  );
};

export default App;
