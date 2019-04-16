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
            { isSignedIn ? (
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
      <StyledAppBar>
        <Grid container justify="space-between">
          <Grid container item xs={3} justify="space-around">
            <Grid item>
              <StyledLink exact to="/">
                صفحه اصلی
              </StyledLink>
            </Grid>
            <Grid item>
              <StyledLink exact to="/search">
                جست و جو پیشرفته
              </StyledLink>
            </Grid>
            <Grid item>
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
