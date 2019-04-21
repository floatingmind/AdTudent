import styled from 'styled-components';
import { Grid, NavLink } from '@material-ui/core';

export const Wrapper = styled.div`
  background: linear-gradient(45deg, #b74eff 30%, #4a74e2 90%);
  color: #fafafa;
  font-family: "Vazir", sans-serif;
  font-size: 1.6rem;
  padding: 1rem 2rem;
`;


export const StyledHeading = styled.h3`
  color: #fafafa;
  font-family: "Vazir", sans-serif;
`;

export const StyledLink = styled(NavLink)`
  color: #fafafa;
  margin: 0.6rem 0;
  display: block;
  font-family: "Vazir", sans-serif;
  text-decoration: none;
`;

export const StyledGrid = styled(Grid) `
    margin: 1rem 0;
    box-shadow: 0 2rem 2rem -1.5rem rgba(127, 0, 255, .8);
    margin-bottom: 0;
`;