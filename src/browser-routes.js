import React from "react";
import { Switch } from "react-router";
import { Route } from "react-router-dom";

import HomeScreen from "./pages/HomeScreen";
import NeedsScreen from "./pages/NeedsScreen";

export const routes = (
  <Switch>
    <Route path="/needs" component={NeedsScreen} />
    <Route path="/" component={HomeScreen} />
  </Switch>
);
