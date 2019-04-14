import React from "react";
import { Route, Redirect } from "react-router-dom";
import Header from "../components/Header";

const PublicRoute = ({ component: Component, ...rest }) => (
  <React.Fragment>
    <Header />
    <Component {...rest} component={props => <Component {...props} />} />
  </React.Fragment>
);

export default PublicRoute;
