import styled from 'styled-components';

export const Input = styled.input`
  outline: none;
  border: none;
  font-size: 1.1rem;
  padding: 0.7rem;
  border-radius: 5px;
  background-color: #222222;
  color: rgba(255, 255, 255, 0.87);

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  &[type='number'] {
    -moz-appearance: textfield;
  }
`;
