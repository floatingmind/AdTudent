import React, { Component } from "react";
import { Redirect, Route } from "react-router-dom";
import { connect } from "react-redux";

import PrivateDrawer from "../components/Drawer";
import { Wrapper } from "../components/Share/Wrapper";

class PrivateRoute extends Component {
  render() {
    const { isSignedIn, component: Component, ...rest } = this.props;

    return (
      <Route
        {...rest}
        component={props =>
          isSignedIn ? (
            <Wrapper>
              <PrivateDrawer />
              <Component {...props} />
            </Wrapper>
          ) : (
            <Redirect to="/" />
          )
        }
      />
    );
  }
}

const mapStateToProps = state => ({
  isSignedIn: state.auth.isSignedIn
});

export default connect(
  mapStateToProps,
  null
)(PrivateRoute);
