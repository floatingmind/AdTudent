import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";

import { StyledLink, StyledAppBar, StyledButton } from "./styles";
import GoogleAuth from "../Share/GoogleAuth";
import AuthMenu from "./AuthMenu";

class Header extends Component {
  renderAuthButton() {
    return (
      <GoogleAuth>
        {({ isSignedIn, signIn, signOut }) => (
          <React.Fragment>
            {isSignedIn ? (
              <AuthMenu />
            ) : (
              <StyledButton onClick={signIn}>ورود / ثبت نام</StyledButton>
            )}
          </React.Fragment>
        )}
      </GoogleAuth>
    );
  }

  render() {
    return (
      <StyledAppBar position="relative">
        <Grid container justify="space-between" alignItems="center">
          <Grid
            container
            item
            xs={3}
            justify="space-around"
            alignItems="center"
          >
            <Grid item xs={3}>
              <StyledLink exact to="/">
                صفحه اصلی
              </StyledLink>
            </Grid>
            <Grid item xs={3}>
              <StyledLink exact to="/aboutus">
                درباره ما
              </StyledLink>
            </Grid>
          </Grid>
          <Grid item>{this.renderAuthButton()}</Grid>
        </Grid>
      </StyledAppBar>
    );
  }
}

export default Header;
