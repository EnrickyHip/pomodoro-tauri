import styled, { css } from 'styled-components';

export const Button = styled.button`
  ${({ theme: { colors } }) => css`
    border: none;
    margin: 1rem;

    background-color: ${colors.background.secondary};
    border-radius: 2px;
    min-width: 7rem;
    color: ${colors.text.primary};
    cursor: pointer;
    font-size: 1rem;
    font-weight: 550;
    padding: 1rem;

    &:hover,
    &.active {
      background-color: ${colors.background.quartenary};
    }
  `}
`;
