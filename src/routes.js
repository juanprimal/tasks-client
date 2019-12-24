import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import UsersIndex from "./sections/Users/Index";
import UsersNew from "./sections/Users/New";
import UsersShow from "./sections/Users/Show";

export default function AppRoutes() {
  return (
    <Switch>
      <Route exact path="/users" component={UsersIndex} />
      <Route exact path="/users/new" component={UsersNew} />
      <Route exact path="/users/:id" component={UsersShow} />
      <Redirect from="/" to="/users" />
    </Switch>
  );
}
