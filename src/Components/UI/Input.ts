import styled, { css } from 'styled-components';

type InputValue = string | number | readonly string[] | undefined;

const inputRangeProgress = (colorBefore: string, colorAfter: string, value: InputValue) => {
  return css`
    background: linear-gradient(90deg, ${colorBefore} ${value}%, ${colorAfter} 0);
  `;
};

export const Input = styled.input`
  ${({ theme: { colors }, value }) => css`
    border: none;
    font-size: 1.1rem;
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

    &:focus:not([type='range']) {
      outline: 1px solid ${colors.background.quartenary};
    }

    &:not([type='range']) {
      padding: 0.7rem;
    }

    &[type='range'] {
      -webkit-appearance: none;
      background-color: ${colors.background.quartenary};
      width: 15rem;
      height: 5px;
      border-radius: 5px;
      margin: 0.75rem;
      outline: 0;
      ${inputRangeProgress(colors.background.quartenary, colors.background.secondary, value)};
      cursor: pointer;
    }

    &[type='range']::-webkit-slider-thumb {
      -webkit-appearance: none;
      background-color: ${colors.background.tertiary};
      box-shadow: #1718b0;
      width: 19px;
      height: 19px;
      border-radius: 50%;
      border: 2px solid ${colors.text.secondary};
      cursor: pointer;
    }
  `}
`;
