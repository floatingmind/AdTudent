import React from "react";
import { Route } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Wrapper } from '../components/Share/PublicRouteWrapper';

const PublicRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    component={props => (
      <Wrapper>
        <Header />
        <Component {...props} />
        <Footer />
      </Wrapper>
    )}
  />
);

export default PublicRoute;
