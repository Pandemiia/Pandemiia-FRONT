import React from "react";
import { Switch } from "react-router";
import { Route } from "react-router-dom";

import HomeScreen from "./pages/HomeScreen";
import MapScreen from "./pages/MapScreen";

export const routes = (
  <Switch>
    <Route path="/map" component={MapScreen} />
    <Route path="/home" component={HomeScreen} />
    <Route path="/" component={HomeScreen} />
  </Switch>
);
