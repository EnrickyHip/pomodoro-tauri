import styled from 'styled-components';

export const Button = styled.button`
  border: none;
  margin: 1rem;

  background-color: #222222;
  border-radius: 2px;
  min-width: 7rem;
  color: rgba(255, 255, 255, 0.87);
  cursor: pointer;
  font-size: 1rem;
  font-weight: 550;
  padding: 1rem;

  &:hover,
  &.active {
    background-color: rgb(107, 107, 107);
  }
`;