import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Main from "../pages/Main";
import Details from "../pages/Details";

const AppRouter = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Main} exact />
      <Route path="/details" component={Details} exact />
    </Switch>
  </BrowserRouter>
);

export default AppRouter;
