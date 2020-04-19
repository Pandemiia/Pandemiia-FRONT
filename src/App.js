import React from "react";
import { Router, BrowserRouter } from "react-router-dom";
import { routes } from "./browser-routes";
import Header from "./components/Header/Header";
import history from "./history";

import "./App.css";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Header/>
        <Router history={history}>{routes}</Router>
        
      </BrowserRouter>
    </div>
  );
};

export default App;
