import styled from 'styled-components';
import { Card } from '@material-ui/core';

export const StyledCard = styled(Card)`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  font-family: "Vazir", sans-serif;
  width: 25rem;
  height: 30rem;
  backface-visibility: hidden;
  transition: all 0.4s;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 1rem 2rem rgba(#000, 0.2);
  }
`;