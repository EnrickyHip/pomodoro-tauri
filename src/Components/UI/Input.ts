import styled, { css } from 'styled-components';

export const Input = styled.input`
  ${({ theme: { colors } }) => css`
    outline: none;
    border: none;
    font-size: 1.1rem;
    padding: 0.7rem;
    border-radius: 5px;
    background-color: ${colors.background.secondary};
    color: ${colors.text.primary};

    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }

    &[type='number'] {
      -moz-appearance: textfield;
    }
  `}
`;
