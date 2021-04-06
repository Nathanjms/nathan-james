import React from "react";
import "../css/App.css";
import App from "./MainPages/App";
import Notes from "./Extras/Notes";
import Login from "./User/Login";
// import Signup from "./Signup";
import { Router, Route, Switch } from "react-router-dom";
import { AuthProvider } from "../contexts/AuthContext";
import PrivateRoute from "./Global/PrivateRoute";
import Movies from "./Movies/Movies";

function Main() {
  return (
    <Router>
      <AuthProvider>
        <Switch>
          <PrivateRoute exact path="/movies" component={Movies} />
          {/* <Route path="/signup" component={Signup} /> */}
          <Route path="/login" component={Login} />
          <Route path="/notes" component={Notes} />
          <Route path="*" component={App} redirectTo="/" />
        </Switch>
      </AuthProvider>
    </Router>
  );
}
export default Main;
