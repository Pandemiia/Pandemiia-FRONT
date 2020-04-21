import React from "react";
import { Router, BrowserRouter } from "react-router-dom";
import { routes } from "./browser-routes";
import history from "./history";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import "antd/dist/antd.css";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Footer />
        <Router history={history}>{routes}</Router>
      </BrowserRouter>
    </div>
  );
};

export default App;
