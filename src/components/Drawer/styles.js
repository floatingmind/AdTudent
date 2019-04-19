import styled from "styled-components";
import Drawer from "@material-ui/core/Drawer";

export const StyledDrawer = styled(Drawer)`
  min-height: 100vh;

  & > div {
    position: relative;
    background-color: #fafafa;
  }
`;
