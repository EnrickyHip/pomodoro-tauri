import styled, { css, DefaultTheme } from 'styled-components';

interface Props {
  theme: DefaultTheme;
  border: boolean;
}

const addBorder = ({ colors }: DefaultTheme) => css`
  border: 1px solid ${colors.background.quartenary};
  box-shadow: 0.5px 0.5px 20px 0.1px rgba(114, 114, 114, 0.1);
`;

export const Content = styled.main<Props>`
  ${({ theme, border }) => css`
    background-color: ${theme.colors.background.tertiary};
    width: 50%;
    height: 50%;
    padding: 2rem;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    position: absolute;
    ${border && addBorder(theme)};
  `}
`;
