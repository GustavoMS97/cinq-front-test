import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Main from "../pages/Main";

const AppRouter = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Main} exact />
    </Switch>
  </BrowserRouter>
);

export default AppRouter;
