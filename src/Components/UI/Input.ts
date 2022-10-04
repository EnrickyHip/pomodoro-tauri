import styled, { css } from 'styled-components';

export const Input = styled.input`
  ${({ theme: { colors } }) => css`
    border: none;
    font-size: 1.1rem;
    padding: 0.7rem;
    border-radius: 5px;
    background-color: ${colors.background.secondary};
    color: ${colors.text.primary};

    &:focus {
      outline: 1px solid ${colors.background.quartenary};
    }

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
