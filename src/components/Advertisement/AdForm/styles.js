import styled from 'styled-components';
import { Card, Button } from '@material-ui/core';

export const StyledCard = styled(Card)`
  padding: 2rem;
  font-size: 1.6rem;
  box-shadow: 5px 10px 8px #888888;
`;

export const StyledButton = styled(Button)`
  color: #fafafa;
  background-color: #7e57c2;
  margin-top: 1rem;

  &:hover {
    background-color: #7e57c2;
  }
`;