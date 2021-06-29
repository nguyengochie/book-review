import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import UnauthenRoute from "./Component/UnauthenRoute/UnauthenRoute";
import Home from "./views/Home/Home";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <UnauthenRoute exact path="/">
          <Home />
        </UnauthenRoute>
        <UnauthenRoute exact path="/list">
          <p>List</p>
        </UnauthenRoute>
        <UnauthenRoute exact path="/detail">
          <p>Detail</p>
        </UnauthenRoute>
        <Route>
          <p>Not Found</p>
        </Route>
      </Switch>
    </Router>
  )
}
export default Routes;
