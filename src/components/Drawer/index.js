import React, { Component } from "react";
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import AddCircleOutline from "@material-ui/icons/AddCircleOutline";
import Home from "@material-ui/icons/Home";
import ExitToApp from "@material-ui/icons/ExitToApp";

import GoogleAuth from "../Share/GoogleAuth";

import { StyledLink } from "../Share/StyledLink";

import { StyledDrawer } from "./styles";

import { Link } from "react-router-dom";

class PrivateDrawer extends Component {
  render() {
    return (
      <React.Fragment>
        <StyledDrawer variant="persistent" anchor="left" open>
          <List>
            <ListItem style={{ justifyContent: "center" }}>
              <ListItemAvatar>
                <Avatar style={{ width: 100, height: 100 }}>کارتابل من</Avatar>
              </ListItemAvatar>
            </ListItem>
          </List>
          <Divider />
          <List>
            <StyledLink to="/advertisement/new">
              <ListItem button>
                <ListItemIcon>
                  <AddCircleOutline />
                </ListItemIcon>
                <ListItemText>آگهی جدید</ListItemText>
              </ListItem>
            </StyledLink>
          </List>
          <Divider />
          <List>
            <StyledLink to="/">
              <ListItem button>
                <ListItemIcon>
                  <Home />
                </ListItemIcon>
                <ListItemText>بازگشت به صفحه اصلی</ListItemText>
              </ListItem>
            </StyledLink>
            <GoogleAuth>
              {({ signOut }) => (
                <ListItem button onClick={signOut}>
                  <ListItemIcon>
                    <ExitToApp />
                  </ListItemIcon>
                  <ListItemText>خروج</ListItemText>
                </ListItem>
              )}
            </GoogleAuth>
          </List>
        </StyledDrawer>
      </React.Fragment>
    );
  }
}

export default PrivateDrawer;
