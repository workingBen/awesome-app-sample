import React from "react";
import { Route, IndexRoute } from "react-router";
import { Home } from "./components/home";
import { AwesomeComponentSample } from "awesome-component-sample";

export const routes = (
  <Route path="/" component={Home}>
    <IndexRoute component={AwesomeComponentSample}/>
    <Route path="/invite" component={AwesomeComponentSample}/>
  </Route>
);
