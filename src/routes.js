import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import UsersIndex from "./sections/Users/Index";
import UsersEdit from "./sections/Users/Edit";
import UsersShow from "./sections/Users/Show";
import UsersTaskEdit from "./sections/UserTasks/Edit";

export default function AppRoutes() {
  return (
    <Switch>
      <Route exact path="/users" component={UsersIndex} />
      <Route exact path="/users/:id/edit" component={UsersEdit} />
      <Route exact path="/users/:id" component={UsersShow} />
      <Route
        exact
        path="/users/:user_id/user_task/:id/edit"
        component={UsersTaskEdit}
      />
      <Redirect from="/" to="/users" />
    </Switch>
  );
}
