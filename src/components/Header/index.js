import React from "react";

import Grid from "@material-ui/core/Grid";
import { StyledLink, StyledAppBar, StyledButton } from "./styles";

const Header = () => {
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
        <Grid item>
          <StyledButton>ورود / ثبت نام</StyledButton>
        </Grid>
      </Grid>
    </StyledAppBar>
  );
};

export default Header;
