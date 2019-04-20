import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { AppBar, Button, MenuItem, IconButton} from '@material-ui/core';


export const StyledLink = styled(NavLink)`
font-family: "Vazir", sans-serif;
font-size: 1.6rem;
text-decoration: none;
color: black;
padding: .5rem;
backface-visibility: hidden;
border-radius: 1.5rem;
transition: all .05s;
margin: 0 .6rem;

&:hover {
  color: white;
  border-radius: 1.5rem;
  background: linear-gradient(45deg, #fe6b8b 30%, #ff8e53 90%);
  border: 0;
  padding: .5rem;
  box-shadow: 0 3px 5px 2px rgba(255, 105, 135, .3);
}

&.active{
  color: white;
  border-radius: 1.5rem;
  background: linear-gradient(45deg, #fe6b8b 30%, #ff8e53 90%);
  border: 0;
  padding: .5rem;
  box-shadow: 0 3px 5px 2px rgba(255, 105, 135, .3);
  
}
`;

export const StyledAppBar = styled(AppBar)`
  font-family: "Vazir", sans-serif;
  padding: 2rem .2rem;
  background-color: #fafafa;
  text-decoration: none;
  border: 0;
  box-shadow: 2px 2px 4px -1px rgba(0, 0, 0, 0.1);
`;

export const StyledButton = styled(Button) `
align-self: center;
border-radius: 2rem;
color: black;
font-family: "Vazir";
font-size: 1.6rem;
margin-left: .5rem;
padding: .5rem;
transition: all 0.2s;
`;

export const StyledIconButton = styled(IconButton) `
    margin-left: 1rem;
    background-color: #fafafa;
    height: 80%;
`;

export const StyledMenuItem = styled(MenuItem) `
    font-family: "Vazir", sans-serif;
    font-size: 1.6rem;
`;

export const StyledMenuItemLink = styled(NavLink) `
    text-decoration: none;
    color: black;
`;