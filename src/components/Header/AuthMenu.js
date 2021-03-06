import React, { Component } from "react";
import Menu from "@material-ui/core/Menu";
import MoreVertIcon from "@material-ui/icons/MoreVertSharp";
import { StyledMenuItem, StyledIconButton, StyledMenuItemLink } from "./styles";
import GoogleAuth from "../Share/GoogleAuth";

/**
 * Render a component to show options for authenticated users
 * @author mehran
 */
class AuthMenu extends Component {
  state = {
    anchorEl: null
  };

  /**
   * Open menu 
   */
  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  /**
   * Close menu 
   */
  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  /**
   * Sign out user from google authentication
   */
  handleSignOut = () => {
    return (
      <GoogleAuth>
        {({ isSignedIn, signIn, signOut }) => (
          <p onClick={signOut}>خروج اجباری</p>
        )}
      </GoogleAuth>
    );
  };

  render() {
    const { anchorEl } = this.state;
    const open = Boolean(anchorEl);
    return (
      <div>
        <StyledIconButton
          aria-label="More"
          aria-owns={open ? "long-menu" : undefined}
          aria-haspopup="true"
          onClick={this.handleClick}
        >
          <MoreVertIcon />
        </StyledIconButton>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={this.handleClose}
          disableAutoFocusItem={true}
        >
          <StyledMenuItem onClick={this.handleClose}>
            <StyledMenuItemLink to="/profile">پروفایل</StyledMenuItemLink>
          </StyledMenuItem>
          <GoogleAuth>
            {({ signOut }) => (
              <StyledMenuItem onClick={signOut}>خروج</StyledMenuItem>
            )}
          </GoogleAuth>
        </Menu>
      </div>
    );
  }
}

export default AuthMenu;
