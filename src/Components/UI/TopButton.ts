import styled from 'styled-components';
import { Button } from './Button';

export const TopButton = styled(Button)`
  min-width: 3.7rem;
  position: absolute;
  top: 0;
  right: 0;
  background-color: transparent;
  border-radius: 50%;
  display: inline-block;

  &:hover {
    background-color: rgb(107, 107, 107);
  }
`;
